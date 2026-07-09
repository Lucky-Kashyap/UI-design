import { useMemo } from 'react';
import { ArrowUpRight } from 'lucide-react';
import AnimatedContent from '@/components/react-bits/AnimatedContent';
import { FORGE_WORKS_INTRO } from '@/data/forgeContent';
import { FORGE_WORKS_MEDIA } from '@/data/themeMedia';
import { mergeVentureMedia } from '@/lib/themeVentures';
import { cn } from '@/lib/utils';

const ForgeWorks = () => {
  const ventures = useMemo(() => mergeVentureMedia(FORGE_WORKS_MEDIA), []);

  return (
    <section id="works" className="tg-section scroll-mt-[var(--tg-header-offset,5.5rem)] bg-tg-bg" aria-labelledby="works-heading">
      <div className="tg-container mb-8 min-w-0 xs:mb-10 md:mb-14">
        <AnimatedContent className="max-w-2xl">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-tg-gold xs:text-xs">Works</p>
          <h2 id="works-heading" className="mt-2 font-display text-[clamp(1.75rem,6vw,3.25rem)] text-tg-ink xs:mt-3">
            Forged across sectors
          </h2>
          <p className="mt-3 text-sm text-tg-muted xs:mt-4 xs:text-base">{FORGE_WORKS_INTRO}</p>
        </AnimatedContent>
      </div>

      <div className="space-y-10 xs:space-y-12 md:space-y-16">
        {ventures.map((venture, index) => {
          const imageLeft = index % 2 === 0;
          const media = FORGE_WORKS_MEDIA[index];

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
                  className="group relative block overflow-hidden rounded-tg-lg border border-tg-line shadow-md xs:rounded-tg-xl"
                >
                  <img
                    src={venture.image}
                    alt={media?.alt ?? venture.name}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] lg:aspect-[5/4]"
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="absolute left-3 top-3 rounded-tg-md bg-tg-deep/80 px-2.5 py-1 font-display text-lg text-tg-gold backdrop-blur-sm xs:left-4 xs:top-4 xs:px-3 xs:text-xl">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </a>

                <div className="min-w-0 px-0.5 lg:px-2">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-tg-gold xs:text-xs">{venture.sector}</p>
                  <div className="mt-2 flex items-start justify-between gap-3 xs:mt-3">
                    <h3 className="font-display text-[clamp(1.35rem,4vw,2rem)] text-tg-ink">{venture.shortName}</h3>
                    <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-tg-muted" aria-hidden="true" />
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-tg-muted xs:text-base">{venture.description}</p>
                  <a
                    href={venture.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-tg-gold hover:underline"
                  >
                    Explore venture
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            </AnimatedContent>
          );
        })}
      </div>
    </section>
  );
};

export default ForgeWorks;
