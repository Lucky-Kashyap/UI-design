import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';
import { subscribeScroll } from '@/lib/scroll';

type CountUpOptions = {
  duration?: number;
  start?: number;
};

export function useCountUp(target: number, { duration = 1400, start = 0 }: CountUpOptions = {}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const reduceMotion = useReducedMotion();
  const [value, setValue] = useState(start);

  useEffect(() => {
    if (!inView) return undefined;
    if (reduceMotion) {
      setValue(target);
      return undefined;
    }

    let frame = 0;
    const begin = performance.now();

    const tick = (now: number) => {
      const progress = Math.min(1, (now - begin) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(start + (target - start) * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduceMotion, target, duration, start]);

  return { ref, value };
}

export function useParallax(strength = 24) {
  const ref = useRef<HTMLDivElement | null>(null);
  const reduceMotion = useReducedMotion();
  const [offset, setOffset] = useState(0);
  const rafRef = useRef(0);

  useEffect(() => {
    if (reduceMotion) return undefined;

    const isDesktop = window.matchMedia('(min-width: 1024px)').matches;
    if (!isDesktop) return undefined;

    const onScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = 0;
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const mid = rect.top + rect.height / 2 - window.innerHeight / 2;
        const next = Math.max(-strength, Math.min(strength, mid * -0.06));
        setOffset((prev) => (prev === next ? prev : next));
      });
    };

    onScroll();
    const unsubscribe = subscribeScroll(onScroll);
    return () => {
      unsubscribe();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [reduceMotion, strength]);

  return { ref, offset };
}
