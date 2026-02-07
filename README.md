# Sanewal Auto Engineers Website

This repository contains the codebase for the Sanewal Auto Engineers website, a Next.js application showcasing the company's automotive components manufacturing capabilities.

## Project Overview

The Sanewal Auto Engineers website is built with Next.js and uses Tailwind CSS for styling. It features a responsive design, optimized images, and accessibility enhancements.

## Key Features

- Responsive design for all device sizes
- Optimized image loading with next/image
- Accessibility compliance with WCAG 2.1 AA standards
- Dark mode support
- Performance optimizations for Core Web Vitals
- SEO enhancements with structured data

## Technology Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **Form Handling**: React Hook Form with Zod validation
- **UI Components**: Custom components built on Radix UI primitives
- **Testing**: Jest and React Testing Library
- **Performance Monitoring**: Lighthouse and Core Web Vitals

## Project Structure

```
├── public/               # Static assets
├── src/
│   ├── components/       # React components
│   │   ├── layout/       # Layout components
│   │   ├── ui/           # UI components
│   │   └── [feature]/    # Feature-specific components
│   ├── contexts/         # React contexts
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── pages/            # Next.js pages
│   └── styles/           # Global styles
├── jest.config.js        # Jest configuration
├── jest.setup.js         # Jest setup
├── next.config.mjs       # Next.js configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## Development

### Prerequisites

- Node.js 20.x or later
- pnpm (recommended) or npm

### Installation

```bash
# Install dependencies
pnpm install
```

### Development Server

```bash
# Start development server
pnpm dev
```

### Building for Production

```bash
# Build for production
pnpm build

# Start production server
pnpm start
```

### Testing

```bash
# Run tests
pnpm test

# Run tests in watch mode
pnpm test:watch
```

### Bundle Analysis

```bash
# Analyze bundle size
pnpm analyze
```

## Performance Optimizations

The website includes several performance optimizations:

1. **Image Optimization**:
   - Using next/image for automatic image optimization
   - WebP format with fallbacks
   - Responsive sizing
   - Lazy loading for below-fold content
   - Priority loading for critical images

2. **Code Splitting**:
   - Automatic code splitting by Next.js
   - Dynamic imports for heavy components
   - Component-level code splitting

3. **Font Optimization**:
   - Using next/font for optimized font loading
   - Font display swap for better perceived performance

4. **Core Web Vitals Optimizations**:
   - Minimized layout shifts
   - Optimized Largest Contentful Paint (LCP)
   - Improved Time to Interactive (TTI)

## Accessibility Enhancements

The website includes several accessibility enhancements:

1. **Semantic HTML**:
   - Proper heading hierarchy
   - Semantic landmarks
   - ARIA attributes where needed

2. **Keyboard Navigation**:
   - Focus management
   - Skip links
   - Keyboard traps prevention

3. **Screen Reader Support**:
   - Alt text for images
   - ARIA labels
   - Screen reader announcements for dynamic content

4. **Color Contrast**:
   - WCAG 2.1 AA compliant color contrast
   - Visible focus indicators

## Deployment

The website is deployed using Vercel. Each push to the main branch triggers a new deployment.

## License

All rights reserved. This codebase is proprietary and confidential.

## Contact

For any inquiries, please contact [contact@sanewal.com](mailto:contact@sanewal.com).