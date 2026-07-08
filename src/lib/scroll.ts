type ScrollListener = () => void;

const scrollListeners = new Set<ScrollListener>();

export const getHeaderOffsetPx = (): number => {
  const raw = getComputedStyle(document.documentElement).getPropertyValue('--tg-header-offset');
  const parsed = parseFloat(raw);
  return Number.isFinite(parsed) ? parsed : 88;
};

export const subscribeScroll = (listener: ScrollListener): (() => void) => {
  scrollListeners.add(listener);
  return () => scrollListeners.delete(listener);
};

export const emitScroll = (): void => {
  scrollListeners.forEach((listener) => listener());
};
