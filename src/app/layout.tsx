import type { Metadata } from 'next';
import { Fraunces, Outfit } from 'next/font/google';
import LenisProvider from '@/components/providers/LenisProvider';
import PageJsonLd from '@/components/seo/PageJsonLd';
import { SITE_HEAD_LINKS } from '@/config/seo';
import { defaultMetadata } from '@/lib/metadata';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  weight: ['500', '600', '700'],
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" data-theme="prism" suppressHydrationWarning>
      <head>
        <link rel="shortlink" href={SITE_HEAD_LINKS.shortlink} />
        <link rel="pingback" href={SITE_HEAD_LINKS.pingback} />
        <link
          rel="preload"
          as="image"
          type="image/webp"
          href="/media/hero-rajasthan-haveli-heritage-architecture.webp"
          fetchPriority="high"
        />
        <PageJsonLd />
      </head>
      <body className={`${fraunces.variable} ${outfit.variable} font-sans antialiased`}>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
