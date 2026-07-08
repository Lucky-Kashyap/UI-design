import { useCallback, useEffect, useState } from 'react';
import { motion, useReducedMotion, type Transition } from 'framer-motion';
import HeroBackground from '@/components/HeroBackground';
import HeroScrollCue from '@/components/HeroScrollCue';
import HeroVenturePicker from '@/components/HeroVenturePicker';
import { HERO, VENTURES } from '@/data/traditionalGroup';

const AUTO_INTERVAL_MS = 6000;
const easeOut: Transition['ease'] = [0.22, 1, 0.36, 1];

const fadeUp = (delay = 0, reduce = false) =>
  reduce
    ? { initial: false as const, animate: { opacity: 1, y: 0 } }
    : {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, delay, ease: easeOut },
      };

const Hero = () => {
  const reduce = useReducedMotion() ?? false;
  const [activeVenture, setActiveVenture] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying || reduce) return undefined;

    const id = window.setInterval(() => {
      setActiveVenture((prev) => (prev + 1) % VENTURES.length);
    }, AUTO_INTERVAL_MS);

    return () => window.clearInterval(id);
  }, [isAutoPlaying, reduce]);

  const handleVentureChange = useCallback((index: number) => {
    setActiveVenture(index);
  }, []);

  const handleAutoPlayChange = useCallback((playing: boolean) => {
    setIsAutoPlaying(playing);
  }, []);

  return (
    <section
      id="home"
      className="tg-hero relative min-h-[100dvh] overflow-x-clip bg-tg-deep lg:overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <HeroBackground activeIndex={activeVenture} />

      <div className="tg-hero__content relative z-10 tg-container w-full">
        <div className="flex w-full min-w-0 flex-col gap-hero-stack lg:flex-row lg:items-start lg:justify-between lg:gap-hero-stack-xl xl:gap-[3.5rem]">
          <div className="flex min-w-0 flex-1 max-w-hero-copy flex-col gap-hero-copy md:gap-hero-copy-md lg:gap-hero-copy-lg lg:pr-4 xl:pr-8">
            <motion.h1
              id="hero-heading"
              className="font-display text-white space-y-hero-title tg-hero-heading"
              {...fadeUp(0.02, reduce)}
            >
              <span className="block text-hero-display uppercase leading-[1.05]">{HERO.title}</span>
              <span className="block font-sans text-hero-eyebrow uppercase text-white/90 tg-hero-subline">
                {HERO.titleSubline}
              </span>
            </motion.h1>

            <motion.div
              className="h-0.5 w-hero-prism-w rounded-tg-pill bg-prism-band animate-prism-shift bg-[length:200%_100%]"
              aria-hidden="true"
              {...fadeUp(0.1, reduce)}
            />

            <motion.p
              className="text-hero-body max-w-hero-body tg-hero-body lg:max-w-[26rem] lg:text-hero-body-lg"
              {...fadeUp(0.16, reduce)}
            >
              <span className="lg:hidden">{HERO.descriptionShort}</span>
              <span className="hidden lg:inline">{HERO.description}</span>
            </motion.p>

            <motion.div
              className="mt-hero-cta-mt flex w-full min-w-0 flex-col gap-hero-cta pb-hero-cta-bottom sm:flex-row sm:flex-wrap sm:items-center"
              {...fadeUp(0.24, reduce)}
            >
              <a href={HERO.primaryCta.href} className="tg-btn-gold w-full sm:w-auto sm:max-w-full">
                {HERO.primaryCta.label}
              </a>
              <a href={HERO.secondaryCta.href} className="tg-btn-secondary w-full sm:w-auto sm:max-w-full">
                {HERO.secondaryCta.label}
              </a>
            </motion.div>
          </div>

          <div className="flex w-full min-w-0 shrink-0 flex-col gap-3 lg:max-w-venture-panel lg:pt-1 lg:pl-venture-panel-inset">
            <motion.div
              className="inline-flex max-w-full items-center gap-hero-badge self-start rounded-tg-pill border border-white/20 bg-white/10 px-hero-badge-x py-hero-badge-y backdrop-blur-md lg:self-end"
              {...fadeUp(0.12, reduce)}
            >
              <span className="tg-live-dot" aria-hidden="true">
                <span className="tg-live-dot__ping" />
                <span className="tg-live-dot__core" />
              </span>
              <span className="min-w-0 text-hero-label uppercase leading-snug text-white/80">{HERO.liveLabel}</span>
            </motion.div>

            <HeroVenturePicker
              selected={activeVenture}
              onChange={handleVentureChange}
              onAutoPlayChange={handleAutoPlayChange}
            />
          </div>
        </div>
      </div>

      <HeroScrollCue />
    </section>
  );
};

export default Hero;
