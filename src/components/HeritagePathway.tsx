import { motion, useReducedMotion } from 'framer-motion';
import { Factory, GraduationCap, Hotel, Sparkles, Trees } from 'lucide-react';
import { VENTURES } from '@/data/traditionalGroup';
import { cn } from '@/lib/utils';

const PATHWAY_STEPS = [
  {
    id: 'heritage',
    label: 'Heritage roots',
    description: 'Rajasthan craftsmanship and trusted family values',
    icon: Sparkles,
    accent: 'text-tg-gold',
  },
  {
    id: 'manufacturing',
    label: 'Manufacturing',
    description: VENTURES[0].description,
    icon: Factory,
    accent: 'text-tg-amber',
  },
  {
    id: 'hospitality',
    label: 'Hospitality',
    description: VENTURES[1].description,
    icon: Hotel,
    accent: 'text-tg-cyan',
  },
  {
    id: 'education',
    label: 'Education',
    description: VENTURES[2].description,
    icon: GraduationCap,
    accent: 'text-tg-emerald',
  },
  {
    id: 'adventure',
    label: 'Eco-adventure',
    description: VENTURES[4].description,
    icon: Trees,
    accent: 'text-tg-coral',
  },
] as const;

const HeritagePathway = () => {
  const reduce = useReducedMotion() ?? false;

  return (
    <section
      className="relative overflow-hidden bg-tg-deep py-16 md:py-20 lg:py-24"
      aria-labelledby="heritage-pathway-heading"
    >
      <div className="absolute inset-0 opacity-40" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(201,162,39,0.18),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_90%_80%,rgba(27,163,201,0.12),transparent_55%)]" />
      </div>

      <div className="tg-container relative">
        <motion.div
          className="mx-auto mb-12 max-w-3xl text-center md:mb-16"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55 }}
        >
          <p className="tg-eyebrow mb-4 text-tg-gold/90">Our heritage journey</p>
          <h2 id="heritage-pathway-heading" className="font-display text-headline-xl text-white mb-5">
            A connected ecosystem across Jaipur
          </h2>
          <div className="mx-auto mb-5 h-1 w-20 rounded-full bg-gradient-to-r from-tg-gold via-tg-cyan to-tg-emerald" aria-hidden="true" />
          <p className="text-body-lg text-white/75">
            From heritage roots to manufacturing, hospitality, education, and eco-adventure — each
            venture strengthens the Traditional Group story.
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-5xl">
          <svg
            className="pointer-events-none absolute inset-x-0 top-8 hidden h-[calc(100%-4rem)] w-full md:block"
            viewBox="0 0 1000 320"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <motion.path
              d="M 40 280 Q 250 40 500 160 T 960 60"
              fill="none"
              stroke="url(#tg-gold-path)"
              strokeWidth="2"
              strokeLinecap="round"
              initial={reduce ? false : { pathLength: 0, opacity: 0.4 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
            />
            <defs>
              <linearGradient id="tg-gold-path" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#C9A227" stopOpacity="0.5" />
                <stop offset="50%" stopColor="#D4B84A" stopOpacity="1" />
                <stop offset="100%" stopColor="#1ba3c9" stopOpacity="0.7" />
              </linearGradient>
            </defs>
          </svg>

          <ol className="relative grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
            {PATHWAY_STEPS.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.li
                  key={step.id}
                  className="relative"
                  initial={reduce ? false : { opacity: 0, y: 32, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.55, delay: reduce ? 0 : index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  <motion.div
                    className="group tg-heritage-card relative h-full rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-md transition-colors duration-500 hover:border-tg-gold/40 hover:bg-white/[0.1]"
                    whileHover={reduce ? undefined : { y: -6, scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 280, damping: 22 }}
                  >
                    <div className="mb-4 flex items-center gap-3">
                      <span
                        className={cn(
                          'flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-tg-navy/60',
                          step.accent,
                        )}
                      >
                        <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                      </span>
                      <span className="font-display text-xs uppercase tracking-[0.14em] text-tg-gold/80">
                        Step {index + 1}
                      </span>
                    </div>
                    <h3 className="font-display text-lg text-white mb-2">{step.label}</h3>
                    <p className="text-sm leading-relaxed text-white/65">{step.description}</p>
                    <span
                      className="absolute -bottom-px left-5 right-5 h-px bg-gradient-to-r from-transparent via-tg-gold/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      aria-hidden="true"
                    />
                  </motion.div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default HeritagePathway;
