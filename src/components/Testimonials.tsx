import { motion, useReducedMotion } from 'framer-motion';
import { Star } from 'lucide-react';
import { TESTIMONIALS, type Testimonial } from '@/data/traditionalGroup';
import HeadingReveal from '@/components/HeadingReveal';
import { cn } from '@/lib/utils';

const CARD_TILT = [-3, 0, 0, 2] as const;

const Testimonials = () => {
  const reduce = useReducedMotion() ?? false;
  const cards = TESTIMONIALS.slice(0, 4);

  return (
    <section
      id="testimonials"
      className="tg-section bg-tg-soft relative overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      <div className="absolute inset-0 tg-soft-texture opacity-50 pointer-events-none" aria-hidden="true" />
      <div className="tg-container relative">
        <motion.div
          className="tg-section-header tg-section-header--center mx-auto max-w-2xl"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="tg-eyebrow mb-4">Testimonials</p>
          <h2 id="testimonials-heading" className="font-display text-headline-xl">
            <HeadingReveal block className="mx-auto">Stories of trust</HeadingReveal>
          </h2>
          <div className="mx-auto mb-5 h-1 w-16 rounded-full tg-prism-line" aria-hidden="true" />
          <p className="font-sans text-body-md text-tg-muted">
            At Traditional Group, we pride ourselves on delivering excellence across every
            venture—whether it’s education, hospitality, manufacturing, or adventure tourism.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6">
          {cards.map((item, index) => (
            <motion.article
              key={item.id}
              className={cn(
                'group tg-testimonial-card',
                index === 0 && 'sm:-rotate-2',
                index === 3 && 'sm:rotate-1',
              )}
              initial={reduce ? false : { opacity: 0, y: 24, rotate: 0 }}
              whileInView={
                reduce
                  ? { opacity: 1 }
                  : { opacity: 1, y: 0, rotate: CARD_TILT[index] ?? 0 }
              }
              whileHover={reduce ? undefined : { y: -6, rotate: 0, scale: 1.02 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                type: 'spring',
                stiffness: 140,
                damping: 18,
                delay: reduce ? 0 : index * 0.07,
              }}
            >
              <TestimonialCard item={item} />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ item }: { item: Testimonial }) => (
  <>
    <header className="mb-4 flex items-start justify-between gap-3">
      <p className="tg-caption text-tg-muted">
        {item.venture}
      </p>
      <div
        className="flex shrink-0 items-center gap-1 rounded-full bg-tg-soft px-2 py-0.5"
        aria-label={`Rated ${item.rating} out of 5`}
      >
        <span className="tg-stat-value text-sm tabular-nums text-tg-navy">
          {item.rating.toFixed(1)}
        </span>
        <Star className="h-3.5 w-3.5 fill-tg-emerald text-tg-emerald" aria-hidden="true" />
      </div>
    </header>

    <blockquote className="tg-testimonial-quote">
      “{item.quote}”
    </blockquote>

    <footer className="mt-5 border-t border-tg-line pt-4">
      <p className="text-body-md text-tg-navy transition-colors group-hover:text-tg-cyan">
        {item.name}
      </p>
      <p className="tg-caption mt-0.5 text-tg-muted">{item.role}</p>
    </footer>
  </>
);

export default Testimonials;
