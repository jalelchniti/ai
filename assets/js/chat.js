/**
 * SmartHub Chat Interface - Parent & Teacher Widgets
 * Handles frontend chat functionality for parent and teacher consultations
 */

// Global configuration
let chatConfig = {
    apiEndpoint: 'chat.php',
    chatType: 'parent'
};

// DOM elements (initialized after DOM loads)
let elements = {};

// State
let isWaitingForResponse = false;

/**
 * Initialize chat with configuration
 * @param {Object} config - Configuration object with apiEndpoint and chatType
 */
function initializeChat(config) {
    chatConfig = { ...chatConfig, ...config };

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initElements);
    } else {
        initElements();
    }
}

/**
 * Initialize DOM elements and event listeners
 */
function initElements() {
    elements = {
        chatMessages: document.getElementById('chatMessages'),
        userInput: document.getElementById('userInput'),
        sendButton: document.getElementById('sendButton'),
        typingIndicator: document.getElementById('typingIndicator'),
        errorMessage: document.getElementById('errorMessage'),
        errorText: document.getElementById('errorText')
    };

    // Add event listeners
    if (elements.sendButton) {
        elements.sendButton.addEventListener('click', sendMessage);
    }

    if (elements.userInput) {
        elements.userInput.addEventListener('keydown', handleKeyPress);
        elements.userInput.addEventListener('input', autoResizeTextarea);
    }

    // Focus on input
    if (elements.userInput) {
        elements.userInput.focus();
    }

    // Scroll to bottom of messages
    scrollToBottom();
}

/**
 * Handle keyboard input (Enter to send, Shift+Enter for new line)
 */
function handleKeyPress(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
    }
}

/**
 * Auto-resize textarea based on content
 */
function autoResizeTextarea() {
    if (!elements.userInput) return;

    elements.userInput.style.height = 'auto';
    elements.userInput.style.height = elements.userInput.scrollHeight + 'px';
}

/**
 * Send message to backend
 */
async function sendMessage() {
    if (!elements.userInput || !elements.chatMessages) return;

    const message = elements.userInput.value.trim();

    // Validation
    if (!message) {
        return;
    }

    if (isWaitingForResponse) {
        return;
    }

    // Display user message
    displayMessage(message, 'user');

    // Clear input
    elements.userInput.value = '';
    elements.userInput.style.height = 'auto';

    // Disable input while waiting
    isWaitingForResponse = true;
    if (elements.sendButton) elements.sendButton.disabled = true;
    if (elements.userInput) elements.userInput.disabled = true;

    // Show typing indicator
    showTypingIndicator();

    try {
        // Send to backend
        const response = await fetch(chatConfig.apiEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: message,
                chatType: chatConfig.chatType
            })
        });

        const data = await response.json();

        // Hide typing indicator
        hideTypingIndicator();

        if (data.success && data.response) {
            // Display AI response
            displayMessage(data.response, 'ai');
        } else {
            // Show error
            showError(data.error || 'An error occurred. Please try again.');
        }

    } catch (error) {
        console.error('Error sending message:', error);
        hideTypingIndicator();
        showError('Connection error. Please check your internet and try again.');
    } finally {
        // Re-enable input
        isWaitingForResponse = false;
        if (elements.sendButton) elements.sendButton.disabled = false;
        if (elements.userInput) {
            elements.userInput.disabled = false;
            elements.userInput.focus();
        }
    }
}

/**
 * Display a message in the chat
 * @param {string} message - The message text
 * @param {string} type - Message type ('user' or 'ai')
 */
function displayMessage(message, type) {
    if (!elements.chatMessages) return;

    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type === 'user' ? 'user-message' : 'ai-message'}`;

    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';

    // Format message (preserve line breaks, parse basic HTML if from AI)
    if (type === 'ai') {
        // Allow basic HTML from AI responses
        contentDiv.innerHTML = formatAIMessage(message);
    } else {
        // Escape user input and preserve line breaks
        contentDiv.textContent = message;
        contentDiv.innerHTML = contentDiv.innerHTML.replace(/\n/g, '<br>');
    }

    // Add timestamp
    const timeSpan = document.createElement('span');
    timeSpan.className = 'message-time';
    timeSpan.textContent = new Date().toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit'
    });

    messageDiv.appendChild(contentDiv);
    messageDiv.appendChild(timeSpan);

    // Append to chat
    elements.chatMessages.appendChild(messageDiv);

    // Scroll to bottom
    scrollToBottom();
}

/**
 * Format AI message (convert markdown-like syntax to HTML)
 * @param {string} message - Raw message from AI
 * @returns {string} - Formatted HTML
 */
function formatAIMessage(message) {
    // Basic sanitization - remove script tags
    message = message.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');

    // Convert line breaks to proper paragraphs
    let formatted = message
        .split('\n\n')
        .map(para => para.trim())
        .filter(para => para.length > 0)
        .map(para => {
            // Check if it's a list item
            if (para.includes('\n- ') || para.includes('\n• ')) {
                const items = para.split(/\n[-•]\s+/).filter(item => item.trim());
                const listItems = items.map(item => `<li>${item.trim()}</li>`).join('');
                return `<ul>${listItems}</ul>`;
            }
            // Regular paragraph
            return `<p>${para.replace(/\n/g, '<br>')}</p>`;
        })
        .join('');

    // Format bold text **text** -> <strong>text</strong>
    formatted = formatted.replace(/\*\*([^\*]+)\*\*/g, '<strong>$1</strong>');

    // Format italic text *text* -> <em>text</em>
    formatted = formatted.replace(/\*([^\*]+)\*/g, '<em>$1</em>');

    return formatted;
}

/**
 * Show typing indicator
 */
function showTypingIndicator() {
    if (elements.typingIndicator) {
        elements.typingIndicator.style.display = 'flex';
    }
}

/**
 * Hide typing indicator
 */
function hideTypingIndicator() {
    if (elements.typingIndicator) {
        elements.typingIndicator.style.display = 'none';
    }
}

/**
 * Show error message
 * @param {string} errorMsg - Error message to display
 */
function showError(errorMsg) {
    if (elements.errorMessage && elements.errorText) {
        elements.errorText.textContent = errorMsg;
        elements.errorMessage.style.display = 'flex';

        // Auto-hide after 5 seconds
        setTimeout(() => {
            closeError();
        }, 5000);
    }
}

/**
 * Close error message
 */
function closeError() {
    if (elements.errorMessage) {
        elements.errorMessage.style.display = 'none';
    }
}

/**
 * Scroll chat messages to bottom
 */
function scrollToBottom() {
    if (elements.chatMessages) {
        elements.chatMessages.scrollTop = elements.chatMessages.scrollHeight;
    }
}

// Make functions globally available
window.initializeChat = initializeChat;
window.closeError = closeError;
