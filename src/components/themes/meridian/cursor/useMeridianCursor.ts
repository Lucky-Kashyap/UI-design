'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

export type CursorMode = 'default' | 'button' | 'image' | 'card';

type CursorState = {
  x: number;
  y: number;
  ringX: number;
  ringY: number;
  mode: CursorMode;
  visible: boolean;
};

const LERP = 0.14;
const RING_LERP = 0.1;

export function useMeridianCursor() {
  const reduce = useReducedMotion() ?? false;
  const [state, setState] = useState<CursorState>({
    x: 0,
    y: 0,
    ringX: 0,
    ringY: 0,
    mode: 'default',
    visible: false,
  });

  const target = useRef({ x: 0, y: 0, ringX: 0, ringY: 0 });
  const current = useRef({ x: 0, y: 0, ringX: 0, ringY: 0 });
  const modeRef = useRef<CursorMode>('default');
  const frameRef = useRef<number>(0);
  const enabledRef = useRef(false);

  const setMode = useCallback((mode: CursorMode) => {
    modeRef.current = mode;
    setState((prev) => ({ ...prev, mode }));
  }, []);

  useEffect(() => {
    if (reduce) return;

    const isTouch =
      typeof window !== 'undefined' &&
      (window.matchMedia('(hover: none)').matches ||
        window.matchMedia('(pointer: coarse)').matches ||
        window.innerWidth < 1024);

    if (isTouch) return;

    enabledRef.current = true;

    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      setState((prev) => ({ ...prev, visible: true }));
    };

    const onLeave = () => {
      setState((prev) => ({ ...prev, visible: false }));
    };

    const tick = () => {
      current.current.x += (target.current.x - current.current.x) * LERP;
      current.current.y += (target.current.y - current.current.y) * LERP;
      current.current.ringX += (target.current.x - current.current.ringX) * RING_LERP;
      current.current.ringY += (target.current.y - current.current.ringY) * RING_LERP;

      setState((prev) => ({
        ...prev,
        x: current.current.x,
        y: current.current.y,
        ringX: current.current.ringX,
        ringY: current.current.ringY,
        mode: modeRef.current,
      }));

      frameRef.current = requestAnimationFrame(tick);
    };

    const onOver = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest('[data-md-cursor]');
      if (el) {
        const mode = (el.getAttribute('data-md-cursor') as CursorMode) ?? 'default';
        setMode(mode);
      } else {
        setMode('default');
      }
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseleave', onLeave);
    frameRef.current = requestAnimationFrame(tick);

    return () => {
      enabledRef.current = false;
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(frameRef.current);
    };
  }, [reduce, setMode]);

  return { ...state, enabled: enabledRef.current };
}
