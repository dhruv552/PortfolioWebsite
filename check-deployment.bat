@echo off
echo 🌐 Portfolio Deployment Status Checker
echo =======================================
echo.

echo 📋 Current Configuration:
echo ✅ GitHub Repository: https://github.com/dhruv552/PortfolioWebsite
echo ✅ Netlify Config: netlify.toml (Ready)
echo ✅ Vercel Config: vercel.json (Ready)
echo ✅ Build Command: npm run build
echo ✅ Output Directory: dist
echo.

echo 🔧 Testing build process...
call npm run build

if %errorlevel% equ 0 (
    echo.
    echo ✅ Build successful! Your portfolio is ready for deployment.
    echo.
    echo 🚀 Next Steps:
    echo 1. Go to https://netlify.com (Recommended)
    echo 2. Click "New site from Git"
    echo 3. Connect your GitHub account
    echo 4. Select "PortfolioWebsite" repository
    echo 5. Deploy! (Settings auto-detected)
    echo.
    echo 🌟 Alternative: Deploy to Vercel
    echo 1. Go to https://vercel.com
    echo 2. Import your GitHub repository
    echo 3. Deploy automatically!
    echo.
    echo 📁 Build output is in the 'dist' folder
) else (
    echo.
    echo ❌ Build failed! Please fix the errors above before deploying.
    echo 💡 Run 'npm run type-check' to see TypeScript errors
)

echo.
echo Press any key to continue...
pause >nul