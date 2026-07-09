import { useEffect, useRef, useState, type ReactNode } from 'react';
import { motion, useReducedMotion, useSpring, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';

type MagnetProps = {
  children: ReactNode;
  className?: string;
  strength?: number;
};

const Magnet = ({ children, className, strength = 0.35 }: MagnetProps) => {
  const reduce = useReducedMotion() ?? false;
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const springX = useSpring(0, { stiffness: 260, damping: 22 });
  const springY = useSpring(0, { stiffness: 260, damping: 22 });
  const x = useTransform(springX, (v) => v);
  const y = useTransform(springY, (v) => v);

  useEffect(() => {
    springX.set(position.x);
    springY.set(position.y);
  }, [position.x, position.y, springX, springY]);

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={cn('inline-block', className)}
      style={{ x, y }}
      onMouseMove={(event) => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const offsetX = event.clientX - (rect.left + rect.width / 2);
        const offsetY = event.clientY - (rect.top + rect.height / 2);
        setPosition({ x: offsetX * strength, y: offsetY * strength });
      }}
      onMouseLeave={() => setPosition({ x: 0, y: 0 })}
    >
      {children}
    </motion.div>
  );
};

export default Magnet;
