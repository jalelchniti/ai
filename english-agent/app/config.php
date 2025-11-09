<?php
/**
 * SmartHub English Learning Assistant - Configuration
 * Contains API keys and configuration settings
 *
 * SECURITY NOTE: This file should have restricted permissions (600)
 * and should NOT be accessible via web browser
 */

// Error reporting (disable in production)
error_reporting(E_ALL);
ini_set('display_errors', 0);
ini_set('log_errors', 1);

// Groq API Configuration
define('GROQ_API_KEY', 'YOUR_GROQ_API_KEY_HERE');  // Replace with actual API key
define('GROQ_API_URL', 'https://api.groq.com/openai/v1/chat/completions');
define('GROQ_MODEL', 'llama-3.1-70b-versatile');

// Model Parameters
define('TEMPERATURE', 0.7);  // Balanced creativity (0.0 = deterministic, 1.0 = creative)
define('MAX_TOKENS', 1024);  // Maximum response length
define('TOP_P', 0.9);        // Nucleus sampling

// File Paths
define('BASE_DIR', dirname(__FILE__));
define('KNOWLEDGE_BASE_DIR', BASE_DIR . '/../knowledge-base/');
define('PROMPTS_DIR', BASE_DIR . '/../prompts/');

// Session Configuration
define('SESSION_TIMEOUT', 3600);  // 1 hour in seconds

// Rate Limiting (optional - implement if needed)
define('MAX_REQUESTS_PER_HOUR', 100);

// SmartHub Contact Information
define('SMARTHUB_WEBSITE', 'smarthub.com.tn');
define('SMARTHUB_LOCATION', 'Tunis City Center');
define('SMARTHUB_EMAIL', 'info@smarthub.com.tn');  // Update with actual email
define('SMARTHUB_PHONE', '+216 XX XXX XXX');       // Update with actual phone

// CORS Configuration (adjust as needed)
define('ALLOW_CORS', true);
define('ALLOWED_ORIGINS', ['*']);  // In production, specify exact domains

// Logging
define('ENABLE_LOGGING', true);
define('LOG_FILE', BASE_DIR . '/logs/chat.log');

// Conversation Settings
define('MAX_CONVERSATION_HISTORY', 20);  // Max messages to keep in context

// Grade Detection Settings
define('VALID_GRADES', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);

// Helper function to log messages
function logMessage($message, $level = 'INFO') {
    if (!ENABLE_LOGGING) return;

    $logDir = dirname(LOG_FILE);
    if (!file_exists($logDir)) {
        mkdir($logDir, 0755, true);
    }

    $timestamp = date('Y-m-d H:i:s');
    $logEntry = "[$timestamp] [$level] $message" . PHP_EOL;
    file_put_contents(LOG_FILE, $logEntry, FILE_APPEND);
}

// Helper function to sanitize input
function sanitizeInput($input) {
    return htmlspecialchars(strip_tags(trim($input)), ENT_QUOTES, 'UTF-8');
}

// Helper function to validate grade
function isValidGrade($grade) {
    return in_array((int)$grade, VALID_GRADES);
}
