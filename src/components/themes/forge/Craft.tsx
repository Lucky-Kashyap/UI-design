import AnimatedContent from '@/components/react-bits/AnimatedContent';
import { FORGE_CRAFT_INTRO } from '@/data/forgeContent';
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
  <ForgeSection id="craft" className="relative overflow-hidden bg-tg-deep text-white" aria-labelledby="craft-heading">
    <div
      className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(184,115,51,0.12)_0%,transparent_60%)]"
      aria-hidden="true"
    />

    <ForgeContainer className="relative mb-8 xs:mb-10 md:mb-12">
      <div className="max-w-2xl">
        <ForgeEyebrow>Craft</ForgeEyebrow>
        <ForgeH2 id="craft-heading" className="mt-2 text-white">
          Material and landscape
        </ForgeH2>
        <ForgeBody className="mt-3 max-w-xl text-white/65">{FORGE_CRAFT_INTRO}</ForgeBody>
      </div>
    </ForgeContainer>

    <ForgeContainer className="relative">
      <div className="fg-craft-grid">
        {FORGE_CRAFT.map((item, index) => (
          <AnimatedContent key={item.id} delay={index * 0.08}>
            <article className="fg-craft-card group">
              <ForgeImage
                src={item.src}
                alt={item.alt}
                className="aspect-[3/2] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] sm:aspect-[16/10]"
                loading="lazy"
                decoding="async"
              />
              <div className="fg-craft-card__content">
                <p className="fg-caption text-tg-gold">{item.sector}</p>
                <ForgeH3 className="mt-1 text-white xs:mt-2">{item.title}</ForgeH3>
                <ForgeBody className="mt-2 text-white/70">{item.description}</ForgeBody>
              </div>
            </article>
          </AnimatedContent>
        ))}
      </div>
    </ForgeContainer>
  </ForgeSection>
);

export default ForgeCraft;
