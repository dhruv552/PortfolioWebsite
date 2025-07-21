# 🚀 GitHub Auto-Sync Setup

This document provides you with easy commands to automatically sync your portfolio changes to GitHub.

## Quick Commands for Daily Use

### 1. **Quick Sync** (Most Common)
```bash
git add . && git commit -m "Update portfolio content" && git push origin main
```

### 2. **Sync with Custom Message**
```bash
git add . && git commit -m "Your custom message here" && git push origin main
```

### 3. **Check Status Before Sync**
```bash
git status
```

## Automated Scripts

### Windows PowerShell Script (Recommended)
Create a file called `sync.ps1` in your project root with the script below, then run:
```powershell
.\sync.ps1 "Your commit message"
```

### Batch File for Windows
Create a file called `sync.bat` for one-click syncing:
```batch
@echo off
git add .
git commit -m "Portfolio update - %date% %time%"
git push origin main
echo Portfolio synced to GitHub successfully!
pause
```

## VS Code Integration

### Method 1: Using VS Code Source Control
1. Open VS Code
2. Go to Source Control tab (Ctrl+Shift+G)
3. Stage changes by clicking the "+" next to files
4. Enter commit message
5. Click "Commit" then "Sync Changes"

### Method 2: VS Code Terminal
1. Open terminal in VS Code (Ctrl+`)
2. Run: `git add . && git commit -m "Update" && git push`

## GitHub Desktop (GUI Option)

If you prefer a visual interface:
1. Download GitHub Desktop
2. Clone your repository
3. Make changes in your code editor
4. Use GitHub Desktop to commit and push changes

## Current Repository Status

✅ **Repository**: https://github.com/dhruv552/PortfolioWebsite.git  
✅ **Branch**: main  
✅ **Remote**: origin  
✅ **Last Sync**: Portfolio finalization with analysis report  

## Workflow Recommendations

### Daily Development Workflow:
1. Make your changes in code
2. Test locally: `npm run dev`
3. Quick sync: `git add . && git commit -m "Description of changes" && git push`

### Before Major Changes:
1. Create a backup branch: `git checkout -b backup-$(date +%Y%m%d)`
2. Switch back to main: `git checkout main`
3. Make your changes
4. Sync as usual

### Emergency Recovery:
If something goes wrong, you can always:
```bash
git log --oneline  # See recent commits
git reset --hard HEAD~1  # Undo last commit (if needed)
```

## Automated Deployment

Since your portfolio is connected to GitHub, you can set up automatic deployment:

### Option 1: Netlify (Recommended)
1. Connect your GitHub repo to Netlify
2. Every push to `main` automatically deploys
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### Option 2: Vercel
1. Import your GitHub repository
2. Automatic deployments on every push
3. Zero configuration needed

## Quick Reference Commands

| Action | Command |
|--------|---------|
| Check status | `git status` |
| Quick sync | `git add . && git commit -m "Update" && git push` |
| View history | `git log --oneline` |
| Create branch | `git checkout -b new-branch-name` |
| Switch branch | `git checkout main` |
| Pull latest | `git pull origin main` |

---

**Next Steps:**
1. Choose your preferred sync method above
2. Set up automatic deployment (Netlify recommended)
3. Start making updates - they'll automatically sync to GitHub!