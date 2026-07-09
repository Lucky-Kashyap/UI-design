'use client';

import { cn } from '@/lib/utils';
import { useMeridianCursor, type CursorMode } from './useMeridianCursor';

const ringClass: Record<CursorMode, string> = {
  default: '',
  button: 'md-cursor-ring--button',
  image: 'md-cursor-ring--image',
  card: 'md-cursor-ring--card',
};

const MeridianCursor = () => {
  const { x, y, ringX, ringY, mode, visible } = useMeridianCursor();

  if (!visible) return null;

  return (
    <div className="md-cursor-root" aria-hidden="true">
      <div
        className="md-cursor-dot"
        style={{ transform: `translate3d(${x}px, ${y}px, 0)` }}
      />
      <div
        className={cn('md-cursor-ring', ringClass[mode])}
        style={{ transform: `translate3d(${ringX}px, ${ringY}px, 0)` }}
      />
    </div>
  );
};

export default MeridianCursor;
