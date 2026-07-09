import type { ThemeId } from '@/themes/types';

/** Maps logical sections to theme-specific DOM ids (Prism uses production ids). */
export const THEME_SECTION_MAP: Record<
  ThemeId,
  { home: string; ventures: string; about: string; gallery: string; contact: string }
> = {
  prism: {
    home: 'home',
    ventures: 'ventures',
    about: 'about',
    gallery: 'gallery',
    contact: 'contact',
  },
  meridian: {
    home: 'home',
    ventures: 'ecosystem',
    about: 'evolution',
    gallery: 'frames',
    contact: 'connect',
  },
  horizon: {
    home: 'home',
    ventures: 'worlds',
    about: 'journey',
    gallery: 'scenes',
    contact: 'reach',
  },
  forge: {
    home: 'home',
    ventures: 'works',
    about: 'lineage',
    gallery: 'craft',
    contact: 'visit',
  },
};

export function getSectionId(themeId: ThemeId, section: keyof (typeof THEME_SECTION_MAP)['prism']): string {
  return THEME_SECTION_MAP[themeId][section];
}

export function getSectionHref(themeId: ThemeId, section: keyof (typeof THEME_SECTION_MAP)['prism']): string {
  return `#${getSectionId(themeId, section)}`;
}
