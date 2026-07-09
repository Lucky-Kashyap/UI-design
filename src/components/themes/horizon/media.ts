/**
 * Horizon Light — exclusive image paths (theme 3 only).
 * Backgrounds: public/assets/themes/horizon/backgrounds/
 * Content:     public/assets/themes/horizon/{ventures,gallery}/
 */

const base = '/assets/themes/horizon';
const backgrounds = (name: string) => `${base}/backgrounds/${name}`;
const ventures = (name: string) => `${base}/ventures/${name}`;
const gallery = (name: string) => `${base}/gallery/${name}`;

export type HorizonVentureMedia = {
  id: string;
  image: string;
  alt: string;
};

export const HORIZON_BG_HERO = backgrounds('horizon-bg-hero.webp');
export const HORIZON_BG_WORLDS = backgrounds('horizon-bg-worlds.webp');
export const HORIZON_BG_JOURNEY = backgrounds('horizon-bg-journey.webp');
export const HORIZON_BG_SCENES = backgrounds('horizon-bg-scenes.webp');
export const HORIZON_BG_ECHOES = backgrounds('horizon-bg-echoes.webp');
export const HORIZON_BG_REACH = backgrounds('horizon-bg-reach.webp');

export const HORIZON_HERO_IMAGE = HORIZON_BG_HERO;
export const HORIZON_JOURNEY_FEATURE = gallery('horizon-journey-feature.webp');
export const HORIZON_REACH_FEATURE = gallery('horizon-reach-feature.webp');

export const HORIZON_WORLDS_MEDIA: HorizonVentureMedia[] = [
  { id: 'gallery', image: ventures('horizon-world-factory.webp'), alt: 'Bright manufacturing studio in natural light' },
  { id: 'haveli', image: ventures('horizon-world-haveli.webp'), alt: 'Pink haveli in golden daylight' },
  { id: 'sas', image: ventures('horizon-world-campus.webp'), alt: 'Campus lawns in morning light' },
  { id: 'kindori', image: ventures('horizon-world-kindori.webp'), alt: 'IB collaborative classroom' },
  { id: 'leopard', image: ventures('horizon-world-valley.webp'), alt: 'Green valley trail — lifestyle photography' },
];

export const HORIZON_SCENES = [
  { id: 'hs1', src: gallery('horizon-scene-craft.webp'), alt: 'Textile loom detail', sector: 'Craft', title: 'Woven colour', description: 'Threads pulled tight under soft Jaipur daylight.' },
  { id: 'hs2', src: gallery('horizon-scene-nature.webp'), alt: 'Valley waterfall', sector: 'Nature', title: 'Living water', description: 'Rock, moss, and cool air along the valley path.' },
  { id: 'hs3', src: gallery('horizon-scene-campus.webp'), alt: 'Courtyard from above', sector: 'Education', title: 'Open courtyards', description: 'Geometry of light across learning spaces.' },
  { id: 'hs4', src: gallery('horizon-scene-evening.webp'), alt: 'Terrace lanterns', sector: 'Hospitality', title: 'Lantern hour', description: 'Terraces that slow time at the end of the day.' },
] as const;
