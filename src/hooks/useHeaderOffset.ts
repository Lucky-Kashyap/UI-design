import { useEffect } from 'react';

const HEADER_GAP_PX = 20;

export const useHeaderOffset = (): void => {
  useEffect(() => {
    const header = document.querySelector<HTMLElement>('.tg-site-header');
    if (!header) return undefined;

    const sync = () => {
      const height = Math.ceil(header.getBoundingClientRect().height);
      document.documentElement.style.setProperty(
        '--tg-header-offset',
        `${height + HEADER_GAP_PX}px`,
      );
    };

    sync();

    const observer = new ResizeObserver(sync);
    observer.observe(header);
    window.addEventListener('resize', sync);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', sync);
    };
  }, []);
};
