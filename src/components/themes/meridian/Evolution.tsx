'use client';

import { ABOUT } from '@/data/traditionalGroup';
import { MERIDIAN_EVOLUTION } from '@/data/meridianContent';
import { cn } from '@/lib/utils';
import { MERIDIAN_EVOLUTION_IMAGE } from './media';
import MeridianProfileCard from './MeridianProfileCard';
import MeridianReveal from './MeridianReveal';
import { MeridianBody, MeridianContainer, MeridianEyebrow, MeridianH2, MeridianH3, MeridianSection } from './ui';

const MeridianEvolution = () => (
  <MeridianSection id="evolution" className="bg-tg-bg" aria-labelledby="evolution-heading">
    <MeridianContainer className="mb-8 xs:mb-10 md:mb-12">
      <MeridianReveal blur className="max-w-2xl">
        <MeridianEyebrow>About Us</MeridianEyebrow>
        <MeridianH2 id="evolution-heading" className="mt-2 xs:mt-3">
          How we grew across Jaipur
        </MeridianH2>
      </MeridianReveal>
    </MeridianContainer>

    <MeridianContainer className="grid min-w-0 gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
      <MeridianReveal direction="left" delay={0.05}>
        <div data-md-cursor="card" className="md-card-hover">
          <MeridianProfileCard
            image={MERIDIAN_EVOLUTION_IMAGE}
            imageAlt="Traditional Group heritage architecture at night"
            title={ABOUT.title}
            subtitle="Multi-venture · Jaipur"
          >
            {ABOUT.body}
          </MeridianProfileCard>
        </div>
        <div className="mt-6 grid grid-cols-3 gap-2 xs:gap-3">
          {ABOUT.stats.map((stat, index) => (
            <MeridianReveal key={stat.label} delay={0.12 + index * 0.06}>
              <div
                className="rounded-xl border border-tg-line bg-tg-soft px-2 py-3 text-center transition-colors hover:border-tg-cyan/30 xs:px-3 xs:py-4"
                data-md-cursor="card"
              >
                <p className="md-h3 text-tg-ink">
                  {stat.value}
                  {stat.suffix}
                </p>
                <p className="md-caption mt-1 text-tg-muted">{stat.label}</p>
              </div>
            </MeridianReveal>
          ))}
        </div>
      </MeridianReveal>

      <div className="relative min-w-0">
        <div className="absolute left-4 top-0 hidden h-full w-px bg-tg-line md:left-1/2 md:block md:-translate-x-1/2" aria-hidden="true" />
        <ol className="space-y-8 xs:space-y-10 md:space-y-14">
          {MERIDIAN_EVOLUTION.map((step, index) => {
            const contentLeft = index % 2 === 0;

            return (
              <MeridianReveal key={step.year} delay={index * 0.08} direction={contentLeft ? 'left' : 'right'}>
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
                    <p className="md-body font-semibold text-tg-cyan">{step.year}</p>
                    <MeridianH3 className="mt-1">{step.title}</MeridianH3>
                  </div>
                  <div className={cn('min-w-0 md:px-6', contentLeft ? 'md:text-left' : 'md:text-right')}>
                    <MeridianBody>{step.body}</MeridianBody>
                  </div>
                </li>
              </MeridianReveal>
            );
          })}
        </ol>
      </div>
    </MeridianContainer>
  </MeridianSection>
);

export default MeridianEvolution;
