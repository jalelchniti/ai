# 🚀 Deployment Guide - FTP Manual Upload

## 📍 Deployment URL
**www.smarthub.com.tn/cours/arabe/lettres/4/**

---

## ⚙️ Configuration

The app has been configured for subdirectory deployment:

- **Vite Base Path:** `/cours/arabe/lettres/4/`
- **React Router Basename:** `/cours/arabe/lettres/4`

All asset paths and routing will work correctly in the subdirectory.

---

## 📦 Build for Production

1. **Build the production version:**
   ```bash
   npm run build
   ```

2. **Build output location:**
   ```
   dist/
   ```

---

## 📤 FTP Upload Instructions

### Step 1: Locate the `dist` folder
After running `npm run build`, you'll find the `dist` folder at:
```
dist/
```

### Step 2: Connect to FTP
Using your FTP client (FileZilla, Cyberduck, WinSCP, etc.):

- **Host:** Your FTP host (e.g., `ftp.smarthub.com.tn`)
- **Username:** Your FTP username
- **Password:** Your FTP password
- **Port:** Usually 21 (or 22 for SFTP)

### Step 3: Navigate to the target directory
On the server, navigate to:
```
/public_html/cours/arabe/lettres/4/
```
(or the equivalent path on your server)

**Important:** If the folder doesn't exist, create it:
```
cours/
  └── arabe/
      └── lettres/
          └── 4/
```

### Step 4: Upload the contents
**Upload ALL files and folders from inside the `dist` folder:**

```
dist/
  ├── index.html          ← Upload this
  ├── assets/             ← Upload this folder
  │   ├── index-xxx.css
  │   └── index-xxx.js
  ├── resources/          ← Upload this folder (contains all markdown files)
  │   └── bac/
  │       └── lettres/
  │           ├── module 1/
  │           └── module 2/
  └── vite.svg            ← Upload this
```

**⚠️ IMPORTANT:**
- Upload the **contents** of the `dist` folder, NOT the `dist` folder itself
- Make sure to upload the `resources` folder with all markdown files
- Preserve the folder structure

### Step 5: Verify Upload
Check that your server directory structure looks like:
```
/public_html/cours/arabe/lettres/4/
  ├── index.html
  ├── assets/
  │   ├── index-BSNtaVND.css
  │   └── index-C9B7ZpA8.js
  ├── resources/
  │   └── bac/
  │       └── lettres/
  │           ├── module 1/
  │           └── module 2/
  └── vite.svg
```

---

## 🌐 Access Your App

After upload, visit:
```
https://www.smarthub.com.tn/cours/arabe/lettres/4/
```

---

## ✅ Post-Deployment Checklist

- [ ] Home page loads correctly
- [ ] Module 1 page accessible
- [ ] Module 2 page accessible
- [ ] Content files render properly
- [ ] TTS (Text-to-Speech) works
- [ ] Newsletter form displays
- [ ] Social media buttons link correctly (Google, Facebook, Instagram)
- [ ] All images and assets load
- [ ] Mobile responsive design works
- [ ] Navigation works properly

---

## 🔧 Server Configuration (Optional)

### For Apache Servers
If you encounter routing issues (404 on page refresh), create a `.htaccess` file in `/cours/arabe/lettres/4/`:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /cours/arabe/lettres/4/
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /cours/arabe/lettres/4/index.html [L]
</IfModule>
```

### For Nginx Servers
Add this to your nginx configuration:

```nginx
location /cours/arabe/lettres/4/ {
    try_files $uri $uri/ /cours/arabe/lettres/4/index.html;
}
```

---

## 🔄 Updating the App

When you make changes:

1. **Update the code** in `src/`
2. **Rebuild:**
   ```bash
   npm run build
   ```
3. **Re-upload the `dist` contents** via FTP
   - You can upload only changed files if you know which ones were modified
   - Or upload everything to be safe

---

## 📊 Build Output Size

Current build size:
- **HTML:** 0.53 kB
- **CSS:** 49.99 kB (7.84 kB gzipped)
- **JS:** 426.05 kB (131.22 kB gzipped)
- **Total (excluding resources):** ~476 kB
- **Resources folder:** ~2-3 MB (markdown files)

---

## 🐛 Troubleshooting

### Issue: Page shows 404 on refresh
**Solution:** Add `.htaccess` or nginx config (see above)

### Issue: CSS/JS not loading
**Solution:**
- Verify the `base` path in `vite.config.js` matches your server path
- Check file permissions on server (should be 644 for files, 755 for folders)

### Issue: Markdown files not loading
**Solution:**
- Ensure the `resources` folder was uploaded
- Check file paths are correct
- Verify MIME type for `.md` files is allowed on server

### Issue: Images or assets missing
**Solution:**
- Make sure to upload the entire `assets` folder
- Check that asset URLs in the code use relative paths

---

## 📞 Support

For deployment issues, contact:
- **Technical Support:** Your hosting provider
- **App Developer:** SmartHub Tunisia
- **Email:** contact@smarthub.com.tn
- **WhatsApp:** 99 730 144
- **Phone:** 99 456 059
- **Website:** www.smarthub.com.tn

---

**Last Updated:** November 16, 2025
**App Version:** 1.0.0
**Deployment Path:** `/cours/arabe/lettres/4/`
