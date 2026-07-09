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
  <ForgeSection id="lineage" className="bg-tg-soft" aria-labelledby="lineage-heading">
    <ForgeContainer className="grid min-w-0 gap-8 xs:gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
      <AnimatedContent className="min-w-0 lg:order-2">
        <ForgeImage
          src={FORGE_LINEAGE_IMAGE}
          alt="Heritage courtyard interior warm light"
          className="w-full rounded-tg-lg border border-tg-gold/25 shadow-lg"
          loading="lazy"
          decoding="async"
        />
      </AnimatedContent>

      <AnimatedContent delay={0.1} className="min-w-0 lg:order-1">
        <ForgeEyebrow>Lineage</ForgeEyebrow>
        <ForgeH2 id="lineage-heading" className="mt-2 xs:mt-3">
          Built over generations
        </ForgeH2>
        <ForgeBody className="mt-3 xs:mt-4">
          From a single manufacturing vision to a multi-venture collective — each era added depth without losing the thread of quality.
        </ForgeBody>
        <ol className="mt-6 space-y-5 xs:mt-8 xs:space-y-6">
          {FORGE_LINEAGE.map((item, index) => (
            <li key={item.era} className="flex gap-4 border-l-2 border-tg-gold/40 pl-4 xs:gap-5 xs:pl-6">
              <span className="fg-caption text-tg-gold/70">{String(index + 1).padStart(2, '0')}</span>
              <div>
                <p className="fg-h3 text-tg-gold">{item.era}</p>
                <ForgeBody className="mt-1">{item.detail}</ForgeBody>
              </div>
            </li>
          ))}
        </ol>
      </AnimatedContent>
    </ForgeContainer>
  </ForgeSection>
);

export default ForgeLineage;
