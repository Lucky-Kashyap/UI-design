import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import ScrollReveal from '@/components/react-bits/ScrollReveal';
import SplitText from '@/components/react-bits/SplitText';
import { HERO } from '@/data/traditionalGroup';
import { FORGE_HERO } from '@/data/forgeContent';
import { FORGE_HERO_BG, FORGE_HERO_FEATURE } from '@/data/themeMedia';
import { useTheme } from '@/context/ThemeProvider';

const ForgeHero = () => {
  const reduce = useReducedMotion() ?? false;
  const { theme } = useTheme();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 80]);
  const frameY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, -40]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-[100dvh] min-h-[100svh] scroll-mt-[var(--tg-header-offset,5.5rem)] bg-tg-deep"
      aria-labelledby="forge-hero-heading"
    >
      <motion.div className="absolute inset-0" style={{ y: bgY }} aria-hidden="true">
        <img src={FORGE_HERO_BG} alt="" className="h-[115%] w-full object-cover opacity-40" decoding="async" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-tg-deep via-tg-deep/85 to-tg-deep/50" />
      </motion.div>

      <div className="relative z-10 tg-container grid min-h-[100dvh] min-h-[100svh] min-w-0 items-center gap-8 py-[calc(var(--tg-header-offset,5.5rem)+1.25rem)] xs:gap-10 lg:grid-cols-2 lg:gap-12">
        <div className="min-w-0">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-tg-gold xs:text-xs">{FORGE_HERO.eyebrow}</p>
          <h1 id="forge-hero-heading" className="tg-hero-title mt-3 font-display text-white xs:mt-4">
            <SplitText text={FORGE_HERO.title} delay={0.1} accentFromIndex={1} />
          </h1>
          <ScrollReveal className="mt-4 max-w-lg text-sm text-white/75 xs:mt-6 xs:text-base">{HERO.descriptionShort}</ScrollReveal>
          <div className="mt-6 flex w-full flex-col gap-2.5 xs:mt-8 xs:flex-row xs:flex-wrap xs:gap-3">
            <a href={FORGE_HERO.primaryCta.href} className="w-full rounded-tg-pill bg-tg-gold px-5 py-3 text-center text-sm font-semibold text-tg-deep xs:w-auto xs:px-6">
              {FORGE_HERO.primaryCta.label}
            </a>
            <a href={FORGE_HERO.secondaryCta.href} className="w-full rounded-tg-pill border border-tg-gold/50 px-5 py-3 text-center text-sm font-semibold text-tg-gold xs:w-auto xs:px-6">
              {FORGE_HERO.secondaryCta.label}
            </a>
          </div>
        </div>

        <motion.div className="relative min-w-0" style={{ y: frameY }}>
          {theme.assets.decorativeSvg && (
            <img
              src={theme.assets.decorativeSvg}
              alt=""
              className="pointer-events-none absolute -inset-4 z-0 w-[calc(100%+2rem)] opacity-70 xs:-inset-6"
              aria-hidden="true"
            />
          )}
          <div className="absolute -inset-2 rounded-tg-xl border border-tg-gold/30 xs:-inset-3" aria-hidden="true" />
          <img
            src={FORGE_HERO_FEATURE}
            alt="Traditional Group craftsmanship and heritage landscape"
            className="relative aspect-[4/5] w-full rounded-tg-lg object-cover shadow-2xl sm:aspect-[5/6]"
            width={600}
            height={700}
            decoding="async"
          />
          <div className="absolute bottom-3 right-3 rounded-tg-md border border-tg-gold/40 bg-tg-deep/85 px-3 py-2 backdrop-blur-sm xs:bottom-4 xs:right-4 xs:px-4 xs:py-3">
            <p className="text-xl font-display text-tg-gold xs:text-2xl">5+</p>
            <p className="text-[0.6rem] text-white/60 xs:text-xs">Forged ventures</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ForgeHero;
