# SmartHub AI Agents - Build & Deploy Guide

## 📋 Overview

This guide explains how to download, build, and deploy the SmartHub AI chat system to your OVH subdomain at **ai.smarthub.com.tn**.

---

## 🎯 Quick Start (The Complete Process)

### Step 1: Download from GitHub

**Option A: Download as ZIP**
1. Go to: https://github.com/jalelchniti/ai
2. Click the green **"Code"** button
3. Select **"Download ZIP"**
4. Save to your computer (e.g., Downloads folder)

**Option B: Clone with Git**
```bash
git clone https://github.com/jalelchniti/ai.git
cd ai
```

### Step 2: Extract (if downloaded as ZIP)

1. Locate the downloaded ZIP file (e.g., `ai-main.zip`)
2. Right-click and select **"Extract All..."** or **"Unzip"**
3. Extract to a folder on your local drive (e.g., `C:\Projects\smarthub-ai\`)

### Step 3: Install Dependencies

Open a terminal/command prompt in the extracted folder:

**On Windows:**
```cmd
cd C:\Projects\smarthub-ai
npm install
```

**On Mac/Linux:**
```bash
cd /path/to/smarthub-ai
npm install
```

**What this does:** Prepares the build environment (even though there are no external dependencies, it confirms the setup is ready).

### Step 4: Build the Project

Run the build command:

```bash
npm run build
```

**What happens:**
- Creates a `dist/` folder
- Copies all necessary files (HTML, CSS, JS, PHP)
- Excludes documentation and source PDFs
- Creates a landing page (index.html)
- Generates .htaccess for Apache configuration
- Creates DEPLOYMENT_README.txt with instructions

**Output:**
```
dist/
├── index.html              # Landing page
├── .htaccess              # Server configuration
├── DEPLOYMENT_README.txt   # Deployment instructions
├── english-agent/         # English Learning Assistant
│   └── app/
│       ├── index.html
│       ├── landing.html
│       ├── chat.php
│       ├── config.php
│       ├── assets/
│       └── ...
├── parent-chat/           # Parent consultation chat
│   ├── index.html
│   ├── chat.php
│   ├── config.php
│   └── ...
├── teacher-chat/          # Teacher support chat
│   ├── index.html
│   ├── chat.php
│   ├── config.php
│   └── ...
└── assets/                # Shared resources
    ├── css/
    ├── js/
    └── images/
```

### Step 5: Configure API Keys

**IMPORTANT:** Before deploying, you must add your Groq API key.

Edit these files in the `dist/` folder:

1. **dist/english-agent/app/config.php**
2. **dist/parent-chat/config.php**
3. **dist/teacher-chat/config.php**

Find this line in each file:
```php
define('GROQ_API_KEY', 'YOUR_GROQ_API_KEY_HERE');
```

Replace `YOUR_GROQ_API_KEY_HERE` with your actual Groq API key.

**Where to get your Groq API key:**
1. Go to https://console.groq.com
2. Sign in or create an account
3. Navigate to "API Keys"
4. Copy your key
5. Paste it into the config.php files

### Step 6: Deploy to OVH Hosting

Now you have a complete `dist/` folder ready for deployment!

#### Method 1: FTP Upload (Recommended)

**Using FileZilla (or any FTP client):**

1. **Connect to your OVH FTP server:**
   - Host: `ftp.yourdomain.com` (check OVH dashboard)
   - Username: Your FTP username
   - Password: Your FTP password
   - Port: 21

2. **Navigate to your subdomain folder:**
   - In the remote panel, navigate to the folder for `ai.smarthub.com.tn`
   - Usually something like: `/www/ai/` or `/domains/ai/` or `/public_html/ai/`
   - Check your OVH multisite configuration to confirm the exact path

3. **Upload the dist/ contents:**
   - In the local panel, navigate to your `dist/` folder
   - **Select all files and folders INSIDE dist/**
   - Drag them to the remote panel (your ai subdomain folder)
   - Wait for upload to complete

4. **Set file permissions:**
   - Right-click on config.php files → Permissions → 600
   - Other PHP files → Permissions → 644
   - Folders → Permissions → 755

#### Method 2: cPanel File Manager

1. **Login to OVH cPanel**
2. **Open File Manager**
3. **Navigate to your subdomain directory** (e.g., `/public_html/ai/`)
4. **Click "Upload"**
5. **Drag and drop all files from your dist/ folder**
6. **Set permissions** as described above

#### Method 3: ZIP Upload (Fastest)

1. **Zip the contents of dist/ folder** (not the folder itself)
2. **Upload the ZIP via cPanel File Manager**
3. **Extract the ZIP in the ai subdomain folder**
4. **Delete the ZIP file**
5. **Set permissions** as described above

---

## ✅ Post-Deployment Testing

After uploading, test everything:

### 1. Test Landing Page
Visit: **https://ai.smarthub.com.tn**

Expected result:
- Beautiful landing page with 3 options
- Links to English Agent, Teacher Chat, Parent Chat

### 2. Test English Learning Agent
Visit: **https://ai.smarthub.com.tn/english-agent/app/**

Test conversation:
```
You: Hello! I'm in grade 7
Agent: [Should respond with grade-appropriate English help]
```

### 3. Test Teacher Chat
Visit: **https://ai.smarthub.com.tn/teacher-chat/**

Test conversation:
```
You: What facilities do you offer?
Agent: [Should respond about SmartHub classroom rentals]
```

### 4. Test Parent Chat
Visit: **https://ai.smarthub.com.tn/parent-chat/**

Test conversation:
```
You: I need help choosing courses for my child
Agent: [Should respond with educational guidance]
```

### 5. Check for Errors

**Open browser console (F12) and check:**
- No red errors
- All CSS/JS files loaded
- API calls returning 200 status

**Common issues:**
- **500 error:** Check PHP version (needs 7.4+) and config.php syntax
- **404 error:** Verify file paths and .htaccess uploaded correctly
- **Chat not responding:** Verify Groq API key is correct in config.php
- **Styles broken:** Clear browser cache, check assets/ folder uploaded

---

## 🔄 Making Updates

When you make changes to the code:

1. **Pull latest changes from GitHub:**
   ```bash
   git pull origin main
   ```

2. **Rebuild:**
   ```bash
   npm run rebuild
   ```

3. **Re-upload dist/ contents to OVH**

---

## 🛠️ Available npm Commands

```bash
npm install       # Prepare build environment
npm run build     # Build production files to dist/
npm run clean     # Remove dist/ folder
npm run rebuild   # Clean + build (fresh build)
npm run deploy    # Build and show deployment message
```

---

## 📁 Understanding the Structure

### Development Files (NOT deployed)
These stay on your local machine:
- README.md, EDUCATIONAL_AGENTS_PLAN.md, etc. (documentation)
- *.pdf files (teacher manuals used for development)
- outlines/ folder (curriculum outlines)
- build.js (build script)
- package.json (build configuration)

### Production Files (deployed in dist/)
These go to your server:
- All HTML, CSS, JS, and PHP files
- config.php files (with your API keys)
- .htaccess (server configuration)
- assets/ folder (images, stylesheets, scripts)

---

## 🔒 Security Checklist

Before going live:

- [ ] API keys added to config.php files
- [ ] config.php files have 600 permissions (not publicly readable)
- [ ] HTTPS is working (https://ai.smarthub.com.tn shows padlock)
- [ ] .htaccess file uploaded and protecting config files
- [ ] Tested all chat agents work correctly
- [ ] Browser console shows no errors
- [ ] Groq API usage monitored (stay within free tier)

---

## 📞 Troubleshooting

### Build fails with "npm not found"
**Solution:** Install Node.js from https://nodejs.org (LTS version recommended)

### Build succeeds but dist/ is empty
**Solution:** Check build.js for errors, ensure source files exist

### Files uploaded but site shows 404
**Solution:**
- Verify subdomain points to correct folder in OVH multisite settings
- Check that index.html exists in root of ai subdomain folder
- Clear browser cache and try again

### Chat shows "API Error"
**Solution:**
- Verify Groq API key is correct in config.php
- Check Groq console for API quota/limits
- Review PHP error logs in cPanel

### Styles/layout broken after deployment
**Solution:**
- Verify assets/ folder uploaded completely
- Check browser console for 404s on CSS/JS files
- Clear browser cache (Ctrl+F5)

### Can't access config.php (403 Forbidden)
**Solution:** This is correct! .htaccess protects config files from public access

---

## 🎉 Success!

Once everything is working:

1. **Share the links:**
   - English Agent: https://ai.smarthub.com.tn/english-agent/app/
   - Teacher Chat: https://ai.smarthub.com.tn/teacher-chat/
   - Parent Chat: https://ai.smarthub.com.tn/parent-chat/

2. **Monitor usage:**
   - Check Groq API dashboard weekly
   - Stay within free tier limits (14,400 requests/day)

3. **Collect feedback:**
   - Ask users about their experience
   - Update system prompts based on feedback

4. **Regular maintenance:**
   - Update SmartHub information in prompts as needed
   - Monitor for errors in PHP logs
   - Keep backups of config files

---

## 📖 Additional Resources

- **Groq API Docs:** https://console.groq.com/docs
- **OVH Hosting Guide:** Check OVH dashboard for hosting documentation
- **FileZilla Tutorial:** https://filezilla-project.org/
- **Project Repository:** https://github.com/jalelchniti/ai

---

## 🆘 Need Help?

If you encounter issues:

1. Check DEPLOYMENT_README.txt in the dist/ folder
2. Review PHP error logs in cPanel
3. Check browser console for JavaScript errors
4. Verify all files uploaded correctly
5. Double-check API key is valid

---

**Build Date:** Generated via `npm run build`
**Deployment Target:** ai.smarthub.com.tn
**Hosting:** OVH Shared Hosting
**Tech Stack:** HTML, CSS, JavaScript, PHP, Groq API
