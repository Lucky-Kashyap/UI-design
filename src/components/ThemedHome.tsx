'use client';

import SiteLayout from '@/components/layout/SiteLayout';
import ThemePageContent from '@/components/themes/ThemePageContent';
import { useTheme } from '@/context/ThemeProvider';

type ThemedHomeProps = {
  preview?: boolean;
};

const ThemedHome = ({ preview = false }: ThemedHomeProps) => {
  const { theme } = useTheme();

  return (
    <SiteLayout preview={preview}>
      <ThemePageContent themeId={theme.id} />
    </SiteLayout>
  );
};

export default ThemedHome;
