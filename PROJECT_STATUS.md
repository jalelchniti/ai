# SmartHub Educational Agents - Project Status

**Last Updated:** November 6, 2025
**Branch:** `claude/plan-language-chat-agents-011CUrchaDrAdNX77mPVpvwo`
**Project Lead:** Jalel Chniti (Teacher)
**Facility:** SmartHub - ELMAOUIA ET.CO, Tunis City Center

---

## 🎯 Project Overview

### Objective
Develop two specialized AI chat agents for SmartHub students:
1. **English Learning Assistant** - Helps with English grammar, reading, and writing (Grades 6-9)
2. **French Learning Assistant** - Helps with French grammar, reading, and writing (Grades 6-9)

### Target Users
- Students (Learners) in grades 6-9
- Tunisian educational context
- Bilingual environment (French/Arabic background)

---

## 📊 Current Status: **PHASE 1 - PLANNING & RESOURCE GATHERING**

### ✅ Completed Tasks

#### 1. Planning Documents Created
- ✅ **EDUCATIONAL_AGENTS_PLAN.md** - Comprehensive 6-phase implementation plan
- ✅ **IMPLEMENTATION_REQUIREMENTS.md** - Specific technical and pedagogical requirements
- ✅ **README.md** - Original SmartHub AI chat system implementation plan
- ✅ **pdf-inventory.md** - Complete inventory of available PDF teacher manuals

#### 2. Resources Collected
- ✅ **8 PDF Teacher Manuals** staged for commit:
  - Grades 6, 7, 8, 9 - English versions (4 PDFs)
  - Grades 6, 7, 8, 9 - French versions (4 PDFs)
  - Total size: ~18 MB
  - All verified as readable and complete

#### 3. Git Repository Setup
- ✅ Working on dedicated feature branch
- ✅ Initial commits made with planning documents
- ✅ PDFs staged and ready for commit
- ✅ Clean git history with descriptive commit messages

---

## 📋 Key Decisions & Requirements

### 1. **Grade Coverage**
- **Scope:** Grades 6, 7, 8, 9 (Primary/Elementary levels)
- **Priority:** All grades equal priority
- **Implementation:** Full implementation for each grade level

### 2. **Language Formality**
- **French Agent:** Use "vous" (formal) consistently
- **English Agent:** Standard polite English with equivalent formality

### 3. **Pedagogical Approach**
- **Style:** Simple, methodological, step-by-step
- **Writing Instruction:** Student must write incrementally, agent guides (not completes)
- **Feedback:** Constructive, encouraging, iterative improvement
- **Discovery Learning:** Information delivered through conversation and guidance

### 4. **SmartHub Course Promotion**
- **Frequency:** 5 mentions per conversation minimum
- **Timing:** After greeting, after first help, mid-conversation, on interest/difficulty, at closing
- **Tone:** Helpful and informative, NOT pushy
- **Contact Info:** smarthub.com.tn, Tunis City Center location

### 5. **Technical Architecture**
```
Frontend (HTML/CSS/JS)
    ↓
Grade Detection Module
    ↓
Context Manager (session storage)
    ↓
AI Agent Core (Groq API + System Prompt)
    ↓
Knowledge Base (Grade-specific JSON files)
    ↓
Response Generator & Formatter
    ↓
User Interface
```

---

## 📁 Repository Structure

```
/home/user/ai/
├── README.md                          ✅ SmartHub AI Chat System plan
├── EDUCATIONAL_AGENTS_PLAN.md         ✅ Educational agents implementation plan
├── IMPLEMENTATION_REQUIREMENTS.md     ✅ Specific requirements
├── PROJECT_STATUS.md                  ✅ This file
├── pdf-inventory.md                   ⚠️ Untracked - PDF catalog
│
├── 6_prim-en.pdf                      ✅ Staged (3.6 MB)
├── 6_prim-fr.pdf                      ✅ Staged (4.8 MB)
├── 7_prim-en.pdf                      ✅ Staged (289 KB)
├── 7_prim-fr.pdf                      ✅ Staged (447 KB)
├── 8_prim-en.pdf                      ✅ Staged (252 KB)
├── 8_prim-fr.pdf                      ✅ Staged (226 KB)
├── 9_prim-en.pdf                      ✅ Staged (234 KB)
└── 9_prim-fr.pdf                      ✅ Staged (8.2 MB)
```

---

## 🚀 Next Steps (Phase 1 Continuation)

### Immediate Tasks - Document Analysis

#### **Priority 1: Commit Current Work**
```bash
git add pdf-inventory.md
git commit -m "Add PDF teacher manuals inventory and resources

- Add 8 teacher manuals (English & French, Grades 6-9)
- Create pdf-inventory.md documenting all resources
- Total coverage: 4 grades, 2 subjects, ~18MB content
- All PDFs verified as readable and complete"

git push -u origin claude/plan-language-chat-agents-011CUrchaDrAdNX77mPVpvwo
```

#### **Priority 2: Begin PDF Analysis** (Phase 1, Section 1.2)
**Task:** Read and analyze Grade 6 English teacher manual
- Extract learning objectives
- Document grammar topics
- List vocabulary themes
- Note reading comprehension strategies
- Identify writing instruction methods
- Create comprehensive outline

**Deliverable:** `outlines/grade-6-english.md`

#### **Priority 3: Continue Sequential PDF Analysis**
Order of analysis:
1. Grade 6 English ← START HERE
2. Grade 7 English
3. Grade 8 English
4. Grade 9 English
5. Grade 6 French
6. Grade 9 French (larger file, more content)
7. Grade 7 French
8. Grade 8 French

---

## 📝 Phase Breakdown

### **Phase 1: Document Analysis & Outline Creation** (3-5 days)
**Status:** IN PROGRESS (Planning complete, analysis starting)

Remaining tasks:
- [ ] Read and outline English manuals (Grades 6-9)
- [ ] Read and outline French manuals (Grades 6-9)
- [ ] Create cross-grade progression mapping
- [ ] Build JSON knowledge bases from outlines

**Current Progress:** 10% (Resources collected)

---

### **Phase 2: Chat Agent Architecture Design** (2-3 days)
**Status:** NOT STARTED

Key tasks:
- [ ] Define agent personalities and voice
- [ ] Design conversation flow patterns
- [ ] Create technical architecture
- [ ] Design file structure
- [ ] Plan data flow

**Dependencies:** Phase 1 completion

---

### **Phase 3: English Language Agent Development** (4-5 days)
**Status:** NOT STARTED

Key tasks:
- [ ] Develop system prompts
- [ ] Create grade-specific prompt enhancements
- [ ] Build HTML/CSS/JS frontend
- [ ] Develop PHP backend
- [ ] Populate knowledge bases
- [ ] Integrate SmartHub course promotion

**Dependencies:** Phase 2 completion

---

### **Phase 4: French Language Agent Development** (4-5 days)
**Status:** NOT STARTED

Key tasks:
- [ ] Adapt system prompts for French
- [ ] Create French-specific enhancements
- [ ] Build French frontend
- [ ] Develop French backend
- [ ] Populate French knowledge bases
- [ ] Ensure "vous" formality throughout

**Dependencies:** Phase 3 completion

---

### **Phase 5: Testing & Refinement** (4-5 days)
**Status:** NOT STARTED

Key tasks:
- [ ] Functional testing (both agents)
- [ ] Grade detection testing
- [ ] Cross-grade consistency testing
- [ ] User acceptance testing
- [ ] Performance testing
- [ ] Prompt optimization

**Dependencies:** Phases 3 & 4 completion

---

### **Phase 6: Deployment & Integration** (2-3 days)
**Status:** NOT STARTED

Key tasks:
- [ ] Final code review
- [ ] Upload to ai.smarthub.com.tn
- [ ] Integration with main website
- [ ] Post-deployment verification
- [ ] Documentation completion

**Dependencies:** Phase 5 completion

---

## 🎓 Educational Content Structure

### Knowledge Base Format (JSON)
```json
{
  "subject": "English",
  "grade": 6,
  "grammar": {
    "topics": [
      {
        "name": "Topic Name",
        "simple_explanation": "Age-appropriate explanation",
        "structure": "Grammar pattern",
        "examples": ["example 1", "example 2"],
        "common_errors": [
          {
            "error": "incorrect form",
            "correction": "correct form",
            "explanation": "why this is wrong"
          }
        ]
      }
    ]
  },
  "vocabulary": {
    "themes": [...]
  },
  "reading": {
    "strategies": [...]
  },
  "writing": {
    "types": [...],
    "templates": [...]
  }
}
```

---

## 🔧 Technical Stack

### Frontend
- HTML5 (semantic markup)
- CSS3 (responsive design)
- Vanilla JavaScript (ES6+)
- Fetch API for AJAX

### Backend
- PHP 7.4+
- JSON knowledge bases (no database)
- Groq API integration (Llama 3.1 70B Versatile)

### Hosting
- OVH Shared Hosting
- Subdomain: ai.smarthub.com.tn
- HTTPS/SSL required

### API
- Groq API free tier: 14,400 requests/day
- Model: Llama 3.1 70B Versatile
- Temperature: 0.7 (balanced)
- Max tokens: 512-1024 (varies by grade)

---

## 📌 Important Reminders

### Writing Guidance Philosophy
**CRITICAL:** For all writing activities:
1. Student must write step by step (no complete answers from agent)
2. Review each step before moving forward
3. Provide constructive feedback on student's work
4. Help student improve their own writing (not rewrite for them)
5. Build confidence through incremental success

### Course Promotion Integration
**Must appear 5 times per conversation:**
1. After grade detection
2. After helping with first topic
3. Mid-conversation transition
4. When student shows interest/difficulty
5. Near conversation end

### Language Requirements
- **French:** "vous" form exclusively
- **English:** Polite, professional tone
- **Both:** Simple, age-appropriate vocabulary
- **Both:** Short, clear sentences for younger grades
- **Both:** Encouraging and supportive

---

## 🔄 Git Workflow

### Current Branch
```bash
claude/plan-language-chat-agents-011CUrchaDrAdNX77mPVpvwo
```

### Commit Strategy
- Commit after each major milestone
- Use descriptive commit messages
- Stage related changes together
- Push regularly to remote

### Branch Rules
- All development on feature branch
- Branch name must start with 'claude/' and end with session ID
- Push with: `git push -u origin <branch-name>`
- Retry up to 4 times on network failure (2s, 4s, 8s, 16s backoff)

---

## 📞 Contact Information

**Project Lead:** Jalel Chniti
**Facility:** SmartHub - ELMAOUIA ET.CO
**Location:** Tunis City Center, Tunisia
**Website:** smarthub.com.tn
**Subdomain:** ai.smarthub.com.tn

---

## 📊 Success Metrics

### Educational Impact
- [ ] Students complete writing tasks with guidance (not completion)
- [ ] Students show improvement within single session
- [ ] Students report feeling encouraged and supported
- [ ] Methodology is clear and easy to follow

### Business Impact
- [ ] Course promotions appear 5+ times naturally
- [ ] Promotions feel helpful, not intrusive
- [ ] Students inquire about courses
- [ ] Increased contact/enrollment from agent users

### Technical Performance
- [ ] Grade detection works reliably
- [ ] Knowledge bases align with curriculum
- [ ] Response times <5 seconds
- [ ] No errors or inappropriate responses
- [ ] Stay within Groq API free tier

---

## 🎯 Timeline Estimate

**Total Duration:** 19-26 days (3-4 weeks)

| Phase | Duration | Status |
|-------|----------|--------|
| Phase 1: Document Analysis | 3-5 days | 🟡 In Progress (10%) |
| Phase 2: Architecture Design | 2-3 days | ⚪ Not Started |
| Phase 3: English Agent Dev | 4-5 days | ⚪ Not Started |
| Phase 4: French Agent Dev | 4-5 days | ⚪ Not Started |
| Phase 5: Testing & Refinement | 4-5 days | ⚪ Not Started |
| Phase 6: Deployment | 2-3 days | ⚪ Not Started |

**Current Progress:** ~5% overall

---

## 📝 Session Notes

### Session 1 (November 6, 2025)
- Created comprehensive project plans
- Collected all PDF resources
- Staged files for commit
- Defined requirements and technical approach
- **Status:** Pausing - documentation updated for next session

### Next Session Goals
1. Commit current work (PDFs + inventory)
2. Push to remote repository
3. Begin Grade 6 English manual analysis
4. Create first outline document
5. Extract key content for knowledge base

---

## 🔍 Quick Reference

### To Resume Work
```bash
cd /home/user/ai
git status
git log --oneline -5
# Review PROJECT_STATUS.md
# Continue with next priority task
```

### Key Files to Reference
- `EDUCATIONAL_AGENTS_PLAN.md` - Full implementation plan
- `IMPLEMENTATION_REQUIREMENTS.md` - Specific requirements
- `pdf-inventory.md` - PDF resource catalog
- `PROJECT_STATUS.md` - This file (current status)

### Documentation Location
- All planning docs in repository root
- Future outlines will go in `outlines/` directory
- Knowledge bases will go in respective agent folders
- Testing logs will go in `testing/` directory

---

**End of Status Document**
**Ready for Next Session** ✅
