'use client';

import { useEffect, type ReactNode } from 'react';
import Lenis from 'lenis';
import { emitScroll, scrollToHash } from '@/lib/scroll';

type LenisProviderProps = {
  children: ReactNode;
};

const LenisProvider = ({ children }: LenisProviderProps) => {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const onAnchorClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!anchor) return;

      const hash = anchor.getAttribute('href');
      if (!hash || hash === '#') return;

      const el = document.querySelector(hash);
      if (!(el instanceof HTMLElement)) return;

      event.preventDefault();
      scrollToHash(hash, { immediate: reduceMotion });
    };

    document.addEventListener('click', onAnchorClick, true);

    if (reduceMotion) {
      window.addEventListener('scroll', emitScroll, { passive: true });
      return () => {
        document.removeEventListener('click', onAnchorClick, true);
        window.removeEventListener('scroll', emitScroll);
      };
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => 1 - Math.pow(1 - t, 4),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      // Native wheel on desktop — smoothWheel caused lag and blocked anchor scroll while inertia was active.
      smoothWheel: false,
      wheelMultiplier: 1,
      touchMultiplier: 1,
      syncTouch: false,
      infinite: false,
      autoResize: true,
    });

    (window as Window & { __lenis?: Lenis }).__lenis = lenis;

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    lenis.on('scroll', emitScroll);
    window.addEventListener('scroll', emitScroll, { passive: true });

    return () => {
      document.removeEventListener('click', onAnchorClick, true);
      window.removeEventListener('scroll', emitScroll);
      lenis.off('scroll', emitScroll);
      cancelAnimationFrame(frame);
      delete (window as Window & { __lenis?: Lenis }).__lenis;
      lenis.destroy();
    };
  }, []);

  return children;
};

export default LenisProvider;
