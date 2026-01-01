# Deployment Guide

## Quick Deploy Options

### Option 1: GitHub Pages (Recommended - Free)

1. **Create a GitHub repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/selenium-testing-website.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under "Source", select **main** branch and **/ (root)** folder
   - Click **Save**
   - Your site will be live at: `https://yourusername.github.io/selenium-testing-website`

### Option 2: Netlify (Easiest - Free)

1. **Via Drag & Drop:**
   - Go to [app.netlify.com/drop](https://app.netlify.com/drop)
   - Drag your entire folder
   - Get instant URL!

2. **Via GitHub:**
   - Connect your GitHub account
   - Select repository
   - Auto-deploys on every push

### Option 3: Vercel (Free)

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

### Option 4: Surge.sh (Free)

1. Install Surge:
   ```bash
   npm install -g surge
   ```

2. Deploy:
   ```bash
   surge
   ```
   - Enter your email
   - Choose a domain (e.g., `selenium-testing.surge.sh`)
   - Done!

### Option 5: Traditional Hosting

Upload all files via FTP to your web hosting:
- All `.html` files
- `styles.css`
- `script.js`

## Testing Locally

Before deploying, test locally:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server

# Using PHP
php -S localhost:8000
```

Visit: `http://localhost:8000`

## Important Notes

✅ **No build process needed** - Just static files  
✅ **No dependencies** - Works out of the box  
✅ **Works offline** - After initial load  
✅ **Mobile responsive** - Works on all devices  

## Custom Domain

Most free hosting services allow custom domains:
- GitHub Pages: Settings → Pages → Custom domain
- Netlify: Domain settings → Add custom domain
- Vercel: Project settings → Domains

## Need Help?

- GitHub Pages: [docs.github.com/pages](https://docs.github.com/pages)
- Netlify: [docs.netlify.com](https://docs.netlify.com)
- Vercel: [vercel.com/docs](https://vercel.com/docs)



