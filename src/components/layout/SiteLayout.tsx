'use client';

import type { ReactNode } from 'react';
import ScrollProgress from '@/components/ScrollProgress';
import ScrollToTop from '@/components/ScrollToTop';
import ThemeNavigation from '@/components/themes/ThemeNavigation';
import { useTheme } from '@/context/ThemeProvider';
import { useHeaderOffset } from '@/hooks/useHeaderOffset';
import { cn } from '@/lib/utils';

type SiteLayoutProps = {
  children: ReactNode;
  preview?: boolean;
};

const SiteLayout = ({ children, preview = false }: SiteLayoutProps) => {
  const { theme } = useTheme();
  useHeaderOffset();

  return (
    <div
      className={cn('min-h-screen bg-tg-bg text-tg-ink font-sans')}
      style={{ fontFamily: theme.fonts.sans }}
      data-preview={preview ? 'true' : undefined}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-tg-navy focus:shadow-lg"
      >
        Skip to content
      </a>

      <ScrollProgress />
      <ScrollToTop />
      <ThemeNavigation themeId={theme.id} showTopBar={theme.layout.showTopBar} />
      {children}
    </div>
  );
};

export default SiteLayout;
