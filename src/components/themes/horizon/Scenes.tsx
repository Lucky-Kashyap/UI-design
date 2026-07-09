import AnimatedContent from '@/components/react-bits/AnimatedContent';
import { cn } from '@/lib/utils';
import { HORIZON_BG_SCENES, HORIZON_SCENES } from './media';
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

const HorizonScenes = () => (
  <HorizonSection id="scenes" className="relative overflow-hidden bg-tg-bg" aria-labelledby="scenes-heading">
    <HorizonSectionBg src={HORIZON_BG_SCENES} overlay="light" />

    <HorizonContainer className="relative z-[1] mb-8 xs:mb-10">
      <HorizonEyebrow>Scenes</HorizonEyebrow>
      <HorizonH2 id="scenes-heading" className="mt-2 xs:mt-3">
        Light, space, and story
      </HorizonH2>
      <HorizonBody className="mt-3 max-w-xl">
        Intimate vignettes — each scene paired with photography in a left-right rhythm.
      </HorizonBody>
    </HorizonContainer>

    <div className="relative z-[1] space-y-10 xs:space-y-12">
      {HORIZON_SCENES.map((item, index) => {
        const imageLeft = index % 2 === 0;

        return (
          <AnimatedContent key={item.id} delay={index * 0.07}>
            <article
              className={cn(
                'hz-container grid min-w-0 items-center gap-5 xs:gap-6 md:grid-cols-2 md:gap-10',
                !imageLeft && 'md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1',
              )}
            >
              <div className="overflow-hidden rounded-tg-lg border border-tg-line shadow-sm">
                <HorizonImage
                  src={item.src}
                  alt={item.alt}
                  className="aspect-[4/3] w-full object-cover md:aspect-[5/4]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className={cn('min-w-0 rounded-tg-lg border border-tg-line/70 bg-tg-bg/80 p-5 backdrop-blur-sm xs:p-6', !imageLeft && 'md:text-right')}>
                <p className="hz-caption text-tg-cyan">{item.sector}</p>
                <HorizonH3 className="mt-1">{item.title}</HorizonH3>
                <HorizonBody className="mt-2">{item.description}</HorizonBody>
              </div>
            </article>
          </AnimatedContent>
        );
      })}
    </div>
  </HorizonSection>
);

export default HorizonScenes;
