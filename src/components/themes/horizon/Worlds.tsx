import { useMemo } from 'react';
import { ArrowUpRight } from 'lucide-react';
import AnimatedContent from '@/components/react-bits/AnimatedContent';
import { HORIZON_WORLDS_MEDIA } from '@/data/themeMedia';
import { mergeVentureMedia } from '@/lib/themeVentures';
import { cn } from '@/lib/utils';

const HorizonWorlds = () => {
  const ventures = useMemo(() => mergeVentureMedia(HORIZON_WORLDS_MEDIA), []);

  return (
    <section id="worlds" className="tg-section scroll-mt-[var(--tg-header-offset,5.5rem)] bg-tg-bg" aria-labelledby="worlds-heading">
      <div className="tg-container mb-8 min-w-0 xs:mb-10 md:mb-14">
        <AnimatedContent className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-tg-cyan">Worlds</p>
          <h2 id="worlds-heading" className="mt-2 font-display text-[clamp(1.75rem,6vw,3.25rem)] text-tg-ink xs:mt-3">
            Where we create value
          </h2>
          <p className="mt-3 text-sm text-tg-muted xs:text-base">
            A bright editorial walk — image and story alternating as you scroll.
          </p>
        </AnimatedContent>
      </div>

      <div className="space-y-10 xs:space-y-12 md:space-y-16">
        {ventures.map((venture, index) => {
          const imageLeft = index % 2 === 0;
          const media = HORIZON_WORLDS_MEDIA[index];

          return (
            <AnimatedContent key={venture.id} delay={index * 0.06}>
              <article
                className={cn(
                  'tg-container grid min-w-0 items-center gap-5 xs:gap-6 md:gap-10 lg:grid-cols-2 lg:gap-14',
                  !imageLeft && 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1',
                )}
              >
                <a
                  href={venture.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block overflow-hidden rounded-tg-xl border border-tg-line bg-tg-soft shadow-sm"
                >
                  <img
                    src={venture.image}
                    alt={media?.alt ?? venture.name}
                    className="aspect-[5/4] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] sm:aspect-[16/10]"
                    loading="lazy"
                    decoding="async"
                  />
                </a>

                <div className={cn('min-w-0', !imageLeft ? 'lg:text-right' : '')}>
                  <p className="text-[0.65rem] uppercase tracking-wider text-tg-cyan xs:text-xs">{venture.sector}</p>
                  <div className={cn('mt-2 flex items-start gap-2', !imageLeft && 'lg:flex-row-reverse')}>
                    <h3 className="font-display text-[clamp(1.35rem,4vw,2rem)] text-tg-ink">{venture.shortName}</h3>
                    <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-tg-muted" />
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-tg-muted xs:text-base">{venture.description}</p>
                </div>
              </article>
            </AnimatedContent>
          );
        })}
      </div>
    </section>
  );
};

export default HorizonWorlds;
