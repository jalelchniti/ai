# GitHub to OVH Deployment Guide

**Purpose:** Securely deploy SmartHub AI Chat from GitHub to OVH
**Critical:** Keep API key secure during deployment

---

## 🚨 SECURITY FIRST

**NEVER commit your API key to GitHub!**

Even if your repo is private:
- ❌ GitHub history stores it forever
- ❌ Collaborators can see it
- ❌ GitHub bots scan for keys
- ❌ If repo becomes public, key is exposed

---

## 🎯 Recommended Deployment Strategy

### **Option 1: GitHub Deploy + Manual API Key** (Safest & Easiest)

This is the **recommended approach** for OVH shared hosting:

#### **Step 1: Set Up GitHub Deployment in OVH**

1. **Log in to OVH Control Panel**

2. **Find GitHub Integration:**
   - Look for: "Git Integration", "Deploy from Git", or "GitHub"
   - Different OVH interfaces may call it differently

3. **Connect GitHub Repository:**
   - Repository: `jalelchniti/ai`
   - Branch: `claude/review-readme-action-plan-011CUpNXJMCkdAdfqDjvf2WP`
   - Deploy path: `/public_html/ai/` (or your subdomain path)

4. **Deploy the code:**
   - Click "Deploy" or "Sync"
   - Wait for deployment to complete
   - All files will be uploaded with `YOUR_GROQ_API_KEY_HERE` placeholder

#### **Step 2: Add API Key After Deployment**

1. **Go to OVH File Manager or cPanel:**
   - Navigate to deployed files

2. **Edit teacher-chat/config.php:**
   - Find line 19: `define('GROQ_API_KEY', 'YOUR_GROQ_API_KEY_HERE');`
   - Replace with: `define('GROQ_API_KEY', 'gsk_your_actual_key_here');`
   - **Save**

3. **Edit parent-chat/config.php:**
   - Same change on line 19
   - Use the same API key
   - **Save**

4. **Set File Permissions:**
   - `teacher-chat/config.php` → **600** (read/write owner only)
   - `parent-chat/config.php` → **600** (read/write owner only)

#### **Step 3: Test**

1. Visit: `https://ai.smarthub.com.tn/teacher-chat/`
2. Send test message: "Hello"
3. Should get AI response!

---

### **Pros & Cons:**

✅ **Pros:**
- Most secure (API key never in GitHub)
- Easy to set up
- Works on all hosting types
- Simple to understand

⚠️ **Cons:**
- Must manually add key after first deployment
- Need to re-add key if you redeploy and overwrite config files

---

## 🔧 Option 2: Use .gitignore + Separate Config

Create a separate config file for the API key that's never committed:

### **Setup:**

1. **Create config-local.php (NOT in GitHub):**

```php
<?php
// This file is NOT committed to GitHub
define('GROQ_API_KEY_LOCAL', 'gsk_your_actual_api_key_here');
?>
```

2. **Modify config.php to include it:**

```php
// Try to load local config (not in Git)
if (file_exists(__DIR__ . '/config-local.php')) {
    require_once __DIR__ . '/config-local.php';
    define('GROQ_API_KEY', GROQ_API_KEY_LOCAL);
} else {
    // Fallback to placeholder
    define('GROQ_API_KEY', 'YOUR_GROQ_API_KEY_HERE');
}
```

3. **Add to .gitignore:**

```
teacher-chat/config-local.php
parent-chat/config-local.php
```

4. **Deploy from GitHub, then upload config-local.php manually**

---

## 🌍 Option 3: Environment Variables (If OVH Supports)

Some hosting providers support environment variables.

### **Check if OVH allows:**

1. **PHP environment variables**
2. **`.env` files**
3. **Server-level configuration**

### **If YES:**

**Ask OVH support:**
- "Does your PHP hosting support environment variables?"
- "Can I set a GROQ_API_KEY environment variable?"

**If they say yes, I can modify the code to read from environment variables**

**If they say no, use Option 1 (recommended)**

---

## 📋 OVH GitHub Deployment Methods

OVH may offer different deployment options:

### **Method A: OVH Git Integration (if available)**

Some OVH plans have built-in Git integration:
- Go to hosting control panel
- Look for "Git" or "Version Control"
- Connect GitHub repo
- Set branch and deploy path
- Click deploy

### **Method B: OVH Webhooks**

If OVH supports webhooks:
- Set up GitHub webhook
- Configure OVH to pull on push
- Automatic deployment on every commit

### **Method C: Manual Git Pull on Server**

If you have SSH access:
```bash
ssh user@your-ovh-server
cd /path/to/ai
git clone https://github.com/jalelchniti/ai.git .
git checkout claude/review-readme-action-plan-011CUpNXJMCkdAdfqDjvf2WP
```

Then add API key via File Manager.

---

## 🎯 Step-by-Step: Recommended Workflow

### **1. Initial Deployment**

```
GitHub (code)
    ↓ [Deploy via OVH]
OVH Server (code deployed, placeholder API key)
    ↓ [Manually add API key via File Manager]
OVH Server (working with real API key)
    ↓ [Test]
Live! ✅
```

### **2. Future Updates**

When you need to update code:

**Option A: Keep API key safe**
1. Backup config.php files (with real API key)
2. Deploy updates from GitHub
3. Restore config.php files with API key

**Option B: Smart deployment**
1. Deploy from GitHub
2. Config files already have API key (if you didn't overwrite)
3. Just test

---

## 🔒 Security Checklist

Before deploying:

- [ ] ✅ API key is NOT in any file committed to GitHub
- [ ] ✅ config.php files in GitHub still say `YOUR_GROQ_API_KEY_HERE`
- [ ] ✅ .gitignore includes any local config files
- [ ] ✅ No API key in git commit history
- [ ] ✅ Plan to add API key after deployment

After deploying:

- [ ] ✅ API key added to server config files
- [ ] ✅ File permissions set to 600
- [ ] ✅ Tested both chats work
- [ ] ✅ API key stored in password manager as backup

---

## 🚀 Quick Start Guide

**If you're ready to deploy right now:**

### **Step 1: OVH Setup (5 minutes)**
1. Log in to OVH
2. Find GitHub/Git integration
3. Connect your repo: `jalelchniti/ai`
4. Branch: `claude/review-readme-action-plan-011CUpNXJMCkdAdfqDjvf2WP`
5. Deploy!

### **Step 2: Add API Key (2 minutes)**
1. Go to OVH File Manager
2. Edit `teacher-chat/config.php` → Line 19 → Add your key
3. Edit `parent-chat/config.php` → Line 19 → Add your key
4. Set both files to permission 600

### **Step 3: Test (2 minutes)**
1. Visit: `https://ai.smarthub.com.tn/teacher-chat/`
2. Type: "Hello"
3. Get AI response!
4. Repeat for parent chat

**Total time: ~10 minutes to go live!** 🎉

---

## ❓ FAQ

**Q: What if OVH overwrites my config files when I redeploy?**
A:
- Back up config files before redeploying
- Or use Option 2 (separate config-local.php)
- Or exclude config.php from deployment (if OVH allows)

**Q: Can I use GitHub Actions to deploy?**
A: Yes, but you'd need SSH access to OVH and secrets management. Option 1 is simpler.

**Q: What if I accidentally commit the API key?**
A:
1. Revoke the key immediately at console.groq.com
2. Generate new key
3. Remove from git history (complex)
4. Never commit keys again!

**Q: Is it safe to have API key on the server?**
A: Yes, as long as:
- File permissions are 600
- Not accessible via web browser
- OVH server is secure

**Q: Can I automate this completely?**
A: Yes, but requires:
- GitHub Secrets for API key
- GitHub Actions workflow
- SSH or FTP access to OVH
- More complex setup

For now, Option 1 (manual key after deploy) is best balance of security and simplicity.

---

## 🎓 What You Need from OVH

To proceed, find out:

1. **Does OVH have GitHub integration?**
   - Check control panel for "Git", "GitHub", "Deploy"

2. **What's the deployment path?**
   - Usually: `/public_html/ai/` or `/www/ai/`
   - Confirm with OVH docs or support

3. **Do you have File Manager access?**
   - Needed to edit config files after deployment

4. **Can you set file permissions?**
   - Needed for security (config.php → 600)

---

## 📞 Next Steps

**Tell me:**

1. **"I found OVH's GitHub integration"**
   - I'll guide you through connecting it

2. **"I don't see GitHub integration"**
   - We'll use FTP upload instead

3. **"I deployed, now what?"**
   - I'll guide you to add the API key

4. **"I want to use environment variables"**
   - I'll modify the code to support that

---

## 🎯 Bottom Line

**Recommended approach for SmartHub:**

1. ✅ Deploy code from GitHub (without API key)
2. ✅ Manually add API key via OVH File Manager
3. ✅ Set secure permissions
4. ✅ Test and go live

**This is:**
- ✅ Most secure
- ✅ Easiest to understand
- ✅ Works on all hosting types
- ✅ Simple to maintain

---

**Ready to deploy? Let me know what you see in your OVH control panel!** 🚀
