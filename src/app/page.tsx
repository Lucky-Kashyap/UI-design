import ThemePageClient from '@/components/ThemePageClient';
import { createMetadata } from '@/lib/metadata';
import { DEFAULT_THEME_ID } from '@/themes/registry';

export const metadata = createMetadata();

export default function HomePage() {
  return <ThemePageClient themeId={DEFAULT_THEME_ID} />;
}
