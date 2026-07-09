import AnimatedContent from '@/components/react-bits/AnimatedContent';
import { FORGE_LINEAGE } from '@/data/forgeContent';
import { FORGE_LINEAGE_IMAGE } from './media';
import {
  ForgeBody,
  ForgeContainer,
  ForgeEyebrow,
  ForgeH2,
  ForgeImage,
  ForgeSection,
} from './ui';

const ForgeLineage = () => (
  <ForgeSection id="lineage" className="relative overflow-hidden bg-tg-soft" aria-labelledby="lineage-heading">
    <div className="fg-copper-band absolute inset-x-0 top-0" aria-hidden="true" />

    <ForgeContainer className="grid min-w-0 gap-8 xs:gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-14 xl:gap-16">
      <AnimatedContent className="relative min-w-0">
        <div className="relative overflow-hidden rounded-tg-lg border border-tg-gold/25 shadow-xl">
          <ForgeImage
            src={FORGE_LINEAGE_IMAGE}
            alt="Heritage courtyard interior warm light"
            className="aspect-[4/5] w-full object-cover sm:aspect-[5/6] lg:aspect-[4/5]"
            loading="lazy"
            decoding="async"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-tg-deep/40 via-transparent to-transparent"
            aria-hidden="true"
          />
        </div>
        <div
          className="absolute -bottom-4 -right-2 hidden rounded-tg-md border border-tg-gold/30 bg-tg-bg px-4 py-3 shadow-lg sm:block xs:-right-4"
          aria-hidden="true"
        >
          <p className="fg-caption text-tg-gold">{FORGE_LINEAGE.badge.caption}</p>
          <p className="fg-h3 mt-0.5 text-tg-ink">{FORGE_LINEAGE.badge.title}</p>
        </div>
      </AnimatedContent>

      <AnimatedContent delay={0.1} className="min-w-0">
        <ForgeEyebrow>{FORGE_LINEAGE.eyebrow}</ForgeEyebrow>
        <ForgeH2 id="lineage-heading" className="mt-2 xs:mt-3">
          {FORGE_LINEAGE.title}
        </ForgeH2>
        <ForgeBody className="mt-3 xs:mt-4">{FORGE_LINEAGE.intro}</ForgeBody>

        <ol className="fg-timeline mt-6 xs:mt-8">
          {FORGE_LINEAGE.timeline.map((item) => (
            <li key={item.era} className="fg-timeline__item">
              <p className="fg-h3 text-tg-gold">{item.era}</p>
              <ForgeBody className="mt-1 max-w-prose">{item.detail}</ForgeBody>
            </li>
          ))}
        </ol>
      </AnimatedContent>
    </ForgeContainer>
  </ForgeSection>
);

export default ForgeLineage;
