import React from 'react';
import ScrollProgress from '@/components/ScrollProgress';
import TopBar from '@/components/TopBar';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Ventures from '@/components/Ventures';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

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
      <TopBar />
      {/* Sticky must live at page root — not inside a 100svh shell */}
      <Navigation />

      <main id="main-content">
        <Hero />
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
