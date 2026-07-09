import type { NavLink } from '@/data/traditionalGroup';

export const HORIZON_NAV_LINKS: NavLink[] = [
  { label: 'Welcome', href: '#home' },
  { label: 'Worlds', href: '#worlds' },
  { label: 'Journey', href: '#journey' },
  { label: 'Scenes', href: '#scenes' },
  { label: 'Reach', href: '#reach' },
];

export const HORIZON_SECTION_IDS = ['home', 'worlds', 'journey', 'scenes', 'reach'] as const;

export const HORIZON_CTA = { label: 'Talk to Us', href: '#reach' } as const;

export const HORIZON_HERO = {
  eyebrow: 'Jaipur, Rajasthan',
  title: 'Traditional Group',
  primaryCta: { label: 'Get in Touch', href: '#reach' },
  secondaryCta: { label: 'Our Worlds', href: '#worlds' },
} as const;

export const HORIZON_JOURNEY = [
  { title: 'Craft heritage', body: 'Rooted in Rajasthan manufacturing excellence through Traditional Gallery.' },
  { title: 'Hospitality warmth', body: 'Boutique stays that honour haveli architecture and guest care.' },
  { title: 'Learning futures', body: 'Schools that blend values, rigour, and global readiness.' },
  { title: 'Wild horizons', body: 'Eco-adventure at Leopard Valley — nature, recreation, resort life.' },
] as const;
