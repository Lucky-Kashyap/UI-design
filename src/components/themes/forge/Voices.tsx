import CardSwap from '@/components/react-bits/CardSwap';
import { TESTIMONIALS } from '@/data/traditionalGroup';
import { FORGE_VOICES } from '@/data/forgeContent';
import { ForgeContainer, ForgeEyebrow, ForgeH2, ForgeSection } from './ui';

const ForgeVoices = () => {
  const items = TESTIMONIALS.map((t) => ({
    id: t.id,
    quote: t.quote,
    name: t.name,
    role: `${t.role} · ${t.venture}`,
  }));

  return (
    <ForgeSection className="border-y border-tg-line bg-tg-bg" aria-label="Testimonial">
      <ForgeContainer className="max-w-3xl text-center">
        <ForgeEyebrow>{FORGE_VOICES.eyebrow}</ForgeEyebrow>
        <ForgeH2 className="mt-2">{FORGE_VOICES.title}</ForgeH2>
        <div className="mt-8 xs:mt-10">
          <CardSwap items={items} />
        </div>
      </ForgeContainer>
    </ForgeSection>
  );
};

export default ForgeVoices;
