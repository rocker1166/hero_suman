# TheySaid Landing Page
# deployed link : [Live Link](https://hero-suman.vercel.app/)
A modern, responsive landing page built with Next.js, TypeScript, and Tailwind CSS for TheySaid - an AI-powered survey and conversation platform.

## 🚀 Key Features

- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Modern UI Components**: Clean, semantic components with proper accessibility
- **Performance Optimized**: Next.js Image optimization and lazy loading
- **TypeScript**: Full type safety throughout the application
- **Clean Architecture**: DRY principles and maintainable code structure

## 🏗️ Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main homepage
│   └── globals.css         # Global styles
├── components/
│   ├── layout/
│   │   └── Header.tsx      # Navigation header with mobile menu
│   ├── sections/
│   │   ├── Hero.tsx        # Hero section with CTA
│   │   ├── LogoSection.tsx # Partner logos carousel
│   │   └── TestimonialSection.tsx # Customer testimonials
│   └── ui/                 # Reusable UI components
├── public/
│   ├── logo/              # Partner logo images
│   ├── pro/               # Profile avatars
│   └── hero*.png          # Hero section images
└── types/                 # TypeScript type definitions
```

## 🎨 Key Implementations

### Navigation Header
- **Responsive Design**: Desktop navigation with mobile hamburger menu
- **Smart Interactions**: Click-outside-to-close functionality
- **Dropdown Menus**: Resources dropdown with backdrop blur effect
- **Accessible**: Proper ARIA labels and keyboard navigation

### Hero Section
- **Gradient CTA Button**: Eye-catching call-to-action with hover effects
- **Badge Integration**: Product Hunt and G2 rating badges
- **Responsive Images**: Optimized hero image with proper aspect ratios
- **Clean Data Structure**: Centralized hero data for easy maintenance

### Logo Section
- **DRY Implementation**: Single source of truth for partner logos
- **Mobile Carousel**: Auto-scrolling logo carousel on mobile devices
- **Desktop Grid**: Fixed positioning for larger screens
- **TypeScript Types**: Proper typing for logo configuration

### Testimonial Section
- **Card-based Layout**: Clean testimonial cards with consistent heights
- **Mobile Carousel**: Horizontal scroll with snap behavior
- **Desktop Pagination**: Previous/next navigation controls
- **Semantic HTML**: Proper use of `<article>`, `<blockquote>`, and `<cite>` elements

## 🛠️ Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Image Optimization**: Next.js Image component
- **Font**: Inter (Google Font optimization)

## 🚀 Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📱 Responsive Features

### Mobile (< 768px)
- Hamburger menu navigation
- Auto-scrolling logo carousel
- Swipeable testimonial cards
- Touch-optimized interactions

### Desktop (≥ 768px)
- Full navigation menu with dropdowns
- Fixed logo positioning
- Grid-based testimonial layout
- Hover effects and transitions

## 🎯 Design Principles

- **Mobile-First**: Designed for mobile devices first, enhanced for desktop
- **Accessibility**: Proper semantic HTML and ARIA labels
- **Performance**: Optimized images, lazy loading, and efficient rendering
- **Maintainability**: Clean code structure with reusable components
- **Consistency**: Unified design system and component patterns

## 🔧 Code Quality Features

- **TypeScript Integration**: Full type safety and IntelliSense support
- **Component Composition**: Reusable, composable React components
- **DRY Principles**: Centralized data and minimal code repetition
- **Semantic HTML**: Proper use of semantic elements for accessibility
- **Clean Architecture**: Separation of concerns and logical file organization

## 📦 Dependencies

Key dependencies include:
- `next`: React framework for production
- `react` & `react-dom`: React library
- `typescript`: TypeScript support
- `tailwindcss`: Utility-first CSS framework
- `@types/*`: TypeScript definitions

## 🚢 Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## 📚 Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [React Documentation](https://reactjs.org/docs) - learn React concepts
- [Tailwind CSS](https://tailwindcss.com/docs) - utility-first CSS framework
- [TypeScript Handbook](https://www.typescriptlang.org/docs) - TypeScript guide
