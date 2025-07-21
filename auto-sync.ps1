# Auto-sync script for Portfolio Website
# This script watches for file changes and automatically commits and pushes to GitHub

param(
    [string]$CommitMessage = "Auto-sync: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')",
    [int]$DelaySeconds = 30
)

Write-Host "🚀 Starting auto-sync for Portfolio Website..." -ForegroundColor Green
Write-Host "📁 Watching directory: $(Get-Location)" -ForegroundColor Cyan
Write-Host "⏱️  Delay between checks: $DelaySeconds seconds" -ForegroundColor Cyan
Write-Host "💬 Default commit message: $CommitMessage" -ForegroundColor Cyan
Write-Host "Press Ctrl+C to stop watching..." -ForegroundColor Yellow
Write-Host ""

$lastCommitTime = Get-Date

while ($true) {
    try {
        # Check if there are any changes
        $status = git status --porcelain
        
        if ($status) {
            Write-Host "📝 Changes detected:" -ForegroundColor Yellow
            Write-Host $status
            
            # Add all changes
            git add .
            Write-Host "✅ Added all changes to staging" -ForegroundColor Green
            
            # Commit with timestamp
            $commitMsg = "Auto-sync: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
            git commit -m $commitMsg
            Write-Host "💾 Committed with message: $commitMsg" -ForegroundColor Green
            
            # Push to GitHub
            git push origin main
            Write-Host "🚀 Pushed to GitHub successfully!" -ForegroundColor Green
            Write-Host "-----------------------------------" -ForegroundColor Cyan
            
            $lastCommitTime = Get-Date
        }
        else {
            # Show a dot every 30 seconds to indicate the script is running
            Write-Host "." -NoNewline -ForegroundColor Gray
        }
        
        Start-Sleep -Seconds $DelaySeconds
    }
    catch {
        Write-Host "❌ Error occurred: $($_.Exception.Message)" -ForegroundColor Red
        Write-Host "⏳ Waiting 60 seconds before retrying..." -ForegroundColor Yellow
        Start-Sleep -Seconds 60
    }
}