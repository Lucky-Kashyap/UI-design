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
  eyebrow: 'Forged in Jaipur',
  title: 'Traditional Group',
  primaryCta: { label: 'Contact Us', href: getSectionHref('forge', 'contact') },
  secondaryCta: { label: 'Our Services', href: getSectionHref('forge', 'ventures') },
} as const;

export const FORGE_LINEAGE = [
  { era: 'Foundations', detail: 'Family values and craftsmanship shape the group\'s first manufacturing ventures.' },
  { era: 'Expansion', detail: 'Hospitality and education join the portfolio with long-term community investment.' },
  { era: 'Present', detail: 'Five ventures operating with shared standards of quality across every sector.' },
] as const;

export const FORGE_WORKS_INTRO =
  'Each venture is a chapter — forged with care, measured by consistency, and built to outlast trends.';

export const FORGE_CRAFT_INTRO =
  'Close-up views of the work itself — material, landscape, and the quiet discipline behind every sector we serve.';
