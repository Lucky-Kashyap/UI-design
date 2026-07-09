import SpotlightCard from '@/components/react-bits/SpotlightCard';
import { TESTIMONIALS } from '@/data/traditionalGroup';
import { HorizonBody, HorizonContainer, HorizonEyebrow, HorizonH2, HorizonSection } from './ui';

const HorizonEchoes = () => (
  <HorizonSection className="border-y border-tg-line bg-tg-soft" aria-label="Testimonials">
    <HorizonContainer className="mb-6 xs:mb-8">
      <HorizonEyebrow>Echoes</HorizonEyebrow>
      <HorizonH2 className="mt-2">Stories from partners</HorizonH2>
    </HorizonContainer>
    <HorizonContainer className="grid min-w-0 gap-4 md:grid-cols-2 md:gap-6">
      {TESTIMONIALS.slice(0, 4).map((t) => (
        <SpotlightCard key={t.id}>
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
