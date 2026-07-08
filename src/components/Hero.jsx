import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { HERO, VENTURES } from '@/data/traditionalGroup';

const fadeUp = (delay = 0, reduce = false) =>
  reduce
    ? { initial: false, animate: { opacity: 1, y: 0 } }
    : {
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
      };

const Hero = () => {
  const reduce = useReducedMotion();
  const chips = VENTURES.slice(0, 4).map((v) => v.shortName);

  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100svh-7.5rem)] items-center overflow-hidden bg-tg-deep"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={HERO.backgroundImage}
          alt=""
          aria-hidden="true"
          className={`h-full w-full object-cover will-change-transform ${reduce ? '' : 'animate-ken-burns'}`}
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-tg-deep via-tg-navy/70 to-tg-navy/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-tg-deep/85 via-tg-navy/45 to-tg-deep/35" />
        <div className="absolute inset-0 tg-hero-grain opacity-[0.14]" aria-hidden="true" />

        {!reduce && (
          <>
            <div className="absolute inset-0 tg-scanline opacity-35 pointer-events-none" aria-hidden="true" />
            <div className="absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-tg-cyan/20 blur-3xl animate-float" aria-hidden="true" />
            <div className="absolute -right-16 bottom-1/5 h-80 w-80 rounded-full bg-tg-amber/15 blur-3xl animate-float [animation-delay:2s]" aria-hidden="true" />
          </>
        )}

        <div className="absolute top-0 left-0 h-28 w-28 md:h-40 md:w-40 tg-corner-prism" aria-hidden="true" />
        <div className="absolute top-0 right-0 h-28 w-28 md:h-40 md:w-40 tg-corner-prism scale-x-[-1]" aria-hidden="true" />
      </div>

      <div className="relative z-10 tg-container w-full py-10 md:py-12 pb-16">
        {/* Tighter 2-col: less middle void between copy and venture chips */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-8 xl:gap-10">
          <div className="flex-1 min-w-0 max-w-xl xl:max-w-2xl">
            <motion.div
              className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 backdrop-blur-md"
              {...fadeUp(0.02, reduce)}
            >
              <span className="tg-live-dot" aria-hidden="true">
                <span className="tg-live-dot__ping" />
                <span className="tg-live-dot__core" />
              </span>
              <span className="text-[11px] uppercase tracking-[0.16em] text-white/85">
                Live across Jaipur ventures
              </span>
            </motion.div>

            <motion.p
              className="mb-2 text-label-md uppercase tracking-[0.18em] text-white/70"
              {...fadeUp(0.08, reduce)}
            >
              Multi-venture organisation · Jaipur
            </motion.p>
            <motion.h1
              id="hero-heading"
              className="font-display text-display-lg text-white mb-3"
              {...fadeUp(0.14, reduce)}
            >
              {HERO.title}
            </motion.h1>
            <motion.div
              className="mb-4 h-1 w-24 rounded-full tg-prism-line animate-prism-shift bg-[length:200%_100%]"
              aria-hidden="true"
              {...fadeUp(0.2, reduce)}
            />
            <motion.p
              className="text-body-md md:text-body-lg text-white/85 max-w-lg mb-6"
              {...fadeUp(0.26, reduce)}
            >
              {HERO.description}
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-3" {...fadeUp(0.34, reduce)}>
              <a
                href={HERO.primaryCta.href}
                className="tg-btn-primary tg-btn-glow bg-white text-tg-navy hover:bg-white/95 w-full sm:w-auto"
              >
                {HERO.primaryCta.label}
              </a>
              <a
                href={HERO.secondaryCta.href}
                className="tg-btn-secondary w-full sm:w-auto transition-transform hover:scale-[1.02]"
              >
                {HERO.secondaryCta.label}
              </a>
            </motion.div>
          </div>

          <motion.div
            className="w-full lg:w-[280px] xl:w-[300px] shrink-0 grid grid-cols-2 lg:grid-cols-1 gap-3.5 lg:gap-4"
            {...fadeUp(0.4, reduce)}
          >
            {chips.map((name, i) => (
              <motion.a
                key={name}
                href="#ventures"
                className="rounded-2xl border border-white/25 bg-white/10 backdrop-blur-md px-4 py-3.5 text-white shadow-lg hover:bg-white/15 transition-colors"
                animate={
                  reduce
                    ? undefined
                    : { y: [0, i % 2 === 0 ? -3 : 3, 0] }
                }
                transition={{
                  duration: 4.5 + i * 0.4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.25,
                }}
              >
                <p className="text-[10px] uppercase tracking-[0.16em] text-white/55">Venture</p>
                <p className="font-display text-sm xs:text-base leading-tight mt-0.5">{name}</p>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      <a
        href="#ventures"
        className="absolute bottom-3 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-0.5 text-white/90 hover:text-white"
        aria-label="Scroll to ventures"
      >
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <ChevronDown className="h-6 w-6 animate-scroll-cue" />
      </a>
    </section>
  );
};

export default Hero;
