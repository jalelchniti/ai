# SmartHub AI Chat System - Deployment Guide

**Version:** 1.0
**Date:** November 5, 2025
**Status:** Ready for Deployment

---

## 📋 Table of Contents

1. [Pre-Deployment Checklist](#pre-deployment-checklist)
2. [Step 1: Configure API Keys](#step-1-configure-api-keys)
3. [Step 2: Customize Content](#step-2-customize-content)
4. [Step 3: Upload Files](#step-3-upload-files)
5. [Step 4: Set File Permissions](#step-4-set-file-permissions)
6. [Step 5: Test the System](#step-5-test-the-system)
7. [Step 6: Go Live](#step-6-go-live)
8. [Troubleshooting](#troubleshooting)
9. [Maintenance](#maintenance)

---

## Pre-Deployment Checklist

Before deploying, ensure you have:

- [x] ✅ Completed Phase 2 development
- [ ] ✅ Groq API key (from https://console.groq.com)
- [ ] ✅ OVH hosting access (FTP or cPanel)
- [ ] ✅ Subdomain `ai.smarthub.com.tn` configured
- [ ] ✅ SSL certificate active for subdomain
- [ ] ✅ SmartHub logo file ready (optional but recommended)
- [ ] ✅ Contact information and pricing details prepared

---

## Step 1: Configure API Keys

### 1.1 Obtain Groq API Key

If you haven't already:

1. Visit https://console.groq.com
2. Sign up or log in
3. Navigate to "API Keys" section
4. Click "Create API Key"
5. Copy your API key (starts with `gsk_`)
6. **Save it securely** (you won't be able to see it again)

### 1.2 Update Configuration Files

You need to add your API key to **TWO** config files:

#### File 1: `teacher-chat/config.php`

1. Open the file
2. Find this line (line 19):
   ```php
   define('GROQ_API_KEY', 'YOUR_GROQ_API_KEY_HERE');
   ```
3. Replace `YOUR_GROQ_API_KEY_HERE` with your actual API key:
   ```php
   define('GROQ_API_KEY', 'gsk_your_actual_key_here');
   ```
4. Save the file

#### File 2: `parent-chat/config.php`

1. Open the file
2. Find this line (line 19):
   ```php
   define('GROQ_API_KEY', 'YOUR_GROQ_API_KEY_HERE');
   ```
3. Replace with your actual API key (same as teacher-chat)
4. Save the file

**⚠️ IMPORTANT SECURITY NOTES:**
- Never commit these files to public repositories
- Never share your API key publicly
- Keep backup copies in a secure location

---

## Step 2: Customize Content

### 2.1 Add Contact Information

Update both config files with your actual contact information:

**In `teacher-chat/config.php` (around line 44):**
```php
- Contact: [Contact information to be provided]
```
Change to:
```php
- Contact: +216 XX XXX XXX
- Email: contact@smarthub.com.tn
```

**In `parent-chat/config.php` (around line 54):**
- Do the same

### 2.2 Add Pricing Information

**In `teacher-chat/config.php` (around line 80):**
```php
PRICING INFORMATION (Update with actual pricing):
- Premium classrooms: [Price per hour] TND
- Standard classrooms: [Price per hour] TND
```
Change to your actual prices:
```php
PRICING INFORMATION:
- Premium classrooms: 50 TND per hour
- Standard classrooms: 30 TND per hour
- Weekly packages: Starting from 200 TND
- Special rates for partner teachers
```

### 2.3 Update Welcome Messages (Optional)

You can customize the welcome messages in the HTML files:

**In `teacher-chat/index.html` (lines 26-40):**
- Edit the welcome text to match your tone

**In `parent-chat/index.html` (lines 26-41):**
- Edit similarly

### 2.4 Add Your Logo

**If you have a logo:**
1. Save your logo as `logo.png` (PNG format, transparent background recommended)
2. Place it in: `assets/images/logo.png`

**If you don't have a logo yet:**
- The system will work fine without it
- Logo areas will simply not display

### 2.5 Customize Colors (Optional)

**In `assets/css/styles.css` (lines 9-30):**

Update the CSS variables with your brand colors:
```css
--primary-color: #0066CC;        /* Change to your brand color */
--secondary-color: #FF6B00;      /* Change to your accent color */
```

---

## Step 3: Upload Files

### Method A: Using FTP (FileZilla)

1. **Connect to your server:**
   - Host: Your OVH FTP hostname
   - Username: Your FTP username
   - Password: Your FTP password
   - Port: 21

2. **Navigate to subdomain folder:**
   - Usually: `/public_html/ai/` or `/www/ai/`
   - Check with your hosting provider if unsure

3. **Upload entire project:**
   - Select all files and folders from your local `/home/user/ai/` directory
   - Drag and drop to the subdomain folder
   - Wait for upload to complete

4. **Verify structure:**
   ```
   ai.smarthub.com.tn/
   ├── index.html
   ├── teacher-chat/
   │   ├── index.html
   │   ├── chat.php
   │   └── config.php
   ├── parent-chat/
   │   ├── index.html
   │   ├── chat.php
   │   └── config.php
   └── assets/
       ├── css/
       ├── js/
       └── images/
   ```

### Method B: Using cPanel File Manager

1. **Log in to cPanel**
2. Open "File Manager"
3. Navigate to subdomain directory
4. Click "Upload" button
5. Upload files/folders one by one or as a ZIP
6. If uploaded as ZIP, right-click and "Extract"
7. Verify folder structure

---

## Step 4: Set File Permissions

**CRITICAL SECURITY STEP:**

Set correct permissions for config files to protect your API key.

### Via FTP (FileZilla):

1. Right-click on `teacher-chat/config.php`
2. Select "File permissions..."
3. Set to: **600** (Owner: Read + Write only)
4. Click OK
5. Repeat for `parent-chat/config.php`

### Via cPanel:

1. Navigate to `teacher-chat/` folder
2. Right-click on `config.php`
3. Select "Change Permissions"
4. Check only: Owner Read, Owner Write
5. Uncheck all other boxes
6. Click "Change Permissions"
7. Repeat for `parent-chat/config.php`

### Recommended Permissions Summary:

```
Files:
- *.html files: 644
- *.php files: 644
- config.php files: 600 (most secure)
- *.css files: 644
- *.js files: 644

Directories:
- All folders: 755
```

---

## Step 5: Test the System

### 5.1 Test Landing Page

1. Visit: `https://ai.smarthub.com.tn`
2. **Expected:** Landing page loads with two chat options
3. **Check:**
   - Page loads without errors
   - Logo displays (if you added one)
   - Both buttons are visible
   - Page looks good on mobile

### 5.2 Test Teacher Chat

1. Click "Start Teacher Chat" button
2. **Expected:** Teacher chat interface loads
3. **Test messages:**
   - "Hello" (should get friendly greeting)
   - "What are your prices?" (should provide pricing info)
   - "Tell me about your facilities" (should describe classrooms)
   - "How do I book a classroom?" (should explain booking process)

4. **Check:**
   - Messages send successfully
   - AI responds within 5 seconds
   - Responses are relevant and accurate
   - No error messages
   - Chat works on mobile device

### 5.3 Test Parent/Learner Chat

1. Go back to landing page
2. Click "Start Consultation Chat" button
3. **Expected:** Parent chat interface loads
4. **Test messages:**
   - "Bonjour, comment puis-je aider mon enfant?" (French test)
   - "What subjects do you offer?"
   - "Tell me about Baccalauréat preparation"
   - "How do I schedule a consultation?"

5. **Check:**
   - Responses are appropriate for parents
   - Tone is warm and supportive
   - Information is accurate
   - French language works

### 5.4 Test Error Handling

1. **Test with API key temporarily removed:**
   - Comment out API key line
   - Try to send message
   - Should show: "API key not configured"
   - Restore API key

2. **Test with very long message:**
   - Type 2500+ characters
   - Should show: "Message is too long"

3. **Test with empty message:**
   - Click send without typing
   - Should not send

### 5.6 Browser Testing

Test on multiple browsers:
- [ ] Chrome (desktop)
- [ ] Firefox (desktop)
- [ ] Safari (desktop)
- [ ] Chrome (mobile)
- [ ] Safari (iOS mobile)

### 5.7 Performance Testing

- [ ] Page loads in under 2 seconds
- [ ] Chat responses in under 5 seconds
- [ ] No console errors (press F12 → Console tab)
- [ ] Works on slow 3G connection

---

## Step 6: Go Live

### 6.1 Final Checks

Before announcing:

- [ ] ✅ Both chats work perfectly
- [ ] ✅ All information is accurate
- [ ] ✅ Contact details are correct
- [ ] ✅ Pricing is up to date
- [ ] ✅ Tested on mobile devices
- [ ] ✅ SSL certificate working (https with padlock)
- [ ] ✅ No error messages appearing

### 6.2 Integrate with Main Website

**Option A: Add Links**

Add links to your main website navigation:
```html
<a href="https://ai.smarthub.com.tn/teacher-chat/">Teacher Support (AI)</a>
<a href="https://ai.smarthub.com.tn/parent-chat/">Educational Consultation (AI)</a>
```

**Option B: Embed with Iframe**

Embed directly in existing pages:
```html
<iframe
    src="https://ai.smarthub.com.tn/teacher-chat/"
    width="100%"
    height="600px"
    frameborder="0"
    title="Teacher Support Chat">
</iframe>
```

### 6.3 Announce Launch

- Update website with AI chat availability
- Send email to existing teachers/clients
- Post on social media
- Add to Google Business profile

---

## Troubleshooting

### Problem: "API key not configured" error

**Solution:**
1. Check that you updated BOTH config.php files
2. Ensure you replaced `YOUR_GROQ_API_KEY_HERE` with actual key
3. Verify API key starts with `gsk_`
4. Check file was saved properly
5. Re-upload config.php files if needed

### Problem: Chat not responding / Timeout

**Possible causes:**
1. **Outbound connections blocked:**
   - Contact OVH support
   - Ask them to allow connections to api.groq.com

2. **PHP cURL not installed:**
   - Check phpinfo.php (create: `<?php phpinfo(); ?>`)
   - Contact hosting support to enable cURL

3. **Groq API quota exceeded:**
   - Check usage at https://console.groq.com
   - Free tier: 14,400 requests/day
   - Wait for reset or upgrade plan

### Problem: Responses are incorrect or generic

**Solution:**
1. Update system prompts in config.php files
2. Add more specific SmartHub information
3. Include actual pricing, contact details
4. Be more detailed about services offered

### Problem: Page loads but chat doesn't work

**Check:**
1. Browser console for JavaScript errors (F12)
2. Verify chat.php files uploaded correctly
3. Check PHP error logs in cPanel
4. Ensure PHP version is 7.4+

### Problem: SSL certificate error

**Solution:**
1. Enable SSL for subdomain in cPanel
2. Use Let's Encrypt (free) if available
3. Wait 10-15 minutes for certificate provisioning
4. Contact OVH support if still failing

### Problem: Logo not displaying

**Solution:**
1. Verify logo file uploaded to `assets/images/logo.png`
2. Check file name is exactly `logo.png` (case-sensitive)
3. Ensure file is PNG format
4. Check file permissions (644)
5. If no logo, system works fine without it

---

## Maintenance

### Weekly Tasks

**Monitor API Usage:**
1. Log in to https://console.groq.com
2. Check usage dashboard
3. Ensure staying within free tier limits
4. If approaching limit, consider:
   - Upgrade to paid plan
   - Implement rate limiting
   - Analyze usage patterns

**Test Functionality:**
1. Send test messages to both chats
2. Verify responses are accurate
3. Check for any error messages
4. Test on mobile device

### Monthly Tasks

**Review Chat Effectiveness:**
1. Test with common questions
2. Update system prompts if needed
3. Add new information (pricing changes, new services)
4. Refine responses based on user feedback

**Update Content:**
1. Review pricing in config.php files
2. Update contact information if changed
3. Add new services or features
4. Update welcome messages seasonally

**Backup Files:**
1. Download all files via FTP
2. Store backup securely
3. Include config.php with API key

### Quarterly Tasks

**Comprehensive Review:**
1. Analyze if AI responses meet expectations
2. Update system prompts with lessons learned
3. Consider feature enhancements
4. Review API costs vs. benefits

**Security Audit:**
1. Verify config.php permissions still 600
2. Check for any exposed sensitive data
3. Review error logs for security issues
4. Update PHP if new version available

---

## Updating System Prompts

To improve AI responses over time:

### Update Teacher Chat Prompt:

1. Open `teacher-chat/config.php`
2. Find `define('SYSTEM_PROMPT', <<<EOT`
3. Edit the text between `<<<EOT` and `EOT);`
4. Save and re-upload file
5. Test immediately

### Update Parent Chat Prompt:

1. Open `parent-chat/config.php`
2. Find `define('SYSTEM_PROMPT', <<<EOT`
3. Make your changes
4. Save and re-upload
5. Test immediately

**What to update:**
- Add missing information
- Include new services or offerings
- Refine tone if too formal/casual
- Add frequently asked questions
- Update pricing or policies

---

## Getting Help

### Resources

- **Groq Documentation:** https://console.groq.com/docs
- **OVH Support:** https://www.ovh.com/manager/
- **Phase 1 Guides:** Check the Phase 1 documentation files

### Common Questions

**Q: Can I change the AI model?**
**A:** Yes, in config.php change `GROQ_MODEL` to another model like:
- `llama-3.1-70b-versatile` (current, recommended)
- `llama-3.1-8b-instant` (faster, less capable)
- Check Groq docs for latest models

**Q: How do I add more information to the AI?**
**A:** Edit the `SYSTEM_PROMPT` in config.php files. The more detailed and specific, the better the AI responses.

**Q: Can I see conversation history?**
**A:** Currently no. Each conversation is stateless (doesn't remember previous messages in same session). This can be added as future enhancement.

**Q: How much does this cost?**
**A:** Free tier: 14,400 requests/day. For most use cases, this is sufficient. If exceeded, paid plans start at $0.27 per million tokens (very affordable).

---

## Success! 🎉

If you've completed all steps and tests pass:

✅ Your SmartHub AI Chat System is **LIVE**!
✅ Teachers can get instant support 24/7
✅ Parents can receive educational guidance anytime
✅ You've successfully deployed an AI-powered support system

**Next steps:**
1. Monitor usage for first week closely
2. Collect user feedback
3. Refine system prompts based on real usage
4. Enjoy reduced manual support workload!

---

**Deployment Guide Version:** 1.0
**Last Updated:** November 5, 2025
**Support:** Refer to Phase 1 documentation or contact Claude Code for assistance
