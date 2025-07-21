param(
    [string]$Message = "Portfolio update - $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
)

Write-Host "🚀 Syncing Portfolio to GitHub..." -ForegroundColor Cyan
Write-Host ""

# Add all changes
git add .

# Check if there are changes to commit
$changes = git diff --cached --name-only
if ($changes) {
    Write-Host "📝 Changes detected:" -ForegroundColor Green
    $changes | ForEach-Object { Write-Host "   - $_" -ForegroundColor Yellow }
    Write-Host ""
    
    # Commit changes
    git commit -m $Message
    
    # Push to GitHub
    Write-Host "📤 Pushing to GitHub..." -ForegroundColor Blue
    git push origin main
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host ""
        Write-Host "✅ Portfolio successfully synced to GitHub!" -ForegroundColor Green
        Write-Host "🌐 Repository: https://github.com/dhruv552/PortfolioWebsite" -ForegroundColor Cyan
        
        # Optional: Open repository in browser
        $openBrowser = Read-Host "Open repository in browser? (y/n)"
        if ($openBrowser -eq 'y' -or $openBrowser -eq 'Y') {
            Start-Process "https://github.com/dhruv552/PortfolioWebsite"
        }
    }
    else {
        Write-Host "❌ Error occurred during push. Please check your internet connection and GitHub credentials." -ForegroundColor Red
    }
}
else {
    Write-Host "ℹ️  No changes to sync." -ForegroundColor Yellow
}

Write-Host ""
Write-Host "Press any key to continue..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")