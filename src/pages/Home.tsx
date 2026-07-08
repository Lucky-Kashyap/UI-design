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

const Home = () => {
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

      <div className="tg-first-screen">
        <header className="flex flex-shrink-0 flex-col" role="banner">
          <TopBar />
          <Navigation />
        </header>
        <Hero />
      </div>

      <main id="main-content" role="main" aria-label={`${SITE.name} homepage content`}>
        <Ventures />
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
