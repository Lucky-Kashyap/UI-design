import { Menu } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import TraditionalGroupLogo from '@/components/TraditionalGroupLogo';
import ElectricBorder from '@/components/react-bits/ElectricBorder';
import Magnet from '@/components/react-bits/Magnet';
import PillNav from '@/components/react-bits/PillNav';
import StaggeredMenu from '@/components/react-bits/StaggeredMenu';
import { MERIDIAN_CTA, MERIDIAN_NAV_LINKS, MERIDIAN_SECTION_IDS } from '@/data/meridianContent';
import { useThemeNav } from '@/hooks/useThemeNav';
import { cn } from '@/lib/utils';
import { MeridianContainer } from './ui';

const MeridianNavigation = () => {
  const { scrolled, open, setOpen, active, setActiveHref, close, handleNavClick } = useThemeNav({
    sectionIds: MERIDIAN_SECTION_IDS,
  });
  const contactActive = active === MERIDIAN_CTA.href;
  const navSolid = scrolled || open;

  const pillItems = MERIDIAN_NAV_LINKS.map((link) => ({
    label: link.label,
    href: link.href,
    isActive: active === link.href,
    onClick: () => handleNavClick(link.href),
  }));

  const menuItems = MERIDIAN_NAV_LINKS.map((link) => ({
    label: link.label,
    href: link.href,
    isActive: active === link.href,
    onClick: () => handleNavClick(link.href),
  }));

  return (
    <div
      className={cn(
        'transition-colors duration-300 ease-tg py-3 md:py-3.5',
        navSolid
          ? 'border-b border-tg-line/60 bg-tg-bg/90 backdrop-blur-xl'
          : 'border-b border-white/10 bg-white/5 backdrop-blur-2xl',
      )}
    >
      <MeridianContainer className="flex min-w-0 items-center justify-between gap-3">
        <a
          href="#home"
          className="shrink-0 transition-transform duration-300 hover:scale-[1.02]"
          onClick={() => handleNavClick('#home')}
          aria-label="Traditional Group home"
          aria-current={active === '#home' ? 'page' : undefined}
        >
          <TraditionalGroupLogo priority variant={navSolid ? 'default' : 'hero'} />
        </a>

        <div className="hidden min-w-0 flex-1 justify-center px-2 md:px-4 lg:flex">
          <PillNav items={pillItems} solid={navSolid} />
        </div>

        <div className="hidden shrink-0 lg:flex">
          <Magnet strength={0.25}>
            <ElectricBorder>
              <a
                href={MERIDIAN_CTA.href}
                onClick={() => setActiveHref(MERIDIAN_CTA.href)}
                aria-current={contactActive ? 'page' : undefined}
                className="md-btn md-btn--primary min-h-[2.5rem] px-5"
              >
                {MERIDIAN_CTA.label}
              </a>
            </ElectricBorder>
          </Magnet>
        </div>

        <button
          type="button"
          className={cn(
            'inline-flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-tg-md border lg:hidden',
            navSolid ? 'border-tg-line text-tg-ink' : 'border-white/15 text-white',
          )}
          aria-expanded={open}
          aria-controls="meridian-mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((prev) => !prev)}
        >
          <Menu className="h-5 w-5" />
        </button>
      </MeridianContainer>

      <AnimatePresence>
        {open && (
          <StaggeredMenu
            id="meridian-mobile-menu"
            open={open}
            onClose={close}
            items={menuItems}
            cta={{ label: MERIDIAN_CTA.label, href: MERIDIAN_CTA.href, onClick: () => handleNavClick(MERIDIAN_CTA.href) }}
            title="Meridian navigation"
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default MeridianNavigation;
