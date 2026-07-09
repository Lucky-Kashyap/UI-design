import { Menu } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import TraditionalGroupLogo from '@/components/TraditionalGroupLogo';
import StaggeredMenu from '@/components/react-bits/StaggeredMenu';
import { FORGE_CTA, FORGE_NAV_LINKS, FORGE_SECTION_IDS } from '@/data/forgeContent';
import { useThemeNav } from '@/hooks/useThemeNav';
import { cn } from '@/lib/utils';

const ForgeNavigation = () => {
  const { scrolled, open, setOpen, active, setActiveHref, close, handleNavClick } = useThemeNav({
    sectionIds: FORGE_SECTION_IDS,
  });
  const navSolid = scrolled || open;

  const menuItems = FORGE_NAV_LINKS.map((link) => ({
    label: link.label,
    href: link.href,
    isActive: active === link.href,
    onClick: () => handleNavClick(link.href),
  }));

  return (
    <div className={cn('sticky top-0 z-50 border-b transition-colors', navSolid ? 'border-tg-line bg-tg-bg/95 backdrop-blur-md' : 'border-tg-gold/20 bg-tg-deep/30')}>
      <div className="tg-container flex items-center justify-between gap-4 py-4">
        <a href="#home" onClick={() => handleNavClick('#home')} aria-label="Traditional Group home">
          <TraditionalGroupLogo priority variant={navSolid ? 'default' : 'hero'} />
        </a>
        <div className="hidden h-px flex-1 max-w-xs bg-gradient-to-r from-transparent via-tg-gold/50 to-transparent lg:block" aria-hidden="true" />
        <ul className="hidden items-center gap-6 lg:flex">
          {FORGE_NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setActiveHref(link.href)}
                aria-current={active === link.href ? 'page' : undefined}
                className={cn(
                  'font-display text-sm tracking-wide transition-colors',
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
          className="hidden rounded-tg-pill border border-tg-gold bg-tg-gold/10 px-5 py-2 text-sm font-semibold text-tg-gold lg:inline-flex"
        >
          {FORGE_CTA.label}
        </a>
        <button
          type="button"
          className={cn(
            'inline-flex h-10 w-10 items-center justify-center rounded-full border lg:hidden',
            navSolid ? 'border-tg-line text-tg-ink' : 'border-tg-gold/40 text-white',
          )}
          aria-expanded={open}
          aria-controls="forge-mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((p) => !p)}
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <StaggeredMenu
            open={open}
            onClose={close}
            items={menuItems}
            cta={{ label: FORGE_CTA.label, href: FORGE_CTA.href, onClick: () => handleNavClick(FORGE_CTA.href) }}
            title="Forge navigation"
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ForgeNavigation;
