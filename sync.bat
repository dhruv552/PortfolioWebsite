@echo off
echo 🚀 Syncing Portfolio to GitHub...
echo.

REM Add all changes
git add .

REM Check if there are changes to commit
git diff --cached --quiet
if %errorlevel% neq 0 (
    REM There are changes, commit them
    if "%~1"=="" (
        git commit -m "Portfolio update - %date% %time%"
    ) else (
        git commit -m "%~1"
    )
    
    REM Push to GitHub
    git push origin main
    
    echo.
    echo ✅ Portfolio successfully synced to GitHub!
    echo 🌐 Check your repository: https://github.com/dhruv552/PortfolioWebsite
) else (
    echo ℹ️  No changes to sync.
)

echo.
echo Press any key to continue...
pause >nul