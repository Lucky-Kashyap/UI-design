import { motion, useReducedMotion } from 'framer-motion';
import {
  BookOpen,
  CheckCircle2,
  Factory,
  GraduationCap,
  Hotel,
  Trees,
  type LucideIcon,
} from 'lucide-react';
import { ABOUT } from '@/data/traditionalGroup';
import HeadingReveal from '@/components/HeadingReveal';
import { useCountUp, useParallax } from '@/hooks/useMotionUtils';
import { cn } from '@/lib/utils';

const SECTOR_ICON_MAP: Record<string, { icon: LucideIcon; themeClass: string; iconClass: string }> = {
  manufacturing: {
    icon: Factory,
    themeClass: 'tg-sector-item--amber',
    iconClass: 'text-tg-amber',
  },
  hospitality: {
    icon: Hotel,
    themeClass: 'tg-sector-item--cyan',
    iconClass: 'text-tg-cyan',
  },
  education: {
    icon: GraduationCap,
    themeClass: 'tg-sector-item--emerald',
    iconClass: 'text-tg-emerald',
  },
  'ib-school': {
    icon: BookOpen,
    themeClass: 'tg-sector-item--gold',
    iconClass: 'text-tg-gold',
  },
  'eco-adventure': {
    icon: Trees,
    themeClass: 'tg-sector-item--coral',
    iconClass: 'text-tg-coral',
  },
};

type StatProps = {
  value: number;
  suffix: string;
  label: string;
  delay?: number;
  reduce: boolean;
};

const Stat = ({ value, suffix, label, delay = 0, reduce }: StatProps) => {
  const { ref, value: count } = useCountUp(value);
  return (
    <motion.div
      ref={ref}
      className="tg-stat-card"
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      whileHover={reduce ? undefined : { y: -4, scale: 1.03 }}
    >
      <p className="tg-stat-value text-2xl text-tg-navy md:text-3xl tabular-nums">
        {count}
        {suffix}
      </p>
      <p className="tg-stat-label mt-1 text-tg-muted">{label}</p>
    </motion.div>
  );
};

const About = () => {
  const reduce = useReducedMotion() ?? false;
  const { ref: parallaxRef, offset } = useParallax(20);

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-tg-soft scroll-mt-[var(--tg-header-offset,5.5rem)]"
      aria-labelledby="about-heading"
    >
      <div className="absolute inset-0 tg-soft-texture opacity-70 pointer-events-none" aria-hidden="true" />
      {!reduce && (
        <>
          <div className="absolute -left-24 top-20 h-64 w-64 rounded-full bg-tg-cyan/10 blur-3xl animate-float" aria-hidden="true" />
          <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-tg-amber/10 blur-3xl animate-float [animation-delay:1.5s]" aria-hidden="true" />
        </>
      )}

      <div className="tg-container relative py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 xl:gap-12 lg:items-stretch">
          <motion.div
            className="relative z-10 flex flex-col"
            initial={reduce ? false : { opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55 }}
          >
            <p className="tg-eyebrow mb-4">{ABOUT.eyebrow}</p>
            <h2 id="about-heading" className="font-display text-headline-xl mb-5">
              <HeadingReveal block>{ABOUT.title}</HeadingReveal>
            </h2>
            <div className="mb-5 h-1 w-16 rounded-full tg-prism-line" aria-hidden="true" />
            <p className="text-body-md text-tg-muted mb-8 w-full max-w-none">{ABOUT.body}</p>

            <div className="grid grid-cols-3 gap-2 mb-5">
              {ABOUT.stats.map((stat, i) => (
                <Stat key={stat.label} {...stat} delay={reduce ? 0 : 0.06 * i} reduce={reduce} />
              ))}
            </div>

            <div className="relative flex-1">
              <motion.div
                className="absolute left-[0.95rem] top-3 bottom-3 w-px origin-top tg-prism-line opacity-50"
                aria-hidden="true"
                initial={reduce ? false : { scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              />
              <ul className="flex flex-col gap-2">
                {ABOUT.sectors.map((sector, i) => {
                  const meta = SECTOR_ICON_MAP[sector.id];
                  if (!meta) return null;

                  const Icon = meta.icon;
                  return (
                    <motion.li
                      key={sector.id}
                      className={cn('tg-sector-item group', meta.themeClass)}
                      initial={reduce ? false : { opacity: 0, x: -20, scale: 0.98 }}
                      whileInView={{ opacity: 1, x: 0, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: reduce ? 0 : 0.08 * i,
                        duration: 0.45,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      whileHover={reduce ? undefined : { x: 8, scale: 1.01 }}
                    >
                      <span className="tg-sector-icon">
                        <Icon className={cn('h-4 w-4 transition-transform duration-300 group-hover:scale-110', meta.iconClass)} />
                      </span>
                      <span className="tg-sector-label">{sector.label}</span>
                      <CheckCircle2 className={cn('h-4 w-4 shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12', meta.iconClass)} />
                    </motion.li>
                  );
                })}
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="relative flex flex-col min-h-0"
            initial={reduce ? false : { opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55 }}
            ref={parallaxRef}
          >
            <div className="relative flex flex-1 flex-col min-h-[320px] lg:min-h-0">
              <div className="absolute -inset-1.5 rounded-[var(--tg-radius-lg)] tg-prism-line opacity-20 blur-[1px]" aria-hidden="true" />
              <div className="relative flex-1 overflow-hidden rounded-[var(--tg-radius-lg)] shadow-2xl bg-tg-navy min-h-[280px] lg:min-h-[100%]">
                <img
                  src={ABOUT.image}
                  alt="Traditional Heritage Haveli — boutique hospitality under Traditional Group"
                  loading="lazy"
                  decoding="async"
                  className={cn(
                    'absolute inset-0 h-full w-full object-cover will-change-transform',
                    !reduce && 'tg-img-drift',
                  )}
                  style={{ transform: reduce ? undefined : `translate3d(0, ${offset}px, 0) scale(1.05)` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-tg-navy/55 via-transparent to-tg-navy/20" />
                {!reduce && <div className="absolute inset-0 tg-scanline pointer-events-none opacity-40" aria-hidden="true" />}

                <div className="absolute top-3 left-3 rounded-full bg-white/15 backdrop-blur-md border border-white/25 px-3 py-1 tg-micro text-white">
                  Jaipur · Multi-venture
                </div>

                <div className="absolute inset-x-3 bottom-3 rounded-[var(--tg-radius-md)] bg-white/95 backdrop-blur-md border border-tg-line p-3 sm:p-4 shadow-lg">
                  <p className="tg-caption text-tg-muted mb-1">Across sectors</p>
                  <p className="font-display text-body-md text-tg-navy leading-snug break-words">
                    Manufacturing · Hospitality · Education · Eco-Adventure
                  </p>
                  <div className="mt-2 h-0.5 w-full rounded-full tg-prism-line animate-prism-shift bg-[length:200%_100%]" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
