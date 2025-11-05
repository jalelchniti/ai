# Groq API Account Setup Guide

**Estimated Time:** 10-15 minutes
**Cost:** Free (Free tier: 14,400 requests per day)
**Purpose:** Set up Groq API access for AI-powered chat system

---

## Why Groq?

- **Fast:** Industry-leading inference speed (responses in seconds)
- **Free Tier:** 14,400 requests/day for Llama 3.1 70B model
- **Powerful:** Access to Meta's Llama 3.1 70B model
- **Reliable:** Enterprise-grade infrastructure
- **Simple:** Easy API integration with PHP

---

## Step-by-Step Setup Process

### Step 1: Visit Groq Console
1. Open your web browser
2. Navigate to: **https://console.groq.com**
3. You should see the Groq welcome page

### Step 2: Create Account
1. Click **"Sign Up"** or **"Get Started"** button
2. You have several options:
   - **Option A:** Sign up with Google account (Fastest)
   - **Option B:** Sign up with GitHub account
   - **Option C:** Sign up with email and password

**Recommended:** Use your business email for professional account management

#### If using email signup:
- Enter your email address
- Create a strong password (minimum 8 characters)
- Accept Terms of Service
- Click "Create Account"

### Step 3: Verify Email
1. Check your email inbox (including spam folder)
2. Look for email from Groq with subject like "Verify your email"
3. Click the verification link
4. You'll be redirected to Groq Console

### Step 4: Complete Profile (Optional)
- Add your name
- Company/Organization: "SmartHub - ELMAOUIA ET.CO"
- Use case: "Education" or "Customer Support"

### Step 5: Navigate to API Keys Section
1. Once logged in, look for navigation menu
2. Click on **"API Keys"** (usually in left sidebar or top menu)
3. You should see API Keys management page

### Step 6: Generate New API Key
1. Click **"Create API Key"** or **"+ New API Key"** button
2. Give your key a descriptive name:
   - Example: "SmartHub Chat System - Production"
   - Or: "SmartHub Teacher & Parent Chats"
3. Click **"Create"** or **"Generate"**

### Step 7: Copy and Secure Your API Key

**CRITICAL STEP - READ CAREFULLY:**

1. The API key will be displayed **ONLY ONCE**
2. It will look something like this:
   ```
   gsk_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   ```
3. **Immediately copy this key** using the copy button or by selecting and copying the text

4. **Store it securely in ONE of these ways:**

   **Option A: Password Manager (Most Secure - Recommended)**
   - Store in LastPass, 1Password, Bitwarden, or similar
   - Label it clearly: "SmartHub Groq API Key - Production"
   - Add note: "For ai.smarthub.com.tn chat system"

   **Option B: Secure Document**
   - Create a file named `CONFIDENTIAL-groq-api-key.txt`
   - Paste the API key
   - Save in secure location (encrypted folder, password-protected)
   - **NEVER commit this to git or share publicly**

   **Option C: Write it down temporarily**
   - Write on paper and store in locked drawer
   - Transfer to digital password manager later
   - Destroy paper after digital storage

**WARNING:**
- ❌ Do NOT save in regular text file on desktop
- ❌ Do NOT email to yourself
- ❌ Do NOT share on messaging apps
- ❌ Do NOT commit to version control
- ❌ Do NOT share with anyone else

### Step 8: Understand Usage Limits

**Free Tier Limits (Llama 3.1 70B Versatile):**
- **Requests per Day:** 14,400
- **Requests per Minute:** 30
- **Tokens per Minute:** 14,400

**What this means for SmartHub:**
- Can handle ~600 chat conversations per day
- Each chat response uses ~1 request
- If a chat session has 10 messages, that's 5 requests (user sends 5, AI responds 5)
- Should be more than sufficient for SmartHub's initial needs

### Step 9: Test Your API Key (Optional but Recommended)

You can test if your API key works using this simple curl command in terminal:

```bash
curl https://api.groq.com/openai/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_API_KEY_HERE" \
  -d '{
    "model": "llama-3.1-70b-versatile",
    "messages": [{"role": "user", "content": "Say hello!"}],
    "temperature": 0.7
  }'
```

Replace `YOUR_API_KEY_HERE` with your actual API key.

**Expected response:** JSON response with AI-generated message saying hello.

---

## API Key Management Best Practices

### Security
- ✅ Treat API key like a password
- ✅ Never expose in client-side JavaScript
- ✅ Store only in server-side PHP config files
- ✅ Set file permissions to 600 on config.php
- ✅ Regenerate key if accidentally exposed

### Monitoring
- 📊 Check usage weekly at: https://console.groq.com
- 📊 Monitor for unexpected spikes
- 📊 Set up alerts when approaching 80% of daily limit

### Multiple Keys (Optional)
You can create separate API keys for:
- Development/Testing key
- Production key
- This allows you to disable one without affecting the other

---

## What to Do If You Lose Your API Key

If you lose your API key or forget to save it:

1. **You CANNOT retrieve the same key again**
2. Go to API Keys section in Groq Console
3. Delete the old key (for security)
4. Create a new API key
5. Update your config.php files with the new key

---

## Troubleshooting

### Problem: Email verification not received
- **Solution:** Check spam/junk folder
- **Solution:** Wait 5-10 minutes and check again
- **Solution:** Use "Resend verification email" option
- **Solution:** Try with different email address

### Problem: Can't access API Keys section
- **Solution:** Ensure email is verified first
- **Solution:** Log out and log back in
- **Solution:** Clear browser cache and cookies

### Problem: API key not working
- **Solution:** Ensure you copied the entire key (starts with `gsk_`)
- **Solution:** Check for extra spaces before/after the key
- **Solution:** Verify the key is not expired or deleted
- **Solution:** Generate a new key

### Problem: Rate limit exceeded
- **Solution:** Check usage at console.groq.com
- **Solution:** Wait until daily reset (midnight UTC)
- **Solution:** Consider implementing rate limiting on your side
- **Solution:** Upgrade to paid tier if needed

---

## After Getting Your API Key

### Next Steps:
1. ✅ **Save API key securely** (password manager or secure document)
2. ✅ **Share with Claude Code** (during Phase 2 development)
3. ✅ **Do NOT push to GitHub** or any public repository
4. ✅ **Proceed to Phase 2** - We'll use this key in the config.php files

### Information to Provide to Claude Code:
When ready for Phase 2 development, you'll provide:
- ✅ The Groq API key
- ✅ Completed SmartHub information brief
- ✅ Branding assets (logo, colors)

---

## Useful Links

- **Groq Console:** https://console.groq.com
- **Groq Documentation:** https://console.groq.com/docs
- **API Reference:** https://console.groq.com/docs/api-reference
- **Model Information:** https://console.groq.com/docs/models
- **Pricing:** https://console.groq.com/pricing (Free tier included)

---

## Cost Estimation

**Current Plan:** Free Tier
- **Cost:** $0.00/month
- **Capacity:** 14,400 requests/day

**If SmartHub grows beyond free tier:**
- Llama 3.1 70B: $0.27 per million input tokens
- Estimated cost for 1,000 chat sessions: ~$5-10/month
- Upgrade decision can be made later based on actual usage

---

## Checklist

Before proceeding to Phase 2, ensure:
- [ ] Groq account created successfully
- [ ] Email verified
- [ ] API key generated
- [ ] API key saved securely (password manager or secure document)
- [ ] API key tested (optional)
- [ ] Understand free tier limits (14,400 requests/day)
- [ ] Know how to check usage in Groq Console

---

**Setup Complete!** 🎉

You now have access to Groq API and are ready to proceed with Phase 2 development.

---

**Document Version:** 1.0
**Last Updated:** November 5, 2025
**Support:** If you encounter issues, consult Groq documentation or contact Claude Code for assistance
