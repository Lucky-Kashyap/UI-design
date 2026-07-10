'use client';

import { useEffect, useRef } from 'react';
import { getScrollY, subscribeScroll } from '@/lib/scroll';

const ScrollProgress = () => {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      const bar = barRef.current;
      if (!bar) return;

      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const next = max > 0 ? (getScrollY() / max) * 100 : 0;
      const clamped = Math.min(100, Math.max(0, next));
      bar.style.transform = `scaleX(${clamped / 100})`;
      bar.parentElement?.setAttribute('aria-valuenow', String(Math.round(clamped)));
    };

    update();
    const unsubscribe = subscribeScroll(update);
    window.addEventListener('resize', update);
    return () => {
      unsubscribe();
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <div
      className="fixed inset-x-0 top-0 z-[70] h-1 bg-tg-navy/10"
      role="progressbar"
      aria-label="Page scroll progress"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={0}
    >
      <div
        ref={barRef}
        className="h-full w-full origin-left tg-prism-line will-change-transform"
        style={{ transform: 'scaleX(0)' }}
      />
    </div>
  );
};

export default ScrollProgress;
