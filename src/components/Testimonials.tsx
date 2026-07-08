import { motion, useReducedMotion } from 'framer-motion';
import {
  Briefcase,
  Hotel,
  Palette,
  Scale,
  Star,
  type LucideIcon,
} from 'lucide-react';
import { TESTIMONIALS, type Testimonial } from '@/data/traditionalGroup';
import { cn } from '@/lib/utils';

const ICON_MAP: Record<Testimonial['icon'], LucideIcon> = {
  briefcase: Briefcase,
  palette: Palette,
  scale: Scale,
  hotel: Hotel,
};

const ICON_THEME: Record<Testimonial['icon'], string> = {
  briefcase: 'from-tg-amber/90 via-tg-coral/80 to-tg-amber/70',
  palette: 'from-tg-cyan/90 via-tg-emerald/75 to-tg-cyan/70',
  scale: 'from-tg-navy via-tg-deep to-tg-navy',
  hotel: 'from-tg-emerald/85 via-tg-amber/70 to-tg-coral/80',
};

/** Fan / arch offsets inspired by Vmake-style testimonial layouts */
const FAN = [
  { rotate: -6, y: 28, z: 1 },
  { rotate: -2, y: 8, z: 2 },
  { rotate: 2, y: 8, z: 2 },
  { rotate: 6, y: 28, z: 1 },
];

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
          className="mx-auto max-w-2xl text-center mb-10 md:mb-14"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="tg-eyebrow mb-3">Testimonials</p>
          <h2 id="testimonials-heading" className="font-display text-headline-xl text-tg-navy mb-4">
            Stories of trust
          </h2>
          <div className="mx-auto mb-4 h-1 w-16 rounded-full tg-prism-line" aria-hidden="true" />
          <p className="text-body-md text-tg-muted">
            At Traditional Group, we pride ourselves on delivering excellence across every
            venture—whether it’s education, hospitality, manufacturing, or adventure tourism.
          </p>
        </motion.div>

        <div className="grid gap-4 md:hidden">
          {cards.map((item, index) => (
            <motion.article
              key={item.id}
              className="group tg-card-lift rounded-2xl bg-white border border-tg-line p-5 shadow-md"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: reduce ? 0 : index * 0.06, duration: 0.4 }}
              whileHover={reduce ? undefined : { y: -6, borderColor: 'rgba(27,163,201,0.35)' }}
            >
              <Stars />
              <blockquote className="mt-3 font-display text-lg text-tg-ink/90 leading-relaxed">
                “{item.quote}”
              </blockquote>
              <Author item={item} />
            </motion.article>
          ))}
        </div>

        <div className="relative hidden md:block">
          <div className="flex items-end justify-center gap-3 lg:gap-5 px-2 lg:px-6 pt-4 pb-8">
            {cards.map((item, index) => {
              const fan = FAN[index] || FAN[1];
              return (
                <motion.article
                  key={item.id}
                  className={cn(
                    'group w-[min(100%,240px)] lg:w-[min(100%,280px)] shrink-0 rounded-2xl bg-white border border-tg-line p-5 lg:p-6 shadow-[0_18px_50px_rgba(11,31,58,0.10)] transition-[box-shadow,border-color] duration-300 hover:shadow-[0_24px_60px_rgba(11,31,58,0.16)] hover:border-tg-cyan/40',
                  )}
                  style={{
                    zIndex: fan.z,
                    transformOrigin: 'center bottom',
                  }}
                  initial={reduce ? false : { opacity: 0, y: 40, rotate: 0 }}
                  whileInView={
                    reduce ? { opacity: 1 } : { opacity: 1, y: fan.y, rotate: fan.rotate }
                  }
                  whileHover={
                    reduce ? undefined : { y: fan.y - 14, rotate: 0, scale: 1.045, zIndex: 10 }
                  }
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{
                    type: 'spring',
                    stiffness: 120,
                    damping: 16,
                    delay: reduce ? 0 : index * 0.08,
                  }}
                >
                  <Stars />
                  <blockquote className="mt-3 font-display text-[1.05rem] lg:text-lg text-tg-ink/90 leading-relaxed min-h-[140px]">
                    “{item.quote}”
                  </blockquote>
                  <Author item={item} />
                </motion.article>
              );
            })}
          </div>
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-tg-soft to-transparent"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
};

const Stars = () => (
  <div className="flex gap-0.5 text-tg-amber" aria-hidden="true">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className="h-3.5 w-3.5 fill-current transition-transform duration-300 group-hover:scale-110"
        style={{ transitionDelay: `${i * 40}ms` }}
      />
    ))}
  </div>
);

const Author = ({ item }: { item: Testimonial }) => {
  const Icon = ICON_MAP[item.icon];

  return (
    <div className="mt-5 flex items-center gap-3 border-t border-tg-line pt-4">
      <div
        className={cn(
          'relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-white shadow-md ring-2 ring-white transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg',
          ICON_THEME[item.icon],
        )}
        aria-hidden="true"
      >
        <Icon className="h-5 w-5" strokeWidth={1.75} />
        <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/25" />
      </div>
      <div>
        <p className="font-semibold text-tg-navy text-sm transition-colors group-hover:text-tg-cyan">
          {item.name}
        </p>
        <p className="text-xs text-tg-muted">{item.role}</p>
      </div>
    </div>
  );
};

export default Testimonials;
