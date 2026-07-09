import type { ThemeConfig } from '@/themes/types';

/** Theme 1 — production tokens (values unchanged from approved Prism Heritage). */
export const prismTheme: ThemeConfig = {
  id: 'prism',
  name: 'Prism Heritage',
  tagline: 'Heritage luxury with prism accents',
  className: 'theme-prism',
  themeColor: '#0B1F3A',
  gradient: 'linear-gradient(90deg, #1fa463, #1ba3c9, #f0a020, #e85d3b)',
  colors: {
    bg: '#ffffff',
    soft: '#f5f7fa',
    navy: '#0b1f3a',
    deep: '#061428',
    ink: '#1a2332',
    muted: '#5b6575',
    line: 'rgba(11, 31, 58, 0.1)',
    emerald: '#1fa463',
    cyan: '#1ba3c9',
    amber: '#f0a020',
    gold: '#C9A227',
    goldLight: '#D4B84A',
    coral: '#e85d3b',
  },
  fonts: {
    display: 'Fraunces, Georgia, serif',
    sans: 'Outfit, system-ui, sans-serif',
  },
  layout: {
    showTopBar: true,
    venturesStyle: 'cards',
    galleryStyle: 'grid',
    navigationStyle: 'classic',
    heroStyle: 'carousel',
  },
  spacing: {
    sectionY: 'clamp(3rem, 8vw, 7rem)',
    containerX: 'clamp(0.75rem, 4vw, 2rem)',
    heroContentRatio: '1fr',
    heroVisualRatio: '1fr',
  },
  sections: {
    ventures: 'cards',
    about: 'split-parallax',
    gallery: 'timeline',
    testimonials: 'carousel',
    cta: 'image-background',
  },
  animation: {
    intensity: 'balanced',
    respectReducedMotion: true,
    lenisSmoothScroll: true,
    heroParallax: true,
    shaderFallbackMobile: false,
  },
  reactBits: {
    navigation: { pillNav: false, staggeredMenu: false, magnet: false, electricBorder: false },
    hero: {
      blurText: false,
      splitText: false,
      gradientText: false,
      scrollReveal: false,
      aurora: false,
      darkVeil: false,
      noise: false,
    },
    sections: {},
  },
  assets: {
    basePath: '/media',
    hero: {
      posterSrc: '/media/hero-rajasthan-haveli-heritage-architecture.webp',
      fallbackImage: '/media/hero-rajasthan-haveli-heritage-architecture.webp',
    },
  },
  status: 'complete',
};
