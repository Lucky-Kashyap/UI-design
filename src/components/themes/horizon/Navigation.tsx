'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import HorizonLogo from './HorizonLogo';
import { HORIZON_CTA, HORIZON_NAV_LINKS, HORIZON_SECTION_IDS } from '@/data/horizonContent';
import { useThemeNav } from '@/hooks/useThemeNav';
import { cn } from '@/lib/utils';
import { HorizonContainer } from './ui';

const HorizonNavigation = () => {
  const reduce = useReducedMotion() ?? false;
  const [mounted, setMounted] = useState(false);
  const { scrolled, open, setOpen, active, setActiveHref, close, handleNavClick } = useThemeNav({
    sectionIds: HORIZON_SECTION_IDS,
  });
  const navSolid = scrolled || open;

  useEffect(() => {
    setMounted(true);
  }, []);

  const mobileMenu = mounted
    ? createPortal(
        <AnimatePresence>
          {open && (
            <motion.div
              id="horizon-mobile-menu"
              className="hz-mobile-menu fixed inset-0 z-[100] flex flex-col bg-tg-bg lg:hidden"
                role="dialog"
                aria-modal="true"
                aria-label="Horizon navigation"
                initial={reduce ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                <HorizonContainer className="flex items-center justify-between border-b border-tg-line py-3">
                  <a
                    href="#home"
                    onClick={() => handleNavClick('#home')}
                    aria-label="Traditional Group home"
                    className="tg-brand-logo-link shrink-0"
                  >
                    <HorizonLogo priority surface="solid" />
                  </a>
                  <button
                    type="button"
                    onClick={close}
                    className="inline-flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-tg-line text-tg-ink"
                    aria-label="Close menu"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </HorizonContainer>

                <HorizonContainer className="flex flex-1 flex-col justify-start overflow-y-auto py-6">
                  <ul className="flex flex-col gap-1">
                    {HORIZON_NAV_LINKS.map((link, index) => (
                      <motion.li
                        key={link.href}
                        initial={reduce ? false : { opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: reduce ? 0 : index * 0.05, duration: 0.3 }}
                      >
                        <a
                          href={link.href}
                          onClick={() => handleNavClick(link.href)}
                          aria-current={active === link.href ? 'page' : undefined}
                          className={cn(
                            'hz-nav-link block rounded-tg-lg px-4 py-3.5 text-lg transition-colors',
                            active === link.href
                              ? 'bg-tg-navy/10 font-semibold text-tg-navy'
                              : 'text-tg-muted hover:bg-tg-soft hover:text-tg-ink',
                          )}
                        >
                          {link.label}
                        </a>
                      </motion.li>
                    ))}
                  </ul>

                  <motion.a
                    href={HORIZON_CTA.href}
                    onClick={() => handleNavClick(HORIZON_CTA.href)}
                    initial={reduce ? false : { opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: reduce ? 0 : 0.28, duration: 0.3 }}
                    className="hz-btn hz-btn--primary hz-mobile-menu__cta mt-6 w-full text-center"
                  >
                    {HORIZON_CTA.label}
                  </motion.a>
                </HorizonContainer>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )
    : null;

  return (
    <>
      <div
        className={cn(
          'py-3 transition-all duration-300 md:py-4',
          navSolid ? 'border-b border-tg-line bg-tg-bg/95 shadow-sm backdrop-blur-md' : 'bg-transparent',
        )}
      >
        <HorizonContainer className="flex min-w-0 items-center gap-4">
          <a
            href="#home"
            onClick={() => handleNavClick('#home')}
            aria-label="Traditional Group home"
            className="tg-brand-logo-link shrink-0"
          >
            <HorizonLogo priority surface={navSolid ? 'solid' : 'hero'} />
          </a>

          <ul className="hidden min-w-0 flex-1 items-center justify-center gap-6 lg:flex lg:gap-8">
            {HORIZON_NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setActiveHref(link.href)}
                  aria-current={active === link.href ? 'page' : undefined}
                  className={cn(
                    'hz-nav-link transition-colors',
                    active === link.href ? 'text-tg-navy' : navSolid ? 'text-tg-muted hover:text-tg-navy' : 'text-white/85 hover:text-white',
                    active === link.href && 'border-b-2 border-tg-cyan pb-0.5',
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={HORIZON_CTA.href}
            onClick={() => setActiveHref(HORIZON_CTA.href)}
            className={cn(
              'hz-btn hz-btn--primary hz-nav-cta--desktop min-h-[2.5rem] shrink-0 px-5',
              !navSolid && 'shadow-lg',
            )}
          >
            {HORIZON_CTA.label}
          </a>

          <button
            type="button"
            className={cn(
              'ml-auto inline-flex h-11 w-11 min-h-[44px] min-w-[44px] shrink-0 items-center justify-center rounded-full border lg:ml-0 lg:hidden',
              navSolid ? 'border-tg-line text-tg-ink' : 'border-white/40 text-white',
            )}
            aria-expanded={open}
            aria-controls="horizon-mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((p) => !p)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </HorizonContainer>
      </div>
      {mobileMenu}
    </>
  );
};

export default HorizonNavigation;
