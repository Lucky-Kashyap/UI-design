import AnimatedContent from '@/components/react-bits/AnimatedContent';
import { FORGE_CRAFT_INTRO } from '@/data/forgeContent';
import { FORGE_CRAFT } from '@/data/themeMedia';
import { cn } from '@/lib/utils';

const ForgeCraft = () => (
  <section id="craft" className="scroll-mt-[var(--tg-header-offset,5.5rem)] bg-tg-deep py-12 text-white xxs:py-14 xs:py-16 md:py-20" aria-labelledby="craft-heading">
    <div className="tg-container mb-8 min-w-0 xs:mb-10">
      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-tg-gold xs:text-xs">Craft</p>
      <h2 id="craft-heading" className="mt-2 font-display text-[clamp(1.75rem,6vw,3.25rem)]">Material and landscape</h2>
      <p className="mt-3 max-w-xl text-sm text-white/65 xs:text-base">{FORGE_CRAFT_INTRO}</p>
    </div>

    <div className="space-y-8 xs:space-y-10">
      {FORGE_CRAFT.map((item, index) => {
        const imageLeft = index % 2 === 0;

        return (
          <AnimatedContent key={item.id} delay={index * 0.08}>
            <div
              className={cn(
                'tg-container grid min-w-0 items-center gap-5 border-t border-white/10 py-8 xs:gap-6 xs:py-10 md:grid-cols-2 md:gap-10',
                !imageLeft && 'md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1',
              )}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="aspect-[16/10] w-full rounded-tg-md object-cover sm:aspect-[5/3]"
                loading="lazy"
                decoding="async"
              />
              <div className="min-w-0">
                <p className="text-[0.65rem] uppercase tracking-wider text-tg-gold xs:text-xs">{item.sector}</p>
                <h3 className="mt-1 font-display text-xl xs:mt-2 xs:text-2xl">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70 xs:text-base">{item.description}</p>
              </div>
            </div>
          </AnimatedContent>
        );
      })}
    </div>
  </section>
);

export default ForgeCraft;
