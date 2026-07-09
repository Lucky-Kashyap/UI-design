/**
 * Central image path helpers for Next.js static export.
 * Assets live under public/images/ and public/media/.
 */

export const BRAND_IMAGES = {
  logo: '/traditional-group-logo.png',
  logoWebp: '/traditional-group-logo.webp',
} as const;

export const PRISM_MEDIA = {
  heroSlides: [
    '/media/hero-rajasthan-haveli-heritage-architecture.webp',
    '/media/hero-luxury-hospitality-resort-jaipur.webp',
    '/media/hero-education-campus-students-jaipur.webp',
    '/media/hero-adventure-nature-landscape-rajasthan.webp',
    '/media/hero-manufacturing-craftsmanship-traditional-gallery.webp',
  ],
  about: '/media/about-haveli-interior-heritage-jaipur.webp',
  cta: '/media/cta-evening-resort-hospitality-jaipur.webp',
} as const;

export const THEME_MEDIA_BASE = {
  meridian: '/media/meridian',
  horizon: '/media/horizon',
  forge: '/media/forge',
} as const;

export const THEME_ASSETS_BASE = {
  meridian: '/assets/themes/meridian',
  horizon: '/assets/themes/horizon',
  forge: '/assets/themes/forge',
} as const;

/** Normalize a public asset path (always leading slash, no double slashes). */
export function publicImagePath(path: string): string {
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  return `/${path.replace(/^\/+/, '')}`;
}

export type OptimizedImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  fill?: boolean;
  sizes?: string;
};

export const DEFAULT_IMAGE_SIZES = '(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw';
