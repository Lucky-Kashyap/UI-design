import type { NavLink } from '@/data/traditionalGroup';
import { getSectionHref } from '@/themes/sectionRegistry';

/** Forge nav — standard labels mapped to Copper Forge section ids. */
export const FORGE_NAV_LINKS: NavLink[] = [
  { label: 'Home', href: getSectionHref('forge', 'home') },
  { label: 'Services', href: getSectionHref('forge', 'ventures') },
  { label: 'About Us', href: getSectionHref('forge', 'about') },
  { label: 'Gallery', href: getSectionHref('forge', 'gallery') },
  { label: 'Contact', href: getSectionHref('forge', 'contact') },
];

export const FORGE_SECTION_IDS = ['home', 'works', 'lineage', 'craft', 'visit'] as const;

export const FORGE_CTA = { label: 'Plan a Visit', href: getSectionHref('forge', 'contact') } as const;

export const FORGE_HERO = {
  eyebrow: 'Jaipur, Rajasthan',
  title: 'Traditional Group',
  primaryCta: { label: 'Contact Us', href: getSectionHref('forge', 'contact') },
  secondaryCta: { label: 'Our Services', href: getSectionHref('forge', 'ventures') },
} as const;

export const FORGE_HERO_STATS = [
  { value: '5+', label: 'Ventures' },
  { value: '1985', label: 'Established' },
  { value: 'Jaipur', label: 'Headquarters' },
] as const;

export const FORGE_HERO_BADGE = {
  title: 'Since 1985',
  subtitle: 'Family owned',
} as const;

export const FORGE_WORKS = {
  eyebrow: 'Services',
  title: 'Our ventures',
  intro:
    'Manufacturing, hospitality, education, and eco-adventure — five operating companies united by one commitment to quality.',
} as const;

export const FORGE_LINEAGE = {
  eyebrow: 'About Us',
  title: 'Built over generations',
  intro:
    'From a single manufacturing vision to a multi-venture collective — each era added depth without losing the thread of quality.',
  badge: { caption: 'Est. 1985', title: 'Three generations' },
  timeline: [
    { era: 'Foundations', detail: 'Family values and craftsmanship shape the group\'s first manufacturing ventures.' },
    { era: 'Expansion', detail: 'Hospitality and education join the portfolio with long-term community investment.' },
    { era: 'Present', detail: 'Five ventures operating with shared standards of quality across every sector.' },
  ],
} as const;

export const FORGE_GALLERY = {
  eyebrow: 'Gallery',
  title: 'Craft & landscape',
  intro:
    'Close-up views of the work itself — material, landscape, and the quiet discipline behind every sector we serve.',
} as const;

export const FORGE_VOICES = {
  eyebrow: 'Testimonials',
  title: 'Trusted across ventures',
} as const;

export const FORGE_VISIT = {
  eyebrow: 'Contact',
  title: 'Get in touch',
  intro:
    'Call, email, or visit our Jaipur office — we welcome conversations about ventures, partnerships, and stays.',
} as const;
