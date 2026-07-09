'use client';

import Masonry from '@/components/react-bits/Masonry';
import TiltedCard from '@/components/react-bits/TiltedCard';
import { MERIDIAN_BG_FRAMES, MERIDIAN_FRAMES } from './media';
import MeridianReveal from './MeridianReveal';
import { MeridianBody, MeridianContainer, MeridianEyebrow, MeridianH2, MeridianH3, MeridianImage, MeridianSection } from './ui';

const MeridianFrames = () => (
  <MeridianSection id="frames" className="relative overflow-hidden bg-tg-deep text-white" aria-labelledby="frames-heading">
    <div className="md-section-bg" aria-hidden="true">
      <MeridianImage src={MERIDIAN_BG_FRAMES} alt="" loading="lazy" decoding="async" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-b from-tg-deep/80 via-tg-deep/92 to-tg-deep" />
    </div>

    <MeridianContainer className="relative z-[1] mb-8 xs:mb-10 md:mb-14">
      <MeridianReveal blur className="max-w-2xl">
        <MeridianEyebrow>Gallery</MeridianEyebrow>
        <MeridianH2 id="frames-heading" className="mt-2 text-white xs:mt-3">
          Editorial stills
        </MeridianH2>
        <MeridianBody className="mt-3 text-white/60">
          Masonry gallery with tilt interactions - each frame a distinct moment across our ventures.
        </MeridianBody>
      </MeridianReveal>
    </MeridianContainer>

    <MeridianContainer className="relative z-[1]">
      <Masonry columns={2}>
        {MERIDIAN_FRAMES.map((frame, index) => (
          <MeridianReveal key={frame.id} delay={index * 0.06}>
            <TiltedCard className="md-card-hover border-white/10 bg-tg-bg/40" data-md-cursor="card">
              <div className="overflow-hidden">
                <MeridianImage
                  src={frame.src}
                  alt={frame.alt}
                  className="md-img-zoom aspect-[16/10] w-full object-cover"
                  loading="lazy"
                  decoding="async"
                  width={960}
                  height={600}
                />
              </div>
              <div className="p-4 xs:p-5">
                <p className="md-eyebrow">{frame.sector}</p>
                <MeridianH3 className="mt-2 text-white">{frame.title}</MeridianH3>
                <MeridianBody className="mt-2 text-white/70">{frame.description}</MeridianBody>
              </div>
            </TiltedCard>
          </MeridianReveal>
        ))}
      </Masonry>
    </MeridianContainer>
  </MeridianSection>
);

export default MeridianFrames;
