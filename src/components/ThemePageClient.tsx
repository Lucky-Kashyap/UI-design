'use client';

import { ThemeProvider } from '@/context/ThemeProvider';
import ThemedHome from '@/components/ThemedHome';
import type { ThemeId } from '@/themes/types';

type ThemePageClientProps = {
  themeId?: ThemeId | string;
  preview?: boolean;
};

const ThemePageClient = ({ themeId, preview = false }: ThemePageClientProps) => (
  <ThemeProvider themeId={themeId}>
    <ThemedHome preview={preview} />
  </ThemeProvider>
);

export default ThemePageClient;
