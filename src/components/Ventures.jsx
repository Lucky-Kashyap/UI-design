import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { VENTURES } from '@/data/traditionalGroup';

const Ventures = () => {
  const reduce = useReducedMotion();

  return (
    <section id="ventures" className="tg-section bg-tg-bg relative overflow-hidden" aria-labelledby="ventures-heading">
      <div className="absolute inset-x-0 top-0 h-px tg-prism-line opacity-70" aria-hidden="true" />
      <div className="tg-container relative">
        <motion.div
          className="max-w-3xl mb-10 md:mb-14"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55 }}
        >
          <p className="tg-eyebrow mb-3">Our portfolio</p>
          <h2 id="ventures-heading" className="font-display text-headline-xl text-tg-navy mb-4">
            Traditional Group Ventures
          </h2>
          <div className="mb-4 h-1 w-16 rounded-full tg-prism-line" aria-hidden="true" />
          <p className="text-body-md text-tg-muted">
            Traditional Group operates across multiple sectors with a strong commitment to quality
            and innovation. From manufacturing to hospitality, education, and recreation, each
            venture reflects our dedication to excellence and customer trust.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 md:gap-5">
          {VENTURES.map((venture, index) => {
            const span =
              index === 0 || index === 1
                ? 'lg:col-span-3'
                : 'lg:col-span-2';

            return (
              <motion.a
                key={venture.id}
                href={venture.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative overflow-hidden rounded-2xl bg-tg-soft min-h-[260px] xs:min-h-[280px] md:min-h-[340px] shadow-sm hover:shadow-xl transition-shadow duration-500 ${span}`}
                initial={reduce ? false : { opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: reduce ? 0 : index * 0.07 }}
                whileHover={reduce ? undefined : { y: -6 }}
              >
                <img
                  src={venture.image}
                  alt={venture.name}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-tg-deep via-tg-navy/55 to-tg-navy/10" />
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-br from-tg-cyan/20 via-transparent to-tg-amber/20" />
                <div className="absolute inset-x-0 bottom-0 p-5 xs:p-6">
                  <p className="text-[11px] uppercase tracking-[0.14em] text-white/70 mb-2">
                    {venture.sector}
                  </p>
                  <h3 className="font-display text-xl xs:text-2xl text-white mb-2 pr-10">
                    {venture.shortName}
                  </h3>
                  <p className="text-sm text-white/80 max-w-sm">{venture.description}</p>
                  <span className="mt-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
                <span className="absolute left-0 top-0 h-1 w-0 tg-prism-line transition-all duration-500 group-hover:w-full" />
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Ventures;
