import { useMemo } from 'react';
import AnimatedContent from '@/components/react-bits/AnimatedContent';
import MagicBento from '@/components/react-bits/MagicBento';
import { useTheme } from '@/context/ThemeProvider';
import { MERIDIAN_VENTURE_MEDIA } from '@/data/themeMedia';
import { mergeVentureMedia } from '@/lib/themeVentures';

const MeridianEcosystem = () => {
  const { theme } = useTheme();
  const ventures = useMemo(() => mergeVentureMedia(MERIDIAN_VENTURE_MEDIA), []);

  const bentoItems = ventures.map((venture, index) => ({
    id: venture.id,
    title: venture.shortName,
    description: venture.description,
    image: venture.image,
    imageAlt: MERIDIAN_VENTURE_MEDIA[index]?.alt ?? venture.name,
    href: venture.href,
    span: (index === 0 ? 'wide' : 'default') as 'wide' | 'default',
  }));

  return (
    <section
      id="ecosystem"
      className="relative scroll-mt-[var(--tg-header-offset,5.5rem)] bg-tg-soft py-12 xxs:py-14 xs:py-16 md:py-20 lg:py-24"
      aria-labelledby="ecosystem-heading"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-prism-band opacity-60" aria-hidden="true" />

      <div className="tg-container mb-8 min-w-0 xs:mb-10 md:mb-14">
        <AnimatedContent className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-tg-cyan">Services</p>
          <h2 id="ecosystem-heading" className="mt-2 font-display text-[clamp(1.75rem,6vw,3.25rem)] text-tg-ink xs:mt-3">
            Five ventures, one standard
          </h2>
          <p className="mt-3 text-sm text-tg-muted xs:text-base">
            Premium bento grid — hover to explore each operating company in the Meridian ecosystem.
          </p>
        </AnimatedContent>
      </div>

      {theme.sections.ventures === 'bento' ? (
        <div className="tg-container">
          <MagicBento items={bentoItems} />
        </div>
      ) : null}
    </section>
  );
};

export default MeridianEcosystem;
