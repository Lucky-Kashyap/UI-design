import { useEffect } from 'react';

const HEADER_GAP_PX = 32;

export const useHeaderOffset = (): void => {
  useEffect(() => {
    const header = document.querySelector<HTMLElement>('.tg-site-header');
    if (!header) return undefined;

    let frameId = 0;
    let lastOffset = '';

    const applyOffset = () => {
      const height = Math.ceil(header.getBoundingClientRect().height);
      const next = `${height + HEADER_GAP_PX}px`;
      if (next === lastOffset) return;

      lastOffset = next;
      document.documentElement.style.setProperty('--tg-header-offset', next);
    };

    const sync = () => {
      if (frameId) cancelAnimationFrame(frameId);

      frameId = requestAnimationFrame(() => {
        frameId = 0;
        applyOffset();
      });
    };

    sync();

    const observer = new ResizeObserver(sync);
    observer.observe(header);
    window.addEventListener('resize', sync);

    return () => {
      if (frameId) cancelAnimationFrame(frameId);
      observer.disconnect();
      window.removeEventListener('resize', sync);
    };
  }, []);
};
