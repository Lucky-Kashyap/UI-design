import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';

export function useCountUp(target, { duration = 1400, start = 0 } = {}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const reduceMotion = useReducedMotion();
  const [value, setValue] = useState(start);

  useEffect(() => {
    if (!inView) return undefined;
    if (reduceMotion) {
      setValue(target);
      return undefined;
    }

    let frame;
    const begin = performance.now();

    const tick = (now) => {
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
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (reduceMotion) return undefined;

    const isDesktop = window.matchMedia('(min-width: 1024px)').matches;
    if (!isDesktop) return undefined;

    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const mid = rect.top + rect.height / 2 - window.innerHeight / 2;
      setOffset(Math.max(-strength, Math.min(strength, mid * -0.06)));
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [reduceMotion, strength]);

  return { ref, offset };
}
