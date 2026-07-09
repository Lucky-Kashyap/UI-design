import AnimatedContent from '@/components/react-bits/AnimatedContent';
import { FORGE_CRAFT_INTRO } from '@/data/forgeContent';
import { cn } from '@/lib/utils';
import { FORGE_CRAFT } from './media';
import {
  ForgeBody,
  ForgeContainer,
  ForgeEyebrow,
  ForgeH2,
  ForgeH3,
  ForgeImage,
  ForgeSection,
} from './ui';

const ForgeCraft = () => (
  <ForgeSection id="craft" className="bg-tg-deep text-white" aria-labelledby="craft-heading">
    <ForgeContainer className="mb-8 xs:mb-10">
      <ForgeEyebrow>Craft</ForgeEyebrow>
      <ForgeH2 id="craft-heading" className="mt-2 text-white">
        Material and landscape
      </ForgeH2>
      <ForgeBody className="mt-3 max-w-xl text-white/65">{FORGE_CRAFT_INTRO}</ForgeBody>
    </ForgeContainer>

    <div className="space-y-0">
      {FORGE_CRAFT.map((item, index) => {
        const imageLeft = index % 2 === 0;

        return (
          <AnimatedContent key={item.id} delay={index * 0.08}>
            <div
              className={cn(
                'fg-container grid min-w-0 items-center gap-6 border-t border-white/10 py-10 xs:gap-8 xs:py-12 md:grid-cols-2 md:gap-10',
                !imageLeft && 'md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1',
              )}
            >
              <ForgeImage
                src={item.src}
                alt={item.alt}
                className="aspect-[16/10] w-full rounded-tg-md object-cover sm:aspect-[5/3]"
                loading="lazy"
                decoding="async"
              />
              <div className="min-w-0">
                <p className="fg-caption text-tg-gold">{item.sector}</p>
                <ForgeH3 className="mt-1 text-white xs:mt-2">{item.title}</ForgeH3>
                <ForgeBody className="mt-2 text-white/70">{item.description}</ForgeBody>
              </div>
            </div>
          </AnimatedContent>
        );
      })}
    </div>
  </ForgeSection>
);

export default ForgeCraft;
