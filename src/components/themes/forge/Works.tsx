import { useMemo } from 'react';
import { ArrowUpRight } from 'lucide-react';
import AnimatedContent from '@/components/react-bits/AnimatedContent';
import { FORGE_WORKS_INTRO } from '@/data/forgeContent';
import { mergeVentureMedia } from '@/lib/themeVentures';
import { cn } from '@/lib/utils';
import { FORGE_WORKS_MEDIA } from './media';
import {
  ForgeBody,
  ForgeContainer,
  ForgeEyebrow,
  ForgeH2,
  ForgeH3,
  ForgeImage,
  ForgeSection,
} from './ui';

const ForgeWorks = () => {
  const ventures = useMemo(() => mergeVentureMedia(FORGE_WORKS_MEDIA), []);

  return (
    <ForgeSection id="works" className="bg-tg-bg" aria-labelledby="works-heading">
      <ForgeContainer className="mb-8 xs:mb-10 md:mb-14">
        <AnimatedContent className="max-w-2xl">
          <ForgeEyebrow>Works</ForgeEyebrow>
          <ForgeH2 id="works-heading" className="mt-2 xs:mt-3">
            Forged across sectors
          </ForgeH2>
          <ForgeBody className="mt-3 xs:mt-4">{FORGE_WORKS_INTRO}</ForgeBody>
        </AnimatedContent>
      </ForgeContainer>

      <div className="space-y-12 xs:space-y-14 md:space-y-20">
        {ventures.map((venture, index) => {
          const imageLeft = index % 2 === 0;
          const media = FORGE_WORKS_MEDIA[index];

          return (
            <AnimatedContent key={venture.id} delay={index * 0.06}>
              <article
                className={cn(
                  'fg-container grid min-w-0 items-center gap-6 xs:gap-8 md:gap-10 lg:grid-cols-2 lg:gap-14',
                  !imageLeft && 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1',
                )}
              >
                <a
                  href={venture.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block overflow-hidden rounded-tg-lg border border-tg-line shadow-md xs:rounded-tg-xl"
                >
                  <ForgeImage
                    src={venture.image}
                    alt={media?.alt ?? venture.name}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] lg:aspect-[5/4]"
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="absolute left-3 top-3 rounded-tg-md bg-tg-deep/80 px-2.5 py-1 font-display text-lg text-tg-gold backdrop-blur-sm xs:left-4 xs:top-4 xs:px-3 xs:text-xl">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </a>

                <div className="min-w-0 px-0.5 lg:px-2">
                  <p className="fg-caption text-tg-gold">{venture.sector}</p>
                  <div className="mt-2 flex items-start justify-between gap-3 xs:mt-3">
                    <ForgeH3>{venture.shortName}</ForgeH3>
                    <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-tg-muted" aria-hidden="true" />
                  </div>
                  <ForgeBody className="mt-3">{venture.description}</ForgeBody>
                  <a
                    href={venture.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fg-body mt-5 inline-flex items-center gap-1.5 font-semibold text-tg-gold transition-colors hover:text-tg-gold-light"
                  >
                    Explore venture
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            </AnimatedContent>
          );
        })}
      </div>
    </ForgeSection>
  );
};

export default ForgeWorks;
