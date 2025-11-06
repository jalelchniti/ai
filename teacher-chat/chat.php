<?php
/**
 * SmartHub Teacher Chat - API Handler
 * Version: 1.0
 * Description: Handles chat requests and communicates with Groq API
 */

// Load configuration
require_once 'config.php';

// ========================================
// CORS HEADERS
// ========================================
if (ENABLE_CORS) {
    header('Access-Control-Allow-Origin: ' . CORS_ORIGIN);
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
}

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Set content type to JSON
header('Content-Type: application/json');

// ========================================
// MAIN EXECUTION
// ========================================

try {
    // Only accept POST requests
    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        sendErrorResponse('Method not allowed', 405);
    }

    // Check if API key is configured
    if (!API_KEY_CONFIGURED) {
        sendErrorResponse(ERROR_API_KEY_NOT_SET, 500);
    }

    // Get and validate input
    $input = getRequestInput();
    $userMessage = validateMessage($input['message'] ?? '');
    $language = $input['language'] ?? 'Arabic'; // Default to Arabic

    // Prepare API request
    $apiRequest = prepareApiRequest($userMessage, $language);

    // Send request to Groq API
    $apiResponse = sendGroqRequest($apiRequest);

    // Extract and send response
    $aiMessage = extractAiMessage($apiResponse);
    sendSuccessResponse($aiMessage);

} catch (Exception $e) {
    logError($e->getMessage());
    sendErrorResponse($e->getMessage());
}

// ========================================
// HELPER FUNCTIONS
// ========================================

/**
 * Get and parse request input
 */
function getRequestInput() {
    $rawInput = file_get_contents('php://input');

    if (empty($rawInput)) {
        throw new Exception(ERROR_NO_MESSAGE);
    }

    $input = json_decode($rawInput, true);

    if (json_last_error() !== JSON_ERROR_NONE) {
        throw new Exception('Invalid JSON input');
    }

    return $input;
}

/**
 * Validate and sanitize user message
 */
function validateMessage($message) {
    // Remove whitespace
    $message = trim($message);

    // Check if empty
    if (empty($message)) {
        throw new Exception(ERROR_EMPTY_MESSAGE);
    }

    // Check length
    if (strlen($message) > MAX_MESSAGE_LENGTH) {
        throw new Exception(ERROR_MESSAGE_TOO_LONG);
    }

    // Sanitize input (basic XSS prevention)
    $message = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');

    return $message;
}

/**
 * Prepare API request payload
 */
function prepareApiRequest($userMessage, $language = 'Arabic') {
    // Get language-specific system prompt
    $systemPrompt = getLanguageSpecificPrompt($language);

    return [
        'model' => GROQ_MODEL,
        'messages' => [
            [
                'role' => 'system',
                'content' => $systemPrompt
            ],
            [
                'role' => 'user',
                'content' => $userMessage
            ]
        ],
        'temperature' => GROQ_TEMPERATURE,
        'max_tokens' => GROQ_MAX_TOKENS,
        'top_p' => 1,
        'stream' => false
    ];
}

/**
 * Get system prompt based on selected language
 */
function getLanguageSpecificPrompt($language) {
    $basePrompt = SYSTEM_PROMPT;

    // Add language instruction to the prompt
    $languageInstruction = "\n\nIMPORTANT: The user has selected to communicate in $language. ";

    switch($language) {
        case 'Arabic':
            $languageInstruction .= "You MUST respond ONLY in Arabic (العربية). Use clear, professional Arabic suitable for educational contexts in Tunisia.";
            break;
        case 'French':
            $languageInstruction .= "You MUST respond ONLY in French (Français). Use clear, professional French suitable for educational contexts in Tunisia.";
            break;
        case 'English':
            $languageInstruction .= "You MUST respond ONLY in English. Use clear, professional English suitable for international educational contexts.";
            break;
        case 'Spanish':
            $languageInstruction .= "You MUST respond ONLY in Spanish (Español). Use clear, professional Spanish suitable for educational contexts.";
            break;
        default:
            $languageInstruction .= "You MUST respond ONLY in Arabic (العربية) as the default language.";
    }

    return $basePrompt . $languageInstruction;
}

/**
 * Send request to Groq API
 */
function sendGroqRequest($payload) {
    $ch = curl_init(GROQ_API_ENDPOINT);

    if ($ch === false) {
        throw new Exception(ERROR_API_REQUEST_FAILED);
    }

    // Set cURL options
    curl_setopt_array($ch, [
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_POST => true,
        CURLOPT_POSTFIELDS => json_encode($payload),
        CURLOPT_HTTPHEADER => [
            'Content-Type: application/json',
            'Authorization: Bearer ' . GROQ_API_KEY
        ],
        CURLOPT_TIMEOUT => REQUEST_TIMEOUT,
        CURLOPT_SSL_VERIFYPEER => true
    ]);

    // Execute request
    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $curlError = curl_error($ch);

    curl_close($ch);

    // Check for cURL errors
    if ($response === false) {
        throw new Exception(ERROR_API_REQUEST_FAILED . ': ' . $curlError);
    }

    // Parse response
    $responseData = json_decode($response, true);

    if (json_last_error() !== JSON_ERROR_NONE) {
        throw new Exception(ERROR_INVALID_RESPONSE);
    }

    // Check HTTP status code
    if ($httpCode !== 200) {
        $errorMessage = $responseData['error']['message'] ?? 'Unknown error';

        // Check for rate limit
        if ($httpCode === 429) {
            throw new Exception(ERROR_RATE_LIMIT);
        }

        throw new Exception('API Error: ' . $errorMessage);
    }

    return $responseData;
}

/**
 * Extract AI message from API response
 */
function extractAiMessage($response) {
    if (!isset($response['choices'][0]['message']['content'])) {
        throw new Exception(ERROR_INVALID_RESPONSE);
    }

    $message = $response['choices'][0]['message']['content'];

    // Decode HTML entities (since we encoded user input)
    $message = html_entity_decode($message, ENT_QUOTES, 'UTF-8');

    return trim($message);
}

/**
 * Send success response
 */
function sendSuccessResponse($message) {
    echo json_encode([
        'success' => true,
        'response' => $message,
        'timestamp' => time()
    ]);
    exit();
}

/**
 * Send error response
 */
function sendErrorResponse($message, $httpCode = 400) {
    http_response_code($httpCode);
    echo json_encode([
        'success' => false,
        'error' => $message,
        'timestamp' => time()
    ]);
    exit();
}

/**
 * Log error to file
 */
function logError($message) {
    if (!ENABLE_ERROR_LOGGING) {
        return;
    }

    $timestamp = date('Y-m-d H:i:s');
    $logMessage = "[$timestamp] $message\n";

    // Attempt to write to log file
    @file_put_contents(ERROR_LOG_FILE, $logMessage, FILE_APPEND);
}

?>
