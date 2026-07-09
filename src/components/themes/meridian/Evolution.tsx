import AnimatedContent from '@/components/react-bits/AnimatedContent';
import ProfileCard from '@/components/react-bits/ProfileCard';
import ScrollReveal from '@/components/react-bits/ScrollReveal';
import { ABOUT } from '@/data/traditionalGroup';
import { MERIDIAN_EVOLUTION } from '@/data/meridianContent';
import { cn } from '@/lib/utils';
import { MERIDIAN_EVOLUTION_IMAGE, MERIDIAN_FRAMES } from './media';
import { MeridianBody, MeridianContainer, MeridianEyebrow, MeridianH2, MeridianH3, MeridianSection } from './ui';

const MeridianEvolution = () => {
  const profileImage = MERIDIAN_FRAMES[0]?.src ?? MERIDIAN_EVOLUTION_IMAGE;

  return (
    <MeridianSection id="evolution" className="bg-tg-bg" aria-labelledby="evolution-heading">
      <MeridianContainer className="mb-8 xs:mb-10 md:mb-12">
        <MeridianEyebrow>About Us</MeridianEyebrow>
        <MeridianH2 id="evolution-heading" className="mt-2 xs:mt-3">
          How we grew across Jaipur
        </MeridianH2>
      </MeridianContainer>

      <MeridianContainer className="grid min-w-0 gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
        <ScrollReveal>
          <ProfileCard
            image={profileImage}
            imageAlt="Traditional Group heritage architecture at night"
            title={ABOUT.title}
            subtitle="Multi-venture · Jaipur"
          >
            {ABOUT.body}
          </ProfileCard>
          <div className="mt-6 grid grid-cols-3 gap-2 xs:gap-3">
            {ABOUT.stats.map((stat) => (
              <div key={stat.label} className="rounded-tg-md border border-tg-line bg-tg-soft px-2 py-3 text-center xs:px-3 xs:py-4">
                <p className="md-h3 text-tg-ink">
                  {stat.value}
                  {stat.suffix}
                </p>
                <p className="md-caption mt-1 text-tg-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <div className="relative min-w-0">
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
                      <p className="md-body font-semibold text-tg-cyan">{step.year}</p>
                      <MeridianH3 className="mt-1">{step.title}</MeridianH3>
                    </div>
                    <div className={cn('min-w-0 md:px-6', contentLeft ? 'md:text-left' : 'md:text-right')}>
                      <MeridianBody>{step.body}</MeridianBody>
                    </div>
                  </li>
                </AnimatedContent>
              );
            })}
          </ol>
        </div>
      </MeridianContainer>
    </MeridianSection>
  );
};

export default MeridianEvolution;
