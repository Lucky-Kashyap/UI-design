import type { NavLink } from '@/data/traditionalGroup';
import { getSectionHref } from '@/themes/sectionRegistry';

/** Copper Forge nav — theme-specific labels (distinct from Prism/Meridian). */
export const FORGE_NAV_LINKS: NavLink[] = [
  { label: 'Hearth', href: getSectionHref('forge', 'home') },
  { label: 'Ventures', href: getSectionHref('forge', 'ventures') },
  { label: 'Heritage', href: getSectionHref('forge', 'about') },
  { label: 'Craft', href: getSectionHref('forge', 'gallery') },
  { label: 'Visit', href: getSectionHref('forge', 'contact') },
];

export const FORGE_SECTION_IDS = ['home', 'works', 'lineage', 'craft', 'visit'] as const;

export const FORGE_CTA = { label: 'Plan a Visit', href: getSectionHref('forge', 'contact') } as const;

export const FORGE_HERO = {
  eyebrow: 'Jaipur, Rajasthan',
  title: 'Traditional Group',
  primaryCta: { label: 'Plan a Visit', href: getSectionHref('forge', 'contact') },
  secondaryCta: { label: 'Our Ventures', href: getSectionHref('forge', 'ventures') },
} as const;

export const FORGE_HERO_STATS = [
  { value: '5+', label: 'Ventures' },
  { value: '1985', label: 'Est.' },
  { value: 'Jaipur', label: 'Based in' },
] as const;

export const FORGE_HERO_BADGE = {
  title: 'Since 1985',
  subtitle: 'Family owned',
} as const;

export const FORGE_WORKS = {
  eyebrow: 'Ventures',
  title: 'Forged across sectors',
  intro:
    'Manufacturing, hospitality, education, and eco-adventure — five operating companies united by one commitment to quality.',
} as const;

export const FORGE_LINEAGE = {
  eyebrow: 'Heritage',
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
  eyebrow: 'Craft',
  title: 'Material and landscape',
  intro:
    'Close-up views of the work itself — material, landscape, and the quiet discipline behind every sector we serve.',
} as const;

export const FORGE_VOICES = {
  eyebrow: 'Testimonials',
  title: 'Trusted across ventures',
} as const;

export const FORGE_VISIT = {
  eyebrow: 'Visit',
  title: 'Reach the forge',
  intro:
    'Call, email, or visit our Jaipur office — we welcome conversations about ventures, partnerships, and stays.',
} as const;
