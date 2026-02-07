import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
}

/**
 * Layout component that wraps all pages with common elements
 * - Header
 * - Footer
 * - SEO metadata
 * - Toast notifications
 */
const Layout: React.FC<LayoutProps> = ({
  children,
  title = 'Sanewal Auto Engineers - Precision Automotive Components',
  description = 'Sanewal Auto Engineers manufactures high-quality precision automotive components with IATF 16949:2016 & ISO 14001:2015 certification.',
  keywords = 'automotive components, precision engineering, machined components, forged components',
  ogImage = 'https://assets.co.dev/b35f6e55-a561-4256-b736-a57e2dc1ec82/sanewal-og-image.jpg',
}) => {
  const fullTitle = title.includes('Sanewal Auto Engineers') 
    ? title 
    : `${title} - Sanewal Auto Engineers`;

  return (
    <>
      <Head>
        <title>{fullTitle}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:site_name" content="Sanewal Auto Engineers" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
      </Head>
      
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <Toaster />
      </div>
    </>
  );
};

export default Layout;