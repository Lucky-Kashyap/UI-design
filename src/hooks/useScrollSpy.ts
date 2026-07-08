import { useCallback, useEffect, useState } from 'react';
import { emitScroll, getHeaderOffsetPx, subscribeScroll } from '@/lib/scroll';

export const useScrollSpy = (sectionIds: readonly string[]) => {
  const initial = `#${sectionIds[0] ?? 'home'}`;
  const [active, setActive] = useState(initial);

  const resolveActive = useCallback(() => {
    if (sectionIds.length === 0) return;

    const offset = getHeaderOffsetPx();
    const atBottom =
      window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8;

    if (atBottom) {
      setActive(`#${sectionIds[sectionIds.length - 1]}`);
      return;
    }

    let current = sectionIds[0];
    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (!el) continue;
      if (el.getBoundingClientRect().top <= offset) {
        current = id;
      }
    }
    setActive(`#${current}`);
  }, [sectionIds]);

  useEffect(() => {
    resolveActive();

    const unsubscribe = subscribeScroll(resolveActive);
    window.addEventListener('scroll', resolveActive, { passive: true });
    window.addEventListener('resize', resolveActive);

    const header = document.querySelector('.tg-site-header');
    const resizeObserver = header ? new ResizeObserver(resolveActive) : null;
    if (header) resizeObserver?.observe(header);

    return () => {
      unsubscribe();
      window.removeEventListener('scroll', resolveActive);
      window.removeEventListener('resize', resolveActive);
      resizeObserver?.disconnect();
    };
  }, [resolveActive]);

  const setActiveHref = useCallback((href: string) => {
    setActive(href);
    requestAnimationFrame(() => emitScroll());
  }, []);

  return { active, setActiveHref };
};
