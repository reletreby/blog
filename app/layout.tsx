import './global.css';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Navbar } from './components/nav';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Footer from './components/footer';
import { baseUrl } from './sitemap';
import GoogleAnalytics from './components/GoogleAnalytics';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Rashad Eletreby',
    template: '%s | Rashad Eletreby',
  },
  description: "Rashad Eletreby's personal website and blog.",
  openGraph: {
    title: 'Rashad Eletreby - Personal Website and Blog',
    description: "Rashad Eletreby's personal website and blog.",
    url: baseUrl,
    siteName: 'Rashad Eletreby - Personal Website and Blog',
    locale: 'en_US',
    type: 'website',
  },
  manifest: '/site.webmanifest', // Add this line to reference your manifest file
  icons: {
    icon: '/favicon-32x32.png', // Path to your favicon
    apple: '/apple-touch-icon.png', // Path to your Apple Touch Icon
    shortcut: '/favicon-16x16.png', // Path to your smaller favicons
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const cx = (...classes) => classes.filter(Boolean).join(' ');

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-black',
        GeistSans.variable,
        GeistMono.variable,
      )}
    >
      <body className="antialiased max-w-3xl mx-4 mt-8 lg:mx-auto">
        <GoogleAnalytics />
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
