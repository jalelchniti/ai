# OVH Deployment Instructions - GitHub to Live Site

**Last Updated:** November 5, 2025
**Repository:** https://github.com/jalelchniti/ai
**Branch:** claude/review-readme-action-plan-011CUpNXJMCkdAdfqDjvf2WP
**Live Site:** https://ai.smarthub.com.tn

---

## 🎯 Quick Deployment Process

### Method 1: OVH Control Panel (Recommended)

**Step-by-Step:**

1. **Log into OVH**
   - URL: https://www.ovh.com/manager/
   - Or: https://www.ovhcloud.com/en/manager/
   - Enter your credentials

2. **Access Your Hosting**
   - Click on "Web Cloud" in left menu
   - Select "Hosting plans"
   - Click on your hosting plan (smarthub.com.tn)

3. **Go to Git/Multisite Section**
   - Click "Multisite" tab at the top
   - Find your subdomain: `ai.smarthub.com.tn`
   - Look for Git icon/button next to it

4. **Deploy from GitHub**
   - Click "Git" or "Version Control" button
   - You should see:
     - Repository: `https://github.com/jalelchniti/ai.git`
     - Branch: `claude/review-readme-action-plan-011CUpNXJMCkdAdfqDjvf2WP`
   - Click **"Pull"** or **"Deploy"** or **"Synchronize"**
   - Wait for confirmation (usually 10-30 seconds)

5. **Verify Deployment**
   - Check deployment log for success message
   - Visit https://ai.smarthub.com.tn to test
   - Try both chats to ensure updates are live

---

## 🔧 Method 2: SSH Deployment (Advanced)

If you have SSH access to your OVH hosting:

### Connect to OVH via SSH

```bash
ssh your_username@ssh.cluster0XX.hosting.ovh.net
```

### Navigate to Your Site Directory

```bash
cd ai.smarthub.com.tn
# or
cd www/ai.smarthub.com.tn
# (depends on your OVH setup)
```

### Pull Latest Changes from GitHub

```bash
git pull origin claude/review-readme-action-plan-011CUpNXJMCkdAdfqDjvf2WP
```

### Verify Files Updated

```bash
git log -1  # Check latest commit
ls -la      # Verify files exist
```

---

## 🔄 Setting Up Automatic Deployment (Optional)

To automatically deploy when you push to GitHub:

### Step 1: In OVH Control Panel

1. Go to hosting → Git settings
2. Look for "Automatic Deployment" or "Webhook" option
3. Enable automatic deployment
4. Copy the webhook URL (looks like: `https://hosting.ovh.net/webhook/...`)

### Step 2: In GitHub Repository

1. Go to: https://github.com/jalelchniti/ai/settings/hooks
2. Click "Add webhook"
3. Paste OVH webhook URL
4. Set:
   - Content type: `application/json`
   - Trigger: "Just the push event"
   - Active: ✓ (checked)
5. Click "Add webhook"

### Step 3: Test

1. Make a small change and push to GitHub
2. Check GitHub webhook delivery (should show 200 OK)
3. Visit your site to verify auto-deployment worked

**Note:** Not all OVH shared hosting plans support automatic deployment. Check your plan features.

---

## ⚠️ Important Reminders

### Before Deployment:

✅ **API Key Check:**
- Your API key is NOT in GitHub (security)
- Make sure API key is still in config files on OVH server
- If deployment overwrites config files, you'll need to re-add the key

**Files to check after deployment:**
```
teacher-chat/config.php (line 21)
parent-chat/config.php (line 21)
```

Should have:
```php
define('GROQ_API_KEY', 'gsk_your_actual_key_here');
```

NOT:
```php
define('GROQ_API_KEY', 'YOUR_GROQ_API_KEY_HERE');
```

### After Deployment:

✅ **Test Both Chats:**
- Teacher chat: https://ai.smarthub.com.tn/teacher-chat/
- Parent chat: https://ai.smarthub.com.tn/parent-chat/

✅ **Verify AI Responses:**
- Should mention specific prices (25 TND, 120 TND, etc.)
- Should provide real contact info (+216 99 456 059)
- Should describe actual programs and services

✅ **Check for Errors:**
- Browser console (F12) for JavaScript errors
- Server logs in OVH control panel for PHP errors

---

## 🐛 Troubleshooting

### Issue 1: "Git pull" button not working

**Solution:**
- Try "Disconnect" then "Reconnect" repository
- Use HTTPS URL: `https://github.com/jalelchniti/ai.git`
- Specify branch explicitly

### Issue 2: Files not updating

**Solution:**
- Clear browser cache (Ctrl+F5)
- Check OVH file manager - verify file timestamps
- Try manual file upload if Git fails

### Issue 3: API key disappeared after deployment

**Solution:**
- OVH Git deployment usually doesn't overwrite existing files
- But if it does, manually edit config files via File Manager
- Add your API key back to both config.php files

### Issue 4: HTTP 500 error after deployment

**Solution:**
- Check PHP error logs in OVH control panel
- Verify API key is set correctly
- Run diagnostic: https://ai.smarthub.com.tn/test-php-diagnostics.php

### Issue 5: Old content still showing

**Solution:**
- Clear browser cache completely
- Use incognito/private browsing
- Check file timestamps in OVH File Manager
- Verify correct branch is deployed

---

## 📊 Deployment Checklist

Before deploying:
- [x] Code pushed to GitHub
- [x] Branch: claude/review-readme-action-plan-011CUpNXJMCkdAdfqDjvf2WP
- [ ] API key safe on OVH server

During deployment:
- [ ] Log into OVH control panel
- [ ] Navigate to Git/Multisite section
- [ ] Click "Pull" or "Deploy"
- [ ] Wait for success confirmation

After deployment:
- [ ] Visit https://ai.smarthub.com.tn
- [ ] Test teacher chat functionality
- [ ] Test parent chat functionality
- [ ] Verify AI gives accurate SmartHub info
- [ ] Check for any errors in browser console
- [ ] Confirm contact details are correct

---

## 🎯 Quick Reference

**GitHub Repository:** https://github.com/jalelchniti/ai
**Active Branch:** claude/review-readme-action-plan-011CUpNXJMCkdAdfqDjvf2WP
**OVH Manager:** https://www.ovhcloud.com/en/manager/
**Live Site:** https://ai.smarthub.com.tn

**Support:**
- OVH Documentation: https://help.ovhcloud.com/
- GitHub Deployment Guide: Already in repository

---

## 📞 Getting Help

**If deployment fails:**
1. Check OVH control panel error messages
2. Review Git deployment logs
3. Contact OVH support if technical issue
4. Report issues in GitHub repository

**If AI responses are wrong:**
1. Verify config files deployed correctly
2. Check API key is present
3. Review system prompts in config.php files
4. Test with specific questions to identify issues

---

**Last Deployment:** Check OVH control panel for timestamp
**Next Update:** When new features are added to GitHub
**Maintenance:** Review and update system prompts quarterly
