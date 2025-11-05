# OVH Hosting Environment Verification Checklist

**Purpose:** Ensure your OVH shared hosting is properly configured for SmartHub AI chat system
**Estimated Time:** 20-30 minutes
**When to Complete:** During Phase 1, before development begins

---

## Overview

The SmartHub AI chat system requires:
- PHP 7.4 or higher
- HTTPS/SSL certificate
- Subdomain configuration (ai.smarthub.com.tn)
- FTP or cPanel access
- At least 50MB available disk space

---

## SECTION 1: Access Verification

### 1.1 OVH Control Panel Access
- [ ] Can log in to OVH Manager: https://www.ovh.com/manager/
- [ ] Username: ________________________________
- [ ] Password saved securely: [ ] Yes [ ] No
- [ ] Two-factor authentication enabled (recommended): [ ] Yes [ ] No

**If you cannot log in:**
- Use password reset option
- Check email for credentials
- Contact OVH support if needed

### 1.2 cPanel Access (if applicable)
- [ ] Can access cPanel interface
- [ ] cPanel URL: ________________________________
- [ ] cPanel username: ________________________________
- [ ] File Manager accessible: [ ] Yes [ ] No

**Note:** Some OVH shared hosting uses cPanel, others use OVH's custom interface

### 1.3 FTP Access
Verify FTP credentials:
- [ ] FTP Host/Server: ________________________________
- [ ] FTP Username: ________________________________
- [ ] FTP Password saved securely: [ ] Yes [ ] No
- [ ] FTP Port: (usually 21 or 22 for SFTP)

**Test FTP connection:**
- Download FileZilla (free): https://filezilla-project.org/
- Enter FTP credentials
- Try to connect
- [ ] Successfully connected to FTP: [ ] Yes [ ] No

---

## SECTION 2: PHP Environment

### 2.1 PHP Version Check

**Method 1: Create PHP Info Page (Recommended)**

1. Log in to cPanel or FTP
2. Navigate to your `public_html` or `www` folder
3. Create a file named `phpinfo.php` with this content:
   ```php
   <?php
   phpinfo();
   ?>
   ```
4. Save the file
5. Visit: `https://smarthub.com.tn/phpinfo.php` in your browser
6. Look for "PHP Version" at the top

**Record your PHP version:**
- **PHP Version:** ________________________________

**Requirements:**
- [ ] PHP version is 7.4 or higher: [ ] Yes [ ] No
- [ ] Recommended: PHP 8.0 or 8.1

**⚠️ If PHP version is below 7.4:**
- Contact OVH support to upgrade PHP version
- Or check cPanel for PHP version selector
- Many hosts allow changing PHP version in control panel

**Important:** Delete `phpinfo.php` file after checking (security best practice)

### 2.2 Required PHP Extensions

Check if these extensions are enabled (visible in phpinfo.php):
- [ ] **cURL** (required for API calls to Groq)
- [ ] **JSON** (required for data handling)
- [ ] **OpenSSL** (required for HTTPS connections)
- [ ] **mbstring** (recommended for character encoding)

**If any required extensions are missing:**
- Most OVH shared hosting includes these by default
- Contact OVH support if any are missing
- Provide them this list of required extensions

### 2.3 PHP Configuration Settings

Check these settings in phpinfo.php:
- **max_execution_time:** ______ seconds (should be at least 30)
- **memory_limit:** ______ MB (should be at least 128M)
- **upload_max_filesize:** ______ MB (not critical for this project)
- **post_max_size:** ______ MB (should be at least 8M)

- [ ] Settings are adequate: [ ] Yes [ ] No

**If settings are too restrictive:**
- Most OVH shared hosting has adequate defaults
- Can be adjusted via .htaccess or php.ini if needed

---

## SECTION 3: Subdomain Configuration

### 3.1 Verify Subdomain Exists

- [ ] Subdomain `ai.smarthub.com.tn` is created
- [ ] Points to correct directory

**How to check/create subdomain in cPanel:**
1. Log in to cPanel
2. Find "Domains" or "Subdomains" section
3. Look for `ai.smarthub.com.tn`
4. If not exists, create it:
   - Subdomain: `ai`
   - Domain: `smarthub.com.tn`
   - Document Root: `/public_html/ai` or `/www/ai` or similar

**Record subdomain document root:**
- **Subdomain path:** ________________________________

### 3.2 DNS Configuration

- [ ] DNS records are properly configured
- [ ] Subdomain resolves to OVH server

**Test DNS resolution:**
1. Open Command Prompt (Windows) or Terminal (Mac/Linux)
2. Type: `ping ai.smarthub.com.tn`
3. Check if it resolves to an IP address

**DNS Status:**
- [ ] DNS resolves successfully: [ ] Yes [ ] No
- [ ] IP Address: ________________________________

**⚠️ If DNS not working:**
- DNS changes can take 24-48 hours to propagate
- Check DNS settings in OVH Manager
- Ensure A record or CNAME points to correct server

### 3.3 Directory Structure

Verify the subdomain directory structure:
- [ ] Can access subdomain folder via FTP/cPanel
- [ ] Have write permissions in subdomain folder
- [ ] Can create new files and folders

**Test by:**
1. Connect via FTP or cPanel File Manager
2. Navigate to subdomain folder (e.g., `/public_html/ai/`)
3. Create a test file: `test.html` with content: `<h1>Test</h1>`
4. Visit: `https://ai.smarthub.com.tn/test.html`
5. [ ] Test page displays: [ ] Yes [ ] No

**If test successful, delete test.html**

---

## SECTION 4: SSL/HTTPS Configuration

### 4.1 SSL Certificate Status

- [ ] SSL certificate is installed for main domain (smarthub.com.tn)
- [ ] SSL certificate covers subdomain (ai.smarthub.com.tn)

**Test SSL:**
1. Visit: `https://ai.smarthub.com.tn` (with https://)
2. Look for padlock icon in browser address bar
3. Click padlock to view certificate details

**SSL Status:**
- [ ] HTTPS works without warnings: [ ] Yes [ ] No
- [ ] Certificate is valid: [ ] Yes [ ] No
- [ ] Certificate covers subdomain: [ ] Yes [ ] No

**If SSL not working:**
- Check if using Let's Encrypt (free SSL)
- OVH usually provides free SSL for all subdomains
- In cPanel, look for "SSL/TLS Status" or "Let's Encrypt"
- Enable SSL for subdomain if not already enabled
- Contact OVH support if needed

### 4.2 Force HTTPS (Optional but Recommended)

Later, we can add .htaccess rules to force HTTPS:
```apache
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

- [ ] Note: We'll implement this during deployment

---

## SECTION 5: Disk Space & Resources

### 5.1 Available Disk Space

Check available disk space:
- **Total disk space:** ______ GB
- **Used space:** ______ GB
- **Available space:** ______ GB

**Requirements:**
- [ ] At least 50MB free space: [ ] Yes [ ] No
- [ ] Actual project size will be ~5-10MB

**How to check:**
- In cPanel: Look for "Disk Usage" widget
- In OVH Manager: Check hosting resource usage

### 5.2 Bandwidth & Traffic

- **Monthly bandwidth limit:** ______ GB
- **Current usage:** ______ GB

**Note:** Chat system uses minimal bandwidth:
- Small text-based requests/responses
- No video/large file hosting
- Estimated: <1GB/month for moderate usage

### 5.3 Database Availability (Not Required)

- [ ] MySQL database available: [ ] Yes [ ] No

**Note:** This project does NOT require a database. However, it's good to know for future enhancements.

---

## SECTION 6: Security & Permissions

### 6.1 File Permissions

Understand file permission requirements:
- **PHP files:** Should be 644 (read/write for owner, read for others)
- **Config files:** Should be 600 (read/write for owner only) - most secure
- **Directories:** Should be 755 (read/write/execute for owner, read/execute for others)

- [ ] Can change file permissions via FTP/cPanel: [ ] Yes [ ] No

### 6.2 .htaccess Support

- [ ] .htaccess files are supported: [ ] Yes [ ] No

**Test:**
1. Create `.htaccess` file in subdomain root
2. Add content: `# Test htaccess`
3. If no 500 error when visiting site, it's supported

**Note:** OVH shared hosting typically supports .htaccess

### 6.3 PHP File Upload

- [ ] Can upload PHP files via FTP: [ ] Yes [ ] No
- [ ] PHP files execute (don't download): [ ] Yes [ ] No

**Test:**
1. Create file `test.php` with content:
   ```php
   <?php
   echo "PHP is working!";
   ?>
   ```
2. Upload to subdomain folder
3. Visit: `https://ai.smarthub.com.tn/test.php`
4. Should display: "PHP is working!"
5. **If successful, delete test.php**

---

## SECTION 7: Outbound Connections (Critical)

### 7.1 cURL and External API Access

**This is CRITICAL** - The chat system needs to make outbound HTTPS requests to Groq API.

**Check if outbound connections are allowed:**
1. Create file `curl-test.php` with this content:
   ```php
   <?php
   $ch = curl_init('https://api.groq.com');
   curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
   curl_setopt($ch, CURLOPT_HEADER, true);
   curl_setopt($ch, CURLOPT_NOBODY, true);
   $response = curl_exec($ch);
   $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
   curl_close($ch);

   if ($httpCode > 0) {
       echo "✓ Outbound HTTPS connections work! HTTP Code: " . $httpCode;
   } else {
       echo "✗ Outbound connections blocked or cURL not working";
   }
   ?>
   ```
2. Upload to subdomain folder
3. Visit: `https://ai.smarthub.com.tn/curl-test.php`

**Result:**
- [ ] Outbound connections work: [ ] Yes [ ] No
- [ ] HTTP Code received: ______

**⚠️ If outbound connections are blocked:**
- This is a critical issue
- Contact OVH support immediately
- Explain you need to make API calls to external services
- Most OVH shared hosting allows this by default

**After testing, delete curl-test.php**

---

## SECTION 8: Email Configuration (Optional)

Not required for MVP, but useful for future features:
- [ ] Can send emails from PHP (mail() function)
- [ ] SMTP available: [ ] Yes [ ] No

**Note:** We're not implementing email in Phase 1, but good to verify for future enhancements (like sending conversation transcripts)

---

## FINAL CHECKLIST

Before proceeding to Phase 2, confirm:

### Critical Requirements (Must Have)
- [ ] ✅ PHP 7.4 or higher installed
- [ ] ✅ cURL extension enabled
- [ ] ✅ JSON extension enabled
- [ ] ✅ FTP/cPanel access working
- [ ] ✅ Subdomain `ai.smarthub.com.tn` configured
- [ ] ✅ SSL certificate active for subdomain
- [ ] ✅ At least 50MB free disk space
- [ ] ✅ Outbound HTTPS connections allowed
- [ ] ✅ Can upload and execute PHP files

### Recommended (Should Have)
- [ ] ✅ PHP 8.0 or higher
- [ ] ✅ .htaccess support
- [ ] ✅ Can set file permissions
- [ ] ✅ DNS properly configured

### Known Issues to Address
List any problems discovered:
1. ________________________________
2. ________________________________
3. ________________________________

---

## Troubleshooting Common Issues

### Issue: Cannot access cPanel
**Solutions:**
- Check email for cPanel credentials
- Use OVH Manager to reset cPanel password
- Contact OVH support

### Issue: PHP version too old
**Solutions:**
- Log in to cPanel
- Look for "Select PHP Version" or "MultiPHP Manager"
- Select PHP 8.0 or 8.1
- Save changes
- Or contact OVH support to upgrade

### Issue: Subdomain not working
**Solutions:**
- Verify subdomain is created in cPanel/OVH Manager
- Check DNS has propagated (use https://dnschecker.org)
- Wait 24-48 hours for DNS propagation
- Clear browser cache

### Issue: SSL not working
**Solutions:**
- Enable Let's Encrypt in cPanel SSL section
- Force SSL issuance for subdomain
- Wait 10-15 minutes for SSL provisioning
- Contact OVH support if still failing

### Issue: Outbound connections blocked
**Solutions:**
- Check if firewall is blocking
- Verify cURL extension is enabled
- Contact OVH support - they may need to whitelist Groq API domain
- Check if hosting plan allows external API calls

---

## Support Resources

### OVH Documentation
- **OVH Guides:** https://docs.ovh.com/
- **Web Hosting Guides:** https://docs.ovh.com/us/en/hosting/

### Contact OVH Support
- **Support Portal:** https://www.ovh.com/manager/
- **Create ticket:** Through OVH Manager
- **Phone:** Check OVH website for support phone number
- **Community:** https://community.ovh.com/

### What to Tell OVH Support
If you need to contact support, explain:
- "I need to host a PHP application that makes API calls to external services (Groq API)"
- "I need PHP 7.4+ with cURL and JSON extensions"
- "I need HTTPS/SSL for my subdomain ai.smarthub.com.tn"
- Mention your hosting plan name

---

## Completion Sign-Off

**Verification completed by:** ______________________________

**Date:** ______________

**Overall Status:**
- [ ] ✅ All critical requirements met - Ready for Phase 2
- [ ] ⚠️ Some issues found - Need to resolve before Phase 2
- [ ] ❌ Major blockers - Need OVH support assistance

**Notes for Claude Code:**
________________________________
________________________________
________________________________

---

## Next Steps

Once all critical requirements are verified:
1. ✅ Complete SmartHub information brief
2. ✅ Set up Groq account and get API key
3. ✅ Prepare branding assets
4. ✅ Ready to begin Phase 2 development!

---

**Remember:** This verification ensures smooth development and deployment. Taking time to verify now prevents problems later.
