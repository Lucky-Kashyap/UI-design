'use client';

import { useCallback, useRef, type ReactNode } from 'react';
import { useReducedMotion } from 'framer-motion';
import { useThemeOptional } from '@/context/ThemeProvider';
import { cn } from '@/lib/utils';

type HeadingRevealProps = {
  children: ReactNode;
  className?: string;
  variant?: 'light' | 'dark';
  block?: boolean;
};

/**
 * Text clip-path x-ray on mousemove (Theme 1 / Prism).
 * Base text stays dim; a circular clip follows the cursor with full-bright letterforms.
 */
const HeadingReveal = ({
  children,
  className,
  variant = 'dark',
  block = false,
}: HeadingRevealProps) => {
  const theme = useThemeOptional();
  const reduce = useReducedMotion() ?? false;
  const rootRef = useRef<HTMLSpanElement>(null);
  const activeRef = useRef(false);

  const enabled = theme?.themeId === 'prism' && !reduce;

  const setPointer = useCallback((offsetX: number, offsetY: number) => {
    const el = rootRef.current;
    if (!el) return;
    el.style.setProperty('--tg-xray-x', `${offsetX}px`);
    el.style.setProperty('--tg-xray-y', `${offsetY}px`);
  }, []);

  const handleEnter = useCallback(
    (event: React.MouseEvent<HTMLSpanElement>) => {
      if (!enabled) return;
      const el = rootRef.current;
      if (!el) return;
      activeRef.current = true;
      el.classList.add('tg-heading-reveal--active');
      setPointer(event.nativeEvent.offsetX, event.nativeEvent.offsetY);
    },
    [enabled, setPointer],
  );

  const handleMove = useCallback(
    (event: React.MouseEvent<HTMLSpanElement>) => {
      if (!enabled || !activeRef.current) return;
      setPointer(event.nativeEvent.offsetX, event.nativeEvent.offsetY);
    },
    [enabled, setPointer],
  );

  const handleLeave = useCallback(() => {
    const el = rootRef.current;
    if (!el) return;
    activeRef.current = false;
    el.classList.remove('tg-heading-reveal--active');
  }, []);

  return (
    <span
      ref={rootRef}
      className={cn(
        'tg-heading-reveal',
        variant === 'light' && 'tg-heading-reveal--light',
        variant === 'dark' && 'tg-heading-reveal--dark',
        block && 'tg-heading-reveal--block',
        className,
      )}
      onMouseEnter={enabled ? handleEnter : undefined}
      onMouseMove={enabled ? handleMove : undefined}
      onMouseLeave={enabled ? handleLeave : undefined}
    >
      <span className="tg-heading-reveal__base">{children}</span>
      <span className="tg-heading-reveal__xray" aria-hidden="true">
        {children}
      </span>
    </span>
  );
};

export default HeadingReveal;
