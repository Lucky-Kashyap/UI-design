import HeritagePathway from '@/components/HeritagePathway';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Ventures from '@/components/Ventures';
import ForgeCraft from '@/components/themes/forge/Craft';
import ForgeFooter from '@/components/themes/forge/Footer';
import ForgeHero from '@/components/themes/forge/Hero';
import ForgeLineage from '@/components/themes/forge/Lineage';
import ForgeVisit from '@/components/themes/forge/Visit';
import ForgeVoices from '@/components/themes/forge/Voices';
import ForgeWorks from '@/components/themes/forge/Works';
import HorizonEchoes from '@/components/themes/horizon/Echoes';
import HorizonFooter from '@/components/themes/horizon/Footer';
import HorizonHero from '@/components/themes/horizon/Hero';
import HorizonJourney from '@/components/themes/horizon/Journey';
import HorizonReach from '@/components/themes/horizon/Reach';
import HorizonScenes from '@/components/themes/horizon/Scenes';
import HorizonWorlds from '@/components/themes/horizon/Worlds';
import MeridianConnect from '@/components/themes/meridian/Connect';
import MeridianEcosystem from '@/components/themes/meridian/Ecosystem';
import MeridianEvolution from '@/components/themes/meridian/Evolution';
import MeridianFooter from '@/components/themes/meridian/Footer';
import MeridianFrames from '@/components/themes/meridian/Frames';
import MeridianHero from '@/components/themes/meridian/Hero';
import MeridianVoices from '@/components/themes/meridian/Voices';
import type { ThemeId } from '@/themes/types';

type ThemePageContentProps = {
  themeId: ThemeId;
};

const ThemePageContent = ({ themeId }: ThemePageContentProps) => {
  switch (themeId) {
    case 'prism':
      return (
        <>
          <div className="tg-first-screen">
            <Hero />
          </div>
          <main id="main-content" role="main">
            <Ventures />
            <HeritagePathway />
            <About />
            <Gallery />
            <Testimonials />
            <CTASection />
          </main>
          <Footer />
        </>
      );

    case 'meridian':
      return (
        <>
          <div className="tg-first-screen">
            <MeridianHero />
          </div>
          <main id="main-content" role="main">
            <MeridianEcosystem />
            <MeridianEvolution />
            <MeridianFrames />
            <MeridianVoices />
            <MeridianConnect />
          </main>
          <MeridianFooter />
        </>
      );

    case 'horizon':
      return (
        <>
          <div className="tg-first-screen">
            <HorizonHero />
          </div>
          <main id="main-content" role="main">
            <HorizonWorlds />
            <HorizonJourney />
            <HorizonScenes />
            <HorizonEchoes />
            <HorizonReach />
          </main>
          <HorizonFooter />
        </>
      );

    case 'forge':
      return (
        <>
          <div className="tg-first-screen">
            <ForgeHero />
          </div>
          <main id="main-content" role="main">
            <ForgeWorks />
            <ForgeLineage />
            <ForgeCraft />
            <ForgeVoices />
            <ForgeVisit />
          </main>
          <ForgeFooter />
        </>
      );

    default: {
      const _exhaustive: never = themeId;
      return _exhaustive;
    }
  }
};

export default ThemePageContent;
