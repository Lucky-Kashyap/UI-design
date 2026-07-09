'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import TraditionalGroupLogo from '@/components/TraditionalGroupLogo';
import { FORGE_CTA, FORGE_NAV_LINKS, FORGE_SECTION_IDS } from '@/data/forgeContent';
import { useThemeNav } from '@/hooks/useThemeNav';
import { cn } from '@/lib/utils';
import { ForgeContainer } from './ui';

const ForgeNavigation = () => {
  const reduce = useReducedMotion() ?? false;
  const [mounted, setMounted] = useState(false);
  const { scrolled, open, setOpen, active, setActiveHref, close, handleNavClick } = useThemeNav({
    sectionIds: FORGE_SECTION_IDS,
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
              id="forge-mobile-menu"
              className="fg-mobile-menu fixed inset-0 z-[100] flex flex-col bg-tg-bg lg:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Forge navigation"
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <ForgeContainer className="flex min-h-[3.25rem] items-center justify-between border-b border-tg-line py-3">
                <a
                  href="#home"
                  onClick={() => handleNavClick('#home')}
                  aria-label="Traditional Group home"
                  className="shrink-0"
                >
                  <TraditionalGroupLogo priority />
                </a>
                <button
                  type="button"
                  onClick={close}
                  className="inline-flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-tg-line text-tg-ink"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </ForgeContainer>

              <ForgeContainer className="flex min-h-0 flex-1 flex-col overflow-y-auto py-5 xs:py-6">
                <ul className="flex flex-col gap-1">
                  {FORGE_NAV_LINKS.map((link, index) => (
                    <motion.li
                      key={link.href}
                      initial={reduce ? false : { opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: reduce ? 0 : index * 0.05, duration: 0.3 }}
                    >
                      <a
                        href={link.href}
                        onClick={() => handleNavClick(link.href)}
                        aria-current={active === link.href ? 'page' : undefined}
                        className={cn(
                          'fg-nav-link block min-h-[2.75rem] rounded-tg-md px-3 py-3 text-lg leading-tight transition-colors xs:px-4 xs:py-3.5',
                          active === link.href
                            ? 'bg-tg-navy/8 font-medium text-tg-gold'
                            : 'text-tg-muted hover:bg-tg-soft hover:text-tg-ink',
                        )}
                      >
                        {link.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>

                <motion.a
                  href={FORGE_CTA.href}
                  onClick={() => handleNavClick(FORGE_CTA.href)}
                  initial={reduce ? false : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: reduce ? 0 : 0.28, duration: 0.3 }}
                  className="fg-btn fg-btn--primary fg-mobile-menu__cta mt-6 w-full min-h-[2.75rem] xs:mt-8"
                >
                  {FORGE_CTA.label}
                </motion.a>
              </ForgeContainer>
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
          'border-b transition-colors duration-300',
          navSolid ? 'border-tg-line bg-tg-bg/95 backdrop-blur-md' : 'border-tg-gold/20 bg-tg-deep/30',
        )}
      >
        <ForgeContainer className="flex min-w-0 items-center justify-between gap-3 py-3 xs:gap-4 md:py-4">
          <a href="#home" onClick={() => handleNavClick('#home')} aria-label="Traditional Group home" className="shrink-0">
            <TraditionalGroupLogo priority />
          </a>

          <ul className="hidden items-center gap-5 lg:flex lg:gap-6">
            {FORGE_NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setActiveHref(link.href)}
                  aria-current={active === link.href ? 'page' : undefined}
                  className={cn(
                    'fg-nav-link transition-colors',
                    active === link.href ? 'text-tg-gold' : navSolid ? 'text-tg-muted hover:text-tg-ink' : 'text-white/80 hover:text-white',
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={FORGE_CTA.href}
            onClick={() => setActiveHref(FORGE_CTA.href)}
            className="fg-btn fg-btn--ghost hidden shrink-0 px-5 lg:inline-flex"
          >
            {FORGE_CTA.label}
          </a>

          <button
            type="button"
            className={cn(
              'ml-auto inline-flex h-11 w-11 min-h-[44px] min-w-[44px] shrink-0 items-center justify-center rounded-full border lg:ml-0 lg:hidden',
              navSolid ? 'border-tg-line text-tg-ink' : 'border-tg-gold/40 text-white',
            )}
            aria-expanded={open}
            aria-controls="forge-mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((p) => !p)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </ForgeContainer>
      </div>
      {mobileMenu}
    </>
  );
};

export default ForgeNavigation;
