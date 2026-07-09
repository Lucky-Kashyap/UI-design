import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

export type CardSwapItem = {
  id: string;
  quote: string;
  name: string;
  role: string;
};

type CardSwapProps = {
  items: CardSwapItem[];
  intervalMs?: number;
  className?: string;
};

const CardSwap = ({ items, intervalMs = 5000, className }: CardSwapProps) => {
  const reduce = useReducedMotion() ?? false;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduce || items.length <= 1) return undefined;
    const id = window.setInterval(() => setIndex((p) => (p + 1) % items.length), intervalMs);
    return () => window.clearInterval(id);
  }, [items.length, intervalMs, reduce]);

  const item = items[index] ?? items[0];

  return (
    <div className={cn('relative min-h-[12rem]', className)}>
      <AnimatePresence mode="wait">
        <motion.figure
          key={item.id}
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? undefined : { opacity: 0, y: -12 }}
          transition={{ duration: 0.45 }}
          className="rounded-tg-lg border border-tg-line bg-tg-bg p-5 xs:p-6"
        >
          <blockquote className="text-sm leading-relaxed text-tg-muted md:text-base">&ldquo;{item.quote}&rdquo;</blockquote>
          <figcaption className="mt-4 border-t border-tg-line pt-4">
            <p className="font-semibold text-tg-ink">{item.name}</p>
            <p className="text-xs text-tg-muted xs:text-sm">{item.role}</p>
          </figcaption>
        </motion.figure>
      </AnimatePresence>
    </div>
  );
};

export default CardSwap;
