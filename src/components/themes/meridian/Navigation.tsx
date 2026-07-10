'use client';

import { useCallback, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import ThemeMobileMenu from '@/components/themes/ThemeMobileMenu';
import { MERIDIAN_CTA, MERIDIAN_NAV_LINKS, MERIDIAN_SECTION_IDS } from '@/data/meridianContent';
import { useThemeNav } from '@/hooks/useThemeNav';
import { cn } from '@/lib/utils';
import MeridianLogo from './MeridianLogo';
import { MeridianContainer } from './ui';

const MeridianNavigation = () => {
  const reduce = useReducedMotion() ?? false;
  const { scrolled, open, setOpen, active, setActiveHref, close, handleNavClick } = useThemeNav({
    sectionIds: MERIDIAN_SECTION_IDS,
  });
  const navRef = useRef<HTMLDivElement>(null);
  const pillRef = useRef<HTMLSpanElement>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const contactActive = active === MERIDIAN_CTA.href;
  const navSolid = scrolled || open;
  const activeIndex = MERIDIAN_NAV_LINKS.findIndex((link) => active === link.href);

  const updatePill = useCallback(() => {
    const pill = pillRef.current;
    const activeLink = linkRefs.current[activeIndex];
    const nav = navRef.current;
    if (!pill || !activeLink || !nav || activeIndex < 0) {
      if (pill) pill.style.opacity = '0';
      return;
    }
    const navRect = nav.getBoundingClientRect();
    const linkRect = activeLink.getBoundingClientRect();
    pill.style.opacity = '1';
    pill.style.left = `${linkRect.left - navRect.left}px`;
    pill.style.width = `${linkRect.width}px`;
  }, [activeIndex]);

  useEffect(() => {
    updatePill();
    window.addEventListener('resize', updatePill);
    return () => window.removeEventListener('resize', updatePill);
  }, [updatePill, navSolid]);

  return (
    <>
      <div
        className={cn(
          'md-nav py-3 md:py-3.5',
          navSolid ? 'md-nav--scrolled' : 'md-nav--top',
        )}
      >
        <MeridianContainer className="flex min-w-0 items-center justify-between gap-3 lg:gap-6">
          <a
            href="#home"
            className="tg-brand-logo-link shrink-0"
            onClick={() => handleNavClick('#home')}
            aria-label="Traditional Group home"
            aria-current={active === '#home' ? 'page' : undefined}
            data-md-cursor="button"
          >
            <MeridianLogo priority />
          </a>

          <nav
            ref={navRef}
            className="relative hidden min-w-0 flex-1 items-center justify-center lg:flex"
            aria-label="Primary"
          >
            <span ref={pillRef} className="md-nav-pill" style={{ opacity: 0 }} aria-hidden="true" />
            <ul className="relative z-10 flex items-center gap-0.5 xl:gap-1">
              {MERIDIAN_NAV_LINKS.map((link, index) => (
                <li key={link.href}>
                  <a
                    ref={(el) => {
                      linkRefs.current[index] = el;
                    }}
                    href={link.href}
                    onClick={() => handleNavClick(link.href)}
                    aria-current={active === link.href ? 'page' : undefined}
                    className={cn(
                      'md-nav-link inline-block',
                      active === link.href && 'md-nav-link--active',
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden shrink-0 lg:block">
            <a
              href={MERIDIAN_CTA.href}
              onClick={() => setActiveHref(MERIDIAN_CTA.href)}
              aria-current={contactActive ? 'page' : undefined}
              className="md-btn md-btn--primary md-nav-cta"
              data-md-cursor="button"
            >
              {MERIDIAN_CTA.label}
            </a>
          </div>

          <button
            type="button"
            className={cn(
              'tg-menu-toggle inline-flex h-11 w-11 min-h-[44px] min-w-[44px] cursor-pointer items-center justify-center rounded-xl border transition-colors lg:hidden',
              navSolid
                ? 'border-white/15 bg-white/5 text-white'
                : 'border-white/20 bg-black/20 text-white backdrop-blur-sm',
            )}
            aria-expanded={open}
            aria-controls="meridian-mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </MeridianContainer>
      </div>

      <ThemeMobileMenu open={open} id="meridian-mobile-menu" label="Meridian navigation" className="bg-tg-deep">
        <MeridianContainer className="flex items-center justify-between border-b border-white/10 py-3">
          <a
            href="#home"
            onClick={() => handleNavClick('#home')}
            aria-label="Traditional Group home"
            className="tg-brand-logo-link shrink-0"
          >
            <MeridianLogo priority />
          </a>
          <button
            type="button"
            onClick={close}
            className="tg-menu-toggle inline-flex h-11 w-11 min-h-[44px] min-w-[44px] cursor-pointer items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </MeridianContainer>

        <MeridianContainer className="flex flex-1 flex-col overflow-y-auto py-4">
          <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
            {MERIDIAN_NAV_LINKS.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                initial={reduce ? false : { opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: reduce ? 0 : index * 0.05, duration: 0.35 }}
                className={cn(
                  'rounded-xl px-4 py-3 text-base font-medium transition-colors',
                  active === link.href
                    ? 'bg-white/10 text-white'
                    : 'text-white/75 hover:bg-white/5 hover:text-white',
                )}
              >
                {link.label}
              </motion.a>
            ))}
          </nav>
          <motion.a
            href={MERIDIAN_CTA.href}
            onClick={() => handleNavClick(MERIDIAN_CTA.href)}
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: reduce ? 0 : 0.25, duration: 0.35 }}
            className="md-btn md-btn--primary mt-3 w-full"
          >
            {MERIDIAN_CTA.label}
          </motion.a>
        </MeridianContainer>
      </ThemeMobileMenu>
    </>
  );
};

export default MeridianNavigation;
