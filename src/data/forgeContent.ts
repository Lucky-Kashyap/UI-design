import type { NavLink } from '@/data/traditionalGroup';

export const FORGE_NAV_LINKS: NavLink[] = [
  { label: 'Hearth', href: '#home' },
  { label: 'Works', href: '#works' },
  { label: 'Lineage', href: '#lineage' },
  { label: 'Craft', href: '#craft' },
  { label: 'Visit', href: '#visit' },
];

export const FORGE_SECTION_IDS = ['home', 'works', 'lineage', 'craft', 'visit'] as const;

export const FORGE_CTA = { label: 'Plan a Visit', href: '#visit' } as const;

export const FORGE_HERO = {
  eyebrow: 'Forged in Jaipur',
  title: 'Traditional Group',
  primaryCta: { label: 'Visit Us', href: '#visit' },
  secondaryCta: { label: 'View Works', href: '#works' },
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
