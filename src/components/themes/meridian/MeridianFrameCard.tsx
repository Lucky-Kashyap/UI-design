'use client';

import { cn } from '@/lib/utils';
import type { MERIDIAN_FRAMES } from './media';
import { MeridianBody, MeridianH3, MeridianImage } from './ui';

type MeridianFrame = (typeof MERIDIAN_FRAMES)[number];

const FRAME_ACCENTS = ['cyan', 'violet', 'champagne', 'violet', 'cyan'] as const;

type MeridianFrameCardProps = {
  frame: MeridianFrame;
  index: number;
};

const MeridianFrameCard = ({ frame, index }: MeridianFrameCardProps) => {
  const imageLeft = index % 2 === 0;
  const frameNum = String(index + 1).padStart(2, '0');
  const accent = FRAME_ACCENTS[index % FRAME_ACCENTS.length];

  return (
    <article
      className={cn('md-frame-row relative', imageLeft ? 'md-frame-row--left' : 'md-frame-row--right')}
      data-accent={accent}
    >
      <div
        className={cn(
          'relative z-[1] grid min-w-0 items-center gap-5 xs:gap-6 md:grid-cols-2 md:gap-8 lg:gap-10',
          !imageLeft && 'md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1',
        )}
      >
        <div className="md-frame-visual group min-w-0" data-md-cursor="image">
          <span className="md-frame-index" aria-hidden="true">
            {frameNum}
          </span>
          <div className="md-frame-visual-inner md-card-hover">
            <div className="md-frame-brackets" aria-hidden="true" />
            <MeridianImage
              src={frame.src}
              alt={frame.alt}
              className="md-img-zoom aspect-[16/10] w-full object-cover md:aspect-[5/3]"
              loading="lazy"
              decoding="async"
              width={960}
              height={576}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-tg-deep via-tg-deep/20 to-transparent" />
            <div className="md-frame-strip">
              <span className="md-frame-perf" aria-hidden="true" />
              <div className="flex min-w-0 flex-1 items-center justify-between gap-3">
                <span className="md-caption text-white/45">Frame {frameNum}</span>
                <span className="md-eyebrow text-[0.625rem]">{frame.sector}</span>
              </div>
            </div>
          </div>
        </div>

        <div
          className={cn(
            'md-frame-copy md-card-hover group/copy min-w-0',
            imageLeft ? 'md:pl-2 lg:pl-4' : 'md:pr-2 md:text-right lg:pr-4',
          )}
          data-md-cursor="card"
        >
          <div className="md-frame-copy-glow" aria-hidden="true" />
          <p className={cn('md-frame-sector', !imageLeft && 'md:justify-end')}>{frame.sector}</p>
          <MeridianH3 className="mt-3 text-white">{frame.title}</MeridianH3>
          <MeridianBody className="mt-3 text-white/70">{frame.description}</MeridianBody>
          <div className={cn('md-frame-rule', !imageLeft && 'md:flex-row-reverse')} aria-hidden="true">
            <span className="md-frame-rule-dot" />
          </div>
        </div>
      </div>
    </article>
  );
};

export default MeridianFrameCard;
