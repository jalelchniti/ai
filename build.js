#!/usr/bin/env node

/**
 * SmartHub AI Agents - Build Script
 *
 * This script creates a production-ready dist/ folder for deployment to OVH hosting.
 * It copies all necessary files while excluding development and documentation files.
 */

const fs = require('fs');
const path = require('path');

// ANSI color codes for terminal output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  blue: '\x1b[34m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  cyan: '\x1b[36m'
};

const log = {
  info: (msg) => console.log(`${colors.blue}ℹ${colors.reset} ${msg}`),
  success: (msg) => console.log(`${colors.green}✓${colors.reset} ${msg}`),
  warn: (msg) => console.log(`${colors.yellow}⚠${colors.reset} ${msg}`),
  error: (msg) => console.log(`${colors.red}✗${colors.reset} ${msg}`),
  step: (msg) => console.log(`${colors.cyan}▶${colors.reset} ${msg}`)
};

// Configuration
const config = {
  distDir: 'dist',
  excludePatterns: [
    '.git',
    'node_modules',
    'dist',
    '.gitignore',
    'package.json',
    'package-lock.json',
    'build.js',
    '.DS_Store',
    'Thumbs.db',
    '*.md',  // Exclude all markdown documentation
    '*.pdf', // Exclude PDF teacher manuals (not needed in production)
    'outlines', // Exclude outline directory
    '.env',
    '.vscode',
    '.idea'
  ],
  includeFiles: [
    'english-agent',
    'parent-chat',
    'teacher-chat',
    'assets'
  ]
};

/**
 * Check if a file/folder should be excluded
 */
function shouldExclude(itemPath, itemName) {
  return config.excludePatterns.some(pattern => {
    if (pattern.includes('*')) {
      const ext = pattern.replace('*', '');
      return itemName.endsWith(ext);
    }
    return itemName === pattern || itemPath.includes(`/${pattern}/`);
  });
}

/**
 * Recursively copy directory
 */
function copyDirectory(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const items = fs.readdirSync(src);

  items.forEach(item => {
    const srcPath = path.join(src, item);
    const destPath = path.join(dest, item);

    // Skip excluded files/folders
    if (shouldExclude(srcPath, item)) {
      return;
    }

    const stat = fs.statSync(srcPath);

    if (stat.isDirectory()) {
      copyDirectory(srcPath, destPath);
    } else if (stat.isFile()) {
      fs.copyFileSync(srcPath, destPath);
    }
  });
}

/**
 * Create landing page index.html for root
 */
function createLandingPage() {
  const landingHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="SmartHub AI Support - Educational chat assistants for teachers, parents, and students">
    <title>SmartHub AI Support</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }

        .container {
            max-width: 900px;
            background: white;
            border-radius: 20px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            overflow: hidden;
        }

        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 40px 30px;
            text-align: center;
        }

        .header h1 {
            font-size: 2.5em;
            margin-bottom: 10px;
        }

        .header p {
            font-size: 1.2em;
            opacity: 0.9;
        }

        .content {
            padding: 40px 30px;
        }

        .intro {
            text-align: center;
            margin-bottom: 40px;
            color: #333;
            font-size: 1.1em;
            line-height: 1.6;
        }

        .agents-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin-bottom: 30px;
        }

        .agent-card {
            background: #f8f9fa;
            border-radius: 12px;
            padding: 30px 20px;
            text-align: center;
            transition: transform 0.3s, box-shadow 0.3s;
            border: 2px solid transparent;
        }

        .agent-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 30px rgba(0,0,0,0.15);
            border-color: #667eea;
        }

        .agent-card h3 {
            color: #667eea;
            font-size: 1.5em;
            margin-bottom: 15px;
        }

        .agent-card p {
            color: #666;
            margin-bottom: 20px;
            line-height: 1.5;
        }

        .agent-card .btn {
            display: inline-block;
            padding: 12px 30px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            text-decoration: none;
            border-radius: 25px;
            font-weight: 600;
            transition: transform 0.2s;
        }

        .agent-card .btn:hover {
            transform: scale(1.05);
        }

        .footer {
            text-align: center;
            padding: 20px;
            background: #f8f9fa;
            color: #666;
        }

        .footer a {
            color: #667eea;
            text-decoration: none;
        }

        .footer a:hover {
            text-decoration: underline;
        }

        @media (max-width: 768px) {
            .header h1 {
                font-size: 2em;
            }

            .agents-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🤖 SmartHub AI Support</h1>
            <p>Your 24/7 Educational Assistants</p>
        </div>

        <div class="content">
            <div class="intro">
                <p>Welcome to SmartHub's AI-powered support system! Choose the assistant that best fits your needs:</p>
            </div>

            <div class="agents-grid">
                <div class="agent-card">
                    <h3>📚 English Learning</h3>
                    <p>Interactive English learning assistant for students in grades 6-9. Get help with grammar, writing, and reading.</p>
                    <a href="english-agent/app/" class="btn">Start Learning</a>
                </div>

                <div class="agent-card">
                    <h3>👨‍🏫 Teacher Support</h3>
                    <p>Specialized support for independent teachers. Learn about our facilities, booking, and partnership opportunities.</p>
                    <a href="teacher-chat/" class="btn">Get Support</a>
                </div>

                <div class="agent-card">
                    <h3>👨‍👩‍👧 Parent Consultation</h3>
                    <p>Educational guidance for parents and families. Get personalized advice for your child's learning journey.</p>
                    <a href="parent-chat/" class="btn">Get Guidance</a>
                </div>
            </div>
        </div>

        <div class="footer">
            <p>&copy; 2025 SmartHub - ELMAOUIA ET.CO | Tunis City Center</p>
            <p><a href="https://smarthub.com.tn" target="_blank">Visit SmartHub.com.tn</a></p>
        </div>
    </div>
</body>
</html>`;

  fs.writeFileSync(path.join(config.distDir, 'index.html'), landingHTML);
}

/**
 * Create .htaccess file for Apache server configuration
 */
function createHtaccess() {
  const htaccess = `# SmartHub AI Agents - Apache Configuration
# For OVH Shared Hosting

# Enable HTTPS (if not already enforced at server level)
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# PHP Configuration
<IfModule mod_php7.c>
    php_value upload_max_filesize 10M
    php_value post_max_size 10M
    php_value max_execution_time 30
    php_value max_input_time 30
</IfModule>

# Security Headers
<IfModule mod_headers.c>
    Header set X-Content-Type-Options "nosniff"
    Header set X-Frame-Options "SAMEORIGIN"
    Header set X-XSS-Protection "1; mode=block"
    Header set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>

# Prevent access to config files
<FilesMatch "config\\.php$">
    Order Allow,Deny
    Deny from all
</FilesMatch>

# Enable GZIP compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>

# Browser caching
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
</IfModule>

# Custom error pages (optional - create these if needed)
# ErrorDocument 404 /404.html
# ErrorDocument 500 /500.html
`;

  fs.writeFileSync(path.join(config.distDir, '.htaccess'), htaccess);
}

/**
 * Create README for deployment
 */
function createDeploymentReadme() {
  const readme = `# SmartHub AI Agents - Deployment Package

## 📦 What's in this folder?

This is the production-ready build of SmartHub AI Agents, ready for deployment to your OVH hosting.

### Directory Structure:
\`\`\`
dist/
├── index.html              # Landing page (choose your agent)
├── .htaccess              # Apache configuration for OVH
├── english-agent/         # English Learning Assistant
├── parent-chat/           # Parent/Learner consultation
├── teacher-chat/          # Teacher support
└── assets/                # Shared CSS/JS/images
\`\`\`

## 🚀 Deployment Instructions

### Option 1: Upload via FTP (Recommended)

1. **Connect to your OVH server:**
   - Host: ftp.your-domain.com
   - Username: your-ftp-username
   - Password: your-ftp-password
   - Port: 21

2. **Navigate to your subdomain folder:**
   - Go to: \`/ai\` (or wherever ai.smarthub.com.tn points to)

3. **Upload all files from this dist/ folder:**
   - Upload the entire contents maintaining the folder structure
   - **IMPORTANT:** Upload the contents of \`dist/\`, not the \`dist/\` folder itself

4. **Set file permissions:**
   - PHP files: 644
   - Config files: 600 (more secure)
   - Folders: 755

### Option 2: Upload via cPanel File Manager

1. Login to your OVH cPanel
2. Go to File Manager
3. Navigate to your \`ai\` subdomain directory
4. Click "Upload" and select all files from this dist/ folder
5. Extract if uploaded as zip
6. Set permissions as listed above

## ⚙️ Configuration

### IMPORTANT: Before Testing

1. **Add your Groq API key** to these files:
   - \`english-agent/app/config.php\`
   - \`parent-chat/config.php\`
   - \`teacher-chat/config.php\`

2. **Update SmartHub information** in system prompts if needed

## ✅ Post-Deployment Checklist

After uploading, verify:

- [ ] Visit https://ai.smarthub.com.tn - landing page loads
- [ ] Test English Agent: https://ai.smarthub.com.tn/english-agent/app/
- [ ] Test Teacher Chat: https://ai.smarthub.com.tn/teacher-chat/
- [ ] Test Parent Chat: https://ai.smarthub.com.tn/parent-chat/
- [ ] Check browser console for errors (F12)
- [ ] Test from mobile device
- [ ] Verify HTTPS is working (padlock icon)
- [ ] Check that all chats respond correctly

## 🔧 Troubleshooting

### Chat not responding?
- Check that config.php files have correct Groq API key
- Verify file permissions (PHP files need to be readable)
- Check PHP error logs in cPanel

### 404 errors?
- Ensure .htaccess file was uploaded
- Check that folder structure is correct
- Verify subdomain points to correct directory

### Style/layout broken?
- Clear browser cache
- Check that assets/ folder uploaded correctly
- Verify all CSS/JS files are present

## 📞 Support

For technical issues:
- Check server error logs in cPanel
- Verify PHP version is 7.4 or higher
- Ensure Groq API key is valid and has available quota

## 🔒 Security Notes

- config.php files are protected by .htaccess
- Keep your Groq API key secure
- Monitor API usage to stay within free tier
- Regular backups recommended

---

**Deployed from GitHub:** https://github.com/jalelchniti/ai
**Build Date:** ${new Date().toISOString().split('T')[0]}
**SmartHub:** smarthub.com.tn
`;

  fs.writeFileSync(path.join(config.distDir, 'DEPLOYMENT_README.txt'), readme);
}

/**
 * Main build function
 */
function build() {
  console.log('\n' + '='.repeat(60));
  log.step('SmartHub AI Agents - Build Process');
  console.log('='.repeat(60) + '\n');

  try {
    // Step 1: Clean dist directory
    log.step('Step 1: Cleaning previous build...');
    if (fs.existsSync(config.distDir)) {
      fs.rmSync(config.distDir, { recursive: true, force: true });
      log.success('Removed old dist/ folder');
    }

    // Step 2: Create dist directory
    log.step('Step 2: Creating dist/ directory...');
    fs.mkdirSync(config.distDir, { recursive: true });
    log.success('Created dist/ folder');

    // Step 3: Copy application files
    log.step('Step 3: Copying application files...');
    config.includeFiles.forEach(item => {
      const srcPath = path.join(__dirname, item);
      const destPath = path.join(config.distDir, item);

      if (fs.existsSync(srcPath)) {
        const stat = fs.statSync(srcPath);
        if (stat.isDirectory()) {
          copyDirectory(srcPath, destPath);
          log.success(`Copied ${item}/`);
        } else {
          fs.copyFileSync(srcPath, destPath);
          log.success(`Copied ${item}`);
        }
      } else {
        log.warn(`Skipped ${item} (not found)`);
      }
    });

    // Step 4: Create landing page
    log.step('Step 4: Creating landing page...');
    createLandingPage();
    log.success('Created index.html');

    // Step 5: Create .htaccess
    log.step('Step 5: Creating Apache configuration...');
    createHtaccess();
    log.success('Created .htaccess');

    // Step 6: Create deployment readme
    log.step('Step 6: Creating deployment documentation...');
    createDeploymentReadme();
    log.success('Created DEPLOYMENT_README.txt');

    // Step 7: Calculate build size
    log.step('Step 7: Calculating build size...');
    let totalSize = 0;
    let fileCount = 0;

    function calculateSize(dir) {
      const items = fs.readdirSync(dir);
      items.forEach(item => {
        const itemPath = path.join(dir, item);
        const stat = fs.statSync(itemPath);
        if (stat.isDirectory()) {
          calculateSize(itemPath);
        } else {
          totalSize += stat.size;
          fileCount++;
        }
      });
    }

    calculateSize(config.distDir);
    const sizeMB = (totalSize / (1024 * 1024)).toFixed(2);
    log.success(`Build size: ${sizeMB} MB (${fileCount} files)`);

    // Success summary
    console.log('\n' + '='.repeat(60));
    log.success('BUILD COMPLETE!');
    console.log('='.repeat(60));
    console.log('');
    log.info(`Build location: ${colors.cyan}${path.resolve(config.distDir)}${colors.reset}`);
    log.info(`Total size: ${colors.cyan}${sizeMB} MB${colors.reset}`);
    log.info(`Files copied: ${colors.cyan}${fileCount}${colors.reset}`);
    console.log('');
    log.step('Next steps:');
    console.log('  1. Review DEPLOYMENT_README.txt in the dist/ folder');
    console.log('  2. Add your Groq API key to config.php files');
    console.log('  3. Upload dist/ contents to ai.smarthub.com.tn via FTP/cPanel');
    console.log('  4. Test all agents after deployment');
    console.log('');
    console.log('='.repeat(60) + '\n');

  } catch (error) {
    console.log('');
    log.error(`Build failed: ${error.message}`);
    console.log('');
    process.exit(1);
  }
}

// Run build
build();
