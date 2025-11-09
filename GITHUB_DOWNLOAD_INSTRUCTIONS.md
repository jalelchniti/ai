# 📥 How to Download and Use This Project from GitHub

## ✅ IMPORTANT: Use the Correct Branch!

Your complete SmartHub AI application is on GitHub in this branch:

**Branch Name:** `claude/access-recent-branch-011CUy7q7qxsQHQ693dL1BZS`

🔗 **Direct Link:** https://github.com/jalelchniti/ai/tree/claude/access-recent-branch-011CUy7q7qxsQHQ693dL1BZS

---

## 🎯 Quick Start Guide

### Method 1: Download as ZIP (Easiest)

1. **Go to the direct link above** or navigate to your repository
2. **Switch to the correct branch:**
   - Click the branch dropdown (usually says "main")
   - Select: `claude/access-recent-branch-011CUy7q7qxsQHQ693dL1BZS`
3. **Download:**
   - Click the green **"Code"** button
   - Click **"Download ZIP"**
4. **Extract the ZIP** to your local drive (e.g., `C:\Projects\smarthub-ai\`)
5. **Build and deploy:**
   ```bash
   cd C:\Projects\smarthub-ai
   npm install
   npm run build
   ```
6. **Upload `dist/` folder contents** to `ai.smarthub.com.tn` on your OVH hosting

### Method 2: Clone with Git

```bash
# Clone the repository
git clone https://github.com/jalelchniti/ai.git
cd ai

# Switch to the correct branch
git checkout claude/access-recent-branch-011CUy7q7qxsQHQ693dL1BZS

# Build
npm install
npm run build

# The dist/ folder is now ready for deployment
```

---

## 📦 What You'll Get

When you download the correct branch, you'll have:

```
smarthub-ai/
├── BUILD_AND_DEPLOY.md          ⭐ READ THIS FIRST!
├── package.json                  Build configuration
├── build.js                      Build script
├── .gitignore                    Git configuration
│
├── english-agent/               ✅ English Learning Assistant
│   ├── app/
│   │   ├── index.html           Student chat interface
│   │   ├── chat.php             Backend API
│   │   ├── config.php           API key configuration
│   │   └── assets/              Styles and scripts
│   ├── knowledge-base/          Grade-specific content (6-9)
│   └── prompts/                 AI system prompts
│
├── parent-chat/                 ✅ Parent Consultation Agent
│   ├── index.html
│   ├── chat.php
│   └── config.php
│
├── teacher-chat/                ✅ Teacher Support Agent
│   ├── index.html
│   ├── chat.php
│   └── config.php
│
├── assets/                      ✅ Shared Resources
│   ├── css/
│   └── js/
│
├── Documentation/               📚 Project Documentation
│   ├── PROJECT_STATUS.md
│   ├── EDUCATIONAL_AGENTS_PLAN.md
│   ├── IMPLEMENTATION_REQUIREMENTS.md
│   └── more...
│
└── outlines/                    📖 Curriculum Outlines (grades 6-9)
```

---

## 🚀 Build Process

After downloading, run these commands:

```bash
# 1. Install (quick, no dependencies)
npm install

# 2. Build production files
npm run build
```

### What `npm run build` Creates:

```
dist/
├── index.html                   Landing page (choose your agent)
├── .htaccess                   Apache config for OVH
├── DEPLOYMENT_README.txt        Deployment instructions
├── english-agent/              Ready for deployment
├── parent-chat/                Ready for deployment
├── teacher-chat/               Ready for deployment
└── assets/                     Ready for deployment
```

**Build output:** ~0.31 MB (23 files)
**Excluded from build:** Documentation, PDFs, source files

---

## 🔑 Configuration Before Deployment

**IMPORTANT:** Before uploading to OVH, add your Groq API key to:

1. `dist/english-agent/app/config.php`
2. `dist/parent-chat/config.php`
3. `dist/teacher-chat/config.php`

Change this line in each file:
```php
define('GROQ_API_KEY', 'YOUR_GROQ_API_KEY_HERE');
```

---

## 📤 Deploy to OVH

### Option 1: FTP Upload
1. Connect to your OVH FTP server
2. Navigate to your `ai` subdomain folder
3. Upload all contents of `dist/` folder
4. Set file permissions (config.php: 600, others: 644)

### Option 2: cPanel
1. Login to OVH cPanel
2. Go to File Manager
3. Navigate to `ai` subdomain folder
4. Upload `dist/` contents
5. Set permissions

---

## ✅ Test Your Deployment

After uploading, visit:

- **Landing Page:** https://ai.smarthub.com.tn
- **English Agent:** https://ai.smarthub.com.tn/english-agent/app/
- **Teacher Chat:** https://ai.smarthub.com.tn/teacher-chat/
- **Parent Chat:** https://ai.smarthub.com.tn/parent-chat/

---

## 🔄 Available Branches

Your repository has multiple branches:

| Branch | Content | Status |
|--------|---------|--------|
| `claude/access-recent-branch-011CUy7q7qxsQHQ693dL1BZS` | **✅ COMPLETE APPLICATION + BUILD SYSTEM** | **← USE THIS ONE!** |
| `claude/plan-language-chat-agents-011CUrchaDrAdNX77mPVpvwo` | Application code only (no build system) | Previous work |
| `main` | Initial/empty | Not used |

**Always download from:** `claude/access-recent-branch-011CUy7q7qxsQHQ693dL1BZS`

---

## 📚 Documentation Files

- **BUILD_AND_DEPLOY.md** - Complete build and deployment guide
- **PROJECT_STATUS.md** - Current project status (Phase 3 complete)
- **EDUCATIONAL_AGENTS_PLAN.md** - Full implementation plan
- **IMPLEMENTATION_REQUIREMENTS.md** - Technical requirements
- **this_is_the_most_recent_branch.md** - Branch identification

---

## 🆘 Troubleshooting

### "I don't see the files on GitHub"
- Make sure you selected the correct branch: `claude/access-recent-branch-011CUy7q7qxsQHQ693dL1BZS`
- Don't use the `main` branch

### "Build fails"
- Ensure Node.js is installed (https://nodejs.org)
- Run `npm install` first
- Check that you're in the project directory

### "No dist/ folder after build"
- Check build.js exists
- Look for error messages during build
- Ensure you have write permissions

### "Can't find application code"
- Verify you downloaded the correct branch
- Check that english-agent/, parent-chat/, teacher-chat/ folders exist

---

## 📞 Project Information

**Project:** SmartHub AI Educational Agents
**Location:** Tunis City Center, Tunisia
**Deployment:** ai.smarthub.com.tn
**Hosting:** OVH Shared Hosting

**Components:**
- English Learning Assistant (Grades 6-9)
- Teacher Support Chat
- Parent/Learner Consultation Chat

---

## ✨ Summary

1. ✅ **Download branch:** `claude/access-recent-branch-011CUy7q7qxsQHQ693dL1BZS`
2. ✅ **Extract** to your local drive
3. ✅ **Build:** `npm install && npm run build`
4. ✅ **Configure:** Add Groq API keys to config.php files in dist/
5. ✅ **Deploy:** Upload dist/ contents to ai.smarthub.com.tn
6. ✅ **Test:** Visit all three chat agents

---

**Last Updated:** November 9, 2025
**Complete Application:** ✅ All code + build system ready
