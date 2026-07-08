import { motion, useReducedMotion } from 'framer-motion';
import { VENTURES } from '@/data/traditionalGroup';

const SLIDE_DURATION_MS = 6000;
const FADE_DURATION_S = 1.4;

type HeroBackgroundProps = {
  activeIndex: number;
};

const HeroBackground = ({ activeIndex }: HeroBackgroundProps) => {
  const reduce = useReducedMotion() ?? false;

  return (
    <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      {VENTURES.map((venture, index) => {
        const isActive = index === activeIndex;

        return (
          <motion.div
            key={venture.id}
            className="absolute inset-0"
            initial={false}
            animate={{ opacity: isActive ? 1 : 0 }}
            transition={{ duration: reduce ? 0 : FADE_DURATION_S, ease: 'easeInOut' }}
          >
            <motion.div
              className="absolute inset-0"
              initial={false}
              animate={
                reduce || !isActive
                  ? { scale: 1, x: '0%', y: '0%' }
                  : { scale: [1, 1.06, 1.08], x: ['0%', '-1%', '-1.5%'], y: ['0%', '-0.5%', '-1%'] }
              }
              transition={
                reduce || !isActive
                  ? undefined
                  : {
                      duration: SLIDE_DURATION_MS / 1000,
                      ease: 'easeInOut',
                    }
              }
            >
              <img
                src={venture.image}
                alt=""
                className="h-full w-full object-cover"
                fetchPriority={index === 0 ? 'high' : 'low'}
                loading={index === 0 ? 'eager' : 'lazy'}
                decoding="async"
                width={1920}
                height={1080}
              />
            </motion.div>
          </motion.div>
        );
      })}

      <div className="absolute inset-0 bg-gradient-to-t from-tg-deep via-tg-navy/82 to-tg-navy/55" />
      <div className="absolute inset-0 bg-gradient-to-r from-tg-deep/94 via-tg-navy/62 to-tg-deep/45" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-tg-deep/92 via-tg-deep/55 to-transparent pointer-events-none" />
      <div className="absolute inset-0 tg-hero-grain opacity-[0.1]" />

      {!reduce && (
        <>
          <div className="absolute inset-0 tg-scanline opacity-20 pointer-events-none" />
          <div className="absolute inset-0 tg-hero-vignette pointer-events-none" />
          <motion.div
            className="absolute -left-[10vw] top-[18%] h-[38vh] w-[38vh] rounded-full bg-tg-cyan/18 blur-3xl"
            animate={{ x: [0, 24, 0], y: [0, -18, 0], opacity: [0.4, 0.65, 0.4] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute -right-[8vw] bottom-[16%] h-[42vh] w-[42vh] rounded-full bg-tg-gold/14 blur-3xl"
            animate={{ x: [0, -20, 0], y: [0, 14, 0], opacity: [0.35, 0.6, 0.35] }}
            transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
          />
        </>
      )}

      <div className="absolute inset-x-0 bottom-0 h-[10rem] bg-gradient-to-t from-tg-deep via-tg-deep/85 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 h-28 w-28 md:h-40 md:w-40 tg-corner-prism" />
      <div className="absolute top-0 right-0 h-28 w-28 md:h-40 md:w-40 tg-corner-prism scale-x-[-1]" />
    </div>
  );
};

export default HeroBackground;
