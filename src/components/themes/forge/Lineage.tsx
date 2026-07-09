import AnimatedContent from '@/components/react-bits/AnimatedContent';
import { FORGE_LINEAGE } from '@/data/forgeContent';
import { FORGE_LINEAGE_IMAGE } from '@/data/themeMedia';

const ForgeLineage = () => (
  <section id="lineage" className="scroll-mt-[var(--tg-header-offset,5.5rem)] bg-tg-soft py-12 xxs:py-14 xs:py-16 md:py-20" aria-labelledby="lineage-heading">
    <div className="tg-container grid min-w-0 gap-8 xs:gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
      <AnimatedContent className="min-w-0 lg:order-2">
        <img
          src={FORGE_LINEAGE_IMAGE}
          alt="Heritage courtyard interior warm light"
          className="w-full rounded-tg-lg border border-tg-gold/25 shadow-lg"
          loading="lazy"
          decoding="async"
        />
      </AnimatedContent>

      <AnimatedContent delay={0.1} className="min-w-0 lg:order-1">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-tg-gold xs:text-xs">Lineage</p>
        <h2 id="lineage-heading" className="mt-2 font-display text-[clamp(1.75rem,6vw,3.25rem)] text-tg-ink xs:mt-3">
          Built over generations
        </h2>
        <p className="mt-3 text-sm text-tg-muted xs:mt-4 xs:text-base">
          From a single manufacturing vision to a multi-venture collective — each era added depth without losing the thread of quality.
        </p>
        <ol className="mt-6 space-y-5 xs:mt-8 xs:space-y-6">
          {FORGE_LINEAGE.map((item, index) => (
            <li key={item.era} className="flex gap-4 border-l-2 border-tg-gold/40 pl-4 xs:gap-5 xs:pl-6">
              <span className="font-display text-sm text-tg-gold/70 xs:text-base">{String(index + 1).padStart(2, '0')}</span>
              <div>
                <p className="font-display text-base text-tg-gold xs:text-lg">{item.era}</p>
                <p className="mt-1 text-sm text-tg-muted">{item.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </AnimatedContent>
    </div>
  </section>
);

export default ForgeLineage;
