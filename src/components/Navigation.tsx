import { useEffect, useState } from 'react';
import { Menu, Phone, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import TraditionalGroupLogo from '@/components/TraditionalGroupLogo';
import { NAV_LINKS, SITE } from '@/data/traditionalGroup';
import { useScrolledPast } from '@/hooks/useScrolledPast';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const scrolled = useScrolledPast(48);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const onScroll = () => {
      const sections = NAV_LINKS.map((link) => link.href.replace('#', ''));
      let current = '#home';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top <= 96) current = `#${id}`;
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
    <div
      className={cn(
        'tg-navbar transition-all duration-500 ease-tg',
        scrolled
          ? 'tg-glass border-b border-tg-line/80 backdrop-blur-xl'
          : 'border-b border-white/10 bg-tg-deep/25 backdrop-blur-sm',
      )}
    >
      <nav
        className="tg-navbar__inner tg-container flex items-center justify-between gap-3"
        aria-label="Primary"
      >
        <a
          href="#home"
          className="shrink-0 transition-transform duration-300 hover:scale-[1.02]"
          onClick={close}
          aria-label="Traditional Group home"
        >
          <TraditionalGroupLogo priority variant={scrolled ? 'default' : 'hero'} />
        </a>

        <ul className="hidden lg:flex items-center gap-1 xl:gap-2">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={cn(
                  'tg-nav-link',
                  scrolled
                    ? 'text-tg-ink/80 text-[0.8125rem]'
                    : 'tg-nav-link--hero text-[0.8125rem]',
                  active === link.href && (scrolled ? 'is-active text-tg-navy' : 'is-active'),
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex">
          <a
            href="#contact"
            className={cn(
              'tg-btn-nav transition-all duration-300',
              scrolled ? 'tg-btn-primary' : 'tg-btn-gold',
            )}
          >
            Get a Free Quote
          </a>
        </div>

        <motion.button
          type="button"
          className={cn(
            'lg:hidden tg-icon-btn inline-flex h-9 w-9 items-center justify-center rounded-full border',
            scrolled
              ? 'tg-icon-btn--cyan border-tg-line text-tg-navy'
              : 'border-white/40 text-white bg-white/15 backdrop-blur-sm shadow-[0_2px_12px_rgba(0,0,0,0.35)]',
          )}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
          whileTap={{ scale: 0.92 }}
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </motion.button>
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
            <div className="tg-container flex flex-col gap-1 py-3 pb-5">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={close}
                  className={cn(
                    'rounded-xl px-3.5 py-2.5 text-sm font-medium text-tg-ink transition-all duration-300 hover:bg-tg-soft hover:text-tg-cyan hover:translate-x-1',
                    active === link.href && 'bg-tg-soft text-tg-navy',
                  )}
                >
                  {link.label}
                </a>
              ))}
              <a href={SITE.phoneHref} className="mt-1.5 tg-btn-primary w-full gap-2" onClick={close}>
                <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                Call {SITE.phoneDisplay}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navigation;
