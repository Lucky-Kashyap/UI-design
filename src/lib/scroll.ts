import type Lenis from 'lenis';

type ScrollListener = () => void;

const scrollListeners = new Set<ScrollListener>();

const SCROLL_EASING = (t: number) => 1 - Math.pow(1 - t, 4);
const NAV_SCROLL_DURATION_S = 0.85;

let scrollRafId = 0;

const getLenis = (): Lenis | undefined => (window as Window & { __lenis?: Lenis }).__lenis;

export const getHeaderOffsetPx = (): number => {
  const raw = getComputedStyle(document.documentElement).getPropertyValue('--tg-header-offset');
  const parsed = parseFloat(raw);
  return Number.isFinite(parsed) ? parsed : 88;
};

/** Current scroll position (Lenis virtual scroll when active, else native). */
export const getScrollY = (): number => {
  const lenis = getLenis();
  return lenis ? lenis.scroll : window.scrollY;
};

export const subscribeScroll = (listener: ScrollListener): (() => void) => {
  scrollListeners.add(listener);
  return () => scrollListeners.delete(listener);
};

/** Coalesces scroll notifications to one rAF per frame. */
export const emitScroll = (): void => {
  if (scrollRafId) return;
  scrollRafId = requestAnimationFrame(() => {
    scrollRafId = 0;
    scrollListeners.forEach((listener) => listener());
  });
};

const getScrollMarginTop = (el: HTMLElement): number => {
  const margin = parseFloat(getComputedStyle(el).scrollMarginTop);
  return Number.isFinite(margin) ? margin : getHeaderOffsetPx();
};

/** Pixel scroll target that respects CSS scroll-margin-top on the element. */
export const getElementScrollTop = (el: HTMLElement): number => {
  const top = el.getBoundingClientRect().top + getScrollY();
  return Math.max(0, top - getScrollMarginTop(el));
};

/** Scroll to a hash target; sections use CSS scroll-margin-top for the fixed header. */
export const scrollToHash = (hash: string, options?: { immediate?: boolean }): boolean => {
  if (!hash || hash === '#') return false;

  const el = document.querySelector(hash);
  if (!(el instanceof HTMLElement)) return false;

  const immediate = options?.immediate ?? false;
  const target = getElementScrollTop(el);
  const lenis = getLenis();

  if (lenis) {
    lenis.scrollTo(target, {
      duration: immediate ? 0 : NAV_SCROLL_DURATION_S,
      immediate,
      force: true,
      easing: SCROLL_EASING,
    });
    return true;
  }

  window.scrollTo({ top: target, behavior: immediate ? 'auto' : 'smooth' });
  return true;
};

export const scrollToTop = (options?: { immediate?: boolean }): void => {
  const immediate = options?.immediate ?? false;
  const lenis = getLenis();

  if (lenis) {
    lenis.scrollTo(0, {
      duration: immediate ? 0 : NAV_SCROLL_DURATION_S,
      immediate,
      force: true,
      easing: SCROLL_EASING,
    });
    return;
  }

  window.scrollTo({ top: 0, behavior: immediate ? 'auto' : 'smooth' });
};
