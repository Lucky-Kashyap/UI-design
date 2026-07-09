import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import ScrollReveal from '@/components/react-bits/ScrollReveal';
import SplitText from '@/components/react-bits/SplitText';
import { HERO } from '@/data/traditionalGroup';
import { HORIZON_HERO } from '@/data/horizonContent';
import { HORIZON_HERO_IMAGE } from '@/data/themeMedia';
import { useTheme } from '@/context/ThemeProvider';

const HorizonHero = () => {
  const reduce = useReducedMotion() ?? false;
  const { theme } = useTheme();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.55], [1, reduce ? 1 : 0.35]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-[100dvh] min-h-[100svh] scroll-mt-[var(--tg-header-offset,5.5rem)]"
      aria-labelledby="horizon-hero-heading"
    >
      <motion.div className="absolute inset-0" style={{ y: imageY }} aria-hidden="true">
        <img
          src={HORIZON_HERO_IMAGE}
          alt=""
          className="h-full w-full object-cover"
          fetchPriority="high"
          decoding="async"
          width={1920}
          height={1080}
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-tg-navy/45 via-tg-navy/20 to-tg-bg/95" aria-hidden="true" />

      <motion.div
        className="relative z-10 tg-container flex min-h-[100dvh] min-h-[100svh] min-w-0 flex-col items-center justify-center px-3 pb-20 pt-[calc(var(--tg-header-offset,5.5rem)+2rem)] text-center xs:pb-24"
        style={{ opacity: contentOpacity }}
      >
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white/80 xs:text-xs xs:tracking-[0.24em]">
          {HORIZON_HERO.eyebrow}
        </p>
        <h1 id="horizon-hero-heading" className="tg-hero-title mt-5 max-w-4xl font-display text-white xs:mt-8">
          <SplitText text={HORIZON_HERO.title} delay={0.1} className="justify-center" />
        </h1>
        <ScrollReveal className="mt-5 max-w-2xl text-sm leading-relaxed text-white/85 xs:mt-8 xs:text-base md:text-lg">
          {HERO.description}
        </ScrollReveal>
        <div className="mt-10 flex w-full max-w-md flex-col gap-2.5 xs:mt-12 xs:gap-3 sm:max-w-none sm:flex-row sm:justify-center">
          <a href={HORIZON_HERO.primaryCta.href} className="w-full rounded-tg-pill bg-white px-6 py-3 text-sm font-semibold text-tg-navy sm:w-auto xs:px-8">
            {HORIZON_HERO.primaryCta.label}
          </a>
          <a href={HORIZON_HERO.secondaryCta.href} className="w-full rounded-tg-pill border border-white/50 px-6 py-3 text-sm font-semibold text-white sm:w-auto xs:px-8">
            {HORIZON_HERO.secondaryCta.label}
          </a>
        </div>
        {!reduce && (
          <motion.div className="absolute bottom-10 h-12 w-px bg-white/50" animate={{ scaleY: [1, 0.45, 1] }} transition={{ duration: 2.2, repeat: Infinity }} aria-hidden="true" />
        )}
      </motion.div>

      {theme.assets.decorativeSvg && (
        <img
          src={theme.assets.decorativeSvg}
          alt=""
          className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 w-full opacity-90"
          aria-hidden="true"
        />
      )}
    </section>
  );
};

export default HorizonHero;
