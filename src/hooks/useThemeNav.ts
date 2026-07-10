import { useEffect, useState } from 'react';
import type { NavLink } from '@/data/traditionalGroup';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { useScrolledPast } from '@/hooks/useScrolledPast';

type UseThemeNavOptions = {
  sectionIds: readonly string[];
};

export function useThemeNav({ sectionIds }: UseThemeNavOptions) {
  const scrolled = useScrolledPast(48);
  const [open, setOpen] = useState(false);
  const { active, setActiveHref } = useScrollSpy(sectionIds);

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
      return undefined;
    }

    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [open]);

  const close = () => setOpen(false);

  const handleNavClick = (href: string) => {
    setActiveHref(href);
    close();
  };

  return {
    scrolled,
    open,
    setOpen,
    active,
    setActiveHref,
    close,
    handleNavClick,
  };
}

export type ThemeNavConfig = {
  links: NavLink[];
  sectionIds: readonly string[];
  cta: { label: string; href: string };
};
