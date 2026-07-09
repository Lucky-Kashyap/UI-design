import type { Metadata } from 'next';
import LenisProvider from '@/components/providers/LenisProvider';
import PageJsonLd from '@/components/seo/PageJsonLd';
import { SITE_HEAD_LINKS } from '@/config/seo';
import { VENTURES } from '@/data/traditionalGroup';
import { defaultMetadata } from '@/lib/metadata';
import './globals.css';

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" data-theme="prism" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="shortlink" href={SITE_HEAD_LINKS.shortlink} />
        <link rel="pingback" href={SITE_HEAD_LINKS.pingback} />
        <link
          rel="preload"
          as="image"
          type="image/webp"
          href="/media/hero-rajasthan-haveli-heritage-architecture.webp"
          fetchPriority="high"
        />
        {VENTURES.map((venture) => (
          <link
            key={venture.id}
            rel="preload"
            as="image"
            type="image/webp"
            href={venture.image}
          />
        ))}
        <link rel="preconnect" href="https://traditionalgroup.in" crossOrigin="" />
        <link rel="dns-prefetch" href="https://traditionalgroup.in" />
        <PageJsonLd />
      </head>
      <body className="font-sans antialiased">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
