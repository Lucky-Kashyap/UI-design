import { useMemo } from 'react';
import { ArrowUpRight } from 'lucide-react';
import AnimatedContent from '@/components/react-bits/AnimatedContent';
import { mergeVentureMedia } from '@/lib/themeVentures';
import { cn } from '@/lib/utils';
import { HORIZON_BG_WORLDS, HORIZON_WORLDS_MEDIA } from './media';
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

const HorizonWorlds = () => {
  const ventures = useMemo(() => mergeVentureMedia(HORIZON_WORLDS_MEDIA), []);

  return (
    <HorizonSection id="worlds" className="relative overflow-hidden bg-tg-bg" aria-labelledby="worlds-heading">
      <HorizonSectionBg src={HORIZON_BG_WORLDS} overlay="light" />

      <HorizonContainer className="relative z-[1] mb-8 xs:mb-10 md:mb-14">
        <AnimatedContent className="mx-auto max-w-2xl text-center">
          <HorizonEyebrow>Worlds</HorizonEyebrow>
          <HorizonH2 id="worlds-heading" className="mt-2 xs:mt-3">
            Where we create value
          </HorizonH2>
          <HorizonBody className="mt-3">
            A bright editorial walk — image and story alternating as you scroll.
          </HorizonBody>
        </AnimatedContent>
      </HorizonContainer>

      <div className="relative z-[1] space-y-12 xs:space-y-14 md:space-y-20">
        {ventures.map((venture, index) => {
          const imageLeft = index % 2 === 0;
          const media = HORIZON_WORLDS_MEDIA[index];

          return (
            <AnimatedContent key={venture.id} delay={index * 0.06}>
              <article
                className={cn(
                  'hz-container grid min-w-0 items-center gap-6 xs:gap-8 md:gap-10 lg:grid-cols-2 lg:gap-14',
                  !imageLeft && 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1',
                )}
              >
                <a
                  href={venture.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block overflow-hidden rounded-tg-xl border border-tg-line bg-tg-soft shadow-sm"
                >
                  <HorizonImage
                    src={venture.image}
                    alt={media?.alt ?? venture.name}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] sm:aspect-[16/10]"
                    loading="lazy"
                    decoding="async"
                  />
                </a>

                <div className={cn('min-w-0 rounded-tg-lg border border-tg-line/70 bg-tg-bg/80 p-5 backdrop-blur-sm xs:p-6', !imageLeft && 'lg:text-right')}>
                  <p className="hz-caption text-tg-cyan">{venture.sector}</p>
                  <div className={cn('mt-2 flex items-start gap-2', !imageLeft && 'lg:flex-row-reverse lg:justify-end')}>
                    <HorizonH3>{venture.shortName}</HorizonH3>
                    <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-tg-muted" aria-hidden="true" />
                  </div>
                  <HorizonBody className="mt-3">{venture.description}</HorizonBody>
                </div>
              </article>
            </AnimatedContent>
          );
        })}
      </div>
    </HorizonSection>
  );
};

export default HorizonWorlds;
