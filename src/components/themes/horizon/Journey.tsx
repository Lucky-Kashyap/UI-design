import AnimatedContent from '@/components/react-bits/AnimatedContent';
import { HORIZON_JOURNEY } from '@/data/horizonContent';
import { cn } from '@/lib/utils';

const HorizonJourney = () => (
  <section id="journey" className="scroll-mt-[var(--tg-header-offset,5.5rem)] bg-tg-soft py-12 xxs:py-14 xs:py-16 md:py-20" aria-labelledby="journey-heading">
    <div className="tg-container mb-8 min-w-0 xs:mb-10 md:mb-12">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-tg-cyan">Journey</p>
      <h2 id="journey-heading" className="mt-2 font-display text-[clamp(1.75rem,6vw,3.25rem)] text-tg-ink xs:mt-3">
        Milestones in daylight
      </h2>
      <p className="mt-3 max-w-xl text-sm text-tg-muted xs:text-base">
        A typographic timeline — the story told in words while Worlds above carries the photography.
      </p>
    </div>

    <div className="tg-container relative max-w-3xl">
      <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-tg-cyan via-tg-emerald to-tg-amber opacity-70" aria-hidden="true" />

      <ol className="space-y-6 xs:space-y-8">
        {HORIZON_JOURNEY.map((step, index) => {
          const alignRight = index % 2 === 1;

          return (
            <AnimatedContent key={step.title} delay={index * 0.08}>
              <li className={cn('relative pl-10', alignRight && 'text-right')}>
                <span
                  className="absolute left-0 top-3 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-2 border-tg-cyan bg-tg-bg text-xs font-bold text-tg-navy"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className={cn('rounded-tg-lg border border-tg-line bg-tg-bg p-4 shadow-sm xs:p-5', alignRight && 'ml-auto max-w-[92%]')}>
                  <h3 className="font-display text-lg text-tg-ink xs:text-xl">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-tg-muted">{step.body}</p>
                </div>
              </li>
            </AnimatedContent>
          );
        })}
      </ol>
    </div>
  </section>
);

export default HorizonJourney;
