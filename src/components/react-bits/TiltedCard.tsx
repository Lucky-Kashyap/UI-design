import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

type TiltedCardProps = {
  children: ReactNode;
  className?: string;
};

const TiltedCard = ({ children, className }: TiltedCardProps) => {
  const reduce = useReducedMotion() ?? false;

  return (
    <motion.div
      className={cn('mb-3 break-inside-avoid overflow-hidden rounded-tg-lg border border-tg-line bg-tg-bg xs:mb-4', className)}
      whileHover={reduce ? undefined : { rotate: -0.5, y: -4 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
    >
      {children}
    </motion.div>
  );
};

export default TiltedCard;
