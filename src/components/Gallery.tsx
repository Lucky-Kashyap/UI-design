import { useCallback, useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { X, ArrowUpRight, ChevronDown } from 'lucide-react';
import { GALLERY, type GalleryItem } from '@/data/traditionalGroup';
import { cn } from '@/lib/utils';

const Gallery = () => {
  const [active, setActive] = useState<GalleryItem | null>(null);
  const [expanded, setExpanded] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(GALLERY.map((item) => [item.id, true])),
  );
  const reduce = useReducedMotion() ?? false;

  const toggleItem = useCallback((id: string) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  }, []);

  useEffect(() => {
    if (!active) return undefined;
    const onKey = (e: KeyboardEvent) => {
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
            each stop a chapter of Traditional Group. Tap a timeline dot to expand or collapse.
          </p>
        </motion.div>

        <div className="relative">
          <div
            className="absolute left-4 md:left-1/2 top-2 bottom-2 w-px -translate-x-0 md:-translate-x-1/2 bg-gradient-to-b from-tg-emerald via-tg-cyan to-tg-coral opacity-70"
            aria-hidden="true"
          />

          <ol className="relative space-y-8 md:space-y-12 lg:space-y-16">
            {GALLERY.map((item, index) => {
              const imageLeft = index % 2 === 0;
              const isExpanded = expanded[item.id] ?? true;

              return (
                <motion.li
                  key={item.id}
                  layout={!reduce}
                  className={cn(
                    'relative grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 lg:gap-14 items-center pl-10 md:pl-0 transition-[gap] duration-500',
                    !isExpanded && 'md:gap-4',
                  )}
                  initial={reduce ? false : { opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.55, delay: reduce ? 0 : 0.05 }}
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(item.id)}
                    className={cn(
                      'tg-timeline-dot absolute left-4 md:left-1/2 z-20 flex -translate-x-1/2 items-center justify-center rounded-full border-2 border-tg-navy bg-white transition-all duration-300 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-tg-cyan focus-visible:ring-offset-2',
                      isExpanded
                        ? 'top-8 md:top-1/2 h-5 w-5 md:-translate-y-1/2 tg-timeline-dot--active'
                        : 'top-1/2 h-4 w-4 -translate-y-1/2',
                    )}
                    aria-expanded={isExpanded}
                    aria-controls={`gallery-panel-${item.id}`}
                    aria-label={`${isExpanded ? 'Collapse' : 'Expand'} ${item.title}`}
                  >
                    <span
                      className={cn(
                        'rounded-full tg-prism-line transition-all duration-300',
                        isExpanded ? 'h-2.5 w-2.5 animate-pulse' : 'h-1.5 w-1.5',
                      )}
                      aria-hidden="true"
                    />
                  </button>

                  <motion.div
                    layout={!reduce}
                    className={cn(imageLeft ? 'md:order-1' : 'md:order-2')}
                    animate={{ opacity: isExpanded ? 1 : 0.85 }}
                    transition={{ duration: 0.4 }}
                  >
                    <button
                      type="button"
                      onClick={() => setActive(item)}
                      className={cn(
                        'group relative w-full overflow-hidden rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 text-left focus:outline-none hover:-translate-y-1',
                        isExpanded ? 'aspect-[16/11]' : 'aspect-[16/7] md:aspect-[16/8]',
                      )}
                    >
                      <img
                        src={item.src}
                        alt={item.alt}
                        loading="lazy"
                        decoding="async"
                        className={cn(
                          'absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110',
                          !reduce && isExpanded && 'tg-img-drift',
                        )}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-tg-deep/50 via-transparent to-transparent opacity-80" />
                      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-br from-tg-cyan/20 via-transparent to-tg-amber/15" />
                      <span className="absolute bottom-4 right-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-hover:bg-tg-cyan group-hover:scale-110">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </button>
                  </motion.div>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        id={`gallery-panel-${item.id}`}
                        key={`panel-${item.id}`}
                        layout={!reduce}
                        initial={reduce ? false : { opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={reduce ? undefined : { opacity: 0, height: 0 }}
                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        className={cn(
                          'relative overflow-hidden',
                          imageLeft ? 'md:order-2 md:pl-4 lg:pl-8' : 'md:order-1 md:pr-4 lg:pr-8 md:text-right',
                        )}
                      >
                        <div className="tg-timeline-panel rounded-2xl border border-tg-line/80 bg-white/60 p-5 md:p-6 backdrop-blur-sm transition-colors duration-500 hover:border-tg-cyan/35 hover:bg-tg-soft/80">
                          <p className="tg-eyebrow mb-2">{item.sector}</p>
                          <h3 className="font-display text-2xl xs:text-3xl text-tg-navy mb-3">{item.title}</h3>
                          <div
                            className={cn(
                              'mb-4 h-1 w-14 rounded-full tg-prism-line',
                              !imageLeft && 'md:ml-auto',
                            )}
                            aria-hidden="true"
                          />
                          <p className="text-body-md text-tg-muted max-w-md md:max-w-none">{item.description}</p>
                          <button
                            type="button"
                            onClick={() => setActive(item)}
                            className={cn(
                              'mt-5 tg-link-hover inline-flex items-center gap-1.5 text-sm font-semibold text-tg-navy hover:!text-tg-cyan',
                              !imageLeft && 'md:flex-row-reverse',
                            )}
                          >
                            View frame
                            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {!isExpanded && (
                    <div
                      className={cn(
                        'flex items-center gap-2 md:col-span-1',
                        imageLeft ? 'md:order-2 md:pl-4' : 'md:order-1 md:pr-4 md:justify-end',
                      )}
                    >
                      <button
                        type="button"
                        onClick={() => toggleItem(item.id)}
                        className="tg-link-hover inline-flex items-center gap-1 text-sm font-semibold text-tg-muted hover:!text-tg-cyan"
                      >
                        {item.title}
                        <ChevronDown className="h-4 w-4" />
                      </button>
                    </div>
                  )}
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
              className="absolute right-4 top-4 tg-icon-btn tg-icon-btn--light inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white"
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
