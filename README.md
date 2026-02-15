# SecOps - Cybersecurity as a Service Platform

A modern, multi-page React application for SecOps, a Cybersecurity-as-a-Service (SECaaS) platform tailored for Algerian startups and SMEs.

## 🎨 Design Philosophy

**Theme:** Technical Clarity with Deep Dark Mode
- **Background:** Deep Navy/Black (#020617)
- **Text:** High-contrast Zinc-100 (#f4f4f5) for AA/AAA accessibility
- **Accent:** Electric Blue (#3b82f6)
- **Style:** Glassmorphism, Bento Box layouts, Professional device mockups

## 🛠️ Tech Stack

- **Framework:** React 18.2
- **Routing:** React Router DOM 6.20
- **Styling:** Tailwind CSS 3.3
- **Icons:** Lucide React 0.263
- **Animations:** Framer Motion 10.16
- **Build Tool:** Vite 5.0

## 📁 Project Structure

```
secops-app/
├── src/
│   ├── components/
│   │   └── Layout.jsx          # Shared layout with navbar and footer
│   ├── pages/
│   │   ├── HomePage.jsx        # Landing page with hero and pricing
│   │   ├── ServicesPage.jsx    # Detailed services and process timeline
│   │   ├── AboutPage.jsx       # Mission, team, and value proposition
│   │   └── ContactPage.jsx     # Contact form with sidebar
│   ├── App.jsx                 # Main app with routing configuration
│   ├── App.css                 # Custom styles and animations
│   ├── index.css              # Tailwind directives
│   └── main.jsx               # React entry point
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── postcss.config.js
```

## 🚀 Features

### Pages & Components

1. **Layout Component**
   - Glassmorphic sticky navbar with React Router Links
   - Theme toggle UI (currently dark mode)
   - Responsive mobile menu
   - Consistent footer across all pages
   - Smooth page transitions with Framer Motion

2. **Home Page**
   - Conversion-focused hero section
   - Social proof bar with company logos
   - Bento grid service showcase
   - Three-tier pricing table (Algerian DZD)
   - Animated components with scroll effects

3. **Services Page**
   - 6 detailed service cards (Web, Network, Cloud, Mobile, Code Review, Red Team)
   - Each card includes features, tools, and "Learn More" CTAs
   - 4-step process timeline: Scope → Scan → Exploit → Report
   - Professional tech stack badges
   - CTA section with contact prompt

4. **About Page**
   - Mission statement and company stats
   - Core values showcase
   - Team/founder section with OSCP & CPTS certifications
   - "Why SMEs" value proposition
   - Partnership CTA

5. **Contact Page**
   - Professional contact form with validation
   - Service type dropdown selector
   - Contact information sidebar
   - Office hours display
   - Quick action links
   - Success/error message handling

## 🎯 Key Design Features

### High Contrast Dark Mode
- WCAG AA/AAA compliant color contrast
- Zinc-100 (#f4f4f5) for primary text
- Blue-400 for interactive elements and highlights
- Zinc-300/400 for secondary content
- No low-contrast grays that fail accessibility standards

### Glassmorphism Effects
- Backdrop blur on navigation
- Frosted glass cards with subtle borders
- Hover states with gradient backgrounds
- Shadow effects for depth

### Smooth Animations
- Framer Motion page transitions
- Fade-in on scroll for cards
- Hover transformations
- Loading states and form feedback

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Hamburger menu for mobile navigation
- Flexible grid layouts

## 📦 Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Start development server:**
```bash
npm run dev
```

3. **Build for production:**
```bash
npm run build
```

4. **Preview production build:**
```bash
npm run preview
```

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the color palette:
```javascript
colors: {
  navy: { /* ... */ },
  zinc: { /* ... */ },
}
```

### Typography
The app uses the Inter font family from Google Fonts. To change:
1. Update the import in `App.css`
2. Modify `fontFamily` in `tailwind.config.js`

### Content
- Update service offerings in `ServicesPage.jsx`
- Modify pricing tiers in `HomePage.jsx`
- Customize team information in `AboutPage.jsx`
- Edit contact details in `ContactPage.jsx`

## 🔧 Configuration Files

- **vite.config.js** - Vite configuration (port: 3000)
- **tailwind.config.js** - Tailwind CSS theme customization
- **postcss.config.js** - PostCSS plugins configuration
- **package.json** - Dependencies and scripts

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

© 2026 SecOps. All rights reserved.

## 🤝 Support

For questions or support:
- Email: contact@secops.dz
- Location: Algiers, Algeria

---

**Built with ❤️ for the Algerian Startup Ecosystem**
