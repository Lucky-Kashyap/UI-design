import type { NavLink } from '@/data/traditionalGroup';

export const PRISM_NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'Ventures', href: '#ventures' },
  { label: 'Heritage', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Enquire', href: '#contact' },
];

export const PRISM_SECTION_IDS = ['home', 'ventures', 'about', 'gallery', 'contact'] as const;

export const PRISM_CTA = { label: 'Get a Free Quote', href: '#contact' } as const;

export const PRISM_HERO = {
  eyebrow: 'Multi-venture organisation · Jaipur',
  title: 'Traditional Group',
} as const;
