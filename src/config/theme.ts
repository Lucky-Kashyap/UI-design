/** JS design tokens — motion, surfaces, forms (colors live in theme-palettes.css). */

export const motion = {
  ease: [0.22, 1, 0.36, 1] as const,
  duration: {
    fast: 0.28,
    base: 0.45,
    slow: 0.65,
    cinematic: 1.35,
  },
};

export const surfaces = {
  card: 'rounded-tg-lg border border-tg-line bg-tg-bg',
  cardHover: 'transition-colors hover:border-tg-cyan/40',
  section: 'tg-section scroll-mt-[var(--tg-header-offset,5.5rem)]',
};

export const buttons = {
  primary: 'tg-btn-primary',
  secondary: 'tg-btn-secondary',
  ghost: 'inline-flex items-center justify-center rounded-tg-pill border border-tg-line px-5 py-2.5 text-sm font-semibold',
};

export const layout = {
  contentMaxWidth: 'var(--site-content-max-width)',
  headerOffset: 'var(--site-header-offset)',
  sectionPadding: 'var(--section-y-padding)',
};
