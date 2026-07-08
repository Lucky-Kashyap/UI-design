import { motion, useReducedMotion, type Transition } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import HeroBackground from '@/components/HeroBackground';
import HeroVenturePicker from '@/components/HeroVenturePicker';
import { HERO } from '@/data/traditionalGroup';

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

  return (
    <section
      id="home"
      className="tg-hero relative overflow-hidden bg-tg-deep"
      aria-labelledby="hero-heading"
    >
      <HeroBackground />

      <div className="tg-hero__content relative z-10 tg-container w-full pt-hero-top md:pt-hero-top-md">
        <div className="flex w-full flex-col gap-hero-stack lg:flex-row lg:items-center lg:justify-between lg:gap-hero-stack-lg xl:gap-hero-stack-xl">
          <div className="min-w-0 flex-1 max-w-hero-copy">
            <motion.div
              className="mb-hero-badge inline-flex items-center gap-1.5 rounded-tg-pill border border-white/20 bg-white/10 px-hero-badge-x py-hero-badge-y backdrop-blur-md"
              {...fadeUp(0.02, reduce)}
            >
              <span className="tg-live-dot" aria-hidden="true">
                <span className="tg-live-dot__ping" />
                <span className="tg-live-dot__core" />
              </span>
              <span className="text-hero-label uppercase text-white/85">
                Live across Jaipur ventures
              </span>
            </motion.div>

            <motion.h1
              id="hero-heading"
              className="font-display text-white mb-hero-title"
              {...fadeUp(0.14, reduce)}
            >
              <span className="block text-hero-display uppercase">{HERO.title}</span>
              <span className="mt-hero-eyebrow-mb block font-sans text-hero-eyebrow uppercase text-white/70">
                {HERO.titleSubline}
              </span>
            </motion.h1>
            <motion.div
              className="mb-hero-line h-0.5 w-hero-prism-w rounded-tg-pill bg-prism-band animate-prism-shift bg-[length:200%_100%]"
              aria-hidden="true"
              {...fadeUp(0.2, reduce)}
            />
            <motion.p
              className="text-hero-body text-white/85 max-w-hero-body mb-hero-body line-clamp-3 lg:line-clamp-none lg:text-hero-body-lg lg:mb-hero-body-lg"
              {...fadeUp(0.26, reduce)}
            >
              <span className="lg:hidden">{HERO.descriptionShort}</span>
              <span className="hidden lg:inline">{HERO.description}</span>
            </motion.p>
            <motion.div className="flex flex-col xs:flex-row gap-hero-cta" {...fadeUp(0.34, reduce)}>
              <a
                href={HERO.primaryCta.href}
                className="tg-btn-primary tg-btn-glow bg-white text-tg-navy hover:bg-white w-full xs:w-auto"
              >
                {HERO.primaryCta.label}
              </a>
              <a
                href={HERO.secondaryCta.href}
                className="tg-btn-secondary w-full xs:w-auto"
              >
                {HERO.secondaryCta.label}
              </a>
            </motion.div>
          </div>

          <HeroVenturePicker />
        </div>
      </div>

      <a
        href="#ventures"
        className="tg-hero-scroll"
        aria-label="Scroll to ventures"
      >
        <span className="tg-hero-scroll__label text-scroll-label uppercase">Scroll</span>
        <ChevronDown className="tg-hero-scroll__icon" strokeWidth={2.25} aria-hidden="true" />
      </a>
    </section>
  );
};

export default Hero;
