'use client';

import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { MeridianImage } from './ui';

export type MeridianBentoItem = {
  id: string;
  title: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  href?: string;
  onClick?: () => void;
  isActive?: boolean;
};

type MeridianBentoProps = {
  items: MeridianBentoItem[];
  className?: string;
  renderFooter?: (item: MeridianBentoItem) => ReactNode;
};

const cardMotion = (reduce: boolean, index: number) =>
  reduce
    ? {}
    : {
        initial: { opacity: 0, y: 28 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-60px' },
        transition: { delay: index * 0.08, duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
        whileHover: { y: -6 },
      };

const BentoCard = ({
  item,
  featured = false,
  index,
  reduce,
  renderFooter,
}: {
  item: MeridianBentoItem;
  featured?: boolean;
  index: number;
  reduce: boolean;
  renderFooter?: (item: MeridianBentoItem) => ReactNode;
}) => {
  const inner = (
    <>
      {item.image && (
        <div
          className={cn(
            'relative w-full shrink-0 overflow-hidden',
            featured ? 'aspect-[21/9] sm:aspect-[2.35/1]' : 'aspect-[16/10]',
          )}
        >
          <MeridianImage
            src={item.image}
            alt={item.imageAlt ?? item.title}
            className="md-img-zoom absolute inset-0 h-full w-full object-cover"
            loading="lazy"
            decoding="async"
            width={1200}
            height={featured ? 520 : 750}
            cursorMode="image"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-tg-deep/90 via-tg-deep/25 to-transparent" />
        </div>
      )}
      <div className="flex flex-1 flex-col p-4 xs:p-5">
        <h3 className="md-h3 text-tg-ink">{item.title}</h3>
        {item.description && <p className="md-body mt-2 text-tg-muted">{item.description}</p>}
        {renderFooter?.(item)}
      </div>
    </>
  );

  const cardClass = cn(
    'md-card-hover group relative flex h-full w-full flex-col overflow-hidden rounded-2xl border bg-tg-bg transition-all duration-500',
    item.isActive
      ? 'border-tg-cyan/60 shadow-[0_0_30px_rgba(6,182,212,0.15)]'
      : 'border-tg-line hover:border-tg-cyan/40',
  );

  const motionProps = cardMotion(reduce, index);

  if (item.href) {
    return (
      <motion.a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={cardClass}
        data-md-cursor="card"
        {...motionProps}
      >
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      onClick={item.onClick}
      className={cn(cardClass, 'text-left')}
      data-md-cursor="card"
      {...motionProps}
    >
      {inner}
    </motion.button>
  );
};

const MeridianBento = ({ items, className, renderFooter }: MeridianBentoProps) => {
  const reduce = useReducedMotion() ?? false;
  const [featured, ...rest] = items;

  return (
    <div className={cn('grid grid-cols-1 gap-4 md:grid-cols-2', className)}>
      {featured && (
        <div className="md:col-span-2">
          <BentoCard item={featured} featured index={0} reduce={reduce} renderFooter={renderFooter} />
        </div>
      )}
      {rest.map((item, index) => (
        <BentoCard
          key={item.id}
          item={item}
          index={index + 1}
          reduce={reduce}
          renderFooter={renderFooter}
        />
      ))}
    </div>
  );
};

export default MeridianBento;
