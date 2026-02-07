import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { Toaster } from "@/components/ui/toaster";
import '../styles/globals.css';

// Import fonts
import { Inter, Montserrat, Open_Sans } from 'next/font/google';

// Define fonts
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
});

export default function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent flash while theme loads
  if (!mounted) {
    // Add a script to prevent flash of wrong theme
    return (
      <div className={`${inter.variable} ${montserrat.variable} ${openSans.variable} font-body`}>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // Default to light theme
                document.documentElement.classList.remove('dark');
                document.documentElement.style.setProperty('--mode', 'light');
                
                // Check for saved theme preference
                const savedTheme = localStorage.getItem('theme');
                if (savedTheme === 'dark') {
                  document.documentElement.classList.add('dark');
                  document.documentElement.style.setProperty('--mode', 'dark');
                } else if (savedTheme === 'system') {
                  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (systemPrefersDark) {
                    document.documentElement.classList.add('dark');
                    document.documentElement.style.setProperty('--mode', 'dark');
                  }
                }
              })();
            `,
          }}
        />
      </div>
    );
  }

  return (
    <div className={`${inter.variable} ${montserrat.variable} ${openSans.variable} font-body`}>
      <ThemeProvider>
        <Component {...pageProps} />
        <Toaster />
      </ThemeProvider>
    </div>
  );
}