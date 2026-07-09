import { Menu, Phone, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import TraditionalGroupLogo from '@/components/TraditionalGroupLogo';
import { PRISM_CTA, PRISM_NAV_LINKS, PRISM_SECTION_IDS } from '@/data/prismContent';
import { SITE } from '@/data/traditionalGroup';
import { useThemeNav } from '@/hooks/useThemeNav';
import { cn } from '@/lib/utils';

const PrismNavigation = () => {
  const { scrolled, open, setOpen, active, setActiveHref, close, handleNavClick } = useThemeNav({
    sectionIds: PRISM_SECTION_IDS,
  });
  const contactActive = active === PRISM_CTA.href;
  const navSolid = scrolled || open;

  return (
    <div
      className={cn(
        'tg-navbar transition-colors duration-300 ease-tg',
        navSolid
          ? 'tg-glass border-b border-tg-line/80 backdrop-blur-xl'
          : 'border-b border-white/10 bg-tg-deep/25 backdrop-blur-sm',
      )}
    >
      <nav className="tg-navbar__inner tg-container flex min-w-0 items-center justify-between gap-3" aria-label="Primary">
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
          {PRISM_NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setActiveHref(link.href)}
                aria-current={active === link.href ? 'page' : undefined}
                className={cn(
                  'tg-nav-link',
                  navSolid ? 'text-tg-ink/80 text-[0.8125rem]' : 'tg-nav-link--hero text-[0.8125rem]',
                  active === link.href && (navSolid ? 'is-active text-tg-navy' : 'is-active'),
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a href={SITE.phoneHref} className="tg-btn-nav hidden items-center gap-2 border border-tg-line text-tg-ink xl:inline-flex" aria-label={`Call ${SITE.phoneDisplay}`}>
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            {SITE.phoneDisplay}
          </a>
          <a
            href={PRISM_CTA.href}
            onClick={() => setActiveHref(PRISM_CTA.href)}
            aria-current={contactActive ? 'page' : undefined}
            className={cn(navSolid ? 'tg-btn-primary' : 'tg-btn-gold', 'text-[0.8125rem]')}
          >
            {PRISM_CTA.label}
          </a>
        </div>

        <button
          type="button"
          className={cn(
            'inline-flex h-10 w-10 items-center justify-center rounded-tg-md border lg:hidden',
            navSolid ? 'border-tg-line text-tg-ink' : 'border-white/15 text-white',
          )}
          aria-expanded={open}
          aria-controls="prism-mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div id="prism-mobile-menu" className="fixed inset-0 z-40 lg:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <button type="button" className="absolute inset-0 bg-tg-deep/80 backdrop-blur-sm" aria-label="Close menu" onClick={close} />
            <motion.nav
              className="absolute right-0 top-0 flex h-full w-[min(100%,20rem)] flex-col border-l border-tg-line bg-white p-6"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              aria-label={`${SITE.name} mobile`}
            >
              <ul className="flex flex-col gap-1">
                {PRISM_NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => handleNavClick(link.href)}
                      aria-current={active === link.href ? 'page' : undefined}
                      className={cn('block rounded-tg-md px-3 py-3 text-base font-medium', active === link.href ? 'bg-tg-soft text-tg-navy' : 'text-tg-muted')}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <a href={PRISM_CTA.href} onClick={() => handleNavClick(PRISM_CTA.href)} className="tg-btn-primary mt-6 w-full text-center">
                {PRISM_CTA.label}
              </a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PrismNavigation;
