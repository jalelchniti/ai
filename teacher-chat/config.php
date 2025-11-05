<?php
/**
 * SmartHub Teacher Chat - Configuration
 * Version: 1.0
 *
 * IMPORTANT SECURITY NOTES:
 * - This file contains sensitive API credentials
 * - Set file permissions to 600 (read/write for owner only)
 * - Never commit this file to public repositories
 * - Never expose API key in client-side code
 */

// ========================================
// API CONFIGURATION
// ========================================

// Groq API Key - REPLACE WITH YOUR ACTUAL API KEY
// Get your API key from: https://console.groq.com
define('GROQ_API_KEY', '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');

// Groq API Endpoint
define('GROQ_API_ENDPOINT', 'https://api.groq.com/openai/v1/chat/completions');

// Model Configuration
define('GROQ_MODEL', 'llama-3.3-70b-versatile');  // Latest LLaMA model - Fast and powerful
define('GROQ_TEMPERATURE', 0.7);                    // Creativity level (0.0 - 1.0)
define('GROQ_MAX_TOKENS', 1024);                    // Maximum response length

// ========================================
// SYSTEM PROMPT (Teacher Chat)
// ========================================

define('SYSTEM_PROMPT', <<<EOT
You are a professional support assistant for SmartHub, a premium classroom rental facility in Tunis City Center, Tunisia. Your role is to assist independent teachers and educators.

ABOUT SMARTHUB:
- Premium and standard classroom rentals
- 180 weekly time slots available
- Modern equipment: projectors, whiteboards, high-speed Wi-Fi
- Located in convenient Tunis City Center
- Managed by ELMAOUIA ET.CO
- Contact: [Contact information to be provided]
- Website: smarthub.com.tn

YOUR RESPONSIBILITIES:
- Answer questions about facility features and equipment
- Explain booking procedures and availability
- Provide pricing information for classroom rentals
- Describe partnership benefits for independent teachers
- Guide teachers through the registration process
- Address technical questions about equipment usage

COMMUNICATION STYLE:
- Professional yet friendly and approachable
- Supportive of independent educators
- Knowledgeable about Tunisian education context
- Bilingual support (French and English)
- Concise responses (2-4 paragraphs maximum)
- Use bullet points for clarity when listing information

LIMITATIONS:
- Cannot make bookings directly (direct to contact methods)
- Cannot provide financial advice
- Cannot guarantee specific time slot availability
- Direct complex inquiries to Teacher Jalel Chniti

PRICING INFORMATION (Update with actual pricing):
- Premium classrooms: [Price per hour] TND
- Standard classrooms: [Price per hour] TND
- Package deals available for regular bookings
- Special rates for partner teachers

Always prioritize teacher satisfaction and emphasize SmartHub's commitment to supporting educational excellence in Tunisia.
EOT
);

// ========================================
// ERROR MESSAGES
// ========================================

define('ERROR_NO_MESSAGE', 'No message provided');
define('ERROR_EMPTY_MESSAGE', 'Message cannot be empty');
define('ERROR_MESSAGE_TOO_LONG', 'Message is too long (max 2000 characters)');
define('ERROR_API_KEY_NOT_SET', 'API key not configured. Please contact administrator.');
define('ERROR_API_REQUEST_FAILED', 'Unable to connect to AI service. Please try again later.');
define('ERROR_INVALID_RESPONSE', 'Received invalid response from AI service');
define('ERROR_RATE_LIMIT', 'Too many requests. Please wait a moment and try again.');

// ========================================
// GENERAL SETTINGS
// ========================================

// Maximum message length
define('MAX_MESSAGE_LENGTH', 2000);

// Request timeout (seconds)
define('REQUEST_TIMEOUT', 30);

// Enable error logging
define('ENABLE_ERROR_LOGGING', true);

// Error log file path (make sure this directory exists and is writable)
define('ERROR_LOG_FILE', __DIR__ . '/error.log');

// CORS settings (if needed)
define('ENABLE_CORS', true);
define('CORS_ORIGIN', '*'); // Change to specific domain in production

// ========================================
// VALIDATION
// ========================================

// Check if API key is set
if (GROQ_API_KEY === 'YOUR_GROQ_API_KEY_HERE') {
    // API key not set - will show error to user
    define('API_KEY_CONFIGURED', false);
} else {
    define('API_KEY_CONFIGURED', true);
}

?>
