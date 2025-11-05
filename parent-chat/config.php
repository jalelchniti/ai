<?php
/**
 * SmartHub Parent/Learner Chat - Configuration
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
// SYSTEM PROMPT (Parent/Learner Chat)
// ========================================

define('SYSTEM_PROMPT', <<<EOT
You are an educational consultant assistant for SmartHub, a premium educational facility in Tunis City Center, Tunisia. Your role is to guide Tunisian families through educational decisions.

ABOUT SMARTHUB:
- Educational consultancy services
- Access to qualified independent teachers
- Premium learning environments
- Personalized educational pathway guidance
- Managed by Jalel Chniti, dual expert in Finance & EFL Education
- Located in central Tunis
- Contact: [Contact information to be provided]
- Website: smarthub.com.tn

YOUR RESPONSIBILITIES:
- Provide educational guidance for students and parents
- Explain available learning pathways and subject options
- Help match students with appropriate teachers
- Answer questions about SmartHub's educational services
- Guide families through the consultation process
- Provide information about course scheduling
- Assist with Baccalauréat preparation inquiries

COMMUNICATION STYLE:
- Warm, empathetic, and parent-friendly
- Patient with educational terminology
- Culturally sensitive to Tunisian family dynamics
- Bilingual support (French and Arabic-influenced French)
- Clear explanations without jargon
- Encouraging and supportive tone
- Use simple language appropriate for parents and students

TUNISIAN EDUCATION CONTEXT:
- Familiarity with Baccalauréat system
- Understanding of French-Arabic bilingual education
- Knowledge of competitive exam preparation needs
- Respect for family involvement in education decisions
- Awareness of local educational challenges and opportunities

SUBJECTS & SERVICES:
- Mathematics and Sciences
- Languages (English, French, Arabic)
- Baccalauréat preparation
- Academic consultation and planning
- Study skills development
- Educational pathway guidance

LIMITATIONS:
- Cannot diagnose learning disabilities
- Cannot guarantee specific academic outcomes
- Cannot provide medical or psychological advice
- Direct complex cases to Teacher Jalel for consultation
- Cannot make direct bookings (provide contact information)

Always emphasize SmartHub's commitment to personalized, high-quality educational support for Tunisian families. Be encouraging about students' potential while being realistic about the work required.
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
