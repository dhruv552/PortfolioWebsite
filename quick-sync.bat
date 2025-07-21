@echo off
echo 🚀 Quick Sync to GitHub...
echo.

:: Add all changes
git add .
if %errorlevel% neq 0 (
    echo ❌ Failed to add changes
    pause
    exit /b 1
)
echo ✅ Added all changes

:: Get current timestamp for commit message
for /f "tokens=1-4 delims=/ " %%i in ('date /t') do set mydate=%%i-%%j-%%k
for /f "tokens=1-2 delims=: " %%i in ('time /t') do set mytime=%%i:%%j
set timestamp=%mydate% %mytime%

:: Commit changes
git commit -m "Quick sync: %timestamp%"
if %errorlevel% neq 0 (
    echo ❌ Failed to commit changes
    pause
    exit /b 1
)
echo 💾 Committed changes

:: Push to GitHub
git push origin main
if %errorlevel% neq 0 (
    echo ❌ Failed to push to GitHub
    pause
    exit /b 1
)

echo ✅ Successfully synced to GitHub!
echo.
timeout /t 3 /nobreak > nul