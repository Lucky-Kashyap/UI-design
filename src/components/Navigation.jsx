import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import TraditionalGroupLogo from '@/components/TraditionalGroupLogo';
import { NAV_LINKS, SITE } from '@/data/traditionalGroup';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      const sections = NAV_LINKS.map((link) => link.href.replace('#', ''));
      let current = '#home';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top <= 110) current = `#${id}`;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-all duration-300',
        scrolled ? 'tg-glass shadow-sm border-b border-tg-line' : 'bg-white/95',
      )}
    >
      <nav className="tg-container flex items-center justify-between gap-3 py-3 md:py-3.5" aria-label="Primary">
        <a href="#home" className="shrink-0" onClick={close} aria-label="Traditional Group home">
          <TraditionalGroupLogo priority />
        </a>

        <ul className="hidden lg:flex items-center gap-1 xl:gap-2">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={cn(
                  'relative px-3 py-2 text-sm font-medium text-tg-ink/80 transition-colors hover:text-tg-navy',
                  active === link.href && 'text-tg-navy',
                )}
              >
                {link.label}
                <span
                  className={cn(
                    'absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full tg-prism-line transition-opacity',
                    active === link.href ? 'opacity-100' : 'opacity-0',
                  )}
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex">
          <a href="#contact" className="tg-btn-primary text-xs tracking-wide uppercase">
            Get a Free Quote
          </a>
        </div>

        <button
          type="button"
          className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-tg-line text-tg-navy"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-tg-line bg-white overflow-hidden"
          >
            <div className="tg-container flex flex-col gap-1 py-4 pb-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={close}
                  className={cn(
                    'rounded-xl px-4 py-3 text-base font-medium text-tg-ink hover:bg-tg-soft',
                    active === link.href && 'bg-tg-soft text-tg-navy',
                  )}
                >
                  {link.label}
                </a>
              ))}
              <a href={SITE.phoneHref} className="mt-2 tg-btn-primary w-full" onClick={close}>
                Call {SITE.phoneDisplay}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navigation;
