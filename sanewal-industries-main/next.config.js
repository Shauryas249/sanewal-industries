/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    // During development, we'll handle TypeScript errors in the IDE
    ignoreBuildErrors: process.env.NODE_ENV === 'development',
  },
  images: {
    domains: ["assets.co.dev", "images.unsplash.com"],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  webpack: (config, context) => {
    // Only minimize in production, not in preview mode
    config.optimization.minimize = process.env.NEXT_PUBLIC_CO_DEV_ENV !== "preview";
    
    // Add SVG support
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    
    return config;
  },
  // Enable SWC minification for improved performance
  swcMinify: true,
  // Add compression for improved performance
  compress: true,
  // Add trailing slash for consistent URLs
  trailingSlash: false,
  // Add powered by header
  poweredByHeader: false,
};

// Conditionally apply bundle analyzer
if (process.env.ANALYZE === 'true') {
  const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: true,
  });
  module.exports = withBundleAnalyzer(nextConfig);
} else {
  module.exports = nextConfig;
}