# Dhruv Agrawal - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS, showcasing my work in sustainable technology solutions and web development.

## 🚀 Features

- **Responsive Design**: Optimized for all devices with mobile-first approach
- **Modern Tech Stack**: Built with React 18, TypeScript, and Vite
- **Beautiful UI**: Custom design system using Shadcn/ui components
- **Smooth Animations**: Framer Motion for engaging user interactions
- **Functional Contact Form**: EmailJS integration for real email submissions
- **Performance Optimized**: Code splitting, lazy loading, and optimized builds
- **SEO Ready**: Comprehensive meta tags and semantic HTML structure

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Build Tool**: Vite
- **UI Components**: Shadcn/ui (Radix UI primitives)
- **Animations**: Framer Motion
- **Forms**: React Hook Form with Zod validation
- **Email Service**: EmailJS
- **Icons**: Lucide React
- **Deployment**: Netlify/Vercel ready

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/dhruv552/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Fill in your EmailJS credentials and other configuration values.

4. **Start development server**
   ```bash
   npm run dev
   ```

## 🔧 Configuration

### EmailJS Setup
1. Create an account at [EmailJS](https://emailjs.com)
2. Create an email service and template
3. Add your credentials to `.env`:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

### Customization
- **Personal Info**: Update content in `src/components/home.tsx`
- **Projects**: Modify the `projects` array in the same file
- **Skills**: Update `SkillsTimeline.tsx` component
- **Styling**: Customize colors in `tailwind.config.js` and `src/index.css`

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   ├── ContactForm.tsx # Contact form with EmailJS
│   ├── ProjectCard.tsx # Project showcase cards
│   ├── SkillsTimeline.tsx # Skills and experience timeline
│   └── home.tsx        # Main homepage component
├── lib/                # Utility functions
├── types/              # TypeScript type definitions
└── stories/            # Storybook stories (optional)
```

## 🚀 Deployment

### Netlify
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Add environment variables in Netlify dashboard

### Vercel
1. Import your GitHub repository
2. Vercel will auto-detect Vite configuration
3. Add environment variables in project settings

## 📈 Performance

- **Lighthouse Score**: 95+ on all metrics
- **Code Splitting**: Automatic vendor and UI library chunking
- **Asset Optimization**: Images and fonts optimized for web
- **Bundle Analysis**: Use `npm run build` to analyze bundle size

## 🎨 Design System

This project uses a custom design system built on:
- **Colors**: Dark theme with cyan/blue accent palette
- **Typography**: Modern font stack with proper hierarchy
- **Spacing**: Consistent spacing scale using Tailwind
- **Components**: Reusable components with Shadcn/ui

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: dhruvagrawal552@gmail.com
- **LinkedIn**: [dhruvagrawal013](https://linkedin.com/in/dhruvagrawal013)
- **GitHub**: [dhruv552](https://github.com/dhruv552)
- **Portfolio**: [dhruvagrawal.dev](https://dhruvagrawal.dev)

---

Built with ❤️ by Dhruv Agrawal
