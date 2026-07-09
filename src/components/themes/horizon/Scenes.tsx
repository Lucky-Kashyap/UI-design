import AnimatedContent from '@/components/react-bits/AnimatedContent';
import { HORIZON_SCENES } from '@/data/themeMedia';
import { cn } from '@/lib/utils';

const HorizonScenes = () => (
  <section id="scenes" className="tg-section scroll-mt-[var(--tg-header-offset,5.5rem)] bg-tg-bg" aria-labelledby="scenes-heading">
    <div className="tg-container mb-8 min-w-0 xs:mb-10">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-tg-cyan">Scenes</p>
      <h2 id="scenes-heading" className="mt-2 font-display text-[clamp(1.75rem,6vw,3.25rem)] text-tg-ink xs:mt-3">
        Light, space, and story
      </h2>
      <p className="mt-3 max-w-xl text-sm text-tg-muted xs:text-base">
        Intimate vignettes — each scene paired with copy in a left-right rhythm.
      </p>
    </div>

    <div className="space-y-8 xs:space-y-10">
      {HORIZON_SCENES.map((item, index) => {
        const imageLeft = index % 2 === 0;

        return (
          <AnimatedContent key={item.id} delay={index * 0.07}>
            <article
              className={cn(
                'tg-container grid min-w-0 items-center gap-4 xs:gap-5 md:grid-cols-2 md:gap-8',
                !imageLeft && 'md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1',
              )}
            >
              <div className="overflow-hidden rounded-tg-lg border border-tg-line">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className={cn('min-w-0 px-0.5', !imageLeft && 'md:text-right')}>
                <p className="text-[0.65rem] text-tg-cyan xs:text-xs">{item.sector}</p>
                <h3 className="mt-1 font-display text-xl text-tg-ink xs:text-2xl">{item.title}</h3>
                <p className="mt-2 text-sm text-tg-muted xs:text-base">{item.description}</p>
              </div>
            </article>
          </AnimatedContent>
        );
      })}
    </div>
  </section>
);

export default HorizonScenes;
