/**
 * Meridian Atelier — exclusive image paths.
 * Drop assets under public/assets/themes/meridian/{hero,ventures,gallery}/
 */

const base = '/assets/themes/meridian';
const hero = (name: string) => `${base}/hero/${name}`;
const ventures = (name: string) => `${base}/ventures/${name}`;
const gallery = (name: string) => `${base}/gallery/${name}`;

export type MeridianVentureMedia = {
  id: string;
  image: string;
  alt: string;
};

export const MERIDIAN_HERO_VIDEO = `${base}/hero/meridian-hero-loop.webm`;
export const MERIDIAN_HERO_POSTER = hero('meridian-hero-poster.webp');
export const MERIDIAN_HERO_DEFAULT = hero('meridian-hero-gallery.webp');

export const MERIDIAN_VENTURE_MEDIA: MeridianVentureMedia[] = [
  { id: 'gallery', image: ventures('meridian-venture-gallery.webp'), alt: 'Manufacturing floor at night — cinematic architecture' },
  { id: 'haveli', image: ventures('meridian-venture-haveli.webp'), alt: 'Heritage haveli façade at night — editorial luxury' },
  { id: 'sas', image: ventures('meridian-venture-school.webp'), alt: 'School campus at twilight — modern education' },
  { id: 'kindori', image: ventures('meridian-venture-kindori.webp'), alt: 'IB library interior — premium learning space' },
  { id: 'leopard', image: ventures('meridian-venture-valley.webp'), alt: 'Valley resort deck at night — eco luxury' },
];

export const MERIDIAN_FRAMES = [
  { id: 'mf1', src: gallery('meridian-frame-haveli.webp'), alt: 'Haveli facade at night', sector: 'Hospitality', title: 'Night façades', description: 'Sandstone heritage lit with cyan accents after dark.' },
  { id: 'mf2', src: gallery('meridian-frame-resort.webp'), alt: 'Resort pool at night', sector: 'Resort', title: 'Still water', description: 'Infinity edges reflecting a deep Jaipur sky.' },
  { id: 'mf3', src: gallery('meridian-frame-campus.webp'), alt: 'Campus aerial at night', sector: 'Education', title: 'Campus glow', description: 'Learning corridors alive with evening light.' },
  { id: 'mf4', src: gallery('meridian-frame-valley.webp'), alt: 'Valley night landscape', sector: 'Adventure', title: 'Valley hush', description: 'Eco trails under violet horizons.' },
  { id: 'mf5', src: gallery('meridian-frame-factory.webp'), alt: 'Factory floor at night', sector: 'Manufacturing', title: 'Floor rhythm', description: 'Precision lines and craft in low light.' },
] as const;

export const MERIDIAN_EVOLUTION_IMAGE = gallery('meridian-about-heritage.webp');
