import AnimatedContent from '@/components/react-bits/AnimatedContent';
import Masonry from '@/components/react-bits/Masonry';
import TiltedCard from '@/components/react-bits/TiltedCard';
import { MERIDIAN_FRAMES } from './media';
import { MeridianBody, MeridianContainer, MeridianEyebrow, MeridianH2, MeridianH3, MeridianImage, MeridianSection } from './ui';

const MeridianFrames = () => (
  <MeridianSection id="frames" className="bg-tg-deep text-white" aria-labelledby="frames-heading">
    <MeridianContainer className="mb-8 xs:mb-10 md:mb-14">
      <AnimatedContent className="max-w-2xl">
        <MeridianEyebrow>Gallery</MeridianEyebrow>
        <MeridianH2 id="frames-heading" className="mt-2 text-white xs:mt-3">
          Editorial stills
        </MeridianH2>
        <MeridianBody className="mt-3 text-white/60">
          Masonry gallery with tilt interactions — each frame a distinct moment across our ventures.
        </MeridianBody>
      </AnimatedContent>
    </MeridianContainer>

    <MeridianContainer>
      <Masonry columns={2}>
        {MERIDIAN_FRAMES.map((frame, index) => (
          <AnimatedContent key={frame.id} delay={index * 0.06}>
            <TiltedCard>
              <MeridianImage src={frame.src} alt={frame.alt} className="w-full object-cover" loading="lazy" decoding="async" />
              <div className="p-4 xs:p-5">
                <p className="md-eyebrow">{frame.sector}</p>
                <MeridianH3 className="mt-2 text-white">{frame.title}</MeridianH3>
                <MeridianBody className="mt-2 text-white/70">{frame.description}</MeridianBody>
              </div>
            </TiltedCard>
          </AnimatedContent>
        ))}
      </Masonry>
    </MeridianContainer>
  </MeridianSection>
);

export default MeridianFrames;
