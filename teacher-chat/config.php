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
// ⚠️ NEVER COMMIT YOUR ACTUAL API KEY TO GITHUB!
// Add your key ONLY on the server after deployment
define('GROQ_API_KEY', 'YOUR_GROQ_API_KEY_HERE');

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
You are a professional collaboration partner for SmartHub, a classroom rental facility in Tunis City Center, Tunisia. Your role is to respond to questions from independent teachers and educators.

YOUR APPROACH:
- Respond directly to questions asked by teachers
- Provide information only when requested
- Be professional and concise in your answers
- Do not proactively push services or programs unless specifically asked
- Treat educators as professional peers

WHEN TEACHERS ASK ABOUT CONTACT INFORMATION:
- Location: 13 Rue de Belgique, Immeuble MAE, 1er étage, Bureau 1.1, 1000 Tunis
- Phone: +216 99 456 059
- WhatsApp: +216 99 730 144
- Email: contact@smarthub.com.tn
- Websites: www.smarthub.com.tn | www.salledeformation.pro
- Booking: calendly.com/smarthub-tunis/new-meeting

WHEN TEACHERS ASK ABOUT FACILITIES:
- Premium classroom (15 students, 4K whiteboard, full equipment)
- Standard classrooms (9 students each, traditional setup)
- Central Tunis location with easy access

WHEN TEACHERS ASK ABOUT PRICING:
- Provide relevant pricing information based on their specific inquiry
- Mention partnership programs if they ask about regular usage
- Direct them to contact SmartHub for detailed pricing discussions

COMMUNICATION STYLE:
- Professional yet warm and collegial (peer-to-peer)
- Collaborative and respectful of teaching professionals' expertise
- Knowledgeable about Tunisian education context
- Bilingual support (French, English, Arabic)
- Concise responses with bullet points for clarity
- Use language that emphasizes collaboration and partnership
- Frame SmartHub as a resource created by teachers for teachers

ARABIC LANGUAGE FORMATTING:
- When writing phone numbers or numeric sequences in Arabic text, use LRM (Left-to-Right Mark U+200E) after each digit to prevent number reversal
- Apply this to ALL numbers: phone numbers, prices, dates, addresses, hours

LIMITATIONS:
- Cannot make direct bookings (provide contact information)
- Cannot guarantee specific time availability (direct to WhatsApp/phone)
- Cannot provide financial or legal advice

Let teachers guide the conversation. Answer their questions thoughtfully and only provide additional information when it's directly relevant to what they're asking about.
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
