'use client';

import { useReducedMotion } from 'framer-motion';
import AnimatedContent from '@/components/react-bits/AnimatedContent';
import SpotlightCard from '@/components/react-bits/SpotlightCard';
import { TESTIMONIALS } from '@/data/traditionalGroup';
import { MeridianBody, MeridianContainer, MeridianEyebrow, MeridianH2, MeridianSection } from './ui';

const MeridianVoices = () => {
  const reduce = useReducedMotion() ?? false;
  const doubled = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <MeridianSection className="overflow-hidden border-y border-tg-line bg-tg-soft py-12 md:py-14" aria-label="Client voices">
      <AnimatedContent className="md-container mb-6 min-w-0 xs:mb-8">
        <MeridianEyebrow>Testimonials</MeridianEyebrow>
        <MeridianH2 className="mt-2 xs:mt-3">What partners say</MeridianH2>
      </AnimatedContent>

      {reduce ? (
        <MeridianContainer className="grid min-w-0 gap-3 xs:gap-4 md:grid-cols-2">
          {TESTIMONIALS.slice(0, 2).map((item) => (
            <div key={item.id} data-md-cursor="card">
              <SpotlightCard className="md-card-hover">
                <MeridianBody>&ldquo;{item.quote}&rdquo;</MeridianBody>
                <p className="md-body mt-3 font-semibold text-tg-ink xs:mt-4">{item.name}</p>
              </SpotlightCard>
            </div>
          ))}
        </MeridianContainer>
      ) : (
        <div className="relative">
          <div className="flex w-max animate-marquee gap-3 px-3 hover:[animation-play-state:paused] xs:gap-4 xs:px-4 md:gap-6 md:px-8">
            {doubled.map((item, index) => (
              <div key={`${item.id}-${index}`} data-md-cursor="card">
                <SpotlightCard className="md-card-hover w-[min(88vw,18rem)] shrink-0 xs:w-[min(85vw,20rem)] md:w-[20rem]">
                <MeridianBody className="md-body-lg">&ldquo;{item.quote}&rdquo;</MeridianBody>
                <p className="md-body mt-3 border-t border-tg-line pt-3 font-semibold text-tg-ink xs:mt-4 xs:pt-4">{item.name}</p>
                <p className="md-caption mt-1 text-tg-muted">
                  {item.role} · {item.venture}
                </p>
              </SpotlightCard>
              </div>
            ))}
          </div>
        </div>
      )}
    </MeridianSection>
  );
};

export default MeridianVoices;
