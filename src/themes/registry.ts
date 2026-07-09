import { forgeTheme } from '@/themes/forge';
import { horizonTheme } from '@/themes/horizon';
import { meridianTheme } from '@/themes/meridian';
import { prismTheme } from '@/themes/prism';
import type { ThemeConfig, ThemeId } from '@/themes/types';

export const DEFAULT_THEME_ID: ThemeId = 'prism';

export const THEMES: Record<ThemeId, ThemeConfig> = {
  prism: prismTheme,
  meridian: meridianTheme,
  horizon: horizonTheme,
  forge: forgeTheme,
};

export const THEME_LIST = Object.values(THEMES);

export const THEME_IDS = Object.keys(THEMES) as ThemeId[];

export function isThemeId(value: string | undefined): value is ThemeId {
  return value !== undefined && value in THEMES;
}

export function getTheme(id: ThemeId): ThemeConfig {
  return THEMES[id];
}

export function getThemeOrDefault(id: string | undefined): ThemeConfig {
  if (isThemeId(id)) return THEMES[id];
  return THEMES[DEFAULT_THEME_ID];
}
