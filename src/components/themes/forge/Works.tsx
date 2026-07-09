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

const BENTO_LAYOUT = ['featured', 'side', 'side', 'half', 'half'] as const;

const ForgeWorks = () => {
  const ventures = useMemo(() => mergeVentureMedia(FORGE_WORKS_MEDIA), []);

  return (
    <ForgeSection id="works" className="bg-tg-bg" aria-labelledby="works-heading">
      <ForgeContainer className="mb-8 xs:mb-10 md:mb-12">
        <AnimatedContent className="max-w-2xl">
          <ForgeEyebrow>Works</ForgeEyebrow>
          <ForgeH2 id="works-heading" className="mt-2 xs:mt-3">
            Forged across sectors
          </ForgeH2>
          <ForgeBody className="mt-3 xs:mt-4">{FORGE_WORKS_INTRO}</ForgeBody>
        </AnimatedContent>
      </ForgeContainer>

      <ForgeContainer>
        <div className="fg-works-bento">
          {ventures.map((venture, index) => {
            const media = FORGE_WORKS_MEDIA[index];
            const layout = BENTO_LAYOUT[index] ?? 'half';
            const isFeatured = layout === 'featured';
            const isOverlay = isFeatured || layout === 'side';

            return (
              <AnimatedContent
                key={venture.id}
                delay={index * 0.06}
                className={cn(
                  layout === 'featured' && 'fg-works-bento__featured',
                  layout === 'side' && 'fg-works-bento__side',
                  layout === 'half' && 'fg-works-bento__half',
                )}
              >
                <a
                  href={venture.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    'fg-venture-card group',
                    isOverlay && 'fg-venture-card--overlay',
                    isFeatured && 'min-h-[20rem] sm:min-h-[24rem] lg:min-h-[28rem]',
                  )}
                >
                  <div
                    className={cn(
                      'fg-venture-card__media',
                      isOverlay ? 'absolute inset-0' : 'relative aspect-[16/10] sm:aspect-[5/3]',
                    )}
                  >
                    <ForgeImage
                      src={venture.image}
                      alt={media?.alt ?? venture.name}
                      className="h-full w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                    {isOverlay && <div className="fg-venture-card__overlay" aria-hidden="true" />}
                    <span className="absolute left-3 top-3 z-10 rounded-tg-md bg-tg-deep/80 px-2.5 py-1 font-display text-lg text-tg-gold backdrop-blur-sm xs:left-4 xs:top-4 xs:px-3 xs:text-xl">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <div className={cn('fg-venture-card__body', isFeatured && 'mt-auto')}>
                    <p className="fg-caption text-tg-gold">{venture.sector}</p>
                    <div className="mt-1 flex items-start justify-between gap-3 xs:mt-2">
                      <ForgeH3 className={isOverlay ? 'text-white' : undefined}>{venture.shortName}</ForgeH3>
                      <ArrowUpRight
                        className={cn('mt-1 h-5 w-5 shrink-0', isOverlay ? 'text-tg-gold' : 'text-tg-muted')}
                        aria-hidden="true"
                      />
                    </div>
                    <ForgeBody className={cn('mt-2 line-clamp-2 xs:mt-3', isOverlay && 'text-white/75')}>
                      {venture.description}
                    </ForgeBody>
                    {!isOverlay && (
                      <span className="fg-body mt-4 inline-flex items-center gap-1.5 font-semibold text-tg-gold transition-colors group-hover:text-tg-gold-light">
                        Explore venture
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    )}
                  </div>
                </a>
              </AnimatedContent>
            );
          })}
        </div>
      </ForgeContainer>
    </ForgeSection>
  );
};

export default ForgeWorks;
