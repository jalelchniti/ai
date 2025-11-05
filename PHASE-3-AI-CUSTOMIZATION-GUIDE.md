# Phase 3: AI Knowledge Customization Guide

**Purpose:** Customize the AI chat system with SmartHub-specific knowledge and enhanced capabilities
**Prerequisites:** Phase 2 complete (system deployed and functional)
**Estimated Time:** 2-4 hours

---

## 🎯 Customization Objectives

This phase focuses on making the AI chat system truly SmartHub-specific by:
1. Adding accurate business information to the AI knowledge base
2. Enhancing system prompts with detailed, current data
3. Improving response accuracy and relevance
4. Adding conversation context and history
5. Implementing analytics and monitoring

---

## 📋 Step 1: Information Gathering

### Required Information to Collect

#### 1.1 Facility Information
Create a document with:
- [ ] Full address: Street, postal code, Tunis location
- [ ] Contact information: Phone, email, WhatsApp
- [ ] Operating hours: Daily schedule, holidays
- [ ] Facility size: Number of classrooms, capacity
- [ ] Available amenities: WiFi, projectors, whiteboards, etc.
- [ ] Parking information
- [ ] Public transport access

#### 1.2 Classroom Details
For each classroom type:
- [ ] Classroom names/numbers
- [ ] Capacity (students per room)
- [ ] Equipment included
- [ ] Hourly rates
- [ ] Half-day rates
- [ ] Full-day rates
- [ ] Weekly/monthly rates
- [ ] Special pricing (weekends, holidays)

#### 1.3 Course Offerings
For each course/program:
- [ ] Course names
- [ ] Target age groups
- [ ] Duration (weeks/months)
- [ ] Schedule options
- [ ] Pricing
- [ ] Prerequisites
- [ ] Instructors (if applicable)
- [ ] Learning outcomes

#### 1.4 Booking Process
Document the process:
- [ ] How to request availability
- [ ] Booking confirmation process
- [ ] Payment methods accepted
- [ ] Deposit requirements
- [ ] Cancellation policy
- [ ] Rescheduling policy

#### 1.5 Frequently Asked Questions
Compile common inquiries:
- [ ] Most asked questions from teachers
- [ ] Most asked questions from parents
- [ ] Common concerns
- [ ] Typical objections and responses

---

## 📝 Step 2: System Prompt Enhancement

### 2.1 Teacher Chat System Prompt

**Current Location:** `teacher-chat/config.php` line 31-80

**Enhancement Strategy:**
1. Add specific classroom details with pricing
2. Include actual contact information
3. Add booking process details
4. Include availability checking instructions

**Template to Fill:**

```php
define('SYSTEM_PROMPT', <<<EOT
You are an AI assistant for SmartHub, a premium classroom rental facility in [EXACT LOCATION], Tunis, Tunisia.

FACILITY INFORMATION:
- Address: [FULL ADDRESS]
- Phone: [PHONE NUMBER]
- Email: [EMAIL]
- WhatsApp: [WHATSAPP NUMBER]
- Operating Hours: [EXACT HOURS]

CLASSROOM OFFERINGS:
1. [CLASSROOM NAME 1]
   - Capacity: [NUMBER] students
   - Equipment: [LIST EQUIPMENT]
   - Hourly Rate: [PRICE] TND
   - Half-Day Rate: [PRICE] TND
   - Full-Day Rate: [PRICE] TND

2. [CLASSROOM NAME 2]
   - [REPEAT STRUCTURE]

BOOKING PROCESS:
1. [STEP 1]
2. [STEP 2]
3. [STEP 3]

Your role is to:
- Help teachers find the perfect classroom for their needs
- Provide accurate pricing and availability information
- Guide through the booking process
- Answer questions about facilities and equipment
- Be professional, helpful, and bilingual (French/English)

IMPORTANT GUIDELINES:
- Always provide specific contact information for bookings
- Mention any current promotions or special offers
- If asked about availability, direct to [CONTACT METHOD]
- Be warm and encouraging about their teaching endeavors
EOT);
```

### 2.2 Parent/Learner Chat System Prompt

**Current Location:** `parent-chat/config.php` line 31-80

**Enhancement Strategy:**
1. Add specific course details with schedules
2. Include registration process
3. Add success stories or testimonials
4. Include age-appropriate recommendations

**Template to Fill:**

```php
define('SYSTEM_PROMPT', <<<EOT
You are an AI assistant for SmartHub, an innovative learning center in [EXACT LOCATION], Tunis, Tunisia.

FACILITY INFORMATION:
- Address: [FULL ADDRESS]
- Phone: [PHONE NUMBER]
- Email: [EMAIL]
- Operating Hours: [EXACT HOURS]

AVAILABLE PROGRAMS:
1. [COURSE NAME 1]
   - Ages: [AGE RANGE]
   - Duration: [DURATION]
   - Schedule: [DAYS/TIMES]
   - Price: [PRICE] TND
   - Learning Outcomes: [KEY BENEFITS]

2. [COURSE NAME 2]
   - [REPEAT STRUCTURE]

REGISTRATION PROCESS:
1. [STEP 1]
2. [STEP 2]
3. [STEP 3]

Your role is to:
- Help parents find suitable learning programs for their children
- Provide accurate course information and pricing
- Guide through the registration process
- Answer questions about learning outcomes and methods
- Be supportive, informative, and bilingual (French/English)

IMPORTANT GUIDELINES:
- Match courses to child's age and interests
- Highlight learning benefits and outcomes
- Provide clear next steps for enrollment
- Be encouraging about their child's learning journey
EOT);
```

---

## 🔧 Step 3: Implementation Process

### 3.1 Update Configuration Files

**On OVH Server (via File Manager or FTP):**

1. **Edit teacher-chat/config.php:**
   ```bash
   Location: /ai.smarthub.com.tn/teacher-chat/config.php
   Section: Lines 31-80 (SYSTEM_PROMPT)
   ```
   - Replace placeholder text with actual SmartHub information
   - Test thoroughly with various questions

2. **Edit parent-chat/config.php:**
   ```bash
   Location: /ai.smarthub.com.tn/parent-chat/config.php
   Section: Lines 31-80 (SYSTEM_PROMPT)
   ```
   - Replace placeholder text with actual course information
   - Test with age-specific inquiries

### 3.2 Testing Checklist

After updating system prompts, test with these scenarios:

**Teacher Chat Tests:**
- [ ] "What classrooms do you have available?"
- [ ] "How much does it cost to rent for a full day?"
- [ ] "What equipment is included?"
- [ ] "How do I make a booking?"
- [ ] "What are your operating hours?"
- [ ] "Where exactly are you located?"
- [ ] Test in French: "Quels sont vos tarifs?"

**Parent Chat Tests:**
- [ ] "What courses do you offer for 10-year-olds?"
- [ ] "How much does the [COURSE NAME] cost?"
- [ ] "What will my child learn in this program?"
- [ ] "How do I register my child?"
- [ ] "What is the schedule?"
- [ ] Test in French: "Quels cours proposez-vous?"

---

## 📊 Step 4: Advanced Enhancements (Optional)

### 4.1 Conversation History

**Purpose:** Allow multi-turn conversations with context retention

**Implementation:**
- Add session management to chat.php
- Store conversation history in PHP sessions
- Include message history in API requests
- Clear old sessions periodically

**Benefit:** More natural, contextual conversations

### 4.2 Response Templates

**Purpose:** Consistent, high-quality responses for common questions

**Implementation:**
- Create a `templates.php` file with common responses
- Check for keyword matches before calling API
- Use templates for instant responses
- Reduces API calls and improves speed

**Benefit:** Faster responses, reduced API usage

### 4.3 Analytics Dashboard

**Purpose:** Track usage and popular inquiries

**Implementation:**
- Log each conversation (anonymized)
- Track common questions
- Monitor response satisfaction
- Create simple admin dashboard

**Benefit:** Understand user needs, improve system

### 4.4 File Upload for Knowledge Base

**Purpose:** Upload PDF brochures, course catalogs

**Implementation:**
- Convert PDFs to text
- Add to system prompt or RAG system
- Update when materials change

**Benefit:** AI has access to latest materials

---

## 📁 Knowledge Base Structure (Recommended)

Create a structured knowledge base file:

### knowledge-base.md

```markdown
# SmartHub Knowledge Base

## Facility Information
[All facility details]

## Classroom Inventory
[All classroom details with pricing]

## Course Catalog
[All course details]

## Policies
[All booking, payment, cancellation policies]

## FAQ
[Common questions and answers]

## Contact Information
[All contact methods]
```

This file can be:
1. Manually included in system prompts
2. Automatically loaded and injected
3. Used for RAG (Retrieval Augmented Generation) in future

---

## 🎯 Success Metrics

### Phase 3 Complete When:
- [ ] All SmartHub-specific information added to system prompts
- [ ] Both chats tested with real-world questions
- [ ] Responses are accurate and helpful
- [ ] Contact information is correct and current
- [ ] Pricing is accurate and up-to-date
- [ ] Bilingual functionality tested
- [ ] Documentation updated

### Quality Indicators:
- AI provides specific classroom names and prices
- AI gives accurate contact information
- AI describes actual courses and programs
- AI guides users through real booking/registration process
- Responses feel personalized to SmartHub

---

## 📚 Resources & Best Practices

### System Prompt Best Practices:
1. **Be Specific:** Use exact numbers, names, and details
2. **Stay Current:** Update prices and offerings regularly
3. **Include Context:** Add location, cultural context
4. **Set Boundaries:** Tell AI what it should NOT do
5. **Test Thoroughly:** Try edge cases and unusual questions

### Information Management:
1. **Version Control:** Keep system prompts in GitHub (without API keys)
2. **Regular Updates:** Schedule quarterly reviews of information
3. **Change Log:** Document when and why prompts are updated
4. **Backup:** Keep previous versions for rollback if needed

### Maintenance Schedule:
- **Weekly:** Review error logs, check for issues
- **Monthly:** Review usage stats, common questions
- **Quarterly:** Update pricing, course offerings, system prompts
- **Annually:** Comprehensive system audit and enhancement

---

## 🚀 Quick Start Checklist

Ready to start Phase 3? Follow this checklist:

1. **Preparation (30 min)**
   - [ ] Gather all SmartHub information
   - [ ] Compile pricing sheets
   - [ ] Review current website/brochures
   - [ ] List all courses and classrooms

2. **System Prompt Update (1 hour)**
   - [ ] Update teacher-chat system prompt
   - [ ] Update parent-chat system prompt
   - [ ] Save changes on OVH server

3. **Testing (1 hour)**
   - [ ] Test teacher chat with 10+ questions
   - [ ] Test parent chat with 10+ questions
   - [ ] Test bilingual functionality
   - [ ] Verify all contact info correct

4. **Documentation (30 min)**
   - [ ] Document changes made
   - [ ] Update knowledge base file
   - [ ] Note any issues or limitations

5. **Launch (Immediate)**
   - [ ] Announce enhanced AI to customers
   - [ ] Monitor first week of usage
   - [ ] Collect feedback for improvements

---

## 💡 Pro Tips

1. **Start Simple:** Don't try to include everything at once
2. **Iterate:** Update and improve based on actual usage
3. **Test Often:** AI responses can be unpredictable
4. **Stay Accurate:** Better to say "I don't know" than give wrong information
5. **Monitor:** Check logs regularly in the first weeks

---

## 📞 Next Steps

Once Phase 3 is complete, you'll have a fully customized AI chat system that:
- Provides accurate SmartHub-specific information
- Handles common inquiries automatically
- Guides users through booking/registration
- Represents your brand professionally
- Works in both French and English

**Future Enhancements to Consider:**
- Voice chat capability
- Image generation for visual learners
- WhatsApp integration
- Mobile app
- Advanced analytics
- Multi-language support (Arabic)

---

**Ready to customize? Start with Step 1: Information Gathering!**
