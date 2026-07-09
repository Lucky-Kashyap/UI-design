import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

type SpotlightCardProps = {
  children: ReactNode;
  className?: string;
};

const SpotlightCard = ({ children, className }: SpotlightCardProps) => {
  const reduce = useReducedMotion() ?? false;

  return (
    <motion.div
      className={cn(
        'group relative overflow-hidden rounded-tg-lg border border-tg-line bg-tg-bg p-5 transition-colors hover:border-tg-cyan/40 xs:p-6',
        className,
      )}
      whileHover={reduce ? undefined : { y: -4 }}
      transition={{ type: 'spring', stiffness: 320, damping: 24 }}
    >
      <div
        className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-tg-cyan/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden="true"
      />
      {children}
    </motion.div>
  );
};

export default SpotlightCard;
