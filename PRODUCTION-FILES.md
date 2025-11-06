# 📁 Production Files Guide - What to Deploy

**Purpose:** Avoid deploying unnecessary files to OVH production server
**Method:** FTP Manual Deployment
**Last Updated:** November 6, 2025

---

## ✅ REQUIRED FILES - Must Deploy to OVH

### Core Application Files

```
✅ index.html                          (Landing page)

✅ teacher-chat/
   ├── index.html                      (Teacher chat interface)
   ├── chat.php                        (API handler)
   └── config.php                      (⚠️ With API key added locally!)

✅ parent-chat/
   ├── index.html                      (Parent chat interface)
   ├── chat.php                        (API handler)
   └── config.php                      (⚠️ With API key added locally!)

✅ assets/
   ├── css/
   │   └── styles.css                  (All styling)
   ├── js/
   │   └── chat.js                     (Chat functionality)
   └── images/
       └── logo.png                    (Optional - if you have one)
```

**Total Essential Files:** ~9 files

---

## ❌ SKIP THESE - Do NOT Deploy to Production

### Documentation Files (GitHub only)
```
❌ README.md
❌ PROJECT-STATUS.md
❌ PHASE-1-SUMMARY.md
❌ PHASE-2-COMPLETE.md
❌ PHASE-3-AI-CUSTOMIZATION-GUIDE.md
❌ FTP-DEPLOYMENT-WORKFLOW.md
❌ PRODUCTION-FILES.md (this file)
❌ SMARTHUB-INFO-FORM.md
❌ smarthub-information-brief.md
❌ DEPLOYMENT-GUIDE.md
❌ GITHUB-OVH-DEPLOYMENT-GUIDE.md
❌ OVH-DEPLOYMENT-INSTRUCTIONS.md
❌ GROQ-MODELS-REFERENCE.md
❌ FREE-TIER-COMPARISON.md
❌ groq-account-setup-guide.md
❌ ovh-hosting-verification-checklist.md
❌ branding-assets-checklist.md
```

### Testing/Diagnostic Files (Optional)
```
❌ test-diagnostics.html               (Used for debugging only)
❌ test-php-diagnostics.php            (Used for debugging only)
```
**Note:** You CAN deploy these temporarily if troubleshooting, but remove after fixing issues.

### Git Files (Never deploy)
```
❌ .git/                               (Git repository data)
❌ .gitignore                          (Git configuration)
```

### Placeholder Files
```
❌ assets/images/PLACE-YOUR-LOGO-HERE.txt
```

---

## 📋 FTP Deployment Checklist

### Before Each Upload:

**Step 1: Identify What Changed**
- [ ] Which files did Claude modify?
- [ ] Are they in the "REQUIRED FILES" list above?
- [ ] If yes → proceed to Step 2
- [ ] If no (documentation only) → skip deployment

**Step 2: API Key Preparation** (If config.php changed)
- [ ] Download modified `teacher-chat/config.php` from GitHub
- [ ] Open file locally
- [ ] **Line 21:** Replace `'YOUR_GROQ_API_KEY_HERE'` with your saved API key
- [ ] Save file locally
- [ ] Repeat for `parent-chat/config.php` if modified

**Step 3: Upload via FTP**
- [ ] Connect to OVH via FTP
- [ ] Navigate to correct directory (ai.smarthub.com.tn)
- [ ] Upload ONLY the changed files
- [ ] Verify upload successful

**Step 4: Test**
- [ ] Visit https://ai.smarthub.com.tn
- [ ] Test affected functionality
- [ ] Check browser console for errors (F12)
- [ ] Verify AI responses are correct

---

## 🎯 Quick Reference: File Purpose

| File | Purpose | Deploy? | Notes |
|------|---------|---------|-------|
| `index.html` (root) | Landing page | ✅ Yes | Main entry point |
| `teacher-chat/index.html` | Teacher UI | ✅ Yes | Frontend interface |
| `teacher-chat/chat.php` | Teacher API | ✅ Yes | Backend logic |
| `teacher-chat/config.php` | Teacher config | ✅ Yes | **⚠️ Add API key first!** |
| `parent-chat/index.html` | Parent UI | ✅ Yes | Frontend interface |
| `parent-chat/chat.php` | Parent API | ✅ Yes | Backend logic |
| `parent-chat/config.php` | Parent config | ✅ Yes | **⚠️ Add API key first!** |
| `assets/css/styles.css` | Styling | ✅ Yes | All CSS |
| `assets/js/chat.js` | Chat logic | ✅ Yes | JavaScript functionality |
| `*.md` files | Documentation | ❌ No | GitHub only |
| `test-*.html/php` | Diagnostics | ⚠️ Optional | Only for debugging |

---

## 🔍 How to Identify Files to Deploy

### When Claude Says "I've Updated Files":

**Check the commit message:**
```bash
# Example commit message:
"Update classroom rental pricing: Lower full-day rates"
```

**Look for file paths:**
```
- teacher-chat/config.php     → ✅ DEPLOY (after adding API key)
- README.md                    → ❌ SKIP
- PROJECT-STATUS.md            → ❌ SKIP
```

**Rule of Thumb:**
- If file is in `teacher-chat/`, `parent-chat/`, `assets/`, or root `index.html` → **Deploy it**
- If file ends with `.md` → **Skip it**
- If file starts with `test-` → **Optional** (only for debugging)

---

## 💡 Pro Tips

### Minimize Unnecessary Deployments:

1. **Only upload changed files**
   - Don't re-upload entire project each time
   - FTP clients can show modified files

2. **Skip documentation updates**
   - .md files are for GitHub/development only
   - Production server doesn't need them

3. **Keep diagnostic files local**
   - Test locally when possible
   - Only upload to OVH if absolutely needed for server-side testing

4. **Batch related changes**
   - If multiple files changed for one feature, upload them together
   - Reduces deployment time and potential inconsistencies

### Streamlined Workflow:

```
1. Claude modifies files → commit to GitHub
2. You check: "Are these production files?"
3. If YES → Download → Add API key (if config.php) → Upload via FTP
4. If NO (docs only) → Nothing to deploy!
```

---

## ⚠️ Common Mistakes to Avoid

### ❌ Don't Do This:
- Uploading ALL files every time (wastes time)
- Deploying .md documentation files (unnecessary)
- Forgetting to add API key to config.php (causes HTTP 500 error)
- Uploading test files to production (clutters server)
- Deploying .git folder (security risk, wastes space)

### ✅ Do This Instead:
- Upload only changed production files
- Keep docs in GitHub only
- Always add API key before uploading config.php
- Remove test files from production after debugging
- Use FTP for files only, GitHub for version control

---

## 📊 Deployment Scenarios

### Scenario 1: System Prompt Updated
```
Files Changed:
- teacher-chat/config.php ✅
- parent-chat/config.php ✅
- PROJECT-STATUS.md ❌

Action:
1. Download both config.php files
2. Add your API key (line 21)
3. Upload via FTP
4. Test both chats
```

### Scenario 2: UI/CSS Changes
```
Files Changed:
- assets/css/styles.css ✅
- teacher-chat/index.html ✅
- README.md ❌

Action:
1. Upload styles.css and index.html via FTP
2. Clear browser cache
3. Test UI changes
```

### Scenario 3: Documentation Only
```
Files Changed:
- README.md ❌
- PROJECT-STATUS.md ❌
- PHASE-3-AI-CUSTOMIZATION-GUIDE.md ❌

Action:
✅ Nothing to deploy! Changes are in GitHub only.
```

### Scenario 4: JavaScript Changes
```
Files Changed:
- assets/js/chat.js ✅
- PRODUCTION-FILES.md ❌

Action:
1. Upload chat.js via FTP
2. Clear browser cache (Ctrl+Shift+R)
3. Test chat functionality
```

---

## 🎯 Summary

**Essential Files to Deploy:** 9 core files (HTML, PHP, CSS, JS)
**Files to Skip:** All .md documentation files, test files, git files
**Critical Step:** Always add API key to config.php before uploading!

**Keep It Simple:**
- Deploy only what's needed
- Skip documentation
- Test after each deployment

---

**Questions?**
- Which files to deploy? → Check the ✅ list at top
- Forgot API key? → See FTP-DEPLOYMENT-WORKFLOW.md
- Not sure? → Ask "Is this a production file?"

---

**Related Documentation:**
- [FTP Deployment Workflow](FTP-DEPLOYMENT-WORKFLOW.md) - Step-by-step process
- [Project Status](PROJECT-STATUS.md) - Current state of project
- [README](README.md) - Project overview
