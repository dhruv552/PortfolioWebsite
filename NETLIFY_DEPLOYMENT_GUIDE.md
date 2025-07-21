# Netlify Auto-Deployment Setup Guide

## 🚀 Setting Up Automatic Deployments from GitHub to Netlify

### Step 1: Connect Your GitHub Repository to Netlify

1. **Login to Netlify**: Go to [netlify.com](https://netlify.com) and sign in with your GitHub account
2. **New Site from Git**: Click "New site from Git" on your dashboard
3. **Choose GitHub**: Select GitHub as your Git provider
4. **Select Repository**: Choose your `PortfolioWebsite` repository
5. **Configure Build Settings**:
   - **Branch to deploy**: `main`
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`

### Step 2: Environment Variables (if needed)
If you have any environment variables for EmailJS or Supabase:
1. Go to Site Settings → Environment Variables
2. Add your variables (e.g., `VITE_EMAILJS_SERVICE_ID`, `VITE_SUPABASE_URL`, etc.)

### Step 3: Enable Auto-Deploy
✅ **Auto-deploy is enabled by default!** 
- Every time you push to the `main` branch, Netlify will automatically:
  1. Pull the latest code from GitHub
  2. Run `npm install`
  3. Run `npm run build`
  4. Deploy the `dist` folder to your live site

### Step 4: Test the Auto-Deployment
1. Make any small change in VS Code (e.g., update a text in your portfolio)
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Test auto-deployment"
   git push origin main
   ```
3. Check your Netlify dashboard - you should see a new deployment starting automatically

## 🔄 Your Workflow Moving Forward

1. **Edit** your code in VS Code
2. **Save** your changes
3. **Commit** to Git: `git add . && git commit -m "Your message"`
4. **Push** to GitHub: `git push origin main`
5. **Watch** Netlify automatically deploy your changes (usually takes 1-3 minutes)

## 📱 Netlify Features You Get

- ✅ **Automatic HTTPS**
- ✅ **Global CDN**
- ✅ **Form Handling** (already configured in your netlify.toml)
- ✅ **Custom Domain** support
- ✅ **Deploy Previews** for pull requests
- ✅ **Rollback** capability

## 🔧 Troubleshooting

If builds fail:
1. Check the build logs in Netlify dashboard
2. Ensure all dependencies are in `package.json`
3. Test locally with `npm run build`

## 📧 Contact Form

Your contact form is already configured to work with Netlify Forms.
Forms will be sent to: dhruvagrawal552@gmail.com