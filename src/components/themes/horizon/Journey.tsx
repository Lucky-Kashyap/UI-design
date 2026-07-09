import AnimatedContent from '@/components/react-bits/AnimatedContent';
import { HORIZON_JOURNEY } from '@/data/horizonContent';
import { cn } from '@/lib/utils';
import { HorizonBody, HorizonContainer, HorizonEyebrow, HorizonH2, HorizonH3, HorizonSection } from './ui';

const HorizonJourney = () => (
  <HorizonSection id="journey" className="bg-tg-soft" aria-labelledby="journey-heading">
    <HorizonContainer className="mb-8 xs:mb-10 md:mb-12">
      <HorizonEyebrow>Journey</HorizonEyebrow>
      <HorizonH2 id="journey-heading" className="mt-2 xs:mt-3">
        Milestones in daylight
      </HorizonH2>
      <HorizonBody className="mt-3 max-w-xl">
        A typographic timeline — the story told in words while Worlds above carries the photography.
      </HorizonBody>
    </HorizonContainer>

    <HorizonContainer className="relative max-w-3xl">
      <div className="absolute bottom-2 left-4 top-2 w-px bg-gradient-to-b from-tg-cyan via-tg-emerald to-tg-amber opacity-70" aria-hidden="true" />

      <ol className="space-y-6 xs:space-y-8">
        {HORIZON_JOURNEY.map((step, index) => (
          <AnimatedContent key={step.title} delay={index * 0.08}>
            <li className="relative pl-10">
              <span
                className="absolute left-0 top-3 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-2 border-tg-cyan bg-tg-bg text-xs font-bold text-tg-navy"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, '0')}
              </span>
              <div
                className={cn(
                  'rounded-tg-lg border border-tg-line bg-tg-bg p-4 shadow-sm xs:p-5',
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
    </HorizonContainer>
  </HorizonSection>
);

export default HorizonJourney;
