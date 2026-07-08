import { useCallback, useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { VENTURES, type Venture } from '@/data/traditionalGroup';
import { cn } from '@/lib/utils';

const AUTO_INTERVAL_MS = 2500;
const MANUAL_PAUSE_MS = 5000;
const HOVER_RESUME_MS = 2000;

const GRADIENT_BY_ID: Record<string, string> = {
  gallery: 'from-tg-amber/90 via-tg-coral/80 to-tg-amber/70',
  haveli: 'from-tg-cyan/90 via-tg-emerald/75 to-tg-cyan/70',
  sas: 'from-tg-emerald/90 via-tg-cyan/75 to-tg-emerald/70',
  kindori: 'from-tg-coral/90 via-tg-amber/75 to-tg-coral/70',
  leopard: 'from-tg-emerald/85 via-tg-amber/70 to-tg-coral/80',
};

const isIOSDevice = (): boolean =>
  typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);

const HeroVenturePicker = () => {
  const reduce = useReducedMotion() ?? false;
  const ventures: Venture[] = VENTURES;
  const [selected, setSelected] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const pauseTimerRef = useRef<number | null>(null);
  const resumeTimerRef = useRef<number | null>(null);
  const showShimmer = !reduce && !isIOSDevice();

  const clearTimers = useCallback(() => {
    if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying || reduce || ventures.length === 0) return undefined;

    const id = window.setInterval(() => {
      setSelected((prev) => (prev + 1) % ventures.length);
    }, AUTO_INTERVAL_MS);

    return () => window.clearInterval(id);
  }, [isAutoPlaying, reduce, ventures.length]);

  useEffect(() => () => clearTimers(), [clearTimers]);

  const handleManualSelect = (index: number) => {
    setSelected(index);
    setIsAutoPlaying(false);
    clearTimers();
    pauseTimerRef.current = window.setTimeout(() => setIsAutoPlaying(true), MANUAL_PAUSE_MS);
  };

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
  };

  const handleMouseLeave = () => {
    clearTimers();
    resumeTimerRef.current = window.setTimeout(() => setIsAutoPlaying(true), HOVER_RESUME_MS);
  };

  return (
    <motion.div
      className="tg-venture-glass w-full lg:max-w-venture-panel lg:shrink-0"
      initial={reduce ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ul className="flex flex-col gap-[var(--tg-venture-gap)]">
        {ventures.map((venture, index) => {
          const active = selected === index;
          const gradient = GRADIENT_BY_ID[venture.id] ?? 'from-white/20 to-white/10';

          return (
            <li key={venture.id}>
              <motion.button
                type="button"
                onClick={() => handleManualSelect(index)}
                className={cn(
                  'tg-venture-chip relative w-full text-left',
                  active && 'tg-venture-chip--active',
                )}
                whileHover={reduce ? undefined : { scale: 1.015, x: 2 }}
                whileTap={reduce ? undefined : { scale: 0.985 }}
                aria-pressed={active}
              >
                <span
                  className={cn(
                    'absolute inset-0 rounded-[inherit] transition-opacity duration-300',
                    active
                      ? `bg-gradient-to-r ${gradient} opacity-100`
                      : 'bg-white/5 opacity-100',
                  )}
                  aria-hidden="true"
                />
                {active && showShimmer && (
                  <span className="tg-venture-shimmer absolute inset-0 rounded-[inherit]" aria-hidden="true" />
                )}
                <span className="relative z-[1] flex items-center justify-between gap-2">
                  <span className="font-display text-venture-chip leading-tight text-white">
                    {venture.shortName}
                  </span>
                  {active && (
                    <span
                      className="h-1.5 w-1.5 shrink-0 rounded-full bg-white shadow-[0_0_0.5rem_rgba(255,255,255,0.85)]"
                      aria-hidden="true"
                    />
                  )}
                </span>
              </motion.button>
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
};

export default HeroVenturePicker;
