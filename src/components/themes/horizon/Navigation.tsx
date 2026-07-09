import { Menu } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import TraditionalGroupLogo from '@/components/TraditionalGroupLogo';
import StaggeredMenu from '@/components/react-bits/StaggeredMenu';
import { HORIZON_CTA, HORIZON_NAV_LINKS, HORIZON_SECTION_IDS } from '@/data/horizonContent';
import { useThemeNav } from '@/hooks/useThemeNav';
import { cn } from '@/lib/utils';
import { HorizonContainer } from './ui';

const HorizonNavigation = () => {
  const { scrolled, open, setOpen, active, setActiveHref, close, handleNavClick } = useThemeNav({
    sectionIds: HORIZON_SECTION_IDS,
  });
  const navSolid = scrolled || open;

  const menuItems = HORIZON_NAV_LINKS.map((link) => ({
    label: link.label,
    href: link.href,
    isActive: active === link.href,
    onClick: () => handleNavClick(link.href),
  }));

  return (
    <div
      className={cn(
        'py-3 transition-all duration-300 md:py-4',
        navSolid ? 'border-b border-tg-line bg-tg-bg/95 shadow-sm backdrop-blur-md' : 'bg-transparent',
      )}
    >
      <HorizonContainer className="flex min-w-0 items-center justify-between gap-4">
        <a href="#home" onClick={() => handleNavClick('#home')} aria-label="Traditional Group home" className="shrink-0">
          <TraditionalGroupLogo priority variant={navSolid ? 'default' : 'hero'} />
        </a>

        <ul className="hidden items-center gap-6 lg:gap-8 lg:flex">
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
          className={cn('hz-btn hz-btn--primary hidden min-h-[2.5rem] px-5 lg:inline-flex', !navSolid && 'shadow-lg')}
        >
          {HORIZON_CTA.label}
        </a>

        <button
          type="button"
          className={cn(
            'inline-flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-full border lg:hidden',
            navSolid ? 'border-tg-line text-tg-ink' : 'border-white/40 text-white',
          )}
          aria-expanded={open}
          aria-controls="horizon-mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((p) => !p)}
        >
          <Menu className="h-5 w-5" />
        </button>
      </HorizonContainer>

      <AnimatePresence>
        {open && (
          <StaggeredMenu
            id="horizon-mobile-menu"
            open={open}
            onClose={close}
            items={menuItems}
            cta={{ label: HORIZON_CTA.label, href: HORIZON_CTA.href, onClick: () => handleNavClick(HORIZON_CTA.href) }}
            title="Horizon navigation"
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default HorizonNavigation;
