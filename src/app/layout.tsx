import type { Metadata } from 'next';
import LenisProvider from '@/components/providers/LenisProvider';
import PageJsonLd from '@/components/seo/PageJsonLd';
import { SITE_HEAD_LINKS } from '@/config/seo';
import { HERO } from '@/data/traditionalGroup';
import { fontVariables, outfit } from '@/lib/fonts';
import { defaultMetadata } from '@/lib/metadata';
import './globals.css';

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" data-theme="prism" className={fontVariables} suppressHydrationWarning>
      <head>
        <link rel="shortlink" href={SITE_HEAD_LINKS.shortlink} />
        <link rel="pingback" href={SITE_HEAD_LINKS.pingback} />
        <link
          rel="preload"
          as="image"
          type="image/webp"
          href={HERO.backgroundImage}
          fetchPriority="high"
        />
        <link rel="preconnect" href="https://traditionalgroup.in" crossOrigin="" />
        <link rel="dns-prefetch" href="https://traditionalgroup.in" />
        <PageJsonLd />
      </head>
      <body className={`${outfit.className} antialiased`}>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
