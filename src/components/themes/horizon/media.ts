/**
 * Horizon Light — exclusive image paths.
 * Drop assets under public/assets/themes/horizon/{hero,ventures,gallery}/
 */

const base = '/assets/themes/horizon';
const hero = (name: string) => `${base}/hero/${name}`;
const ventures = (name: string) => `${base}/ventures/${name}`;
const gallery = (name: string) => `${base}/gallery/${name}`;

export type HorizonVentureMedia = {
  id: string;
  image: string;
  alt: string;
};

export const HORIZON_HERO_IMAGE = hero('horizon-hero-resort.webp');

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
