import type { Venture } from '@/data/traditionalGroup';
import { VENTURES } from '@/data/traditionalGroup';
import type { ThemeVentureMedia } from '@/data/themeMedia';

export function mergeVentureMedia(media: ThemeVentureMedia[]): Venture[] {
  return media.map((item) => {
    const venture = VENTURES.find((v) => v.id === item.id);
    if (!venture) throw new Error(`Unknown venture id: ${item.id}`);
    return { ...venture, image: item.image };
  });
}

export function ventureImageMap(media: ThemeVentureMedia[]): Record<string, string> {
  return Object.fromEntries(media.map((m) => [m.id, m.image]));
}
