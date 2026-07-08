import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { CheckCircle2, Factory, GraduationCap, Hotel, Trees } from 'lucide-react';
import { ABOUT } from '@/data/traditionalGroup';
import { useCountUp, useParallax } from '@/hooks/useMotionUtils';
import { cn } from '@/lib/utils';

const SECTOR_META = [
  {
    label: 'Clothing and Manufacturing',
    icon: Factory,
    accent: 'text-tg-amber',
    ring: 'border-tg-amber/30 bg-tg-amber/5',
  },
  {
    label: 'Hotel Industry',
    icon: Hotel,
    accent: 'text-tg-cyan',
    ring: 'border-tg-cyan/30 bg-tg-cyan/5',
  },
  {
    label: 'Education',
    icon: GraduationCap,
    accent: 'text-tg-emerald',
    ring: 'border-tg-emerald/30 bg-tg-emerald/5',
  },
  {
    label: 'Resort',
    icon: Trees,
    accent: 'text-tg-coral',
    ring: 'border-tg-coral/30 bg-tg-coral/5',
  },
];

const Stat = ({ value, suffix, label, delay = 0, reduce }) => {
  const { ref, value: count } = useCountUp(value);
  return (
    <motion.div
      ref={ref}
      className="relative overflow-hidden rounded-2xl bg-white/90 backdrop-blur-sm border border-tg-line px-3 py-4 shadow-sm text-center"
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
    >
      <p className="font-display text-2xl xs:text-3xl text-tg-navy">
        {count}
        {suffix}
      </p>
      <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-tg-muted">{label}</p>
    </motion.div>
  );
};

const About = () => {
  const reduce = useReducedMotion();
  const { ref: parallaxRef, offset } = useParallax(24);

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-tg-soft"
      aria-labelledby="about-heading"
    >
      <div className="absolute inset-0 tg-soft-texture opacity-70 pointer-events-none" aria-hidden="true" />
      {!reduce && (
        <>
          <div className="absolute -left-24 top-20 h-64 w-64 rounded-full bg-tg-cyan/10 blur-3xl animate-float" aria-hidden="true" />
          <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-tg-amber/10 blur-3xl animate-float [animation-delay:1.5s]" aria-hidden="true" />
        </>
      )}

      <div className="tg-container relative py-14 xs:py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 xl:gap-16 items-center">
          <motion.div
            className="relative z-10"
            initial={reduce ? false : { opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55 }}
          >
            <p className="tg-eyebrow mb-3">{ABOUT.eyebrow}</p>
            <h2 id="about-heading" className="font-display text-headline-xl text-tg-navy mb-3">
              {ABOUT.title}
            </h2>
            <div className="mb-4 h-1 w-16 rounded-full tg-prism-line" aria-hidden="true" />
            <p className="text-body-md text-tg-muted mb-6 max-w-xl">{ABOUT.body}</p>

            <div className="grid grid-cols-3 gap-2.5 mb-7">
              {ABOUT.stats.map((stat, i) => (
                <Stat key={stat.label} {...stat} delay={reduce ? 0 : 0.06 * i} reduce={reduce} />
              ))}
            </div>

            <div className="relative pl-1">
              <div
                className="absolute left-[1.2rem] top-4 bottom-4 w-px tg-prism-line opacity-55"
                aria-hidden="true"
              />
              <ul className="space-y-2.5">
                {SECTOR_META.map((sector, i) => {
                  const Icon = sector.icon;
                  return (
                    <motion.li
                      key={sector.label}
                      className={cn(
                        'relative flex items-center gap-3 rounded-xl border px-3 py-3 shadow-sm backdrop-blur-sm bg-white/90',
                        sector.ring,
                      )}
                      initial={reduce ? false : { opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: reduce ? 0 : 0.06 * i, duration: 0.35 }}
                    >
                      <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white border border-tg-line">
                        <Icon className={cn('h-4 w-4', sector.accent)} />
                      </span>
                      <span className="text-sm font-semibold text-tg-navy flex-1">{sector.label}</span>
                      <CheckCircle2 className={cn('h-4 w-4 shrink-0', sector.accent)} />
                    </motion.li>
                  );
                })}
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={reduce ? false : { opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55 }}
            ref={parallaxRef}
          >
            <div className="relative">
              <div className="absolute -inset-2 rounded-[1.75rem] tg-prism-line opacity-25 blur-[1px]" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-[1.5rem] aspect-[4/3] lg:aspect-[5/4] shadow-2xl bg-tg-navy">
                <img
                  src={ABOUT.image}
                  alt="Traditional Heritage Haveli — boutique hospitality under Traditional Group"
                  loading="lazy"
                  decoding="async"
                  className={cn(
                    'h-[118%] w-full object-cover will-change-transform',
                    !reduce && 'tg-img-drift',
                  )}
                  style={{ transform: reduce ? undefined : `translate3d(0, ${offset}px, 0)` }}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-tg-navy/40 via-transparent to-tg-cyan/10" />
                {!reduce && <div className="absolute inset-0 tg-scanline pointer-events-none opacity-50" aria-hidden="true" />}

                <div className="absolute top-4 left-4 rounded-full bg-white/15 backdrop-blur-md border border-white/25 px-3 py-1.5 text-[11px] uppercase tracking-[0.14em] text-white">
                  Jaipur · Multi-venture
                </div>
              </div>

              <div className="mt-4 rounded-2xl bg-white border border-tg-line p-4 shadow-lg">
                <p className="text-[10px] uppercase tracking-[0.14em] text-tg-muted mb-1">Across sectors</p>
                <p className="font-display text-lg text-tg-navy leading-snug">
                  Hospitality · Education · Manufacturing · Adventure
                </p>
                <div className="mt-3 h-0.5 w-full rounded-full tg-prism-line animate-prism-shift bg-[length:200%_100%]" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
