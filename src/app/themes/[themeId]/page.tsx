import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ThemePageClient from '@/components/ThemePageClient';
import { buildPreviewMetadata } from '@/lib/metadata';
import { getThemeOrDefault, isThemeId, THEME_IDS } from '@/themes/registry';

type ThemePreviewPageProps = {
  params: Promise<{ themeId: string }>;
};

export function generateStaticParams() {
  return THEME_IDS.map((themeId) => ({ themeId }));
}

export async function generateMetadata({ params }: ThemePreviewPageProps): Promise<Metadata> {
  const { themeId } = await params;
  if (!isThemeId(themeId)) {
    return { title: 'Theme Not Found' };
  }
  const theme = getThemeOrDefault(themeId);
  return buildPreviewMetadata(theme.name);
}

export default async function ThemePreviewPage({ params }: ThemePreviewPageProps) {
  const { themeId } = await params;

  if (!isThemeId(themeId)) {
    notFound();
  }

  return <ThemePageClient themeId={themeId} preview />;
}
