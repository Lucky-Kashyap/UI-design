import AnimatedContent from '@/components/react-bits/AnimatedContent';
import ProfileCard from '@/components/react-bits/ProfileCard';
import ScrollReveal from '@/components/react-bits/ScrollReveal';
import { ABOUT } from '@/data/traditionalGroup';
import { MERIDIAN_EVOLUTION } from '@/data/meridianContent';
import { MERIDIAN_FRAMES } from '@/data/themeMedia';
import { cn } from '@/lib/utils';

const MeridianEvolution = () => {
  const profileImage = MERIDIAN_FRAMES[0]?.src ?? ABOUT.image;

  return (
    <section
      id="evolution"
      className="scroll-mt-[var(--tg-header-offset,5.5rem)] bg-tg-bg py-12 xxs:py-14 xs:py-16 md:py-20 lg:py-28"
      aria-labelledby="evolution-heading"
    >
      <div className="tg-container mb-8 min-w-0 xs:mb-10 md:mb-12">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-tg-cyan">About Us</p>
        <h2 id="evolution-heading" className="mt-2 font-display text-[clamp(1.75rem,6vw,3.25rem)] text-tg-ink xs:mt-3">
          How we grew across Jaipur
        </h2>
      </div>

      <div className="tg-container grid min-w-0 gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
        <ScrollReveal>
          <ProfileCard
            image={profileImage}
            imageAlt="Traditional Group heritage architecture"
            title={ABOUT.title}
            subtitle="Multi-venture · Jaipur"
          >
            {ABOUT.body}
          </ProfileCard>
          <div className="mt-6 grid grid-cols-3 gap-2 xs:gap-3">
            {ABOUT.stats.map((stat) => (
              <div key={stat.label} className="rounded-tg-md border border-tg-line bg-tg-soft px-2 py-3 text-center xs:px-3 xs:py-4">
                <p className="font-display text-xl text-tg-ink xs:text-2xl">
                  {stat.value}
                  {stat.suffix}
                </p>
                <p className="mt-1 text-[0.65rem] uppercase tracking-wider text-tg-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <div className="relative">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-tg-line md:left-1/2 md:block md:-translate-x-1/2" aria-hidden="true" />
          <ol className="space-y-8 xs:space-y-10 md:space-y-14">
            {MERIDIAN_EVOLUTION.map((step, index) => {
              const contentLeft = index % 2 === 0;

              return (
                <AnimatedContent key={step.year} delay={index * 0.08}>
                  <li
                    className={cn(
                      'relative grid min-w-0 gap-4 pl-10 md:grid-cols-2 md:gap-10 md:pl-0',
                      !contentLeft && 'md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1',
                    )}
                  >
                    <span
                      className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border border-tg-cyan/50 bg-tg-soft text-xs font-bold text-tg-cyan md:left-1/2 md:-translate-x-1/2"
                      aria-hidden="true"
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className={cn('min-w-0 md:px-6', contentLeft ? 'md:text-right' : 'md:text-left')}>
                      <p className="text-sm font-semibold text-tg-cyan">{step.year}</p>
                      <h3 className="mt-1 font-display text-xl text-tg-ink md:text-2xl">{step.title}</h3>
                    </div>
                    <div className={cn('min-w-0 md:px-6', contentLeft ? 'md:text-left' : 'md:text-right')}>
                      <p className="text-sm leading-relaxed text-tg-muted md:text-base">{step.body}</p>
                    </div>
                  </li>
                </AnimatedContent>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default MeridianEvolution;
