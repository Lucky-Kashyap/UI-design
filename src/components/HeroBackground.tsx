import { motion, useReducedMotion } from 'framer-motion';
import { HERO } from '@/data/traditionalGroup';

const HeroBackground = () => {
  const reduce = useReducedMotion() ?? false;

  return (
    <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      <motion.div
        className="absolute inset-0"
        initial={false}
        animate={
          reduce
            ? undefined
            : {
                scale: [1, 1.06, 1.04, 1.08],
                x: ['0%', '-1.5%', '-0.5%', '-2%'],
                y: ['0%', '-0.5%', '-1%', '-1.2%'],
              }
        }
        transition={
          reduce
            ? undefined
            : {
                duration: 28,
                repeat: Infinity,
                repeatType: 'mirror',
                ease: 'easeInOut',
              }
        }
      >
        <img
          src={HERO.backgroundImage}
          alt=""
          className="h-full w-full object-cover"
          fetchPriority="high"
          loading="eager"
          decoding="async"
          width={1920}
          height={1080}
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-tg-deep via-tg-navy/72 to-tg-navy/38" />
      <div className="absolute inset-0 bg-gradient-to-r from-tg-deep/88 via-tg-navy/48 to-tg-deep/32" />
      <div className="absolute inset-0 tg-hero-grain opacity-[0.14]" />

      {!reduce && (
        <>
          <div className="absolute inset-0 tg-scanline opacity-30 pointer-events-none" />
          <div className="absolute inset-0 tg-hero-sweep pointer-events-none" />
          <div className="absolute inset-0 tg-hero-vignette pointer-events-none" />
          <motion.div
            className="absolute -left-[10vw] top-[18%] h-[38vh] w-[38vh] rounded-full bg-tg-cyan/22 blur-3xl"
            animate={{ x: [0, 24, 0], y: [0, -18, 0], opacity: [0.5, 0.75, 0.5] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute -right-[8vw] bottom-[16%] h-[42vh] w-[42vh] rounded-full bg-tg-amber/18 blur-3xl"
            animate={{ x: [0, -20, 0], y: [0, 14, 0], opacity: [0.45, 0.7, 0.45] }}
            transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
          />
          <div className="tg-hero-dust absolute inset-0 pointer-events-none" />
        </>
      )}

      <div className="absolute inset-x-0 bottom-0 h-[9rem] bg-gradient-to-t from-tg-deep via-tg-deep/80 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 h-28 w-28 md:h-40 md:w-40 tg-corner-prism" />
      <div className="absolute top-0 right-0 h-28 w-28 md:h-40 md:w-40 tg-corner-prism scale-x-[-1]" />
    </div>
  );
};

export default HeroBackground;
