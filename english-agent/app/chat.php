<?php
/**
 * SmartHub English Learning Assistant - Chat API Handler
 * Handles chat requests, grade detection, and Groq API integration
 */

require_once 'config.php';

// Set headers
header('Content-Type: application/json');

if (ALLOW_CORS) {
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
}

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Only accept POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respondWithError('Method not allowed', 405);
}

// Get request body
$rawInput = file_get_contents('php://input');
$input = json_decode($rawInput, true);

if (json_last_error() !== JSON_ERROR_NONE) {
    respondWithError('Invalid JSON in request body');
}

// Validate required fields
if (!isset($input['message']) || empty(trim($input['message']))) {
    respondWithError('Message is required');
}

// Extract request data
$userMessage = sanitizeInput($input['message']);
$currentGrade = isset($input['grade']) ? (int)$input['grade'] : null;
$conversationHistory = isset($input['conversationHistory']) ? $input['conversationHistory'] : [];

// Log request
logMessage("Received message: " . substr($userMessage, 0, 50) . "... | Grade: " . ($currentGrade ?? 'unknown'));

try {
    // Detect grade if not already set
    if (!$currentGrade) {
        $detectedGrade = detectGrade($userMessage, $conversationHistory);
        if ($detectedGrade) {
            $currentGrade = $detectedGrade;
            logMessage("Detected grade: $currentGrade");
        }
    }

    // Load system prompt
    $systemPrompt = buildSystemPrompt($currentGrade);

    // Load knowledge base for grade (if grade is set)
    $knowledgeBase = null;
    if ($currentGrade && isValidGrade($currentGrade)) {
        $knowledgeBase = loadKnowledgeBase($currentGrade);
    }

    // Build conversation messages
    $messages = buildConversationMessages($systemPrompt, $conversationHistory, $knowledgeBase);

    // Call Groq API
    $aiResponse = callGroqAPI($messages);

    // Prepare response
    $response = [
        'success' => true,
        'message' => $aiResponse,
        'grade' => $currentGrade,
        'timestamp' => time()
    ];

    logMessage("Response sent successfully | Grade: " . ($currentGrade ?? 'unknown'));
    echo json_encode($response);

} catch (Exception $e) {
    logMessage("Error: " . $e->getMessage(), 'ERROR');
    respondWithError($e->getMessage());
}

/**
 * Detect student grade from message
 * Simplified to accept direct numeric input (1-12)
 */
function detectGrade($message, $conversationHistory) {
    $trimmed = trim($message);

    // Check if message is just a number (e.g., "7" or "12")
    if (is_numeric($trimmed)) {
        $grade = (int)$trimmed;
        if (isValidGrade($grade)) {
            return $grade;
        }
    }

    // Check for common grade patterns (more lenient)
    $patterns = [
        '/\b(\d{1,2})\s*(grade|year|class)/i',  // "7 grade", "12 year"
        '/\b(grade|year|class)\s*(\d{1,2})\b/i',  // "grade 7", "year 12"
        '/\bI\'?m?\s+in\s+(\d{1,2})\b/i',  // "I'm in 7"
        '/\bI\'?m?\s+(\d{1,2})\s*(grade|year)\b/i',  // "I'm 7 grade"
        '/\b(\d{1,2})th\s+(grade|year)\b/i',  // "7th grade"
        '/\bGrade\s*:?\s*(\d{1,2})\b/i'  // "Grade: 7"
    ];

    foreach ($patterns as $pattern) {
        if (preg_match($pattern, $message, $matches)) {
            // Find the numeric capture group
            for ($i = 1; $i < count($matches); $i++) {
                if (is_numeric($matches[$i])) {
                    $grade = (int)$matches[$i];
                    if (isValidGrade($grade)) {
                        return $grade;
                    }
                }
            }
        }
    }

    return null;
}

/**
 * Build system prompt with grade-specific enhancements
 */
function buildSystemPrompt($grade = null) {
    // Load base system prompt
    $basePromptFile = PROMPTS_DIR . 'system-prompt-base.txt';
    if (!file_exists($basePromptFile)) {
        throw new Exception('System prompt file not found');
    }

    $systemPrompt = file_get_contents($basePromptFile);

    // Replace grade placeholder
    if ($grade && isValidGrade($grade)) {
        $systemPrompt = str_replace('[GRADE_LEVEL]', $grade, $systemPrompt);

        // Load grade-specific enhancements
        $enhancementsFile = PROMPTS_DIR . 'grade-specific-enhancements.json';
        if (file_exists($enhancementsFile)) {
            $enhancements = json_decode(file_get_contents($enhancementsFile), true);
            $gradeKey = "grade_$grade";

            if (isset($enhancements[$gradeKey])) {
                $gradeInfo = $enhancements[$gradeKey];

                // Add grade-specific information to prompt
                $gradeSpecific = "\n\nGRADE-SPECIFIC INFORMATION:\n";
                $gradeSpecific .= "Course: " . $gradeInfo['course_name'] . "\n";
                $gradeSpecific .= "Language Level: " . $gradeInfo['language_level'] . "\n";
                $gradeSpecific .= "Vocabulary Size: " . $gradeInfo['vocabulary_size'] . "\n";
                $gradeSpecific .= "Average Sentence Length: " . $gradeInfo['sentence_length'] . "\n";
                $gradeSpecific .= "Encouragement Style: " . $gradeInfo['encouragement_style'] . "\n";

                $systemPrompt = str_replace('[GRADE_SPECIFIC_CONTENT will be injected here based on detected grade]', $gradeSpecific, $systemPrompt);
            }
        }
    } else {
        $systemPrompt = str_replace('[GRADE_LEVEL]', 'Unknown (please ask student)', $systemPrompt);
        $systemPrompt = str_replace('[GRADE_SPECIFIC_CONTENT will be injected here based on detected grade]', '', $systemPrompt);
    }

    return $systemPrompt;
}

/**
 * Load knowledge base for specific grade
 */
function loadKnowledgeBase($grade) {
    if (!isValidGrade($grade)) {
        return null;
    }

    $knowledgeFile = KNOWLEDGE_BASE_DIR . "grade-$grade.json";
    if (!file_exists($knowledgeFile)) {
        logMessage("Knowledge base not found for grade $grade", 'WARNING');
        return null;
    }

    $knowledge = json_decode(file_get_contents($knowledgeFile), true);
    if (json_last_error() !== JSON_ERROR_NONE) {
        logMessage("Error parsing knowledge base for grade $grade", 'ERROR');
        return null;
    }

    return $knowledge;
}

/**
 * Build conversation messages for Groq API
 */
function buildConversationMessages($systemPrompt, $conversationHistory, $knowledgeBase = null) {
    $messages = [];

    // Add system prompt
    $messages[] = [
        'role' => 'system',
        'content' => $systemPrompt
    ];

    // Add knowledge base as system context (if available)
    if ($knowledgeBase) {
        $knowledgeContext = buildKnowledgeContext($knowledgeBase);
        $messages[] = [
            'role' => 'system',
            'content' => $knowledgeContext
        ];
    }

    // Add conversation history (limit to prevent token overflow)
    $historyToInclude = array_slice($conversationHistory, -MAX_CONVERSATION_HISTORY);
    foreach ($historyToInclude as $msg) {
        $messages[] = [
            'role' => $msg['role'],
            'content' => $msg['content']
        ];
    }

    return $messages;
}

/**
 * Build knowledge context from knowledge base
 */
function buildKnowledgeContext($knowledgeBase) {
    $context = "CURRICULUM KNOWLEDGE BASE:\n\n";

    // Add grammar topics
    if (isset($knowledgeBase['grammar']['topics'])) {
        $context .= "GRAMMAR TOPICS:\n";
        foreach ($knowledgeBase['grammar']['topics'] as $topic) {
            $context .= "- " . $topic['name'] . ": " . $topic['simple_explanation'] . "\n";
            if (!empty($topic['examples'])) {
                $context .= "  Examples: " . implode(', ', array_slice($topic['examples'], 0, 2)) . "\n";
            }
        }
        $context .= "\n";
    }

    // Add vocabulary themes
    if (isset($knowledgeBase['vocabulary']['themes'])) {
        $context .= "VOCABULARY THEMES:\n";
        foreach (array_slice($knowledgeBase['vocabulary']['themes'], 0, 5) as $theme) {
            $context .= "- " . $theme['name'] . "\n";
        }
        $context .= "\n";
    }

    // Add writing types
    if (isset($knowledgeBase['writing']['types'])) {
        $context .= "WRITING TYPES:\n";
        foreach (array_slice($knowledgeBase['writing']['types'], 0, 5) as $writeType) {
            $context .= "- " . $writeType['name'] . "\n";
        }
        $context .= "\n";
    }

    return $context;
}

/**
 * Call Groq API
 */
function callGroqAPI($messages) {
    // Validate API key
    if (GROQ_API_KEY === 'YOUR_GROQ_API_KEY_HERE') {
        throw new Exception('Groq API key not configured. Please add your API key to config.php');
    }

    // Prepare request payload
    $payload = [
        'model' => GROQ_MODEL,
        'messages' => $messages,
        'temperature' => TEMPERATURE,
        'max_tokens' => MAX_TOKENS,
        'top_p' => TOP_P,
        'stream' => false
    ];

    // Initialize cURL
    $ch = curl_init(GROQ_API_URL);

    curl_setopt_array($ch, [
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_POST => true,
        CURLOPT_POSTFIELDS => json_encode($payload),
        CURLOPT_HTTPHEADER => [
            'Content-Type: application/json',
            'Authorization: Bearer ' . GROQ_API_KEY
        ],
        CURLOPT_TIMEOUT => 30,
        CURLOPT_SSL_VERIFYPEER => true
    ]);

    // Execute request
    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $curlError = curl_error($ch);
    curl_close($ch);

    // Handle cURL errors
    if ($curlError) {
        throw new Exception('API request failed: ' . $curlError);
    }

    // Handle HTTP errors
    if ($httpCode !== 200) {
        $errorData = json_decode($response, true);
        $errorMessage = isset($errorData['error']['message'])
            ? $errorData['error']['message']
            : 'API request failed with status ' . $httpCode;
        throw new Exception($errorMessage);
    }

    // Parse response
    $data = json_decode($response, true);
    if (json_last_error() !== JSON_ERROR_NONE) {
        throw new Exception('Invalid JSON response from API');
    }

    // Extract message
    if (!isset($data['choices'][0]['message']['content'])) {
        throw new Exception('Unexpected API response format');
    }

    return $data['choices'][0]['message']['content'];
}

/**
 * Send error response
 */
function respondWithError($message, $code = 400) {
    http_response_code($code);
    echo json_encode([
        'success' => false,
        'error' => $message,
        'timestamp' => time()
    ]);
    exit;
}
