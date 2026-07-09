import AnimatedContent from '@/components/react-bits/AnimatedContent';
import { HORIZON_JOURNEY } from '@/data/horizonContent';
import { cn } from '@/lib/utils';
import { HORIZON_BG_JOURNEY, HORIZON_JOURNEY_FEATURE } from './media';
import {
  HorizonBody,
  HorizonContainer,
  HorizonEyebrow,
  HorizonH2,
  HorizonH3,
  HorizonImage,
  HorizonSection,
  HorizonSectionBg,
} from './ui';

const HorizonJourney = () => (
  <HorizonSection id="journey" className="relative overflow-hidden bg-tg-soft" aria-labelledby="journey-heading">
    <HorizonSectionBg src={HORIZON_BG_JOURNEY} overlay="soft" />

    <HorizonContainer className="relative z-[1] mb-8 xs:mb-10 md:mb-12">
      <HorizonEyebrow>Journey</HorizonEyebrow>
      <HorizonH2 id="journey-heading" className="mt-2 xs:mt-3">
        Milestones in daylight
      </HorizonH2>
      <HorizonBody className="mt-3 max-w-xl">
        Heritage craft milestones told in words, paired with photography of Rajasthan making traditions.
      </HorizonBody>
    </HorizonContainer>

    <HorizonContainer className="relative z-[1] grid min-w-0 gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-12">
      <AnimatedContent className="hidden lg:block">
        <div className="overflow-hidden rounded-tg-xl border border-tg-line shadow-sm">
          <HorizonImage
            src={HORIZON_JOURNEY_FEATURE}
            alt="Heritage craft artisan weaving in golden daylight"
            className="aspect-[3/4] w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
      </AnimatedContent>

      <div className="relative max-w-3xl lg:max-w-none">
        <div className="absolute bottom-2 left-4 top-2 w-px bg-gradient-to-b from-tg-cyan via-tg-emerald to-tg-amber opacity-70" aria-hidden="true" />

        <ol className="space-y-6 xs:space-y-8">
          {HORIZON_JOURNEY.map((step, index) => (
            <AnimatedContent key={step.title} delay={index * 0.08}>
              <li className="relative pl-10">
                <span
                  className="absolute left-0 top-3 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-2 border-tg-cyan bg-tg-bg/90 text-xs font-bold text-tg-navy backdrop-blur-sm"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div
                  className={cn(
                    'rounded-tg-lg border border-tg-line/80 bg-tg-bg/80 p-4 shadow-sm backdrop-blur-sm xs:p-5',
                    index % 2 === 1 && 'md:ml-auto md:max-w-[88%] md:text-right',
                  )}
                >
                  <HorizonH3>{step.title}</HorizonH3>
                  <HorizonBody className="mt-2">{step.body}</HorizonBody>
                </div>
              </li>
            </AnimatedContent>
          ))}
        </ol>
      </div>
    </HorizonContainer>
  </HorizonSection>
);

export default HorizonJourney;
