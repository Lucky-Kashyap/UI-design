'use client';

import { useMemo } from 'react';
import { useTheme } from '@/context/ThemeProvider';
import { VENTURES } from '@/data/traditionalGroup';
import MeridianBento from './MeridianBento';
import MeridianReveal from './MeridianReveal';
import { MERIDIAN_BG_ECOSYSTEM, MERIDIAN_VENTURE_MEDIA } from './media';
import { MeridianBody, MeridianContainer, MeridianEyebrow, MeridianH2, MeridianImage, MeridianSection } from './ui';

const MeridianEcosystem = () => {
  const { theme } = useTheme();

  const bentoItems = useMemo(
    () =>
      MERIDIAN_VENTURE_MEDIA.map((media) => {
        const venture = VENTURES.find((v) => v.id === media.id);
        if (!venture) throw new Error(`Unknown venture id: ${media.id}`);

        return {
          id: media.id,
          title: venture.shortName,
          description: venture.description,
          image: media.image,
          imageAlt: media.alt,
          href: venture.href,
        };
      }),
    [],
  );

  return (
    <MeridianSection id="ecosystem" className="relative overflow-hidden bg-tg-soft" aria-labelledby="ecosystem-heading">
      <div className="md-section-bg" aria-hidden="true">
        <MeridianImage src={MERIDIAN_BG_ECOSYSTEM} alt="" loading="lazy" decoding="async" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-tg-soft via-tg-soft/95 to-tg-soft" />
      </div>

      <div className="absolute inset-x-0 top-0 z-[1] h-px bg-prism-band opacity-60" aria-hidden="true" />

      <MeridianContainer className="relative z-[2] mb-8 xs:mb-10 md:mb-14">
        <MeridianReveal blur className="max-w-2xl">
          <MeridianEyebrow>Services</MeridianEyebrow>
          <MeridianH2 id="ecosystem-heading" className="mt-2 xs:mt-3">
            Five ventures, one standard
          </MeridianH2>
          <MeridianBody className="mt-3">
            Premium bento grid - hover to explore each operating company in the Meridian ecosystem.
          </MeridianBody>
        </MeridianReveal>
      </MeridianContainer>

      {theme.sections.ventures === 'bento' ? (
        <MeridianContainer className="relative z-[2]">
          <MeridianBento items={bentoItems} />
        </MeridianContainer>
      ) : null}
    </MeridianSection>
  );
};

export default MeridianEcosystem;
