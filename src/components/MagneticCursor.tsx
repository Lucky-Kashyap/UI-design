'use client';

import { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import { useThemeOptional } from '@/context/ThemeProvider';

const INTERACTIVE_SELECTOR =
  '.tg-magnetic-target, a, button, [role="button"], input, textarea, select, label';

const TEXT_HOVER_SELECTOR =
  '.tg-heading-reveal, .tg-link-hover, .tg-text-hover, .tg-nav-link, .tg-eyebrow';

const XRAY_SELECTOR = '.tg-heading-reveal--active';

const MagneticCursor = () => {
  const theme = useThemeOptional();
  const reduce = useReducedMotion() ?? false;
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);
  const [textHover, setTextHover] = useState(false);
  const [xrayHover, setXrayHover] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (reduce || theme?.themeId !== 'prism') return undefined;

    const finePointer = window.matchMedia('(pointer: fine)').matches;
    if (!finePointer) return undefined;

    const onMove = (event: MouseEvent) => {
      setPos({ x: event.clientX, y: event.clientY });
      if (!visible) setVisible(true);
    };

    const onOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      setActive(Boolean(target?.closest(INTERACTIVE_SELECTOR)));
      setXrayHover(Boolean(target?.closest(XRAY_SELECTOR)));
      setTextHover(Boolean(target?.closest(TEXT_HOVER_SELECTOR)));
    };

    const onLeave = () => setVisible(false);

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);
    document.body.addEventListener('mouseleave', onLeave);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      document.body.removeEventListener('mouseleave', onLeave);
    };
  }, [reduce, theme?.themeId, visible]);

  if (reduce || theme?.themeId !== 'prism' || !visible) return null;

  const ringClass = active
    ? 'tg-magnetic-cursor__ring is-active'
    : xrayHover
      ? 'tg-magnetic-cursor__ring is-xray'
      : textHover
        ? 'tg-magnetic-cursor__ring is-text'
        : 'tg-magnetic-cursor__ring';

  return (
    <div
      className="tg-magnetic-cursor pointer-events-none fixed left-0 top-0 z-[200] hidden md:block"
      style={{ transform: `translate3d(${pos.x}px, ${pos.y}px, 0)` }}
      aria-hidden="true"
    >
      <span className={ringClass} />
      <span className="tg-magnetic-cursor__dot" />
    </div>
  );
};

export default MagneticCursor;
