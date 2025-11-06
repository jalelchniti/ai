/**
 * SmartHub English Learning Assistant - Chat Interface
 * Handles all frontend chat functionality
 */

class ChatInterface {
    constructor() {
        // DOM Elements
        this.chatMessages = document.getElementById('chatMessages');
        this.userInput = document.getElementById('userInput');
        this.sendButton = document.getElementById('sendButton');
        this.typingIndicator = document.getElementById('typingIndicator');
        this.gradeDisplay = document.getElementById('gradeDisplay');
        this.charCount = document.getElementById('charCount');
        this.errorModal = document.getElementById('errorModal');
        this.closeErrorBtn = document.getElementById('closeErrorBtn');

        // State
        this.conversationHistory = [];
        this.studentGrade = null;
        this.isWaitingForResponse = false;
        this.messageCount = 0;

        // Initialize
        this.init();
    }

    init() {
        // Event listeners
        this.sendButton.addEventListener('click', () => this.sendMessage());
        this.userInput.addEventListener('keydown', (e) => this.handleKeyPress(e));
        this.userInput.addEventListener('input', () => this.updateCharCount());
        this.closeErrorBtn.addEventListener('click', () => this.closeErrorModal());

        // Auto-resize textarea
        this.userInput.addEventListener('input', () => this.autoResizeTextarea());

        // Display welcome message
        this.displayWelcomeMessage();

        // Focus input
        this.userInput.focus();
    }

    /**
     * Display initial welcome message
     */
    displayWelcomeMessage() {
        const welcomeMessage = `
            <div class="message welcome">
                <div class="message-bubble">
                    <div class="message-content">
                        <p><strong>Welcome to SmartHub English Learning Assistant! 🎓</strong></p>
                        <p>I'm here to help you with:</p>
                        <ul>
                            <li>Grammar and vocabulary</li>
                            <li>Reading comprehension</li>
                            <li>Writing guidance</li>
                        </ul>
                        <p>Before we start, please tell me: <strong>What grade are you in?</strong> (6, 7, 8, or 9)</p>
                    </div>
                </div>
            </div>
        `;
        this.chatMessages.innerHTML = welcomeMessage;
        this.scrollToBottom();
    }

    /**
     * Handle Enter key press (Shift+Enter for new line)
     */
    handleKeyPress(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            this.sendMessage();
        }
    }

    /**
     * Update character count display
     */
    updateCharCount() {
        const length = this.userInput.value.length;
        this.charCount.textContent = `${length} / 1000`;

        if (length > 900) {
            this.charCount.style.color = '#ef4444'; // Red
        } else if (length > 700) {
            this.charCount.style.color = '#f59e0b'; // Orange
        } else {
            this.charCount.style.color = '#64748b'; // Default
        }
    }

    /**
     * Auto-resize textarea based on content
     */
    autoResizeTextarea() {
        this.userInput.style.height = 'auto';
        this.userInput.style.height = this.userInput.scrollHeight + 'px';
    }

    /**
     * Send user message
     */
    async sendMessage() {
        const message = this.userInput.value.trim();

        // Validation
        if (!message) {
            return;
        }

        if (this.isWaitingForResponse) {
            return;
        }

        // Display user message
        this.displayMessage(message, 'user');

        // Clear input
        this.userInput.value = '';
        this.userInput.style.height = 'auto';
        this.updateCharCount();

        // Add to conversation history
        this.conversationHistory.push({
            role: 'user',
            content: message
        });

        // Increment message count
        this.messageCount++;

        // Disable input while waiting
        this.isWaitingForResponse = true;
        this.sendButton.disabled = true;
        this.userInput.disabled = true;

        // Show typing indicator
        this.showTypingIndicator();

        try {
            // Send to backend
            const response = await this.sendToBackend(message);

            // Hide typing indicator
            this.hideTypingIndicator();

            // Display AI response
            this.displayMessage(response.message, 'ai');

            // Update grade if detected
            if (response.grade && !this.studentGrade) {
                this.studentGrade = response.grade;
                this.updateGradeDisplay(response.grade);
            }

            // Add to conversation history
            this.conversationHistory.push({
                role: 'assistant',
                content: response.message
            });

        } catch (error) {
            this.hideTypingIndicator();
            this.showError(error.message);
        } finally {
            // Re-enable input
            this.isWaitingForResponse = false;
            this.sendButton.disabled = false;
            this.userInput.disabled = false;
            this.userInput.focus();
        }
    }

    /**
     * Send message to backend API
     */
    async sendToBackend(message) {
        const response = await fetch('chat.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                message: message,
                grade: this.studentGrade,
                conversationHistory: this.conversationHistory
            })
        });

        if (!response.ok) {
            throw new Error('Network response was not ok. Please check your connection.');
        }

        const data = await response.json();

        if (data.error) {
            throw new Error(data.error);
        }

        return data;
    }

    /**
     * Display message in chat
     */
    displayMessage(content, type) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}`;

        const messageBubble = document.createElement('div');
        messageBubble.className = 'message-bubble';

        const messageContent = document.createElement('div');
        messageContent.className = 'message-content';

        // Format message content (preserve line breaks, format lists, etc.)
        messageContent.innerHTML = this.formatMessage(content);

        messageBubble.appendChild(messageContent);
        messageDiv.appendChild(messageBubble);
        this.chatMessages.appendChild(messageDiv);

        this.scrollToBottom();
    }

    /**
     * Format message content
     */
    formatMessage(text) {
        // Convert line breaks to <br>
        let formatted = text.replace(/\n/g, '<br>');

        // Format numbered lists (1. 2. 3.)
        formatted = formatted.replace(/(\d+\.\s+[^\n<]+)/g, '<li>$1</li>');
        if (formatted.includes('<li>')) {
            formatted = formatted.replace(/(<li>.*<\/li>)/g, '<ol>$1</ol>');
        }

        // Format bullet points (-, *, •)
        formatted = formatted.replace(/^[\-\*•]\s+(.+)$/gm, '<li>$1</li>');
        if (formatted.includes('<li>') && !formatted.includes('<ol>')) {
            formatted = formatted.replace(/(<li>.*<\/li>)/g, '<ul>$1</ul>');
        }

        // Format bold text (**text** or __text__)
        formatted = formatted.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
        formatted = formatted.replace(/__(.+?)__/g, '<strong>$1</strong>');

        // Format italic text (*text* or _text_)
        formatted = formatted.replace(/(?<!\*)\*(?!\*)(.+?)(?<!\*)\*(?!\*)/g, '<em>$1</em>');
        formatted = formatted.replace(/(?<!_)_(?!_)(.+?)(?<!_)_(?!_)/g, '<em>$1</em>');

        // Wrap in paragraphs if not already wrapped
        if (!formatted.includes('<p>') && !formatted.includes('<ul>') && !formatted.includes('<ol>')) {
            const paragraphs = formatted.split('<br><br>');
            formatted = paragraphs.map(p => p.trim() ? `<p>${p}</p>` : '').join('');
        }

        return formatted;
    }

    /**
     * Show typing indicator
     */
    showTypingIndicator() {
        this.typingIndicator.style.display = 'flex';
        this.scrollToBottom();
    }

    /**
     * Hide typing indicator
     */
    hideTypingIndicator() {
        this.typingIndicator.style.display = 'none';
    }

    /**
     * Update grade display
     */
    updateGradeDisplay(grade) {
        this.gradeDisplay.textContent = `Grade ${grade}`;
        this.gradeDisplay.parentElement.style.background = 'rgba(16, 185, 129, 0.3)';
    }

    /**
     * Scroll to bottom of chat
     */
    scrollToBottom() {
        setTimeout(() => {
            this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
        }, 100);
    }

    /**
     * Show error modal
     */
    showError(message) {
        const errorMessage = document.getElementById('errorMessage');
        errorMessage.textContent = message;
        this.errorModal.style.display = 'flex';
    }

    /**
     * Close error modal
     */
    closeErrorModal() {
        this.errorModal.style.display = 'none';
    }
}

// Initialize chat interface when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new ChatInterface();
});
