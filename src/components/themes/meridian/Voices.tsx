import { useReducedMotion } from 'framer-motion';
import AnimatedContent from '@/components/react-bits/AnimatedContent';
import CardSwap from '@/components/react-bits/CardSwap';
import SpotlightCard from '@/components/react-bits/SpotlightCard';
import { TESTIMONIALS } from '@/data/traditionalGroup';
import { useTheme } from '@/context/ThemeProvider';

const MeridianVoices = () => {
  const { theme } = useTheme();
  const reduce = useReducedMotion() ?? false;
  const doubled = [...TESTIMONIALS, ...TESTIMONIALS];

  const swapItems = TESTIMONIALS.map((item) => ({
    id: item.id,
    quote: item.quote,
    name: item.name,
    role: `${item.role} · ${item.venture}`,
  }));

  return (
    <section className="overflow-hidden border-y border-tg-line bg-tg-soft py-12 xxs:py-14 xs:py-16 md:py-14" aria-label="Client voices">
      <AnimatedContent className="tg-container mb-6 min-w-0 xs:mb-8">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-tg-cyan xs:text-xs xs:tracking-[0.2em]">Testimonials</p>
        <h2 className="mt-2 font-display text-[clamp(1.5rem,5vw,2rem)] text-tg-ink xs:mt-3 md:text-3xl">What partners say</h2>
      </AnimatedContent>

      {theme.sections.testimonials === 'card-swap' ? (
        <div className="tg-container max-w-3xl">
          <CardSwap items={swapItems} />
        </div>
      ) : reduce ? (
        <div className="tg-container grid min-w-0 gap-3 xs:gap-4 md:grid-cols-2">
          {TESTIMONIALS.slice(0, 2).map((item) => (
            <SpotlightCard key={item.id}>
              <blockquote className="text-sm text-tg-muted">&ldquo;{item.quote}&rdquo;</blockquote>
              <p className="mt-3 text-sm font-semibold text-tg-ink xs:mt-4">{item.name}</p>
            </SpotlightCard>
          ))}
        </div>
      ) : (
        <div className="relative">
          <div className="flex w-max animate-marquee gap-3 px-3 hover:[animation-play-state:paused] xs:gap-4 xs:px-4 md:gap-6 md:px-8">
            {doubled.map((item, index) => (
              <SpotlightCard
                key={`${item.id}-${index}`}
                className="w-[min(88vw,18rem)] shrink-0 xs:w-[min(85vw,20rem)] md:w-[22rem]"
              >
                <blockquote className="text-sm leading-relaxed text-tg-muted md:text-base">&ldquo;{item.quote}&rdquo;</blockquote>
                <p className="mt-3 border-t border-tg-line pt-3 text-sm font-semibold text-tg-ink xs:mt-4 xs:pt-4">{item.name}</p>
                <p className="text-[0.65rem] text-tg-muted xs:text-xs">
                  {item.role} · {item.venture}
                </p>
              </SpotlightCard>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default MeridianVoices;
