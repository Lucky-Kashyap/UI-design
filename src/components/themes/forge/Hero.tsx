import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import ScrollReveal from '@/components/react-bits/ScrollReveal';
import SplitText from '@/components/react-bits/SplitText';
import { HERO } from '@/data/traditionalGroup';
import { FORGE_HERO } from '@/data/forgeContent';
import { useTheme } from '@/context/ThemeProvider';
import { FORGE_HERO_BG, FORGE_HERO_FEATURE } from './media';
import { ForgeImage, ForgeThemeStyles } from './ui';

const FORGE_STATS = [
  { value: '5+', label: 'Ventures' },
  { value: 'Jaipur', label: 'Rooted' },
  { value: '3 Gen', label: 'Lineage' },
] as const;

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
          <ForgeImage
            src={FORGE_HERO_BG}
            alt=""
            className="h-[115%] w-full object-cover opacity-50"
            decoding="async"
            fetchPriority="high"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-tg-deep via-tg-deep/88 to-tg-deep/45" />
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_30%_50%,rgba(184,115,51,0.18)_0%,transparent_70%)]"
            aria-hidden="true"
          />
        </motion.div>

        <div className="fg-copper-band absolute inset-x-0 top-0 z-20" aria-hidden="true" />

        <div className="fg-container relative z-10 grid min-h-[100dvh] min-w-0 items-center gap-8 py-[calc(var(--tg-header-offset,5.5rem)+1.25rem)] xs:gap-10 lg:grid-cols-[1fr_minmax(0,0.9fr)] lg:gap-14 xl:gap-16">
          <div className="order-2 min-w-0 lg:order-1">
            <p className="fg-eyebrow">{FORGE_HERO.eyebrow}</p>
            <h1 id="forge-hero-heading" className="fg-display mt-3 text-white xs:mt-4">
              <SplitText text={FORGE_HERO.title} delay={0.1} accentFromIndex={1} />
            </h1>
            <ScrollReveal className="fg-body-lg mt-4 max-w-lg text-white/75 xs:mt-6">
              <span className="lg:hidden">{HERO.descriptionShort}</span>
              <span className="hidden lg:inline">{HERO.description}</span>
            </ScrollReveal>
            <div className="mt-6 flex w-full flex-col gap-3 xs:mt-8 sm:flex-row sm:flex-wrap">
              <a href={FORGE_HERO.primaryCta.href} className="fg-btn fg-btn--primary w-full sm:w-auto">
                {FORGE_HERO.primaryCta.label}
              </a>
              <a href={FORGE_HERO.secondaryCta.href} className="fg-btn fg-btn--ghost w-full sm:w-auto">
                {FORGE_HERO.secondaryCta.label}
              </a>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-2 xs:mt-8 xs:gap-3 sm:max-w-md">
              {FORGE_STATS.map((stat) => (
                <div key={stat.label} className="fg-stat">
                  <span className="fg-stat__value">{stat.value}</span>
                  <span className="fg-stat__label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <motion.div className="fg-frame relative order-1 min-w-0 lg:order-2" style={{ y: frameY }}>
            {theme.assets.decorativeSvg && (
              <img
                src={theme.assets.decorativeSvg}
                alt=""
                className="pointer-events-none absolute -inset-3 z-0 w-[calc(100%+1.5rem)] opacity-60 xs:-inset-5 xs:w-[calc(100%+2.5rem)]"
                aria-hidden="true"
              />
            )}
            <ForgeImage
              src={FORGE_HERO_FEATURE}
              alt="Traditional Group craftsmanship and heritage landscape"
              className="relative aspect-[5/6] w-full max-h-[min(70dvh,36rem)] rounded-tg-lg object-cover shadow-2xl sm:aspect-[4/5] lg:max-h-none"
              width={900}
              height={1125}
              decoding="async"
            />
            <div className="absolute bottom-3 right-3 rounded-tg-md border border-tg-gold/40 bg-tg-deep/85 px-3 py-2 backdrop-blur-sm xs:bottom-4 xs:right-4 xs:px-4 xs:py-3">
              <p className="fg-h3 text-tg-gold">Since 1985</p>
              <p className="fg-caption text-white/60">Forged in trust</p>
            </div>
          </motion.div>
        </div>

        {!reduce && (
          <motion.div
            className="absolute bottom-8 left-1/2 z-10 hidden h-10 w-px -translate-x-1/2 bg-tg-gold/50 lg:block"
            animate={{ scaleY: [1, 0.4, 1] }}
            transition={{ duration: 2.4, repeat: Infinity }}
            aria-hidden="true"
          />
        )}
      </section>
    </>
  );
};

export default ForgeHero;
