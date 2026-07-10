'use client';

import { useEffect, useState, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

export type StaggeredMenuItem = {
  label: string;
  href: string;
  isActive?: boolean;
  onClick?: () => void;
};

type StaggeredMenuProps = {
  open: boolean;
  onClose: () => void;
  items: StaggeredMenuItem[];
  cta?: { label: string; href: string; onClick?: () => void };
  title?: string;
  logo?: ReactNode;
  className?: string;
  id?: string;
};

const StaggeredMenu = ({ open, onClose, items, cta, title, logo, className, id }: StaggeredMenuProps) => {
  const reduce = useReducedMotion() ?? false;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!open || !mounted) return null;

  return createPortal(
    <motion.div
      className={cn('fixed inset-0 z-[100] lg:hidden', className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <button type="button" className="absolute inset-0 bg-tg-deep/80 backdrop-blur-sm" aria-label="Close menu" onClick={onClose} />
      <motion.nav
        id={id}
        className="absolute right-0 top-0 flex h-full w-[min(100%,20rem)] flex-col border-l border-tg-line bg-tg-soft p-6"
        initial={reduce ? false : { x: '100%' }}
        animate={{ x: 0 }}
        exit={reduce ? undefined : { x: '100%' }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        aria-label={title ?? 'Mobile menu'}
      >
        <div className="mb-6 flex min-h-[2.75rem] items-center justify-between gap-3">
          {logo ?? (
            <div className="h-1 w-16 shrink-0 rounded-full bg-prism-band" aria-hidden="true" />
          )}
          <button
            type="button"
            onClick={onClose}
            className="tg-menu-toggle cursor-pointer rounded-tg-md border border-tg-line p-2 text-tg-ink"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <ul className="flex flex-col gap-1">
          {items.map((item, index) => (
            <motion.li
              key={item.href}
              initial={reduce ? false : { opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: reduce ? 0 : index * 0.06 }}
            >
              <a
                href={item.href}
                onClick={item.onClick}
                aria-current={item.isActive ? 'page' : undefined}
                className={cn(
                  'block rounded-tg-md px-3 py-3 text-base font-medium transition-colors',
                  item.isActive ? 'bg-tg-navy/10 text-tg-ink' : 'text-tg-muted hover:text-tg-ink',
                )}
              >
                {item.label}
              </a>
            </motion.li>
          ))}
        </ul>
        {cta && (
          <a href={cta.href} onClick={cta.onClick} className="tg-btn-primary mt-6 w-full text-center">
            {cta.label}
          </a>
        )}
      </motion.nav>
    </motion.div>,
    document.body,
  );
};

export default StaggeredMenu;
