import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import ScrollReveal from '@/components/react-bits/ScrollReveal';
import SplitText from '@/components/react-bits/SplitText';
import { HERO } from '@/data/traditionalGroup';
import { HORIZON_HERO } from '@/data/horizonContent';
import { useTheme } from '@/context/ThemeProvider';
import { HORIZON_HERO_IMAGE } from './media';
import { HorizonImage, HorizonThemeStyles } from './ui';

const HorizonHero = () => {
  const reduce = useReducedMotion() ?? false;
  const { theme } = useTheme();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.55], [1, reduce ? 1 : 0.35]);

  return (
    <>
      <HorizonThemeStyles />
      <section
        ref={sectionRef}
        id="home"
        className="relative min-h-[100dvh] scroll-mt-[var(--tg-header-offset,5.5rem)]"
        aria-labelledby="horizon-hero-heading"
      >
        <motion.div className="absolute inset-0" style={{ y: imageY }} aria-hidden="true">
          <HorizonImage
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
          className="hz-container relative z-10 flex min-h-[100dvh] min-w-0 flex-col items-center justify-center pb-20 pt-[calc(var(--tg-header-offset,5.5rem)+2rem)] text-center xs:pb-24"
          style={{ opacity: contentOpacity }}
        >
          <p className="hz-eyebrow text-white/80">{HORIZON_HERO.eyebrow}</p>
          <h1 id="horizon-hero-heading" className="hz-display mt-5 max-w-4xl text-white xs:mt-8">
            <SplitText text={HORIZON_HERO.title} delay={0.1} className="justify-center" />
          </h1>
          <ScrollReveal className="hz-body-lg mt-5 max-w-2xl text-white/85 xs:mt-8">
            <span className="lg:hidden">{HERO.descriptionShort}</span>
            <span className="hidden lg:inline">{HERO.description}</span>
          </ScrollReveal>
          <div className="mt-10 flex w-full max-w-md flex-col gap-3 xs:mt-12 sm:max-w-none sm:flex-row sm:justify-center">
            <a href={HORIZON_HERO.primaryCta.href} className="hz-btn hz-btn--primary w-full sm:w-auto">
              {HORIZON_HERO.primaryCta.label}
            </a>
            <a href={HORIZON_HERO.secondaryCta.href} className="hz-btn hz-btn--ghost w-full sm:w-auto">
              {HORIZON_HERO.secondaryCta.label}
            </a>
          </div>
          {!reduce && (
            <motion.div
              className="absolute bottom-10 h-12 w-px bg-white/50"
              animate={{ scaleY: [1, 0.45, 1] }}
              transition={{ duration: 2.2, repeat: Infinity }}
              aria-hidden="true"
            />
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
    </>
  );
};

export default HorizonHero;
