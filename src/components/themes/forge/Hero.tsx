import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import ScrollReveal from '@/components/react-bits/ScrollReveal';
import SplitText from '@/components/react-bits/SplitText';
import { HERO } from '@/data/traditionalGroup';
import { FORGE_HERO } from '@/data/forgeContent';
import { useTheme } from '@/context/ThemeProvider';
import { FORGE_HERO_BG, FORGE_HERO_FEATURE } from './media';
import { ForgeImage, ForgeThemeStyles } from './ui';

const ForgeHero = () => {
  const reduce = useReducedMotion() ?? false;
  const { theme } = useTheme();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 80]);
  const frameY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, -40]);

  return (
    <>
      <ForgeThemeStyles />
      <section
        ref={sectionRef}
        id="home"
        className="relative min-h-[100dvh] scroll-mt-[var(--tg-header-offset,5.5rem)] bg-tg-deep"
        aria-labelledby="forge-hero-heading"
      >
        <motion.div className="absolute inset-0" style={{ y: bgY }} aria-hidden="true">
          <ForgeImage src={FORGE_HERO_BG} alt="" className="h-[115%] w-full object-cover opacity-40" decoding="async" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-tg-deep via-tg-deep/85 to-tg-deep/50" />
        </motion.div>

        <div className="fg-container relative z-10 grid min-h-[100dvh] min-w-0 items-center gap-8 py-[calc(var(--tg-header-offset,5.5rem)+1.25rem)] xs:gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="min-w-0">
            <p className="fg-eyebrow">{FORGE_HERO.eyebrow}</p>
            <h1 id="forge-hero-heading" className="fg-display mt-3 text-white xs:mt-4">
              <SplitText text={FORGE_HERO.title} delay={0.1} accentFromIndex={1} />
            </h1>
            <ScrollReveal className="fg-body-lg mt-4 max-w-lg text-white/75 xs:mt-6">{HERO.descriptionShort}</ScrollReveal>
            <div className="mt-6 flex w-full flex-col gap-3 xs:mt-8 sm:flex-row sm:flex-wrap">
              <a href={FORGE_HERO.primaryCta.href} className="fg-btn fg-btn--primary w-full sm:w-auto">
                {FORGE_HERO.primaryCta.label}
              </a>
              <a href={FORGE_HERO.secondaryCta.href} className="fg-btn fg-btn--ghost w-full sm:w-auto">
                {FORGE_HERO.secondaryCta.label}
              </a>
            </div>
          </div>

          <motion.div className="fg-frame relative min-w-0" style={{ y: frameY }}>
            {theme.assets.decorativeSvg && (
              <img
                src={theme.assets.decorativeSvg}
                alt=""
                className="pointer-events-none absolute -inset-4 z-0 w-[calc(100%+2rem)] opacity-70 xs:-inset-6"
                aria-hidden="true"
              />
            )}
            <ForgeImage
              src={FORGE_HERO_FEATURE}
              alt="Traditional Group craftsmanship and heritage landscape"
              className="relative aspect-[4/5] w-full rounded-tg-lg object-cover shadow-2xl sm:aspect-[5/6]"
              width={600}
              height={700}
              decoding="async"
            />
            <div className="absolute bottom-3 right-3 rounded-tg-md border border-tg-gold/40 bg-tg-deep/85 px-3 py-2 backdrop-blur-sm xs:bottom-4 xs:right-4 xs:px-4 xs:py-3">
              <p className="fg-h3 text-tg-gold">5+</p>
              <p className="fg-caption text-white/60">Forged ventures</p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ForgeHero;
