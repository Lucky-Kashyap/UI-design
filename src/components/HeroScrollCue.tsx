import { ChevronDown } from 'lucide-react';

type HeroScrollCueProps = {
  targetId?: string;
  label?: string;
};

const HeroScrollCue = ({
  targetId = 'ventures',
  label = 'Scroll to explore ventures',
}: HeroScrollCueProps) => {
  return (
    <div className="tg-hero-scroll-cue" aria-hidden={false}>
      <a href={`#${targetId}`} className="tg-hero-scroll-cue__btn" aria-label={label}>
        <span className="tg-hero-scroll-cue__pulse" aria-hidden="true" />
        <ChevronDown className="tg-hero-scroll-cue__icon" strokeWidth={2.25} aria-hidden="true" />
      </a>
    </div>
  );
};

export default HeroScrollCue;
