export type ThemeId = 'prism' | 'meridian' | 'horizon' | 'forge';

export type ThemeNavigationStyle = 'classic' | 'pill-glass' | 'minimal-transparent' | 'serif-sticky';

export type ThemeHeroStyle = 'carousel' | 'cinematic-split' | 'photography' | 'parallax-layers';

export type VenturesSectionVariant = 'cards' | 'bento' | 'editorial-zigzag' | 'numbered-list';

export type GallerySectionVariant = 'timeline' | 'masonry' | 'filmstrip' | 'scenes-zigzag';

export type AboutSectionVariant = 'split-parallax' | 'timeline' | 'lineage-split';

export type TestimonialsSectionVariant = 'carousel' | 'marquee' | 'spotlight' | 'card-swap';

export type CtaSectionVariant = 'image-background' | 'gradient-electric' | 'reach-cards';

export type ThemeSectionVariants = {
  ventures: VenturesSectionVariant;
  about: AboutSectionVariant;
  gallery: GallerySectionVariant;
  testimonials: TestimonialsSectionVariant;
  cta: CtaSectionVariant;
};

export type ThemeLayout = {
  showTopBar: boolean;
  venturesStyle: 'cards' | 'bento';
  galleryStyle: 'grid' | 'masonry';
  navigationStyle: ThemeNavigationStyle;
  heroStyle: ThemeHeroStyle;
};

export type ThemeSpacing = {
  sectionY: string;
  containerX: string;
  heroContentRatio: string;
  heroVisualRatio: string;
};

export type ThemeAnimationConfig = {
  intensity: 'minimal' | 'balanced' | 'cinematic';
  respectReducedMotion: boolean;
  lenisSmoothScroll: boolean;
  heroParallax: boolean;
  shaderFallbackMobile: boolean;
};

export type ThemeReactBitsConfig = {
  navigation: {
    pillNav: boolean;
    staggeredMenu: boolean;
    magnet: boolean;
    electricBorder: boolean;
  };
  hero: {
    blurText: boolean;
    splitText: boolean;
    gradientText: boolean;
    scrollReveal: boolean;
    aurora: boolean;
    darkVeil: boolean;
    noise: boolean;
  };
  sections: {
    ventures?: Array<'MagicBento' | 'AnimatedContent'>;
    about?: Array<'ScrollReveal' | 'ProfileCard'>;
    gallery?: Array<'Masonry' | 'TiltedCard'>;
    testimonials?: Array<'SpotlightCard' | 'CardSwap'>;
    cta?: Array<'GradientText' | 'Magnet' | 'ElectricBorder'>;
  };
};

export type ThemeHeroMedia = {
  videoSrc?: string;
  posterSrc: string;
  fallbackImage: string;
};

export type ThemeAssets = {
  basePath: string;
  hero: ThemeHeroMedia;
  decorativeSvg?: string;
};

export type ThemeColors = {
  bg: string;
  soft: string;
  navy: string;
  deep: string;
  ink: string;
  muted: string;
  line: string;
  emerald: string;
  cyan: string;
  amber: string;
  gold: string;
  goldLight: string;
  coral: string;
  violet?: string;
  champagne?: string;
};

export type ThemeFonts = {
  display: string;
  sans: string;
  googleFontsUrl?: string;
};

export type ThemeConfig = {
  id: ThemeId;
  name: string;
  tagline: string;
  className: string;
  themeColor: string;
  gradient: string;
  colors: ThemeColors;
  fonts: ThemeFonts;
  layout: ThemeLayout;
  spacing: ThemeSpacing;
  sections: ThemeSectionVariants;
  animation: ThemeAnimationConfig;
  reactBits: ThemeReactBitsConfig;
  assets: ThemeAssets;
  status: 'complete' | 'preview' | 'stub';
};
