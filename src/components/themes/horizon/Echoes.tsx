import SpotlightCard from '@/components/react-bits/SpotlightCard';
import { TESTIMONIALS } from '@/data/traditionalGroup';
import { HORIZON_BG_ECHOES } from './media';
import { HorizonBody, HorizonContainer, HorizonEyebrow, HorizonH2, HorizonSection, HorizonSectionBg } from './ui';

const HorizonEchoes = () => (
  <HorizonSection className="relative overflow-hidden border-y border-tg-line bg-tg-soft" aria-label="Testimonials">
    <HorizonSectionBg src={HORIZON_BG_ECHOES} overlay="warm" />

    <HorizonContainer className="relative z-[1] mb-6 xs:mb-8">
      <HorizonEyebrow>Echoes</HorizonEyebrow>
      <HorizonH2 className="mt-2">Stories from partners</HorizonH2>
    </HorizonContainer>
    <HorizonContainer className="relative z-[1] grid min-w-0 gap-4 md:grid-cols-2 md:gap-6">
      {TESTIMONIALS.slice(0, 4).map((t) => (
        <SpotlightCard key={t.id} className="border-tg-line/80 bg-tg-bg/80 backdrop-blur-sm">
          <p className="hz-h2 leading-none text-tg-cyan/40">&ldquo;</p>
          <blockquote className="hz-body mt-2 text-tg-muted">{t.quote}</blockquote>
          <p className="hz-body mt-3 font-semibold text-tg-ink xs:mt-4">{t.name}</p>
          <p className="hz-caption mt-1 text-tg-muted">{t.role}</p>
        </SpotlightCard>
      ))}
    </HorizonContainer>
  </HorizonSection>
);

export default HorizonEchoes;
