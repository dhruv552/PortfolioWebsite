# GitHub Auto-Sync Setup Guide

This guide provides multiple ways to automatically sync your Portfolio Website changes to GitHub.

## 🚀 Quick Setup

### Option 1: Auto-Sync (Recommended for Development)
**Automatically watches for changes and pushes them every 30 seconds**

1. **Start Auto-Sync:**
   ```powershell
   .\auto-sync.ps1
   ```
   
2. **Or use VS Code:**
   - Press `Ctrl+Shift+P`
   - Type "Tasks: Run Task"
   - Select "Start Auto-Sync"

3. **Stop Auto-Sync:**
   - Press `Ctrl+C` in the terminal

### Option 2: Quick Manual Sync
**One-click sync for immediate updates**

1. **Double-click:** `quick-sync.bat`
2. **Or use VS Code:**
   - Press `Ctrl+Shift+P`
   - Type "Tasks: Run Task" 
   - Select "Quick Sync to GitHub"

### Option 3: VS Code Integration
**Built into your editor workflow**

Available VS Code tasks:
- **Quick Sync to GitHub** - Instant sync with auto-generated commit message
- **Start Auto-Sync** - Begin automatic watching
- **Custom Commit & Push** - Sync with custom commit message
- **Git Status** - Check current changes

## 🛠️ How It Works

### Auto-Sync Features:
- ✅ Watches for file changes every 30 seconds
- ✅ Automatically adds, commits, and pushes changes
- ✅ Uses timestamped commit messages
- ✅ Error handling and retry logic
- ✅ Visual feedback with emojis and colors

### Quick-Sync Features:
- ✅ One-click operation
- ✅ Timestamped commit messages
- ✅ Error checking at each step
- ✅ Success/failure feedback

## 📝 Usage Scenarios

### During Active Development:
1. Start auto-sync: `.\auto-sync.ps1`
2. Work on your code normally
3. Changes automatically sync to GitHub every 30 seconds

### For Quick Updates:
1. Make your changes
2. Double-click `quick-sync.bat`
3. Changes immediately sync to GitHub

### Custom Commit Messages:
1. Press `Ctrl+Shift+P` in VS Code
2. Run "Custom Commit & Push" task
3. Enter your custom commit message

## ⚙️ Configuration

### Change Auto-Sync Interval:
```powershell
.\auto-sync.ps1 -DelaySeconds 60  # Check every 60 seconds
```

### Custom Commit Message:
```powershell
.\auto-sync.ps1 -CommitMessage "Feature: New contact form"
```

## 🔧 Troubleshooting

### PowerShell Execution Policy Error:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Git Authentication Issues:
- Ensure you're logged into GitHub in VS Code
- Or setup SSH keys for authentication

### Permission Issues:
- Run VS Code as Administrator if needed
- Check file permissions in the project folder

## 🎯 Best Practices

1. **Use Auto-Sync during active development** - Set it and forget it
2. **Use Quick-Sync for important updates** - When you want immediate sync
3. **Use Custom Commit for releases** - When you need descriptive messages
4. **Check Git Status regularly** - To see what will be committed

## 📋 Commands Reference

| Command | Description |
|---------|-------------|
| `.\auto-sync.ps1` | Start automatic sync |
| `.\quick-sync.bat` | Manual one-click sync |
| `git status` | Check current changes |
| `git log --oneline -5` | See recent commits |

---

**Note:** All scripts automatically commit to the `main` branch. Make sure this is your desired branch before using.