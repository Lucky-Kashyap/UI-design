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
