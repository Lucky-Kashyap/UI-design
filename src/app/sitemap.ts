import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/config/seo';
import { THEME_IDS } from '@/themes/registry';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${SITE_URL}themes`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.2,
    },
    ...THEME_IDS.map((themeId) => ({
      url: `${SITE_URL}themes/${themeId}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.1,
    })),
  ];
}
