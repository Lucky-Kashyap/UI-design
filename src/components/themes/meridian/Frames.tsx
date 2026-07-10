'use client';

import { MERIDIAN_BG_FRAMES, MERIDIAN_FRAMES } from './media';
import MeridianFrameCard from './MeridianFrameCard';
import MeridianReveal from './MeridianReveal';
import { MeridianBody, MeridianContainer, MeridianEyebrow, MeridianH2, MeridianImage, MeridianSection } from './ui';

const MeridianFrames = () => (
  <MeridianSection id="frames" className="relative overflow-hidden bg-tg-deep text-white" aria-labelledby="frames-heading">
    <div className="md-section-bg" aria-hidden="true">
      <MeridianImage src={MERIDIAN_BG_FRAMES} alt="" loading="lazy" decoding="async" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-b from-tg-deep/80 via-tg-deep/92 to-tg-deep" />
    </div>

    <MeridianContainer className="relative z-[1]">
      <div className="mb-8 xs:mb-10 md:mb-14">
        <MeridianReveal blur className="max-w-2xl">
          <MeridianEyebrow>Gallery</MeridianEyebrow>
          <MeridianH2 id="frames-heading" className="mt-2 text-white xs:mt-3">
            Editorial stills
          </MeridianH2>
          <MeridianBody className="mt-3 text-white/60">
            Cinematic contact sheets in a left-right rhythm — each frame aligned to the Meridian grid.
          </MeridianBody>
        </MeridianReveal>
      </div>

      <div className="relative">
        <div
          className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/10 to-transparent md:block"
          aria-hidden="true"
        />

        <ol className="md-frame-list">
          {MERIDIAN_FRAMES.map((frame, index) => {
            const imageLeft = index % 2 === 0;

            return (
              <li key={frame.id} className="md-frame-list-item">
                <MeridianReveal delay={index * 0.08} direction={imageLeft ? 'left' : 'right'}>
                  <MeridianFrameCard frame={frame} index={index} />
                </MeridianReveal>
              </li>
            );
          })}
        </ol>
      </div>
    </MeridianContainer>
  </MeridianSection>
);

export default MeridianFrames;
