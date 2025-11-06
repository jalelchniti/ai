# SmartHub English Learning Assistant - Web Application

## 📋 Overview

This is a complete AI-powered chat application designed to help Tunisian students (Grades 6-9) learn English. The assistant provides personalized help with grammar, vocabulary, reading comprehension, and writing guidance.

**Status:** Phase 3 Complete - Ready for Deployment Testing

---

## 🏗️ Architecture

### Technology Stack
- **Frontend:** HTML5, CSS3, Vanilla JavaScript (ES6+)
- **Backend:** PHP 7.4+
- **AI Engine:** Groq API (Llama 3.1 70B Versatile)
- **Knowledge Base:** JSON files (no database required)
- **Hosting:** OVH Shared Hosting compatible

### File Structure
```
app/
├── index.html              # Main chat interface
├── landing.html            # Landing/welcome page
├── chat.php                # API handler and main logic
├── config.php              # Configuration (API keys, settings)
├── assets/
│   ├── css/
│   │   └── styles.css      # Complete styling
│   └── js/
│       └── chat.js         # Frontend chat logic
└── logs/                   # Created automatically for logging
```

---

## 🚀 Quick Start Guide

### Prerequisites
1. **Groq API Key** - Get free API key from [console.groq.com](https://console.groq.com)
2. **PHP 7.4+** hosting with:
   - cURL enabled
   - JSON extension enabled
   - File write permissions for logging

### Installation Steps

#### 1. Upload Files
Upload the entire `app/` directory to your web hosting:
```
ai.smarthub.com.tn/
└── english-agent/
    └── [app files here]
```

#### 2. Configure API Key
Edit `config.php` and replace the placeholder with your actual Groq API key:
```php
define('GROQ_API_KEY', 'your_actual_groq_api_key_here');
```

#### 3. Update SmartHub Contact Info
In `config.php`, update:
```php
define('SMARTHUB_EMAIL', 'your-email@smarthub.com.tn');
define('SMARTHUB_PHONE', '+216 XX XXX XXX');
```

#### 4. Set File Permissions
```bash
chmod 644 index.html landing.html chat.php config.php
chmod 600 config.php  # More secure for config
chmod 755 assets/css assets/js
```

#### 5. Create Logs Directory
```bash
mkdir logs
chmod 755 logs
```

#### 6. Test the Application
1. Visit `https://ai.smarthub.com.tn/english-agent/app/landing.html`
2. Click "Start Learning Now"
3. Test a conversation:
   - Enter grade: "I'm in grade 7"
   - Ask a question: "What is present perfect?"
   - Test writing help: "Can you help me write a paragraph?"

---

## 🎯 Features

### 1. **Automatic Grade Detection**
- Recognizes grade from student's messages
- Patterns like "I'm in grade 7", "Grade 8", "7th year"
- Adjusts language complexity automatically

### 2. **Personalized Learning**
- Grade-specific curriculum knowledge (Grades 6-9)
- Appropriate vocabulary and sentence complexity
- Aligned with Tunisian English curriculum

### 3. **Three Learning Modes**

#### Grammar & Vocabulary
- Clear explanations with examples
- Common error corrections
- Grade-appropriate grammar topics

#### Reading Comprehension
- Text breakdown and analysis
- Vocabulary help in context
- Comprehension strategies

#### Writing Guidance (Critical Feature)
- Student writes incrementally
- Assistant guides, never completes
- Constructive feedback on student's work
- Step-by-step improvement

### 4. **SmartHub Course Promotion**
- Naturally integrated (~5 times per conversation)
- Appears at strategic moments
- Not pushy or intrusive
- Includes contact information

---

## 🔧 Configuration Options

### API Settings (config.php)

```php
// Model Parameters
define('TEMPERATURE', 0.7);    // 0.0-1.0 (higher = more creative)
define('MAX_TOKENS', 1024);    // Max response length
define('TOP_P', 0.9);          // Nucleus sampling

// Session Settings
define('SESSION_TIMEOUT', 3600);              // 1 hour
define('MAX_CONVERSATION_HISTORY', 20);       // Messages in context

// Logging
define('ENABLE_LOGGING', true);               // Enable/disable logs
define('LOG_FILE', BASE_DIR . '/logs/chat.log');
```

### Adjusting Response Style

To make responses shorter/longer, adjust in `config.php`:
```php
define('MAX_TOKENS', 512);   // Shorter responses
define('MAX_TOKENS', 1536);  // Longer responses
```

To make responses more consistent:
```php
define('TEMPERATURE', 0.5);  // More deterministic
```

---

## 📊 Knowledge Base Integration

The application automatically loads grade-specific curriculum data from:
```
../knowledge-base/
├── grade-6.json
├── grade-7.json
├── grade-8.json
└── grade-9.json
```

Each knowledge base contains:
- Grammar topics with explanations and examples
- Vocabulary themes
- Writing templates
- Common errors and corrections
- Reading strategies

**No database required** - all knowledge is in JSON files.

---

## 🔒 Security Features

1. **Input Sanitization**
   - All user input is sanitized
   - XSS protection with `htmlspecialchars()`
   - SQL injection N/A (no database)

2. **API Key Protection**
   - Stored in `config.php` (not in frontend)
   - File permissions set to 600
   - Never exposed to client

3. **CORS Configuration**
   - Configurable allowed origins
   - Default set to allow all (adjust for production)

4. **Rate Limiting**
   - Placeholder in config for implementation
   - Can be added based on usage patterns

5. **Error Handling**
   - Errors logged, not displayed to users
   - Generic error messages shown to students
   - Detailed logs for debugging

---

## 📝 Logging

### Log File Location
`app/logs/chat.log`

### Log Format
```
[2025-11-06 14:30:45] [INFO] Received message: What is present perfect... | Grade: 7
[2025-11-06 14:30:48] [INFO] Response sent successfully | Grade: 7
```

### Log Levels
- **INFO** - Normal operations
- **WARNING** - Non-critical issues
- **ERROR** - Critical errors

### Monitoring Logs
```bash
# View recent logs
tail -n 50 logs/chat.log

# Watch logs in real-time
tail -f logs/chat.log

# Search for errors
grep "ERROR" logs/chat.log
```

---

## 🧪 Testing Checklist

### Functional Testing

#### Grade Detection
- [ ] "I'm in grade 6" → detects grade 6
- [ ] "Grade 7" → detects grade 7
- [ ] "8" (just number) → detects grade 8
- [ ] Invalid grade (e.g., "grade 12") → handled gracefully

#### Grammar Help
- [ ] Ask about present simple
- [ ] Ask about past perfect
- [ ] Request examples
- [ ] Test grade-appropriate responses

#### Vocabulary Help
- [ ] Ask for word meanings
- [ ] Request synonyms
- [ ] Test context usage

#### Writing Guidance
- [ ] Request paragraph help
- [ ] Verify assistant guides, doesn't write
- [ ] Check incremental feedback
- [ ] Test constructive corrections

#### SmartHub Promotion
- [ ] Count promotion mentions (should be ~5)
- [ ] Verify natural integration
- [ ] Check contact info accuracy

### Technical Testing

#### Browser Compatibility
- [ ] Chrome (desktop & mobile)
- [ ] Firefox
- [ ] Safari (desktop & iOS)
- [ ] Edge

#### Responsive Design
- [ ] Desktop (1920x1080)
- [ ] Tablet (768x1024)
- [ ] Mobile (375x667)
- [ ] Small mobile (320x568)

#### Performance
- [ ] Response time < 5 seconds
- [ ] Page load < 2 seconds
- [ ] No console errors
- [ ] Smooth scrolling

#### Error Handling
- [ ] Network failure
- [ ] Invalid API key
- [ ] Timeout
- [ ] Empty message
- [ ] Very long message (1000+ chars)

---

## 🐛 Troubleshooting

### Chat Not Responding

**Problem:** Clicking send does nothing

**Solutions:**
1. Check browser console for JavaScript errors
2. Verify `chat.php` is accessible
3. Check file permissions on `chat.php` (should be 644)
4. Test API directly: visit `chat.php` in browser (should show error)

### "API request failed" Error

**Problem:** Backend can't reach Groq API

**Solutions:**
1. Verify API key is correct in `config.php`
2. Check API key is active at console.groq.com
3. Verify cURL is enabled: `php -m | grep curl`
4. Check hosting allows outbound HTTPS connections
5. Review logs: `tail logs/chat.log`

### No Grade Detection

**Problem:** Grade not detected from student message

**Solutions:**
1. Use clearer format: "I'm in grade 7"
2. Try just the number: "7"
3. Check logs to see what was received
4. Grade can be manually set in subsequent messages

### Responses Too Long/Short

**Problem:** AI responses not appropriate length

**Solutions:**
1. Adjust `MAX_TOKENS` in `config.php`
2. Modify `TEMPERATURE` for consistency
3. Update system prompt for length guidance

### Knowledge Base Not Loading

**Problem:** Generic responses, not curriculum-specific

**Solutions:**
1. Verify knowledge base files exist:
   ```bash
   ls -la ../knowledge-base/
   ```
2. Check JSON syntax is valid
3. Verify file permissions (should be readable)
4. Check logs for parsing errors

---

## 📈 Monitoring & Maintenance

### Daily Checks
- [ ] Test chat functionality
- [ ] Review error logs
- [ ] Monitor Groq API usage (stay under free tier: 14,400 requests/day)

### Weekly Tasks
- [ ] Review conversation quality (manual testing)
- [ ] Check for any spam/abuse
- [ ] Verify all grades working correctly
- [ ] Update course promotion if needed

### Monthly Tasks
- [ ] Review and archive logs
- [ ] Update curriculum knowledge if needed
- [ ] Analyze most common questions
- [ ] Optimize system prompts based on feedback
- [ ] Backup all files

### Groq API Usage Monitoring
1. Visit [console.groq.com](https://console.groq.com)
2. Check "Usage" dashboard
3. Free tier limit: 14,400 requests/day (Llama 3.1 70B)
4. If approaching limit, consider:
   - Implementing rate limiting
   - Upgrading to paid plan ($0.27 per million tokens)

---

## 🔄 Updating System Prompts

### To modify base behavior:
1. Edit `../prompts/system-prompt-base.txt`
2. Test changes thoroughly
3. Monitor first 10-20 conversations
4. Revert if issues arise

### To modify grade-specific content:
1. Edit `../prompts/grade-specific-enhancements.json`
2. Maintain JSON structure
3. Test each grade separately

### To update curriculum knowledge:
1. Edit `../knowledge-base/grade-X.json`
2. Validate JSON syntax
3. Test with relevant questions

---

## 📞 Support & Contact

**Project Lead:** Jalel Chniti
**Facility:** SmartHub - ELMAOUIA ET.CO
**Location:** Tunis City Center, Tunisia
**Website:** smarthub.com.tn

---

## 📚 Additional Resources

### Project Documentation
- `PROJECT_STATUS.md` - Overall project status
- `EDUCATIONAL_AGENTS_PLAN.md` - Full implementation plan
- `IMPLEMENTATION_REQUIREMENTS.md` - Detailed requirements

### Curriculum Outlines
- `outlines/grade-6-english.md`
- `outlines/grade-7-english.md`
- `outlines/grade-8-english.md`
- `outlines/grade-9-english.md`

### Knowledge Bases
- `knowledge-base/grade-6.json` through `grade-9.json`

---

## ✅ Phase 3 Completion Status

**Phase 3: English Language Agent Development** - ✅ COMPLETE

Completed Tasks:
- ✅ Built HTML/CSS/JS frontend (student-friendly chat interface)
- ✅ Developed PHP backend (API handler, grade detection, context manager)
- ✅ Implemented grade detection mechanism
- ✅ Integrated knowledge bases with backend
- ✅ Connected system prompts with Groq API
- ✅ Tested conversation flow patterns
- ✅ Implemented SmartHub course promotion logic
- ✅ Created landing page
- ✅ Comprehensive documentation

**Next Phase:** Phase 4 - Testing & Refinement

---

## 🎯 Success Criteria

- [x] Chat interface is student-friendly and responsive
- [x] Grade detection works automatically
- [x] Knowledge bases load correctly
- [x] System prompts adapt to student grade
- [x] Groq API integration functional
- [x] SmartHub promotion integrated naturally
- [x] Error handling implemented
- [x] Logging system operational
- [ ] Live testing with actual students (Phase 4)
- [ ] Performance optimization (Phase 4)
- [ ] User feedback collection (Phase 4)

---

**Last Updated:** November 6, 2025
**Version:** 1.0.0
**Status:** Ready for Testing
