'use client';

import { useCallback, useEffect, useState } from 'react';
import { motion, useReducedMotion, type Transition } from 'framer-motion';
import HeroBackground from '@/components/HeroBackground';
import HeroScrollCue from '@/components/HeroScrollCue';
import HeroVenturePicker from '@/components/HeroVenturePicker';
import HeadingReveal from '@/components/HeadingReveal';
import Magnet from '@/components/react-bits/Magnet';
import { HERO, VENTURES } from '@/data/traditionalGroup';

const AUTO_INTERVAL_MS = 6000;
const easeOut: Transition['ease'] = [0.22, 1, 0.36, 1];

const titleLines = HERO.title.split(' ');

const lineReveal = (delay = 0, reduce = false) =>
  reduce
    ? { initial: false as const, animate: { opacity: 1, y: 0 } }
    : {
        initial: { opacity: 0, y: 48 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.95, delay, ease: easeOut },
      };

const fadeUp = (delay = 0, reduce = false) =>
  reduce
    ? { initial: false as const, animate: { opacity: 1, y: 0 } }
    : {
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.75, delay, ease: easeOut },
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
      className="tg-hero tg-hero--editorial relative min-h-[100dvh] overflow-x-clip lg:overflow-x-clip scroll-mt-[var(--tg-header-offset,5.5rem)]"
      aria-labelledby="hero-heading"
    >
      <HeroBackground activeIndex={activeVenture} />

      <div className="tg-hero__content relative z-10 tg-container w-full">
        <div className="flex w-full min-w-0 flex-col gap-hero-stack lg:flex-row lg:items-center lg:justify-between lg:gap-hero-stack-xl xl:gap-[3.5rem]">
          <div className="flex min-w-0 flex-1 flex-col gap-hero-copy md:gap-hero-copy-md lg:gap-hero-copy-lg lg:pr-4 xl:pr-8">
            <h1
              id="hero-heading"
              className="font-display w-full max-w-none space-y-1 tg-hero-heading"
            >
              {titleLines.map((line, index) => (
                <motion.span
                  key={line}
                  className="block w-fit max-w-full"
                  {...lineReveal(0.08 + index * 0.12, reduce)}
                >
                  <HeadingReveal
                    variant="light"
                    block
                    className="text-hero-editorial uppercase leading-[0.95] tracking-[-0.03em]"
                  >
                    {line}
                  </HeadingReveal>
                </motion.span>
              ))}
              <motion.span
                className="mt-4 block font-sans text-hero-eyebrow uppercase text-white/88 tg-hero-subline"
                {...fadeUp(0.34, reduce)}
              >
                {HERO.titleSubline}
              </motion.span>
            </h1>

            <motion.div
              className="h-px w-hero-prism-w rounded-tg-pill bg-prism-band animate-prism-shift bg-[length:200%_100%]"
              aria-hidden="true"
              {...fadeUp(0.42, reduce)}
            />

            <motion.p
              className="max-w-hero-body text-hero-body tg-hero-body lg:max-w-[28rem] lg:text-hero-body-lg"
              {...fadeUp(0.5, reduce)}
            >
              <span className="lg:hidden">{HERO.descriptionShort}</span>
              <span className="hidden lg:inline">{HERO.description}</span>
            </motion.p>

            <motion.div
              className="mt-hero-cta-mt flex w-full min-w-0 flex-col gap-hero-cta pb-hero-cta-bottom sm:flex-row sm:flex-wrap sm:items-center"
              {...fadeUp(0.58, reduce)}
            >
              <Magnet className="w-full sm:w-auto" strength={0.22}>
                <a
                  href={HERO.primaryCta.href}
                  className="tg-magnetic-target tg-btn-hero-primary w-full sm:w-auto sm:max-w-full"
                >
                  {HERO.primaryCta.label}
                </a>
              </Magnet>
              <Magnet className="w-full sm:w-auto" strength={0.22}>
                <a
                  href={HERO.secondaryCta.href}
                  className="tg-magnetic-target tg-btn-hero-ghost w-full sm:w-auto sm:max-w-full"
                >
                  {HERO.secondaryCta.label}
                </a>
              </Magnet>
            </motion.div>
          </div>

          <motion.div
            className="flex w-full min-w-0 shrink-0 flex-col gap-3 lg:max-w-venture-panel lg:pl-venture-panel-inset lg:ml-auto"
            {...fadeUp(0.28, reduce)}
          >
            <div className="inline-flex max-w-full items-center gap-hero-badge self-start rounded-tg-pill border border-white/20 bg-white/10 px-hero-badge-x py-hero-badge-y backdrop-blur-sm lg:self-end">
              <span className="tg-live-dot" aria-hidden="true">
                <span className="tg-live-dot__ping" />
                <span className="tg-live-dot__core" />
              </span>
              <span className="min-w-0 text-hero-label uppercase leading-snug text-white/80">{HERO.liveLabel}</span>
            </div>

            <HeroVenturePicker
              selected={activeVenture}
              onChange={handleVentureChange}
              onAutoPlayChange={handleAutoPlayChange}
            />
          </motion.div>
        </div>
      </div>

      <HeroScrollCue />
    </section>
  );
};

export default Hero;
