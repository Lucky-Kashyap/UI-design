/**
 * Copper Forge — exclusive image paths.
 * Drop assets under public/assets/themes/forge/{hero,ventures,gallery}/
 */

const base = '/assets/themes/forge';
const hero = (name: string) => `${base}/hero/${name}`;
const ventures = (name: string) => `${base}/ventures/${name}`;
const gallery = (name: string) => `${base}/gallery/${name}`;

export type ForgeVentureMedia = {
  id: string;
  image: string;
  alt: string;
};

export const FORGE_HERO_BG = hero('forge-hearth-hero.webp');
export const FORGE_HERO_FEATURE = hero('forge-valley-feature.webp');

export const FORGE_WORKS_MEDIA: ForgeVentureMedia[] = [
  { id: 'gallery', image: ventures('forge-work-manufacturing.webp'), alt: 'Manufacturing atelier — craftsmanship detail' },
  { id: 'haveli', image: ventures('forge-work-haveli.webp'), alt: 'Haveli courtyard at sunset — heritage warmth' },
  { id: 'sas', image: ventures('forge-work-education.webp'), alt: 'School campus walk — grounded education' },
  { id: 'kindori', image: ventures('forge-work-kindori.webp'), alt: 'IB learning commons' },
  { id: 'leopard', image: ventures('forge-work-resort.webp'), alt: 'Resort pool and hills — warm landscape' },
];

export const FORGE_LINEAGE_IMAGE = gallery('forge-lineage-interior.webp');

export const FORGE_CRAFT = [
  { id: 'fc1', src: gallery('forge-craft-textile.webp'), alt: 'Artisan weaving', sector: 'Textile', title: 'Loom and thread', description: 'Hands that carry forward Rajasthan weaving traditions.' },
  { id: 'fc2', src: gallery('forge-craft-trail.webp'), alt: 'Hill trail at dusk', sector: 'Landscape', title: 'Copper trails', description: 'Earth-toned paths that frame eco-adventure stays.' },
] as const;
