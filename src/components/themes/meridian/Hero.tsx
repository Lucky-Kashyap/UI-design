import { useCallback, useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import BlurText from '@/components/react-bits/BlurText';
import CountUp from '@/components/react-bits/CountUp';
import DarkVeil from '@/components/react-bits/DarkVeil';
import ElectricBorder from '@/components/react-bits/ElectricBorder';
import GradientText from '@/components/react-bits/GradientText';
import Magnet from '@/components/react-bits/Magnet';
import Noise from '@/components/react-bits/Noise';
import ScrollReveal from '@/components/react-bits/ScrollReveal';
import SplitText from '@/components/react-bits/SplitText';
import Aurora from '@/components/react-bits/Aurora';
import { useTheme } from '@/context/ThemeProvider';
import { HERO, VENTURES } from '@/data/traditionalGroup';
import { MERIDIAN_HERO } from '@/data/meridianContent';
import { MERIDIAN_HERO_DEFAULT, MERIDIAN_VENTURE_MEDIA } from '@/data/themeMedia';
import { mergeVentureMedia } from '@/lib/themeVentures';
import { cn } from '@/lib/utils';

const MeridianHero = () => {
  const { theme } = useTheme();
  const reduce = useReducedMotion() ?? false;
  const ventures = useMemo(() => mergeVentureMedia(MERIDIAN_VENTURE_MEDIA), []);
  const [activeVenture, setActiveVenture] = useState(0);
  const [videoFailed, setVideoFailed] = useState(false);

  const handleVentureSelect = useCallback((index: number) => {
    setActiveVenture(index);
  }, []);

  const active = ventures[activeVenture] ?? ventures[0];
  const activeImage = active?.image ?? MERIDIAN_HERO_DEFAULT;
  const baseVenture = VENTURES.find((v) => v.id === active?.id);
  const heroMedia = theme.assets.hero;
  const showVideo = Boolean(heroMedia.videoSrc) && !videoFailed && !reduce;

  const gridStyle = {
    gridTemplateColumns: `minmax(0, ${theme.spacing.heroContentRatio}) minmax(0, ${theme.spacing.heroVisualRatio})`,
  };

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] min-h-[100svh] bg-tg-deep scroll-mt-[var(--tg-header-offset,5.5rem)]"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        {theme.reactBits.hero.aurora && <Aurora />}
        {showVideo ? (
          <video
            className="absolute inset-0 h-full w-full object-cover opacity-50"
            autoPlay
            muted
            playsInline
            loop
            preload="metadata"
            poster={heroMedia.posterSrc}
            onError={() => setVideoFailed(true)}
          >
            <source src={heroMedia.videoSrc} type="video/webm" />
          </video>
        ) : (
          <img
            src={heroMedia.fallbackImage}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-50"
            fetchPriority="high"
            decoding="async"
            width={1920}
            height={1080}
          />
        )}
        {theme.reactBits.hero.darkVeil && <DarkVeil />}
        {theme.reactBits.hero.noise && <Noise />}
      </div>

      <div className="relative z-10 tg-container flex min-h-[100dvh] min-h-[100svh] w-full min-w-0 flex-col justify-center pb-20 pt-[calc(var(--tg-header-offset,5.5rem)+1rem)] xs:pt-[calc(var(--tg-header-offset,5.5rem)+1.25rem)] sm:pb-24 lg:pb-28 lg:pt-[calc(var(--tg-header-offset,5.5rem)+1.5rem)]">
        <div className="grid w-full min-w-0 items-center gap-8 xs:gap-10 lg:gap-14 xl:gap-20" style={gridStyle}>
          <div className="flex min-w-0 flex-col gap-4 xs:gap-5 md:gap-6">
            <BlurText
              text={MERIDIAN_HERO.eyebrow}
              className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-tg-cyan xxs:text-xs xs:tracking-[0.22em] sm:text-sm"
              delay={0.05}
            />

            <h1 id="hero-heading" className="tg-hero-title font-display font-bold text-white">
              <SplitText text="Traditional " delay={0.1} className="text-white" />
              <GradientText as="span" className="font-extrabold">
                Group
              </GradientText>
            </h1>

            <div className="h-0.5 w-16 xs:w-20 rounded-tg-pill bg-prism-band animate-prism-shift bg-[length:200%_100%]" aria-hidden="true" />

            <ScrollReveal delay={0.2}>
              <p className="max-w-xl text-sm leading-relaxed text-white/75 xs:text-base md:text-lg">
                <span className="lg:hidden">{HERO.descriptionShort}</span>
                <span className="hidden lg:inline">{HERO.description}</span>
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.28} className="flex w-full min-w-0 flex-col gap-2.5 xs:gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Magnet strength={0.2} className="w-full sm:w-auto">
                <ElectricBorder className="w-full sm:w-auto">
                  <a
                    href={MERIDIAN_HERO.primaryCta.href}
                    className="inline-flex min-h-[2.75rem] w-full items-center justify-center px-5 text-sm font-semibold text-white xs:min-w-[10rem] sm:w-auto sm:px-6"
                  >
                    {MERIDIAN_HERO.primaryCta.label}
                  </a>
                </ElectricBorder>
              </Magnet>
              <a
                href={MERIDIAN_HERO.secondaryCta.href}
                className="inline-flex min-h-[2.75rem] w-full items-center justify-center rounded-tg-pill border border-white/20 px-5 text-sm font-semibold text-white/90 backdrop-blur-sm transition-colors hover:border-white/40 hover:text-white sm:w-auto sm:px-6"
              >
                {MERIDIAN_HERO.secondaryCta.label}
              </a>
            </ScrollReveal>

            <ScrollReveal delay={0.34} className="mt-1 min-w-0">
              <p className="mb-2 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-white/45 xs:text-[0.65rem]">Select venture</p>
              <div className="tg-scroll-strip -mx-0.5 px-0.5">
                {ventures.map((venture, index) => (
                  <button
                    key={venture.id}
                    type="button"
                    onClick={() => handleVentureSelect(index)}
                    className={cn(
                      'max-w-[85vw] shrink-0 snap-start rounded-tg-pill border px-3 py-2 text-[0.7rem] font-medium transition-all duration-300 xs:px-4 xs:text-xs sm:text-sm',
                      index === activeVenture
                        ? 'border-tg-cyan/60 bg-tg-cyan/15 text-white'
                        : 'border-white/15 bg-white/5 text-white/65 hover:border-white/30 hover:text-white',
                    )}
                    aria-pressed={index === activeVenture}
                  >
                    {venture.shortName}
                  </button>
                ))}
              </div>
            </ScrollReveal>

            <div className="mt-2 grid grid-cols-2 gap-2 sm:gap-3 lg:hidden">
              <div className="rounded-tg-lg border border-white/15 bg-tg-navy/80 px-3 py-2.5 backdrop-blur-xl xs:px-4 xs:py-3">
                <p className="text-xl font-bold leading-none text-white xs:text-2xl">
                  <CountUp value={5} suffix="+" />
                </p>
                <p className="mt-1 text-[0.6rem] uppercase tracking-wider text-white/55 xs:text-[0.65rem]">Ventures</p>
              </div>
              <div className="rounded-tg-lg border border-white/15 bg-tg-navy/80 px-3 py-2.5 backdrop-blur-xl xs:px-4 xs:py-3">
                <p className="text-xl font-bold leading-none text-white xs:text-2xl">
                  <CountUp value={25} suffix="+" />
                </p>
                <p className="mt-1 text-[0.6rem] uppercase tracking-wider text-white/55 xs:text-[0.65rem]">Years of trust</p>
              </div>
            </div>
          </div>

          <ScrollReveal delay={0.15} className="relative hidden min-w-0 lg:block">
            <div className="relative aspect-[4/5] overflow-hidden rounded-tg-xl border border-white/10 bg-tg-soft/20 shadow-2xl backdrop-blur-sm">
              <img
                src={activeImage}
                alt={baseVenture?.name ?? 'Traditional Group venture'}
                className={cn('h-full w-full object-cover transition-all duration-700', !reduce && 'scale-105')}
                loading="lazy"
                decoding="async"
                width={800}
                height={1000}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-tg-deep/90 via-transparent to-transparent" />
              <div className="absolute left-4 top-4 rounded-tg-lg border border-white/15 bg-tg-navy/85 px-4 py-3 backdrop-blur-xl">
                <p className="text-2xl font-bold leading-none text-white">
                  <CountUp value={5} suffix="+" />
                </p>
                <p className="mt-1 text-[0.65rem] uppercase tracking-wider text-white/55">Ventures</p>
              </div>
              <div className="absolute bottom-4 right-4 rounded-tg-lg border border-white/15 bg-tg-navy/85 px-4 py-3 backdrop-blur-xl">
                <p className="text-2xl font-bold leading-none text-white">
                  <CountUp value={25} suffix="+" />
                </p>
                <p className="mt-1 text-[0.65rem] uppercase tracking-wider text-white/55">Years of trust</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 pt-16">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-tg-cyan">{active?.sector}</p>
                <p className="mt-1 font-display text-2xl text-white">{active?.shortName}</p>
                <p className="mt-2 text-sm text-white/70">{active?.description}</p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {!reduce && (
          <motion.div
            className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-white/50 xs:bottom-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            aria-hidden="true"
          >
            <span className="text-[0.6rem] font-semibold uppercase tracking-[0.28em] xs:text-[0.65rem]">Scroll</span>
            <span className="h-8 w-px animate-scroll-cue bg-gradient-to-b from-white/0 via-white/70 to-white/0" />
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default MeridianHero;
