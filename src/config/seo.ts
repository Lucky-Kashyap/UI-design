import type { Metadata } from 'next';
import { SITE, VENTURES } from '@/data/traditionalGroup';

export const SITE_URL = 'https://traditionalgroup.in/';
export const SITE_NAME = SITE.name;

/** Production favicons — matches traditionalgroup.in WordPress site */
export const SITE_ICONS = {
  favicon32: 'https://traditionalgroup.in/wp-content/uploads/2023/01/cropped-Banner-32x32.webp',
  favicon192: 'https://traditionalgroup.in/wp-content/uploads/2023/01/cropped-Banner-192x192.webp',
  appleTouch: 'https://traditionalgroup.in/wp-content/uploads/2023/01/cropped-Banner-180x180.webp',
} as const;

export const SITE_HEAD_LINKS = {
  canonical: SITE_URL,
  shortlink: SITE_URL,
  pingback: 'https://traditionalgroup.in/xmlrpc.php',
} as const;

const defaultDescription =
  'Traditional Group is a leading Jaipur multi-venture organisation in clothing manufacturing, luxury hospitality, world-class education, and eco-adventure. Explore Traditional Gallery, Heritage Haveli, Shanti Asiatic School, Kindori IB World School, and Leopard Valley.';

const defaultKeywords = [
  'Traditional Group',
  'Traditional Group Jaipur',
  'multi-venture organisation Jaipur',
  'clothing manufacturing Jaipur',
  'luxury hospitality Rajasthan',
  'Shanti Asiatic School',
  'Kindori IB World School',
  'Traditional Heritage Haveli',
  'Leopard Valley',
  'Traditional Gallery',
];

export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Multi-Venture Organisation in Jaipur — Hospitality, Education & Manufacturing`,
    template: `%s | ${SITE_NAME}`,
  },
  description: defaultDescription,
  keywords: defaultKeywords,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Multi-Venture Organisation in Jaipur — Hospitality, Education & Manufacturing`,
    description:
      'Discover Traditional Group ventures across premium clothing manufacturing, luxury hospitality, education, and eco-adventure experiences in Jaipur, Rajasthan.',
    images: [
      {
        url: '/media/hero-rajasthan-haveli-heritage-architecture.webp',
        width: 1920,
        height: 1080,
        alt: 'Rajasthan heritage haveli architecture — Traditional Group Jaipur',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | Multi-Venture Organisation in Jaipur`,
    description: 'Hospitality, education, manufacturing, and eco-adventure under one trusted Jaipur brand.',
    images: ['/media/hero-rajasthan-haveli-heritage-architecture.webp'],
  },
  icons: {
    icon: [
      { url: SITE_ICONS.favicon32, sizes: '32x32', type: 'image/webp' },
      { url: SITE_ICONS.favicon192, sizes: '192x192', type: 'image/webp' },
    ],
    apple: [{ url: SITE_ICONS.appleTouch, sizes: '180x180', type: 'image/webp' }],
  },
  manifest: '/manifest.json',
  other: {
    'geo.region': 'IN-RJ',
    'geo.placename': 'Jaipur, Rajasthan, India',
    'geo.position': '26.9124;75.7873',
    ICBM: '26.9124, 75.7873',
  },
};

export function buildPreviewMetadata(themeName: string): Metadata {
  return {
    title: `${themeName} — Theme Preview`,
    description: `Client preview of the ${themeName} theme direction for Traditional Group.`,
    robots: { index: false, follow: true },
    alternates: { canonical: SITE_URL },
    icons: {
      icon: [
        { url: SITE_ICONS.favicon32, sizes: '32x32', type: 'image/webp' },
        { url: SITE_ICONS.favicon192, sizes: '192x192', type: 'image/webp' },
      ],
      apple: [{ url: SITE_ICONS.appleTouch, sizes: '180x180', type: 'image/webp' }],
    },
  };
}

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}#organization`,
      name: SITE_NAME,
      alternateName: 'Traditional Group Jaipur',
      url: SITE_URL,
      logo: SITE_ICONS.favicon192,
      image: `${SITE_URL}media/hero-rajasthan-haveli-heritage-architecture.webp`,
      email: SITE.email,
      telephone: '+91-97845-55227',
      description:
        'Traditional Group is a diverse multi-venture organisation in Jaipur dedicated to quality and innovation across manufacturing, hospitality, education, and eco-adventure.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'SP-6&7 RIICO Industrial Area, Shipra Path, Mansarovar',
        addressLocality: 'Jaipur',
        addressRegion: 'Rajasthan',
        postalCode: '302020',
        addressCountry: 'IN',
      },
      areaServed: { '@type': 'City', name: 'Jaipur' },
      knowsAbout: ['Clothing manufacturing', 'Luxury hospitality', 'Education', 'Eco-adventure tourism'],
      sameAs: [SITE.facebook],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}#website`,
      url: SITE_URL,
      name: SITE_NAME,
      publisher: { '@id': `${SITE_URL}#organization` },
      inLanguage: 'en-IN',
    },
    {
      '@type': 'WebPage',
      '@id': `${SITE_URL}#webpage`,
      url: SITE_URL,
      name: `${SITE_NAME} | Multi-Venture Organisation in Jaipur`,
      isPartOf: { '@id': `${SITE_URL}#website` },
      about: { '@id': `${SITE_URL}#organization` },
      description: defaultDescription,
    },
    {
      '@type': 'ItemList',
      '@id': `${SITE_URL}#ventures`,
      name: 'Traditional Group Ventures',
      itemListElement: VENTURES.map((venture, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: venture.name,
        url: venture.href,
      })),
    },
  ],
};
