import { CONTACT_CTA, HEADER_NAV_LINKS, NAV_LINKS, PAGE_SECTION_IDS } from '@/config/site';

export const primaryNav = NAV_LINKS;
export const headerNav = HEADER_NAV_LINKS;
export const sectionIds = PAGE_SECTION_IDS;
export const contactCta = CONTACT_CTA;

export const footerNav = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#ventures' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
] as const;
