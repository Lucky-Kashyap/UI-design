import type { ThemeConfig } from '@/themes/types';

export const horizonTheme: ThemeConfig = {
  id: 'horizon',
  name: 'Horizon Light',
  tagline: 'Bright airy photography-forward layout',
  className: 'theme-horizon',
  themeColor: '#F7F5F0',
  gradient: 'linear-gradient(90deg, #38bdf8, #86efac, #fde68a)',
  colors: {
    bg: '#f7f5f0',
    soft: '#eef2f6',
    navy: '#1e3a5f',
    deep: '#152a45',
    ink: '#1a2332',
    muted: '#64748b',
    line: 'rgba(30, 58, 95, 0.1)',
    emerald: '#22c55e',
    cyan: '#38bdf8',
    amber: '#fbbf24',
    gold: '#ca8a04',
    goldLight: '#eab308',
    coral: '#f97316',
  },
  fonts: {
    display: 'Cormorant Garamond, Georgia, serif',
    sans: 'Source Sans 3, system-ui, sans-serif',
    googleFontsUrl:
      'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500&family=Source+Sans+3:wght@400;500;600;700&display=swap',
  },
  layout: {
    showTopBar: false,
    venturesStyle: 'cards',
    galleryStyle: 'grid',
    navigationStyle: 'minimal-transparent',
    heroStyle: 'photography',
  },
  spacing: {
    sectionY: 'clamp(3.5rem, 9vw, 7.5rem)',
    containerX: 'clamp(0.75rem, 4vw, 2rem)',
    heroContentRatio: '1fr',
    heroVisualRatio: '1.2fr',
  },
  sections: {
    ventures: 'editorial-zigzag',
    about: 'timeline',
    gallery: 'scenes-zigzag',
    testimonials: 'marquee',
    cta: 'reach-cards',
  },
  animation: {
    intensity: 'minimal',
    respectReducedMotion: true,
    lenisSmoothScroll: true,
    heroParallax: false,
    shaderFallbackMobile: true,
  },
  reactBits: {
    navigation: { pillNav: false, staggeredMenu: true, magnet: false, electricBorder: false },
    hero: {
      blurText: false,
      splitText: true,
      gradientText: false,
      scrollReveal: true,
      aurora: false,
      darkVeil: false,
      noise: false,
    },
    sections: {
      ventures: ['AnimatedContent'],
      gallery: ['Masonry'],
      testimonials: ['SpotlightCard'],
    },
  },
  assets: {
    basePath: '/assets/themes/horizon',
    hero: {
      posterSrc: '/media/horizon/horizon-hero-resort.webp',
      fallbackImage: '/media/horizon/horizon-hero-resort.webp',
    },
    decorativeSvg: '/assets/themes/horizon/icons/horizon-wave.svg',
  },
  status: 'complete',
};
