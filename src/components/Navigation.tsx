import { useEffect, useState } from 'react';
import { Menu, Phone, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import TraditionalGroupLogo from '@/components/TraditionalGroupLogo';
import { CONTACT_CTA, HEADER_NAV_LINKS, PAGE_SECTION_IDS, SITE } from '@/data/traditionalGroup';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { useScrolledPast } from '@/hooks/useScrolledPast';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const scrolled = useScrolledPast(48);
  const [open, setOpen] = useState(false);
  const { active, setActiveHref } = useScrollSpy(PAGE_SECTION_IDS);
  const contactActive = active === CONTACT_CTA.href;
  const navSolid = scrolled || open;

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const close = () => setOpen(false);

  const handleNavClick = (href: string) => {
    setActiveHref(href);
    close();
  };

  return (
    <div
      className={cn(
        'tg-navbar transition-colors duration-300 ease-tg',
        navSolid
          ? 'tg-glass border-b border-tg-line/80 backdrop-blur-xl'
          : 'border-b border-white/10 bg-tg-deep/25 backdrop-blur-sm',
      )}
    >
      <nav
        className="tg-navbar__inner tg-container flex min-w-0 items-center justify-between gap-3"
        aria-label="Primary"
      >
        <a
          href="#home"
          className="shrink-0 transition-transform duration-300 hover:scale-[1.02]"
          onClick={() => handleNavClick('#home')}
          aria-label="Traditional Group home"
          aria-current={active === '#home' ? 'page' : undefined}
        >
          <TraditionalGroupLogo priority variant={navSolid ? 'default' : 'hero'} />
        </a>

        <ul className="hidden lg:flex items-center gap-1 xl:gap-2">
          {HEADER_NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setActiveHref(link.href)}
                aria-current={active === link.href ? 'page' : undefined}
                className={cn(
                  'tg-nav-link',
                  navSolid
                    ? 'text-tg-ink/80 text-[0.8125rem]'
                    : 'tg-nav-link--hero text-[0.8125rem]',
                  active === link.href && (navSolid ? 'is-active text-tg-navy' : 'is-active'),
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex">
          <a
            href={CONTACT_CTA.href}
            onClick={() => setActiveHref(CONTACT_CTA.href)}
            aria-current={contactActive ? 'page' : undefined}
            className={cn(
              'tg-btn-nav transition-all duration-300',
              navSolid ? 'tg-btn-primary' : 'tg-btn-gold',
              contactActive && 'ring-2 ring-tg-cyan/60 ring-offset-2 ring-offset-transparent',
            )}
          >
            {CONTACT_CTA.label}
          </a>
        </div>

        <motion.button
          type="button"
          className={cn(
            'lg:hidden tg-icon-btn inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border',
            navSolid
              ? 'tg-icon-btn--cyan border-tg-line text-tg-navy'
              : 'border-white/40 text-white bg-white/15 backdrop-blur-sm shadow-[0_2px_12px_rgba(0,0,0,0.35)]',
          )}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
          whileTap={{ scale: 0.92 }}
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </motion.button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden border-t border-tg-line bg-white"
          >
            <div className="tg-container flex flex-col gap-1 py-3 pb-5">
              {HEADER_NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  aria-current={active === link.href ? 'page' : undefined}
                  className={cn(
                    'tg-mobile-nav-link',
                    active === link.href && 'tg-mobile-nav-link--active',
                  )}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={SITE.phoneHref}
                className="tg-btn-primary mt-2 w-full gap-2"
                onClick={close}
              >
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
