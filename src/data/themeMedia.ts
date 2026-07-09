/**
 * Theme-exclusive image pools — each theme uses only its own /media/{theme}/ assets.
 */
export type ThemeVentureMedia = {
  id: string;
  image: string;
  alt: string;
};

const forge = (name: string) => `/media/forge/${name}`;
const meridian = (name: string) => `/media/meridian/${name}`;
const horizon = (name: string) => `/media/horizon/${name}`;

/** Prism — original shared library (theme 1 only). */
export const MEDIA = {
  heroRajasthan: '/media/hero-rajasthan-haveli-heritage-architecture.webp',
  heroLuxury: '/media/hero-luxury-hospitality-resort-jaipur.webp',
  heroEducation: '/media/hero-education-campus-students-jaipur.webp',
  heroAdventure: '/media/hero-adventure-nature-landscape-rajasthan.webp',
  heroManufacturing: '/media/hero-manufacturing-craftsmanship-traditional-gallery.webp',
  galleryManufacturing: '/media/gallery-manufacturing-craft-traditional-gallery.webp',
  galleryEco: '/media/gallery-eco-adventure-leopard-valley-rajasthan.webp',
  galleryEducation: '/media/gallery-education-campus-shanti-asiatic-jaipur.webp',
  aboutInterior: '/media/about-haveli-interior-heritage-jaipur.webp',
  ctaEvening: '/media/cta-evening-resort-hospitality-jaipur.webp',
} as const;

export const PRISM_VENTURE_MEDIA: ThemeVentureMedia[] = [
  { id: 'gallery', image: MEDIA.galleryManufacturing, alt: 'Traditional Gallery manufacturing craft' },
  { id: 'haveli', image: MEDIA.galleryEco, alt: 'Heritage hospitality exterior' },
  { id: 'sas', image: MEDIA.galleryEducation, alt: 'Shanti Asiatic School campus' },
  { id: 'kindori', image: MEDIA.aboutInterior, alt: 'Kindori school heritage interior' },
  { id: 'leopard', image: MEDIA.ctaEvening, alt: 'Leopard Valley evening resort' },
];

export const PRISM_GALLERY = [
  { id: 'g1', src: MEDIA.heroRajasthan, alt: 'Heritage haveli façade at golden hour', sector: 'Hospitality', title: 'Heritage at golden hour', description: 'Tradition meets boutique luxury — Rajasthan light on heritage façades.' },
  { id: 'g2', src: MEDIA.heroLuxury, alt: 'Luxury resort pool', sector: 'Resort', title: 'Resort horizons', description: 'Open skies and calm hospitality across Jaipur.' },
  { id: 'g3', src: MEDIA.heroEducation, alt: 'Students on campus', sector: 'Education', title: 'Campuses that shape futures', description: 'Learning environments from SAS to Kindori.' },
  { id: 'g4', src: MEDIA.heroAdventure, alt: 'Valley landscape', sector: 'Eco-Adventure', title: 'Wild edges of Leopard Valley', description: 'Nature-forward eco experiences in Rajasthan.' },
] as const;

/* ── Meridian (theme 2) ── */
export const MERIDIAN_VENTURE_MEDIA: ThemeVentureMedia[] = [
  { id: 'gallery', image: meridian('meridian-hero-gallery.webp'), alt: 'Manufacturing floor at night' },
  { id: 'haveli', image: meridian('meridian-hero-haveli.webp'), alt: 'Heritage haveli at night' },
  { id: 'sas', image: meridian('meridian-hero-school.webp'), alt: 'School campus at twilight' },
  { id: 'kindori', image: meridian('meridian-hero-kindori.webp'), alt: 'IB library interior' },
  { id: 'leopard', image: meridian('meridian-hero-valley.webp'), alt: 'Valley resort deck at night' },
];

export const MERIDIAN_HERO_DEFAULT = meridian('meridian-hero-gallery.webp');

export const MERIDIAN_FRAMES = [
  { id: 'mf1', src: meridian('meridian-frame-haveli.webp'), alt: 'Haveli facade night', sector: 'Hospitality', title: 'Night façades', description: 'Sandstone heritage lit with cyan accents after dark.' },
  { id: 'mf2', src: meridian('meridian-frame-resort.webp'), alt: 'Resort pool night', sector: 'Resort', title: 'Still water', description: 'Infinity edges reflecting a deep Jaipur sky.' },
  { id: 'mf3', src: meridian('meridian-frame-campus.webp'), alt: 'Campus aerial night', sector: 'Education', title: 'Campus glow', description: 'Learning corridors alive with evening light.' },
  { id: 'mf4', src: meridian('meridian-frame-valley.webp'), alt: 'Valley night landscape', sector: 'Adventure', title: 'Valley hush', description: 'Eco trails under violet horizons.' },
  { id: 'mf5', src: meridian('meridian-frame-factory.webp'), alt: 'Factory floor night', sector: 'Manufacturing', title: 'Floor rhythm', description: 'Precision lines and craft in low light.' },
] as const;

/* ── Horizon (theme 3) ── */
const horizonBg = (name: string) => `/assets/themes/horizon/backgrounds/${name}`;
const horizonVenture = (name: string) => `/assets/themes/horizon/ventures/${name}`;
const horizonGallery = (name: string) => `/assets/themes/horizon/gallery/${name}`;

export const HORIZON_HERO_IMAGE = horizonBg('horizon-bg-hero.webp');
export const HORIZON_BG_WORLDS = horizonBg('horizon-bg-worlds.webp');
export const HORIZON_BG_JOURNEY = horizonBg('horizon-bg-journey.webp');
export const HORIZON_BG_SCENES = horizonBg('horizon-bg-scenes.webp');
export const HORIZON_BG_ECHOES = horizonBg('horizon-bg-echoes.webp');
export const HORIZON_BG_REACH = horizonBg('horizon-bg-reach.webp');

export const HORIZON_WORLDS_MEDIA: ThemeVentureMedia[] = [
  { id: 'gallery', image: horizonVenture('horizon-world-factory.webp'), alt: 'Bright manufacturing studio' },
  { id: 'haveli', image: horizonVenture('horizon-world-haveli.webp'), alt: 'Pink haveli in daylight' },
  { id: 'sas', image: horizonVenture('horizon-world-campus.webp'), alt: 'Campus lawns in morning light' },
  { id: 'kindori', image: horizonVenture('horizon-world-kindori.webp'), alt: 'IB collaborative classroom' },
  { id: 'leopard', image: horizonVenture('horizon-world-valley.webp'), alt: 'Green valley trail' },
];

export const HORIZON_SCENES = [
  { id: 'hs1', src: horizonGallery('horizon-scene-craft.webp'), alt: 'Textile loom detail', sector: 'Craft', title: 'Woven colour', description: 'Threads pulled tight under soft Jaipur daylight.' },
  { id: 'hs2', src: horizonGallery('horizon-scene-nature.webp'), alt: 'Valley waterfall', sector: 'Nature', title: 'Living water', description: 'Rock, moss, and cool air along the valley path.' },
  { id: 'hs3', src: horizonGallery('horizon-scene-campus.webp'), alt: 'Courtyard from above', sector: 'Education', title: 'Open courtyards', description: 'Geometry of light across learning spaces.' },
  { id: 'hs4', src: horizonGallery('horizon-scene-evening.webp'), alt: 'Terrace lanterns', sector: 'Hospitality', title: 'Lantern hour', description: 'Terraces that slow time at the end of the day.' },
] as const;

/* ── Forge (theme 4) ── */
export const FORGE_HERO_BG = forge('forge-hearth-hero.webp');
export const FORGE_HERO_FEATURE = forge('forge-valley-feature.webp');

export const FORGE_WORKS_MEDIA: ThemeVentureMedia[] = [
  { id: 'gallery', image: forge('forge-work-manufacturing.webp'), alt: 'Manufacturing atelier' },
  { id: 'haveli', image: forge('forge-work-haveli.webp'), alt: 'Haveli courtyard sunset' },
  { id: 'sas', image: forge('forge-work-education.webp'), alt: 'School campus walk' },
  { id: 'kindori', image: forge('forge-work-kindori.webp'), alt: 'IB learning commons' },
  { id: 'leopard', image: forge('forge-work-resort.webp'), alt: 'Resort pool and hills' },
];

export const FORGE_LINEAGE_IMAGE = forge('forge-lineage-interior.webp');

export const FORGE_CRAFT = [
  { id: 'fc1', src: forge('forge-craft-textile.webp'), alt: 'Artisan weaving', sector: 'Textile', title: 'Loom and thread', description: 'Hands that carry forward Rajasthan weaving traditions.' },
  { id: 'fc2', src: forge('forge-craft-trail.webp'), alt: 'Hill trail at dusk', sector: 'Landscape', title: 'Copper trails', description: 'Earth-toned paths that frame eco-adventure stays.' },
] as const;
