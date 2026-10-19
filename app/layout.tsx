import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { GeistMono } from 'geist/font/mono';
import { Nav } from '@/components/layout/nav';
import { Footer } from '@/components/layout/footer';
import { siteConfig } from '@/lib/site-config';
import './globals.css';

// Design system v3: Arvo (display), Mulish (UI and body), Geist Mono (labels, numbers).
const arvo = localFont({
  src: [
    { path: './fonts/Arvo-Regular.ttf', weight: '400', style: 'normal' },
    { path: './fonts/Arvo-Italic.ttf', weight: '400', style: 'italic' },
    { path: './fonts/Arvo-Bold.ttf', weight: '700', style: 'normal' },
    { path: './fonts/Arvo-BoldItalic.ttf', weight: '700', style: 'italic' },
  ],
  variable: '--font-arvo',
  display: 'swap',
  fallback: ['Rockwell', 'Roboto Slab', 'Georgia', 'serif'],
});

const mulish = localFont({
  src: [
    { path: './fonts/Mulish-VariableFont_wght.ttf', weight: '200 1000', style: 'normal' },
    { path: './fonts/Mulish-Italic-VariableFont_wght.ttf', weight: '200 1000', style: 'italic' },
  ],
  variable: '--font-mulish',
  display: 'swap',
  fallback: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.parent.name }],
  keywords: [
    'facility management software',
    'cleaning management platform',
    'janitorial operations',
    'inspection tracking',
    'attendance management',
    'quality control software',
    'commercial cleaning software',
    'GPS attendance',
  ],
  openGraph: {
    type: 'website',
    url: siteConfig.url,
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${arvo.variable} ${mulish.variable} ${GeistMono.variable}`}
    >
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
