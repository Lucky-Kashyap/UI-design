import { useCallback, useEffect, useRef, useState } from 'react';
import { emitScroll, getHeaderOffsetPx, getScrollY, subscribeScroll } from '@/lib/scroll';

/** Extra viewport offset so padded sections (e.g. Meridian) activate when headings are visible. */
const SPY_BUFFER_PX = 48;
/** Keep nav highlight stable while Lenis scroll-to-section animation runs. */
const NAV_LOCK_MS = 950;

const getSectionActivationTop = (el: HTMLElement, scrollY: number): number => {
  const rect = el.getBoundingClientRect();
  const margin = parseFloat(getComputedStyle(el).scrollMarginTop);
  const scrollMargin = Number.isFinite(margin) ? margin : 0;
  return scrollY + rect.top - scrollMargin;
};

export const useScrollSpy = (sectionIds: readonly string[]) => {
  const initial = `#${sectionIds[0] ?? 'home'}`;
  const [active, setActive] = useState(initial);
  const activeRef = useRef(initial);
  const sectionElsRef = useRef<HTMLElement[]>([]);
  const lockSpyUntilRef = useRef(0);

  const resolveActive = useCallback(() => {
    if (sectionIds.length === 0) return;
    if (Date.now() < lockSpyUntilRef.current) return;

    const offset = getHeaderOffsetPx();
    const scrollY = getScrollY();
    const atBottom =
      window.innerHeight + scrollY >= document.documentElement.scrollHeight - 8;

    let next: string;

    if (atBottom) {
      next = `#${sectionIds[sectionIds.length - 1]}`;
    } else {
      const spyDocumentY = scrollY + offset + SPY_BUFFER_PX;

      let current = sectionIds[0];
      for (const el of sectionElsRef.current) {
        if (getSectionActivationTop(el, scrollY) <= spyDocumentY) {
          current = el.id;
        }
      }

      next = `#${current}`;
    }

    if (next === activeRef.current) return;
    activeRef.current = next;
    setActive(next);
  }, [sectionIds]);

  useEffect(() => {
    sectionElsRef.current = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el instanceof HTMLElement);

    resolveActive();

    const unsubscribe = subscribeScroll(resolveActive);
    window.addEventListener('resize', resolveActive);

    const header = document.querySelector('.tg-site-header');
    const resizeObserver = header ? new ResizeObserver(resolveActive) : null;
    if (header) resizeObserver?.observe(header);

    return () => {
      unsubscribe();
      window.removeEventListener('resize', resolveActive);
      resizeObserver?.disconnect();
    };
  }, [resolveActive, sectionIds]);

  const setActiveHref = useCallback((href: string) => {
    if (href !== activeRef.current) {
      activeRef.current = href;
      setActive(href);
    }
    lockSpyUntilRef.current = Date.now() + NAV_LOCK_MS;
    requestAnimationFrame(() => emitScroll());
  }, []);

  return { active, setActiveHref };
};
