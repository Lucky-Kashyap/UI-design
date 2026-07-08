import HeritagePathway from '@/components/HeritagePathway';
import ScrollProgress from '@/components/ScrollProgress';
import ScrollToTop from '@/components/ScrollToTop';
import TopBar from '@/components/TopBar';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Ventures from '@/components/Ventures';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import { SITE } from '@/data/traditionalGroup';
import { useHeaderOffset } from '@/hooks/useHeaderOffset';

const Home = () => {
  useHeaderOffset();

  return (
    <div className="theme-prism min-h-screen bg-tg-bg text-tg-ink font-sans">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-tg-navy focus:shadow-lg"
      >
        Skip to content
      </a>

      <ScrollProgress />
      <ScrollToTop />

      <header className="tg-site-header fixed inset-x-0 top-0 z-50" role="banner">
        <TopBar />
        <Navigation />
      </header>

      <div className="tg-first-screen">
        <Hero />
      </div>

      <main id="main-content" role="main" aria-label={`${SITE.name} homepage content`}>
        <Ventures />
        <HeritagePathway />
        <About />
        <Gallery />
        <Testimonials />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
