import type { NavLink } from '@/data/traditionalGroup';
import { getSectionHref } from '@/themes/sectionRegistry';

/** Meridian nav — standard labels mapped to theme-specific section ids. */
export const MERIDIAN_NAV_LINKS: NavLink[] = [
  { label: 'Home', href: getSectionHref('meridian', 'home') },
  { label: 'Services', href: getSectionHref('meridian', 'ventures') },
  { label: 'About Us', href: getSectionHref('meridian', 'about') },
  { label: 'Gallery', href: getSectionHref('meridian', 'gallery') },
  { label: 'Contact', href: getSectionHref('meridian', 'contact') },
];

export const MERIDIAN_SECTION_IDS = ['home', 'ecosystem', 'evolution', 'frames', 'connect'] as const;

export const MERIDIAN_CTA = { label: 'Get a Free Quote', href: getSectionHref('meridian', 'contact') } as const;

export const MERIDIAN_HERO = {
  eyebrow: 'Jaipur · Multi-venture collective',
  title: 'Traditional Group',
  accentWord: 'Group',
  primaryCta: { label: 'Get a Free Quote', href: getSectionHref('meridian', 'contact') },
  secondaryCta: { label: 'Our Services', href: getSectionHref('meridian', 'ventures') },
} as const;

export const MERIDIAN_EVOLUTION = [
  {
    year: '1998',
    title: 'Roots in craftsmanship',
    body: 'Traditional Gallery begins premium clothing manufacturing with Rajasthan artisan values.',
  },
  {
    year: '2008',
    title: 'Hospitality reimagined',
    body: 'Heritage Haveli opens as a boutique luxury stay rooted in Jaipur architecture.',
  },
  {
    year: '2014',
    title: 'Education at scale',
    body: 'Shanti Asiatic School and later Kindori IB World School shape future-ready learners.',
  },
  {
    year: '2020',
    title: 'Nature & adventure',
    body: 'Leopard Valley extends the group into eco-adventure and resort experiences.',
  },
  {
    year: 'Today',
    title: 'One collective vision',
    body: 'Five ventures, one standard of quality — manufacturing, hospitality, education, and adventure.',
  },
] as const;

export const MERIDIAN_CONNECT = {
  body: 'Partnerships, hospitality enquiries, admissions, or manufacturing — reach our Jaipur team for a direct conversation.',
  cta: { label: 'Start a Dialogue', href: 'tel:+919784555227' },
} as const;
