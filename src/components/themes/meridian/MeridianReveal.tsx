'use client';

import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

type MeridianRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'right';
  blur?: boolean;
};

const offset = {
  up: { x: 0, y: 32 },
  left: { x: -28, y: 0 },
  right: { x: 28, y: 0 },
};

const MeridianReveal = ({
  children,
  className,
  delay = 0,
  direction = 'up',
  blur = false,
}: MeridianRevealProps) => {
  const reduce = useReducedMotion() ?? false;
  const from = offset[direction];

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: from.x, y: from.y, filter: blur ? 'blur(10px)' : 'blur(0px)' }}
      whileInView={{ opacity: 1, x: 0, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-8% 0px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default MeridianReveal;
