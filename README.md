# Universal Study Hub - Landing Page

A modern, responsive landing page for Universal Study Hub, an online education platform connecting students and parents with verified tutors worldwide.

## Features

- 🎨 Modern, clean UI design
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Fast loading with Next.js 14
- ♿ Accessible (WCAG-friendly)
- 🔍 SEO-optimized
- 🎯 All required sections implemented:
  - Hero Section with CTAs
  - About Section
  - How It Works (4-step process)
  - Subjects & Standards Covered
  - Why Choose Universal Study Hub
  - For Students & Parents
  - Call to Action Section
  - Footer with links and social media

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Modern icon library

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
universal/
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Main landing page
│   └── globals.css      # Global styles
├── components/
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Hero section
│   ├── About.tsx        # About section
│   ├── HowItWorks.tsx   # How it works section
│   ├── SubjectsStandards.tsx  # Subjects & standards
│   ├── WhyChoose.tsx    # Why choose section
│   ├── StudentsParents.tsx    # Students & parents section
│   ├── CTASection.tsx   # Call to action section
│   └── Footer.tsx       # Footer component
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## Customization

### Colors

Edit `tailwind.config.js` to customize the primary color scheme. The current theme uses a blue color palette.

### Content

All content can be customized in the respective component files in the `components/` directory.

## Future Enhancements

- Login/Dashboard functionality
- Tutor onboarding system
- Query submission form
- Testimonials section
- Multilingual support
- Chat/Query popup

## License

© Universal Study Hub – All Rights Reserved

