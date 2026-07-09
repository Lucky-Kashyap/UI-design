import { useMemo } from 'react';
import AnimatedContent from '@/components/react-bits/AnimatedContent';
import MagicBento from '@/components/react-bits/MagicBento';
import { useTheme } from '@/context/ThemeProvider';
import { VENTURES } from '@/data/traditionalGroup';
import { MERIDIAN_VENTURE_MEDIA } from './media';
import { MeridianBody, MeridianContainer, MeridianEyebrow, MeridianH2, MeridianSection } from './ui';

const altById = Object.fromEntries(MERIDIAN_VENTURE_MEDIA.map((item) => [item.id, item.alt])) as Record<string, string>;

const MeridianEcosystem = () => {
  const { theme } = useTheme();
  const ventures = useMemo(() => VENTURES, []);

  const bentoItems = ventures.map((venture, index) => ({
    id: venture.id,
    title: venture.shortName,
    description: venture.description,
    image: venture.image,
    imageAlt: altById[venture.id] ?? venture.name,
    href: venture.href,
    span: (index === 0 ? 'wide' : 'default') as 'wide' | 'default',
  }));

  return (
    <MeridianSection id="ecosystem" className="relative bg-tg-soft" aria-labelledby="ecosystem-heading">
      <div className="absolute inset-x-0 top-0 h-px bg-prism-band opacity-60" aria-hidden="true" />

      <MeridianContainer className="mb-8 xs:mb-10 md:mb-14">
        <AnimatedContent className="max-w-2xl">
          <MeridianEyebrow>Services</MeridianEyebrow>
          <MeridianH2 id="ecosystem-heading" className="mt-2 xs:mt-3">
            Five ventures, one standard
          </MeridianH2>
          <MeridianBody className="mt-3">
            Premium bento grid - hover to explore each operating company in the Meridian ecosystem.
          </MeridianBody>
        </AnimatedContent>
      </MeridianContainer>

      {theme.sections.ventures === 'bento' ? (
        <MeridianContainer>
          <MagicBento items={bentoItems} />
        </MeridianContainer>
      ) : null}
    </MeridianSection>
  );
};

export default MeridianEcosystem;