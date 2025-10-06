# a6n - AI Automation Platform

Transform your business with custom AI solutions. Automate workflows and boost productivity with AI agents tailored to
your needs.

**URL**: https://lovable.dev/projects/c5fe5b12-4670-4eaf-a113-439d4cad4a2c

## 🚀 Features

- **Custom AI Solutions**: Tailored AI agents for HR, Sales, Marketing, and more
- **Modern Tech Stack**: Built with React 18, TypeScript, Tailwind CSS v4, and Vite
- **Responsive Design**: Beautiful, mobile-first design with Geist font
- **Optimized Performance**: Production-ready with code splitting and minification
- **SEO Ready**: Comprehensive meta tags and semantic HTML

## 📦 Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite (with SWC)
- **Styling**: Tailwind CSS v4 with OKLCH colors
- **UI Components**: Radix UI + shadcn/ui
- **Routing**: React Router v6
- **Animations**: Motion (Framer Motion)
- **Icons**: Lucide React
- **State Management**: TanStack Query

## 🛠️ Development

### Prerequisites

- Node.js 18+ and npm

### Installation

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to the project directory
cd <YOUR_PROJECT_NAME>

# Install dependencies
npm i

# Start development server with auto-reloading
npm run dev
```

The app will be available at `http://localhost:8080`

### Build for Production

```sh
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── ui/             # shadcn/ui components
│   └── text/           # Text components (rotating text, etc.)
├── pages/              # Route pages
├── data/               # Static data (blog posts, case studies)
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── assets/             # Images and static assets
```

## 🎨 Design System

The project uses a comprehensive design system with:

- OKLCH color space for better color accuracy
- Custom CSS variables for theming
- Geist font for modern typography
- Tailwind v4 with `@theme` directive in `src/index.css`

## 📝 Key Pages

- `/` - Home page with hero, features, and use cases
- `/solutions` - Solutions overview
- `/case-studies` - Customer case studies with filtering
- `/blog` - Blog posts with markdown support
- `/about` - About the company
- `/contact` - Contact form

## 🔧 Configuration

### Vite Config

Production optimizations included:

- Code splitting for vendors and UI libraries
- Terser minification with console removal
- CSS minification
- Optimized chunk sizes (1000kb warning limit)

### Tailwind Config

Minimal config for v4 - most styling is in `src/index.css` using the `@theme` directive.

## 🚀 Deployment

### Using Lovable

Simply open [Lovable](https://lovable.dev/projects/c5fe5b12-4670-4eaf-a113-439d4cad4a2c) and click on Share → Publish.

### Custom Domain

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)

### Manual Deployment

The `npm run build` command creates an optimized production build in the `dist/` directory.

Deploy to any static hosting service:

- **Netlify**: `netlify deploy --prod --dir=dist`
- **Vercel**: `vercel --prod`
- **AWS S3**: Upload `dist/` contents to S3 bucket
- **GitHub Pages**: Use GitHub Actions with build output

## 📊 Performance

- Optimized bundle size with code splitting
- Lazy loading for images and components
- Tree-shaking enabled
- Terser minification for production

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 Technologies

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS v4

---

Built with ❤️ using [Lovable](https://lovable.dev)
