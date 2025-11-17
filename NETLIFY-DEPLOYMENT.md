# 🚀 Netlify Deployment Guide - BAC Lettres Arabe V2

## 📋 Quick Start

This guide will help you deploy the BAC Lettres Arabe application to Netlify.

---

## 🔧 Prerequisites

- Git repository pushed to GitHub
- Netlify account (free tier is sufficient)
- Node.js 18+ installed locally (for testing)

---

## 📦 Deployment Methods

### Method 1: Deploy via Netlify UI (Recommended)

#### Step 1: Connect to Netlify

1. Go to [https://app.netlify.com](https://app.netlify.com)
2. Sign in or create an account
3. Click **"Add new site"** → **"Import an existing project"**

#### Step 2: Connect to Git Provider

1. Choose **GitHub** (or your Git provider)
2. Authorize Netlify to access your repositories
3. Select the repository: `jalelchniti/ai`
4. Select the branch: `claude/bac-lettres-arabe-v2-01M9ho6SjBCuKVjyDjZi66sz`

#### Step 3: Configure Build Settings

Netlify should auto-detect the settings from `netlify.toml`, but verify:

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Branch to deploy:** `claude/bac-lettres-arabe-v2-01M9ho6SjBCuKVjyDjZi66sz`

#### Step 4: Deploy

1. Click **"Deploy site"**
2. Wait for the build to complete (2-3 minutes)
3. Your site will be live at: `https://random-name-12345.netlify.app`

#### Step 5: Customize Domain (Optional)

1. Go to **Site settings** → **Domain management**
2. Click **"Add custom domain"**
3. Enter your domain or use a custom Netlify subdomain
4. Suggested: `bac-lettres-arabe.netlify.app`

---

### Method 2: Deploy via Netlify CLI

#### Step 1: Install Netlify CLI

```bash
npm install -g netlify-cli
```

#### Step 2: Login to Netlify

```bash
netlify login
```

#### Step 3: Initialize Netlify

```bash
netlify init
```

Follow the prompts:
- Create & configure a new site
- Choose your team
- Site name: `bac-lettres-arabe` (or your preferred name)

#### Step 4: Deploy

```bash
# Build the project
npm run build

# Deploy to production
netlify deploy --prod
```

---

## ✅ Post-Deployment Checklist

After deployment, verify:

- [ ] Homepage loads at your Netlify URL
- [ ] Module 1 page accessible (`/module-1`)
- [ ] Module 2 page accessible (`/module-2`)
- [ ] Content viewer works (click on any file)
- [ ] Markdown files render correctly
- [ ] Timetable page accessible (`/offre-4-matieres`)
- [ ] Navigation works properly
- [ ] Mobile responsive design works
- [ ] RTL Arabic text displays correctly
- [ ] No 404 errors when refreshing pages
- [ ] All assets (CSS, JS, images) load correctly

---

## 🔄 Continuous Deployment

Netlify automatically deploys when you push to the connected branch:

1. Make changes to your code
2. Commit and push to `claude/bac-lettres-arabe-v2-01M9ho6SjBCuKVjyDjZi66sz`
3. Netlify automatically rebuilds and deploys
4. Check the deploy log in Netlify dashboard

---

## 🎨 Environment Variables (if needed)

Currently, this app doesn't use environment variables, but if you need them:

1. Go to **Site settings** → **Environment variables**
2. Add variables as needed
3. Redeploy for changes to take effect

---

## 📊 Build Configuration

The app is configured via `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

**What this does:**
- Builds the React app with Vite
- Publishes the `dist` folder
- Redirects all routes to `index.html` for client-side routing
- Sets cache headers for optimal performance

---

## 🌐 Custom Domain Setup

### Option 1: Netlify Subdomain

1. **Site settings** → **Domain management**
2. **Change site name**
3. Choose: `bac-lettres-arabe.netlify.app`

### Option 2: Custom Domain

1. **Site settings** → **Domain management**
2. **Add custom domain**
3. Enter your domain (e.g., `bac-arabe.smarthub.com.tn`)
4. Follow DNS configuration instructions
5. Add CNAME or A record to your DNS provider

**Example DNS Configuration:**
```
Type: CNAME
Name: bac-arabe
Value: your-site-name.netlify.app
```

---

## 🐛 Troubleshooting

### Issue: Build fails with "command not found"

**Solution:** Ensure `package.json` has the correct build script:
```json
"scripts": {
  "build": "vite build"
}
```

### Issue: 404 on page refresh

**Solution:** Already configured! The `netlify.toml` and `public/_redirects` handle this.

### Issue: Markdown files not loading

**Solution:**
- Check that `public/resources` folder is in the repository
- Verify the build includes the `resources` folder in `dist`

### Issue: Assets not loading (404 for CSS/JS)

**Solution:**
- Verify `base: '/'` in `vite.config.js`
- Clear Netlify cache: **Deploys** → **Trigger deploy** → **Clear cache and deploy**

### Issue: Arabic text not displaying correctly

**Solution:** Ensure proper UTF-8 encoding in your markdown files and check font loading.

---

## 📈 Performance Optimization

### Already Configured:
- ✅ Asset caching (1 year for CSS/JS)
- ✅ Markdown caching (1 hour)
- ✅ Security headers
- ✅ Gzip/Brotli compression (automatic)
- ✅ CDN delivery (automatic)

### Additional Optimizations:
1. Enable **Asset Optimization** in Netlify (Site settings → Build & deploy → Post processing)
2. Enable **Pretty URLs** (remove .html extensions)
3. Enable **HTTPS** (automatic with custom domains)

---

## 📱 Deployment Status Badge

Add to your README:

```markdown
[![Netlify Status](https://api.netlify.com/api/v1/badges/YOUR-SITE-ID/deploy-status)](https://app.netlify.com/sites/YOUR-SITE-NAME/deploys)
```

Replace `YOUR-SITE-ID` and `YOUR-SITE-NAME` with your actual values.

---

## 🔐 Security

Configured security headers:
- `X-Frame-Options: DENY` - Prevents clickjacking
- `X-Content-Type-Options: nosniff` - Prevents MIME sniffing
- `Referrer-Policy: no-referrer-when-downgrade` - Controls referrer info

---

## 📞 Support

**Netlify Documentation:** [https://docs.netlify.com](https://docs.netlify.com)

**Common Issues:**
- [Build troubleshooting](https://docs.netlify.com/configure-builds/troubleshooting-tips/)
- [Custom domains](https://docs.netlify.com/domains-https/custom-domains/)
- [Redirects and rewrites](https://docs.netlify.com/routing/redirects/)

---

## 🎯 Deployment Summary

**Your app will be accessible at:**
- Production: `https://your-site-name.netlify.app`
- Custom domain: `https://your-custom-domain.com` (if configured)

**Key Features:**
- ✅ Automatic deployments on git push
- ✅ Free SSL certificate
- ✅ Global CDN
- ✅ Instant rollback capability
- ✅ Deploy previews for pull requests
- ✅ Environment variable support
- ✅ Form handling (if needed later)
- ✅ Serverless functions (if needed later)

---

**Last Updated:** November 17, 2025
**App Version:** 2.0 - BAC Lettres Arabe
**Branch:** `claude/bac-lettres-arabe-v2-01M9ho6SjBCuKVjyDjZi66sz`
**Deployment Platform:** Netlify
