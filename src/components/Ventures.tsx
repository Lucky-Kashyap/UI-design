import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { VENTURES, type Venture } from '@/data/traditionalGroup';
import { cn } from '@/lib/utils';

const Ventures = () => {
  const reduce = useReducedMotion() ?? false;

  return (
    <section id="ventures" className="tg-section bg-tg-bg relative overflow-hidden scroll-mt-24" aria-labelledby="ventures-heading">
      <div className="absolute inset-x-0 top-0 h-px tg-prism-line opacity-70" aria-hidden="true" />
      <div className="tg-container relative">
        <motion.div
          className="tg-section-header max-w-3xl"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55 }}
        >
          <p className="tg-eyebrow mb-4">Our portfolio</p>
          <h2 id="ventures-heading" className="font-display text-headline-xl text-tg-navy">
            Traditional Group Ventures
          </h2>
          <div className="mb-5 h-1 w-16 rounded-full tg-prism-line" aria-hidden="true" />
          <p className="text-body-md text-tg-muted">
            Traditional Group operates across multiple sectors with a strong commitment to quality
            and innovation. From manufacturing to hospitality, education, and recreation, each
            venture reflects our dedication to excellence and customer trust.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 md:gap-5" role="list" aria-label="Traditional Group venture portfolio">
          {VENTURES.map((venture, index) => {
            const span = index === 0 || index === 1 ? 'lg:col-span-3' : 'lg:col-span-2';

            return (
              <motion.a
                key={venture.id}
                role="listitem"
                href={venture.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'group tg-venture-card relative block min-h-[260px] xs:min-h-[280px] md:min-h-[340px] overflow-hidden rounded-2xl shadow-sm transition-shadow duration-500 hover:shadow-xl',
                  span,
                )}
                initial={reduce ? false : { opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: reduce ? 0 : index * 0.07 }}
                whileHover={reduce ? { y: -6 } : undefined}
              >
                <VentureFront venture={venture} />
                <VentureBack venture={venture} />
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const VentureFront = ({ venture }: { venture: Venture }) => (
  <>
    <img
      src={venture.image}
      alt={`${venture.name} — ${venture.sector} venture by Traditional Group Jaipur`}
      loading="lazy"
      decoding="async"
      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-tg-deep via-tg-navy/55 to-tg-navy/10 transition-opacity duration-500 group-hover:opacity-60" />
    <div className="absolute inset-x-0 bottom-0 p-5 xs:p-6 transition-transform duration-500 group-hover:translate-y-2 group-hover:opacity-0">
      <p className="text-[11px] uppercase tracking-[0.14em] text-white/70 mb-2">{venture.sector}</p>
      <h3 className="font-display text-xl xs:text-2xl text-white mb-2 pr-10">{venture.shortName}</h3>
      <p className="text-sm text-white/80 max-w-sm line-clamp-2">{venture.description}</p>
      <span className="mt-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm">
        <ArrowUpRight className="h-4 w-4" />
      </span>
    </div>
    <span className="absolute left-0 top-0 h-1 w-0 tg-prism-line transition-all duration-500 group-hover:w-full" />
  </>
);

const VentureBack = ({ venture }: { venture: Venture }) => (
  <div className="tg-venture-reveal absolute inset-0 flex flex-col justify-between p-5 xs:p-6">
    <div className="tg-venture-reveal__content">
      <p className="text-[11px] uppercase tracking-[0.16em] text-tg-cyan mb-3">{venture.sector}</p>
      <h3 className="font-display text-2xl text-white mb-3">{venture.shortName}</h3>
      <div className="mb-4 h-1 w-12 rounded-full tg-prism-line" aria-hidden="true" />
      <p className="text-sm text-white/85 leading-relaxed">{venture.description}</p>
      <p className="mt-4 text-xs text-white/55">{venture.name}</p>
    </div>
    <span className="tg-venture-reveal__cta inline-flex items-center gap-2 self-start rounded-full bg-white px-4 py-2 text-sm font-semibold text-tg-navy">
      Visit website
      <ExternalLink className="h-3.5 w-3.5 text-tg-cyan" />
    </span>
    <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-tg-cyan/20 blur-2xl" aria-hidden="true" />
    <div className="pointer-events-none absolute -bottom-10 -left-6 h-36 w-36 rounded-full bg-tg-amber/15 blur-2xl" aria-hidden="true" />
  </div>
);

export default Ventures;
