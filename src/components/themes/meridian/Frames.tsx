import AnimatedContent from '@/components/react-bits/AnimatedContent';
import Masonry from '@/components/react-bits/Masonry';
import TiltedCard from '@/components/react-bits/TiltedCard';
import { MERIDIAN_FRAMES } from '@/data/themeMedia';

const MeridianFrames = () => (
  <section
    id="frames"
    className="scroll-mt-[var(--tg-header-offset,5.5rem)] bg-tg-deep py-12 text-white xxs:py-14 xs:py-16 md:py-20 lg:py-24"
    aria-labelledby="frames-heading"
  >
    <div className="tg-container mb-8 min-w-0 xs:mb-10 md:mb-14">
      <AnimatedContent className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-tg-cyan">Gallery</p>
        <h2 id="frames-heading" className="mt-2 font-display text-[clamp(1.75rem,6vw,3.25rem)] text-white xs:mt-3">
          Editorial stills
        </h2>
        <p className="mt-3 text-sm text-white/60 xs:text-base">
          Masonry gallery with tilt interactions — each frame a distinct moment across our ventures.
        </p>
      </AnimatedContent>
    </div>

    <div className="tg-container">
      <Masonry columns={2}>
        {MERIDIAN_FRAMES.map((frame, index) => (
          <AnimatedContent key={frame.id} delay={index * 0.06}>
            <TiltedCard>
              <img src={frame.src} alt={frame.alt} className="w-full object-cover" loading="lazy" decoding="async" />
              <div className="p-4 xs:p-5">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-tg-cyan xs:text-xs">{frame.sector}</p>
                <h3 className="mt-2 font-display text-lg text-white xs:text-xl">{frame.title}</h3>
                <p className="mt-2 text-sm text-white/70">{frame.description}</p>
              </div>
            </TiltedCard>
          </AnimatedContent>
        ))}
      </Masonry>
    </div>
  </section>
);

export default MeridianFrames;
