import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { X, ArrowUpRight } from 'lucide-react';
import { GALLERY } from '@/data/traditionalGroup';
import { cn } from '@/lib/utils';

const Gallery = () => {
  const [active, setActive] = useState(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!active) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setActive(null);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [active]);

  return (
    <section id="gallery" className="tg-section bg-tg-bg overflow-hidden" aria-labelledby="gallery-heading">
      <div className="tg-container">
        <motion.div
          className="max-w-2xl mb-12 md:mb-16"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="tg-eyebrow mb-3">In the gallery</p>
          <h2 id="gallery-heading" className="font-display text-headline-xl text-tg-navy mb-4">
            A journey across our ventures
          </h2>
          <div className="mb-4 h-1 w-16 rounded-full tg-prism-line" aria-hidden="true" />
          <p className="text-body-md text-tg-muted">
            Follow the pathway through hospitality, manufacturing, education, and eco-adventure —
            each stop a chapter of Traditional Group.
          </p>
        </motion.div>

        <div className="relative">
          {/* Pathway connector — desktop center, mobile left */}
          <div
            className="absolute left-4 md:left-1/2 top-2 bottom-2 w-px -translate-x-0 md:-translate-x-1/2 bg-gradient-to-b from-tg-emerald via-tg-cyan to-tg-coral opacity-70"
            aria-hidden="true"
          />

          <ol className="relative space-y-12 md:space-y-20 lg:space-y-24">
            {GALLERY.map((item, index) => {
              const imageLeft = index % 2 === 0;
              return (
                <motion.li
                  key={item.id}
                  className="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-14 items-center pl-10 md:pl-0"
                  initial={reduce ? false : { opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.55, delay: reduce ? 0 : 0.05 }}
                >
                  {/* Timeline node */}
                  <span
                    className="absolute left-4 md:left-1/2 top-8 md:top-1/2 z-10 flex h-4 w-4 -translate-x-1/2 -translate-y-0 md:-translate-y-1/2 items-center justify-center"
                    aria-hidden="true"
                  >
                    <span className="absolute h-4 w-4 rounded-full bg-white border-2 border-tg-navy" />
                    <span className="absolute h-2 w-2 rounded-full tg-prism-line animate-pulse" />
                  </span>

                  {/* Image card */}
                  <button
                    type="button"
                    onClick={() => setActive(item)}
                    className={cn(
                      'group relative w-full overflow-hidden rounded-2xl md:rounded-3xl aspect-[16/11] shadow-lg hover:shadow-xl transition-shadow duration-500 text-left focus:outline-none',
                      imageLeft ? 'md:order-1' : 'md:order-2',
                    )}
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      loading="lazy"
                      decoding="async"
                      className={cn(
                        'absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105',
                        !reduce && 'tg-img-drift',
                      )}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-tg-deep/50 via-transparent to-transparent opacity-80" />
                    <span className="absolute bottom-4 right-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </button>

                  {/* Text panel */}
                  <div
                    className={cn(
                      'relative',
                      imageLeft ? 'md:order-2 md:pl-4 lg:pl-8' : 'md:order-1 md:pr-4 lg:pr-8 md:text-right',
                    )}
                  >
                    <p className="tg-eyebrow mb-2">{item.sector}</p>
                    <h3 className="font-display text-2xl xs:text-3xl text-tg-navy mb-3">
                      {item.title}
                    </h3>
                    <div
                      className={cn(
                        'mb-4 h-1 w-14 rounded-full tg-prism-line',
                        !imageLeft && 'md:ml-auto',
                      )}
                      aria-hidden="true"
                    />
                    <p className="text-body-md text-tg-muted max-w-md md:max-w-none">
                      {item.description}
                    </p>
                    <button
                      type="button"
                      onClick={() => setActive(item)}
                      className={cn(
                        'mt-5 inline-flex items-center gap-2 text-sm font-semibold text-tg-navy hover:text-tg-cyan transition-colors',
                        !imageLeft && 'md:flex-row-reverse',
                      )}
                    >
                      View frame
                      <ArrowUpRight className="h-4 w-4" />
                    </button>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-tg-deep/85 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            role="dialog"
            aria-modal="true"
            aria-label={active.alt}
          >
            <button
              type="button"
              className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white"
              aria-label="Close gallery lightbox"
              onClick={() => setActive(null)}
            >
              <X className="h-5 w-5" />
            </button>
            <motion.div
              className="max-w-4xl w-full"
              initial={reduce ? false : { scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={reduce ? undefined : { scale: 0.94, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={active.src}
                alt={active.alt}
                className="max-h-[75vh] w-full rounded-xl object-contain shadow-2xl"
              />
              <p className="mt-4 text-center text-white/85 text-sm xs:text-base px-2">
                <span className="font-semibold text-white">{active.title}</span>
                {' — '}
                {active.description}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
