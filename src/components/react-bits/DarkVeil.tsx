import { cn } from '@/lib/utils';

type DarkVeilProps = {
  className?: string;
};

const DarkVeil = ({ className }: DarkVeilProps) => {
  return (
    <div
      className={cn(
        'pointer-events-none absolute inset-0 bg-gradient-to-t from-tg-deep via-tg-navy/75 to-tg-navy/40',
        className,
      )}
      aria-hidden="true"
    />
  );
};

export default DarkVeil;
