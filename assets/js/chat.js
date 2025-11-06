/**
 * SmartHub AI Chat System - JavaScript
 * Version: 1.0
 * Description: Handles chat functionality, API communication, and UI interactions
 */

// Global variables
let chatConfig = {};
let isProcessing = false;
let languageSelectionMode = true;
let waitingForLanguageChoice = false;
let selectedLanguage = null;

/**
 * Initialize the chat application
 * @param {Object} config - Configuration object with apiEndpoint and chatType
 */
function initializeChat(config) {
    chatConfig = config;

    // Get DOM elements
    const sendButton = document.getElementById('sendButton');
    const userInput = document.getElementById('userInput');

    // Add event listeners
    sendButton.addEventListener('click', sendMessage);
    userInput.addEventListener('keydown', handleKeyPress);
    userInput.addEventListener('input', autoResizeTextarea);

    // Focus on input field
    userInput.focus();
}

/**
 * Handle keyboard events in the input field
 * @param {KeyboardEvent} event
 */
function handleKeyPress(event) {
    // Send message on Enter (without Shift)
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        sendMessage();
    }
}

/**
 * Auto-resize textarea based on content
 */
function autoResizeTextarea() {
    const textarea = document.getElementById('userInput');
    textarea.style.height = 'auto';
    textarea.style.height = Math.min(textarea.scrollHeight, 120) + 'px';
}

/**
 * Send user message and get AI response
 */
async function sendMessage() {
    // Prevent sending while processing
    if (isProcessing) {
        return;
    }

    const userInput = document.getElementById('userInput');
    const message = userInput.value.trim();

    // Validate input
    if (!message) {
        return;
    }

    // Check message length
    if (message.length > 2000) {
        showError('Message is too long. Please keep it under 2000 characters.');
        return;
    }

    // Set processing state
    isProcessing = true;
    updateSendButtonState(true);

    // Clear input and reset height
    userInput.value = '';
    userInput.style.height = 'auto';

    // Display user message
    displayMessage(message, 'user');

    // Hide any existing errors
    hideError();

    // Handle language selection mode
    if (languageSelectionMode && !waitingForLanguageChoice) {
        // User is responding to initial Arabic message (1 or 0)
        if (message === '1') {
            selectedLanguage = 'Arabic';
            languageSelectionMode = false;
            displayMessage('شكراً! سأواصل التحدث معك بالعربية. كيف يمكنني مساعدتك اليوم؟', 'ai');
            isProcessing = false;
            updateSendButtonState(false);
            userInput.focus();
            return;
        } else if (message === '0') {
            waitingForLanguageChoice = true;
            displayMessage('من فضلك اختر اللغة التي تفضلها:\n- Français (اكتب: Français)\n- English (اكتب: English)\n- Español (اكتب: Español)', 'ai');
            isProcessing = false;
            updateSendButtonState(false);
            userInput.focus();
            return;
        } else {
            // User didn't follow instructions, remind them
            displayMessage('من فضلك اكتب 1 للاستمرار بالعربية أو 0 لاختيار لغة أخرى.', 'ai');
            isProcessing = false;
            updateSendButtonState(false);
            userInput.focus();
            return;
        }
    }

    // Handle language choice selection
    if (waitingForLanguageChoice) {
        const lowerMessage = message.toLowerCase().trim();
        if (lowerMessage === 'français' || lowerMessage === 'francais' || lowerMessage === 'french') {
            selectedLanguage = 'French';
            languageSelectionMode = false;
            waitingForLanguageChoice = false;
            displayMessage('Parfait! Je vais continuer en français. Comment puis-je vous aider aujourd\'hui?', 'ai');
            isProcessing = false;
            updateSendButtonState(false);
            userInput.focus();
            return;
        } else if (lowerMessage === 'english' || lowerMessage === 'anglais') {
            selectedLanguage = 'English';
            languageSelectionMode = false;
            waitingForLanguageChoice = false;
            displayMessage('Great! I\'ll continue in English. How can I help you today?', 'ai');
            isProcessing = false;
            updateSendButtonState(false);
            userInput.focus();
            return;
        } else if (lowerMessage === 'español' || lowerMessage === 'spanish' || lowerMessage === 'espanol') {
            selectedLanguage = 'Spanish';
            languageSelectionMode = false;
            waitingForLanguageChoice = false;
            displayMessage('¡Perfecto! Continuaré en español. ¿Cómo puedo ayudarte hoy?', 'ai');
            isProcessing = false;
            updateSendButtonState(false);
            userInput.focus();
            return;
        } else {
            displayMessage('من فضلك اختر لغة صحيحة: Français، English أو Español', 'ai');
            isProcessing = false;
            updateSendButtonState(false);
            userInput.focus();
            return;
        }
    }

    // Show typing indicator
    showTypingIndicator();

    try {
        // Send request to PHP backend
        const response = await fetch(chatConfig.apiEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                message: message,
                chatType: chatConfig.chatType,
                language: selectedLanguage
            })
        });

        // Check if response is OK
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Parse JSON response
        const data = await response.json();

        // Hide typing indicator
        hideTypingIndicator();

        // Check for errors in response
        if (data.error) {
            showError(data.error);
            return;
        }

        // Display AI response
        if (data.response) {
            displayMessage(data.response, 'ai');
        } else {
            throw new Error('No response received from server');
        }

    } catch (error) {
        console.error('Error:', error);
        hideTypingIndicator();
        showError('Sorry, something went wrong. Please try again in a moment.');
    } finally {
        // Reset processing state
        isProcessing = false;
        updateSendButtonState(false);

        // Refocus input
        userInput.focus();
    }
}

/**
 * Display a message in the chat
 * @param {string} text - Message text
 * @param {string} type - Message type ('user' or 'ai')
 */
function displayMessage(text, type) {
    const chatMessages = document.getElementById('chatMessages');

    // Create message element
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}-message`;

    // Create message content
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';

    // Format message text (convert newlines to paragraphs)
    const formattedText = formatMessageText(text);
    contentDiv.innerHTML = formattedText;

    // Create timestamp
    const timeSpan = document.createElement('span');
    timeSpan.className = 'message-time';
    timeSpan.textContent = getCurrentTime();

    // Append elements
    messageDiv.appendChild(contentDiv);
    messageDiv.appendChild(timeSpan);
    chatMessages.appendChild(messageDiv);

    // Scroll to bottom
    scrollToBottom();
}

/**
 * Format message text for display
 * @param {string} text - Raw message text
 * @returns {string} - Formatted HTML
 */
function formatMessageText(text) {
    // Escape HTML to prevent XSS
    const div = document.createElement('div');
    div.textContent = text;
    let escaped = div.innerHTML;

    // Convert line breaks to paragraphs
    const paragraphs = escaped.split('\n\n').filter(p => p.trim());

    let formatted = '';
    for (let para of paragraphs) {
        // Convert single line breaks to <br>
        para = para.replace(/\n/g, '<br>');

        // Check if it's a list
        if (para.includes('<br>-') || para.includes('<br>•') || para.startsWith('-') || para.startsWith('•')) {
            // Convert to unordered list
            const items = para.split(/<br>[-•]\s*/).filter(item => item.trim());
            if (items.length > 0) {
                formatted += '<ul>';
                items.forEach(item => {
                    if (item.trim()) {
                        formatted += `<li>${item.trim()}</li>`;
                    }
                });
                formatted += '</ul>';
            }
        } else if (para.match(/<br>\d+\./)) {
            // Convert to ordered list
            const items = para.split(/<br>\d+\.\s*/).filter(item => item.trim());
            if (items.length > 0) {
                formatted += '<ol>';
                items.forEach(item => {
                    if (item.trim()) {
                        formatted += `<li>${item.trim()}</li>`;
                    }
                });
                formatted += '</ol>';
            }
        } else {
            // Regular paragraph
            formatted += `<p>${para}</p>`;
        }
    }

    // Convert URLs to links
    formatted = linkifyText(formatted);

    return formatted;
}

/**
 * Convert URLs in text to clickable links
 * @param {string} text - Text with URLs
 * @returns {string} - Text with HTML links
 */
function linkifyText(text) {
    const urlRegex = /(https?:\/\/[^\s<]+)/g;
    return text.replace(urlRegex, '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>');
}

/**
 * Get current time formatted as HH:MM
 * @returns {string} - Formatted time
 */
function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    });
}

/**
 * Scroll chat messages to bottom
 */
function scrollToBottom() {
    const chatMessages = document.getElementById('chatMessages');
    setTimeout(() => {
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 100);
}

/**
 * Show typing indicator
 */
function showTypingIndicator() {
    const indicator = document.getElementById('typingIndicator');
    indicator.style.display = 'flex';
    scrollToBottom();
}

/**
 * Hide typing indicator
 */
function hideTypingIndicator() {
    const indicator = document.getElementById('typingIndicator');
    indicator.style.display = 'none';
}

/**
 * Show error message
 * @param {string} message - Error message text
 */
function showError(message) {
    const errorDiv = document.getElementById('errorMessage');
    const errorText = document.getElementById('errorText');

    errorText.textContent = message;
    errorDiv.style.display = 'flex';

    // Auto-hide after 10 seconds
    setTimeout(() => {
        hideError();
    }, 10000);
}

/**
 * Hide error message
 */
function hideError() {
    const errorDiv = document.getElementById('errorMessage');
    errorDiv.style.display = 'none';
}

/**
 * Close error message (called from HTML)
 */
function closeError() {
    hideError();
}

/**
 * Update send button state
 * @param {boolean} disabled - Whether button should be disabled
 */
function updateSendButtonState(disabled) {
    const sendButton = document.getElementById('sendButton');
    sendButton.disabled = disabled;
}

/**
 * Handle visibility change (e.g., tab switching)
 */
document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
        // Refocus input when tab becomes visible
        const userInput = document.getElementById('userInput');
        if (userInput && !isProcessing) {
            userInput.focus();
        }
    }
});

/**
 * Handle window resize
 */
window.addEventListener('resize', () => {
    scrollToBottom();
});

// Export functions for use in HTML
if (typeof window !== 'undefined') {
    window.initializeChat = initializeChat;
    window.closeError = closeError;
}
