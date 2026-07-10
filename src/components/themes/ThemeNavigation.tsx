'use client';

import { motion, useReducedMotion } from 'framer-motion';
import TopBar from '@/components/TopBar';
import Navigation from '@/components/Navigation';
import ForgeNavigation from '@/components/themes/forge/Navigation';
import HorizonNavigation from '@/components/themes/horizon/Navigation';
import MeridianNavigation from '@/components/themes/meridian/Navigation';
import type { ThemeId } from '@/themes/types';

type ThemeNavigationProps = {
  themeId: ThemeId;
  showTopBar: boolean;
};

const ThemeNavigation = ({ themeId, showTopBar }: ThemeNavigationProps) => {
  const reduce = useReducedMotion() ?? false;

  const content = (
    <>
      {showTopBar && <TopBar />}
      {themeId === 'prism' && <Navigation />}
      {themeId === 'meridian' && <MeridianNavigation />}
      {themeId === 'horizon' && <HorizonNavigation />}
      {themeId === 'forge' && <ForgeNavigation />}
    </>
  );

  if (themeId === 'prism') {
    return (
      <motion.header
        className="tg-site-header fixed inset-x-0 top-0 z-50"
        role="banner"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {content}
      </motion.header>
    );
  }

  return (
    <header className="tg-site-header fixed inset-x-0 top-0 z-50" role="banner">
      {content}
    </header>
  );
};

export default ThemeNavigation;
