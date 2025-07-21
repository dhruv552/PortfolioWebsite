# Dhruv Agrawal - Portfolio Website

A modern, responsive portfolio website showcasing my work as a web developer specializing in sustainable technology solutions. Built with React, TypeScript, and featuring a dark theme optimized for performance and accessibility.

## 🌟 Features

- **Modern Design**: Clean, professional dark theme with accent colors
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Animations**: Smooth animations using Framer Motion
- **Contact Form**: Functional contact form integrated with EmailJS
- **Email Integration**: Direct email functionality with EmailJS
- **Performance Optimized**: Built with Vite for fast development and production builds
- **Type Safe**: Full TypeScript implementation
- **Component Library**: Built with shadcn/ui components and Radix UI primitives
- **SEO Friendly**: Proper meta tags and semantic HTML structure
- **Error Handling**: Comprehensive error boundary implementation

## 🚀 Tech Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library

### UI Components
- **shadcn/ui** - Modern component library
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon library

### Form Handling
- **React Hook Form** - Performant form library
- **Zod** - TypeScript-first schema validation
- **@hookform/resolvers** - Validation integration

### Email Service
- **EmailJS** - Client-side email sending

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/                 # Reusable UI components (shadcn/ui)
│   ├── ContactForm.tsx     # Contact form component
│   ├── ErrorBoundary.tsx   # Error boundary wrapper
│   ├── home.tsx           # Main home page component
│   ├── ProjectCard.tsx    # Project showcase card
│   └── SkillsTimeline.tsx # Skills and experience timeline
├── lib/
│   ├── emailService.ts    # EmailJS configuration and service
│   └── utils.ts          # Utility functions
├── stories/              # Storybook stories for components
├── types/               # TypeScript type definitions
├── App.tsx             # Main app component
├── main.tsx           # App entry point
└── index.css         # Global styles and Tailwind imports
```

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/dhruv552/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   - The EmailJS configuration is already set up in `src/lib/emailService.ts`
   - Update the EmailJS credentials if needed for your own deployment

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 📧 Email Configuration

The contact form uses EmailJS for sending emails. The configuration is located in `src/lib/emailService.ts`:

- **Service ID**: `default_service`
- **Template ID**: `template_k161vic`
- **Public Key**: `a5o6ufciw_3QPffUD`

## 🎨 Color Scheme

The website uses a carefully crafted dark theme with accent colors:

- **Primary Background**: Dark gradients (dark-bg, dark-surface, dark-card)
- **Text Colors**: Light text with muted variants
- **Accent Colors**:
  - Blue (`accent-blue`) - Primary actions and highlights
  - Cyan (`accent-cyan`) - Secondary highlights
  - Emerald (`accent-emerald`) - Success states and nature theme

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- Mobile devices (< 768px)
- Tablets (768px - 1024px)
- Desktops (> 1024px)

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run type-check` - Run TypeScript type checking
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run clean` - Clean build directory

## 🌐 Deployment

The website is optimized for deployment on:
- **Netlify** (recommended) - Configuration included in `netlify.toml`
- **Vercel**
- **GitHub Pages**
- Any static hosting service

### Netlify Deployment

The project includes a `netlify.toml` configuration file for easy deployment:

```toml
[build]
  publish = "dist"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## 📊 Performance Features

- **Code Splitting**: Lazy loading with React.Suspense
- **Image Optimization**: Optimized images and lazy loading
- **Bundle Analysis**: Built-in bundle analyzer
- **Error Boundaries**: Graceful error handling
- **TypeScript**: Compile-time error catching

## 🎯 SEO & Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- ARIA labels where needed
- Keyboard navigation support
- Screen reader compatibility

## 📞 Contact Information

- **Email**: dhruvagrawal552@gmail.com
- **Phone**: +91 9752476691
- **LinkedIn**: [linkedin.com/in/dhruvagrawal013](https://linkedin.com/in/dhruvagrawal013)
- **GitHub**: [github.com/dhruv552](https://github.com/dhruv552)
- **Portfolio**: [linktr.ee/Dhruvagrawal013](https://linktr.ee/Dhruvagrawal013)

## 🏆 Featured Projects

### SustainAride
A sustainable transportation platform connecting eco-conscious riders with green mobility solutions.
- **Tech Stack**: React, Node.js, MongoDB, Express
- **Repository**: [github.com/dhruv552/SustainAride](https://github.com/dhruv552/SustainAride)

### ShadowShield
Advanced cybersecurity tool for real-time threat detection and system protection.
- **Tech Stack**: Python, TensorFlow, Flask, PostgreSQL
- **Repository**: [github.com/Ritik-Malviya/ShadowShield](https://github.com/Ritik-Malviya/ShadowShield)

## 🏅 Achievements

- **Winner**: Best Civic Auth Use, JLU Bhopal Hackathon (6th Position) - Rs.7,000 award
- **Finalist**: SKITECH INNOTHON 2.0, Indore - Gamified carbon footprint tracker
- **In Progress**: Developing SustainAride for upcoming innovation events

## 🤝 Contributing

This is a personal portfolio website, but if you find any bugs or have suggestions for improvements, feel free to open an issue or submit a pull request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **shadcn/ui** for the excellent component library
- **Radix UI** for accessible component primitives
- **Tailwind CSS** for the utility-first CSS framework
- **Framer Motion** for smooth animations
- **EmailJS** for email functionality

---

*Built with ❤️ and sustainable practices in mind by Dhruv Agrawal*
