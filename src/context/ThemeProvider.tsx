'use client';

import { createContext, useContext, useEffect, useMemo, type ReactNode } from 'react';
import { getThemeOrDefault } from '@/themes/registry';
import type { ThemeConfig, ThemeId } from '@/themes/types';

type ThemeContextValue = {
  theme: ThemeConfig;
  themeId: ThemeId;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

type ThemeProviderProps = {
  themeId?: string;
  children: ReactNode;
};

export function ThemeProvider({ themeId, children }: ThemeProviderProps) {
  const theme = useMemo(() => getThemeOrDefault(themeId), [themeId]);

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = theme.id;

    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme.themeColor);

    if (theme.fonts.googleFontsUrl) {
      const id = `tg-font-${theme.id}`;
      if (!document.getElementById(id)) {
        const link = document.createElement('link');
        link.id = id;
        link.rel = 'stylesheet';
        link.href = theme.fonts.googleFontsUrl;
        document.head.appendChild(link);
      }
    }
  }, [theme]);

  const value = useMemo(() => ({ theme, themeId: theme.id }), [theme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}

export function useThemeOptional(): ThemeContextValue | null {
  return useContext(ThemeContext);
}
