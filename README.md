# DentalOS AI - Landing Page

Premium SaaS B2B landing page built with React + Vite + Tailwind CSS featuring the "Glass Clinic Futurism" design aesthetic.

## 🚀 Quick Start

### Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📦 Tech Stack

- **React 19** - Modern UI library
- **Vite 7** - Lightning-fast build tool
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **TypeScript** - Type-safe development

## 🎨 Design System

### Glass Clinic Futurism Aesthetic
- **Glass Morphism**: `backdrop-blur-xl` with semi-transparent backgrounds
- **Color Palette**: Off-white base with Teal (clinical) and Violet (AI) accents
- **Typography**: Inter font family from Google Fonts
- **Animations**: Smooth transitions and hover effects

### Key Features
- Responsive design for all device sizes
- Interactive feature tabs with auto-scroll carousel (5s interval)
- Hover animations and glass effects
- Premium 3-tier pricing display
- SEO-optimized HTML structure

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/              # Reusable components
│   │   ├── GlassCard.tsx
│   │   ├── Button.tsx
│   │   └── Container.tsx
│   ├── layout/          # Layout components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Section.tsx
│   └── sections/        # Landing page sections
│       ├── Hero.tsx
│       ├── Problem.tsx
│       ├── Features.tsx
│       ├── Compliance.tsx
│       ├── Pricing.tsx
│       └── FinalCTA.tsx
├── App.tsx
├── main.tsx
└── index.css
```

## 📝 Content Sections

1. **Hero** - Video demo, headline, and CTAs
2. **Problem** - Traditional vs DentalOS comparison
3. **Features** - Interactive tabs (AI, Dictado, Facturación)
4. **Compliance** - Legal and security features
5. **Pricing** - 3-tier pricing ($999, $1,899, $3,499/mes)
6. **Final CTA** - Conversion-focused call-to-action
7. **Footer** - Links and copyright

## 🖼️ Asset Integration

### Logo Files
Place your logos in `public/Logo/`:
- `logo.png` - Header logo
- `logo_azul.jpg` - Footer logo

### Feature Images
Image placeholders in the Features section contain mini-prompts for generating visuals:
- AI voice assistant visualization
- Dentist with holographic interface
- Digital invoice rendering

## 🎯 Key Features

- ✅ Premium glass morphism effects
- ✅ Fully responsive design
- ✅ Interactive feature tabs
- ✅ Smooth animations and transitions
- ✅ Spanish copywriting
- ✅ SEO-optimized structure
- ✅ Performance optimized

## 🔧 Customization

### Colors
Edit `tailwind.config.js` to customize the color palette:
```js
colors: {
  teal: { 600: '#0d9488' },
  violet: { 600: '#7c3aed' }
}
```

### Content
All content is in the respective section components under `src/components/sections/`.

### Styling
Global styles and custom utilities are in `src/index.css`.

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌐 Deployment

This project can be deployed to:
- **Vercel** (recommended)
- **Netlify**
- **GitHub Pages**
- Any static hosting service

## 📄 License

© 2026 DentOS AI. All rights reserved.

---

**Built with ❤️ for the future of dental practice management**
