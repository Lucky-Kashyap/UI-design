import CardSwap from '@/components/react-bits/CardSwap';
import { TESTIMONIALS } from '@/data/traditionalGroup';

const ForgeVoices = () => {
  const items = TESTIMONIALS.map((t) => ({
    id: t.id,
    quote: t.quote,
    name: t.name,
    role: `${t.role} · ${t.venture}`,
  }));

  return (
    <section className="border-y border-tg-line bg-tg-bg py-12 xxs:py-14 xs:py-16" aria-label="Testimonial">
      <div className="tg-container min-w-0 max-w-3xl px-1 text-center xs:px-0">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-tg-gold xs:text-xs">Voices</p>
        <h2 className="mt-2 font-display text-[clamp(1.5rem,5vw,2rem)] text-tg-ink">Forged in trust</h2>
        <div className="mt-8 xs:mt-10">
          <CardSwap items={items} />
        </div>
      </div>
    </section>
  );
};

export default ForgeVoices;
