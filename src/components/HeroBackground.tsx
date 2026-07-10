'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { HERO, VENTURES } from '@/data/traditionalGroup';

const SLIDE_DURATION_MS = 6000;
const FADE_DURATION_S = 1.4;
const CINEMATIC_EASE = [0.22, 1, 0.36, 1] as const;

type HeroBackgroundProps = {
  activeIndex: number;
};

const HeroBackground = ({ activeIndex }: HeroBackgroundProps) => {
  const reduce = useReducedMotion() ?? false;

  return (
    <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* LCP paint — WebP hero slide */}
      <img
        src={HERO.backgroundImage}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center"
        loading="eager"
        fetchPriority="high"
        decoding="async"
        width={1920}
        height={1080}
      />

      {VENTURES.map((venture, index) => {
        const isActive = index === activeIndex;

        return (
          <motion.div
            key={venture.id}
            className="absolute inset-0"
            initial={false}
            style={{ opacity: isActive ? 1 : 0 }}
            animate={{ opacity: isActive ? 1 : 0 }}
            transition={{ duration: reduce ? 0 : FADE_DURATION_S, ease: 'easeInOut' }}
          >
            <motion.div
              className="absolute inset-0"
              initial={reduce ? false : { scale: 1.1 }}
              animate={
                reduce || !isActive
                  ? { scale: 1, x: '0%', y: '0%' }
                  : { scale: [1.1, 1.04, 1.06], x: ['0%', '-1%', '-1.5%'], y: ['0%', '-0.5%', '-1%'] }
              }
              transition={
                reduce || !isActive
                  ? { duration: 2.8, ease: CINEMATIC_EASE }
                  : {
                      scale: { duration: 2.8, ease: CINEMATIC_EASE },
                      x: { duration: SLIDE_DURATION_MS / 1000, ease: 'easeInOut' },
                      y: { duration: SLIDE_DURATION_MS / 1000, ease: 'easeInOut' },
                    }
              }
            >
              <img
                src={venture.image}
                alt=""
                className="h-full w-full object-cover object-center"
                fetchPriority={index === 0 ? 'high' : 'low'}
                loading={index === 0 ? 'eager' : 'lazy'}
                decoding="async"
                width={1920}
                height={1080}
              />
            </motion.div>
          </motion.div>
        );
      })}

      {/* Cinematic editorial overlays — image stays visible behind navbar */}
      <div className="absolute inset-0 bg-gradient-to-b from-tg-deep/25 via-transparent via-35% to-tg-deep/80" />
      <div className="absolute inset-y-0 left-0 w-[55%] bg-gradient-to-r from-tg-deep/70 via-tg-navy/30 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_80%_at_70%_50%,transparent_0%,rgba(6,20,40,0.35)_100%)]" />
      <div className="absolute inset-0 tg-hero-grain opacity-[0.06]" />

      {!reduce && (
        <div className="absolute inset-0 tg-hero-vignette pointer-events-none opacity-50" />
      )}

      <div className="absolute top-0 left-0 h-28 w-28 md:h-40 md:w-40 tg-corner-prism opacity-80" />
      <div className="absolute top-0 right-0 h-28 w-28 md:h-40 md:w-40 tg-corner-prism scale-x-[-1] opacity-80" />
    </div>
  );
};

export default HeroBackground;
