/**
 * Theme framework index — import configs from here when adding Theme 5+.
 */
export type { ThemeConfig, ThemeId } from '@/themes/types';
export { DEFAULT_THEME_ID, THEMES, THEME_LIST, getTheme, getThemeOrDefault, isThemeId } from '@/themes/registry';
export { prismTheme } from '@/themes/prism';
export { meridianTheme } from '@/themes/meridian';
export { horizonTheme } from '@/themes/horizon';
export { forgeTheme } from '@/themes/forge';
export { THEME_SECTION_MAP, getSectionHref, getSectionId } from '@/themes/sectionRegistry';
