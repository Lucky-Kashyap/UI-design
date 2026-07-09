import { useCallback, useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { VENTURES, type Venture } from '@/data/traditionalGroup';
import { cn } from '@/lib/utils';

const MANUAL_PAUSE_MS = 6000;
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

type HeroVenturePickerProps = {
  selected: number;
  onChange: (index: number) => void;
  onAutoPlayChange: (playing: boolean) => void;
};

const HeroVenturePicker = ({ selected, onChange, onAutoPlayChange }: HeroVenturePickerProps) => {
  const reduce = useReducedMotion() ?? false;
  const ventures: Venture[] = VENTURES;
  const pauseTimerRef = useRef<number | null>(null);
  const resumeTimerRef = useRef<number | null>(null);
  const showShimmer = !reduce && !isIOSDevice();

  const clearTimers = useCallback(() => {
    if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
  }, []);

  useEffect(() => () => clearTimers(), [clearTimers]);

  const handleFocus = (index: number) => {
    onChange(index);
    onAutoPlayChange(false);
    clearTimers();
    pauseTimerRef.current = window.setTimeout(() => onAutoPlayChange(true), MANUAL_PAUSE_MS);
  };

  const handleMouseEnter = () => {
    onAutoPlayChange(false);
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
  };

  const handleMouseLeave = () => {
    clearTimers();
    resumeTimerRef.current = window.setTimeout(() => onAutoPlayChange(true), HOVER_RESUME_MS);
  };

  return (
    <motion.nav
      className="tg-venture-glass w-full"
      aria-label="Traditional Group ventures"
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
              <motion.a
                href="#ventures"
                className={cn(
                  'tg-venture-chip group/chip relative flex w-full items-center text-left',
                  active && 'tg-venture-chip--active',
                )}
                onMouseEnter={() => handleFocus(index)}
                onFocus={() => handleFocus(index)}
                whileHover={reduce ? undefined : { scale: 1.015, x: 2 }}
                whileTap={reduce ? undefined : { scale: 0.985 }}
                aria-current={active ? 'true' : undefined}
                aria-label={`View ${venture.shortName} — ${venture.sector}`}
              >
                <span
                  className={cn(
                    'absolute inset-0 rounded-[inherit] transition-opacity duration-500',
                    active
                      ? `bg-gradient-to-r ${gradient} opacity-100`
                      : 'bg-white/5 opacity-100',
                  )}
                  aria-hidden="true"
                />
                {active && showShimmer && (
                  <span className="tg-venture-shimmer absolute inset-0 rounded-[inherit]" aria-hidden="true" />
                )}
                <span className="relative z-[1] flex w-full items-center justify-between gap-2">
                  <span className="font-display text-venture-chip leading-tight">{venture.shortName}</span>
                  <ArrowUpRight
                    className="h-3.5 w-3.5 shrink-0 text-white/50 transition-all duration-300 group-hover/chip:text-white group-hover/chip:translate-x-0.5 group-hover/chip:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </span>
              </motion.a>
            </li>
          );
        })}
      </ul>
    </motion.nav>
  );
};

export default HeroVenturePicker;
