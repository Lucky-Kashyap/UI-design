import SpotlightCard from '@/components/react-bits/SpotlightCard';
import { TESTIMONIALS } from '@/data/traditionalGroup';

const HorizonEchoes = () => (
  <section className="border-y border-tg-line bg-tg-soft py-12 xxs:py-14 xs:py-16" aria-label="Testimonials">
    <div className="tg-container mb-6 min-w-0 xs:mb-8">
      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-tg-cyan xs:text-xs">Echoes</p>
      <h2 className="mt-2 font-display text-[clamp(1.5rem,5vw,2rem)] text-tg-ink">Stories from partners</h2>
    </div>
    <div className="tg-container grid min-w-0 gap-3 xs:gap-4 md:grid-cols-2 md:gap-6">
      {TESTIMONIALS.slice(0, 4).map((t) => (
        <SpotlightCard key={t.id}>
          <p className="font-display text-3xl leading-none text-tg-cyan/40 xs:text-4xl">&ldquo;</p>
          <blockquote className="mt-2 text-sm text-tg-muted xs:text-base">{t.quote}</blockquote>
          <p className="mt-3 text-sm font-semibold text-tg-ink xs:mt-4">{t.name}</p>
          <p className="text-xs text-tg-muted xs:text-sm">{t.role}</p>
        </SpotlightCard>
      ))}
    </div>
  </section>
);

export default HorizonEchoes;
