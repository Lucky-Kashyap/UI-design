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

const ThemeNavigation = ({ themeId, showTopBar }: ThemeNavigationProps) => (
  <header className="tg-site-header fixed inset-x-0 top-0 z-50" role="banner">
    {showTopBar && <TopBar />}
    {themeId === 'prism' && <Navigation />}
    {themeId === 'meridian' && <MeridianNavigation />}
    {themeId === 'horizon' && <HorizonNavigation />}
    {themeId === 'forge' && <ForgeNavigation />}
  </header>
);

export default ThemeNavigation;
