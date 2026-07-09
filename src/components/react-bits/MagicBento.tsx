import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

export type MagicBentoItem = {
  id: string;
  title: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  href?: string;
  span?: 'default' | 'wide' | 'tall';
  onClick?: () => void;
  isActive?: boolean;
};

type MagicBentoProps = {
  items: MagicBentoItem[];
  className?: string;
  renderFooter?: (item: MagicBentoItem) => ReactNode;
};

const spanClass: Record<NonNullable<MagicBentoItem['span']>, string> = {
  default: '',
  wide: 'sm:col-span-2',
  tall: 'sm:row-span-2',
};

const MagicBento = ({ items, className, renderFooter }: MagicBentoProps) => {
  const reduce = useReducedMotion() ?? false;

  return (
    <div className={cn('grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3', className)}>
      {items.map((item, index) => {
        const inner = (
          <>
            {item.image && (
              <div className="relative aspect-[16/10] overflow-hidden sm:aspect-auto sm:min-h-[10rem]">
                <img
                  src={item.image}
                  alt={item.imageAlt ?? item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-tg-deep/85 via-tg-deep/20 to-transparent" />
              </div>
            )}
            <div className="p-4 xs:p-5">
              <h3 className="font-display text-lg text-tg-ink xs:text-xl">{item.title}</h3>
              {item.description && <p className="mt-2 text-sm text-tg-muted">{item.description}</p>}
              {renderFooter?.(item)}
            </div>
          </>
        );

        const cardClass = cn(
          'group relative overflow-hidden rounded-tg-xl border bg-tg-bg transition-all duration-500',
          item.isActive ? 'border-tg-cyan/60 shadow-[0_0_30px_rgba(6,182,212,0.15)]' : 'border-tg-line hover:border-tg-cyan/40 hover:shadow-lg',
          spanClass[item.span ?? 'default'],
        );

        const motionProps = reduce
          ? {}
          : {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true, margin: '-40px' },
              transition: { delay: index * 0.05, duration: 0.5 },
              whileHover: { y: -4 },
            };

        if (item.href) {
          return (
            <motion.a key={item.id} href={item.href} target="_blank" rel="noopener noreferrer" className={cardClass} {...motionProps}>
              {inner}
            </motion.a>
          );
        }

        return (
          <motion.button key={item.id} type="button" onClick={item.onClick} className={cn(cardClass, 'text-left')} {...motionProps}>
            {inner}
          </motion.button>
        );
      })}
    </div>
  );
};

export default MagicBento;
