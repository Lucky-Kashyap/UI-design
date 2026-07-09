import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

type SplitTextProps = {
  text: string;
  className?: string;
  wordClassName?: string;
  accentFromIndex?: number;
  accentClassName?: string;
  delay?: number;
  by?: 'words' | 'chars';
};

const SplitText = ({
  text,
  className,
  wordClassName,
  accentFromIndex,
  accentClassName = 'bg-clip-text text-transparent bg-prism-band animate-prism-shift bg-[length:200%_100%]',
  delay = 0,
  by = 'words',
}: SplitTextProps) => {
  const reduce = useReducedMotion() ?? false;
  const parts = by === 'chars' ? text.split('') : text.split(' ');

  if (reduce) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={cn('inline-flex flex-wrap', className)} aria-label={text}>
      {parts.map((part, index) => {
        const isAccent = accentFromIndex !== undefined && index >= accentFromIndex;
        return (
          <motion.span
            key={`${part}-${index}`}
            className={cn(
              'inline-block',
              wordClassName,
              isAccent ? accentClassName : undefined,
              by === 'words' && index < parts.length - 1 && 'mr-[0.28em]',
            )}
            initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{
              duration: 0.55,
              delay: delay + index * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
            aria-hidden="true"
          >
            {part}
            {by === 'chars' && part === ' ' ? '\u00A0' : null}
          </motion.span>
        );
      })}
    </span>
  );
};

export default SplitText;
