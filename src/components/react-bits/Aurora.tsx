import { cn } from '@/lib/utils';

type AuroraProps = {
  className?: string;
};

const Aurora = ({ className }: AuroraProps) => {
  return (
    <div className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)} aria-hidden="true">
      <div
        className="absolute -left-1/4 top-0 h-[70%] w-[70%] rounded-full opacity-40 blur-[80px] animate-aurora-drift"
        style={{ background: 'radial-gradient(circle, #7c3aed 0%, transparent 70%)' }}
      />
      <div
        className="absolute -right-1/4 bottom-0 h-[60%] w-[60%] rounded-full opacity-35 blur-[90px] animate-aurora-drift"
        style={{ background: 'radial-gradient(circle, #06b6d4 0%, transparent 70%)', animationDelay: '-6s' }}
      />
      <div
        className="absolute left-1/3 top-1/3 h-[45%] w-[45%] rounded-full opacity-25 blur-[70px] animate-aurora-drift"
        style={{ background: 'radial-gradient(circle, #d4a853 0%, transparent 70%)', animationDelay: '-12s' }}
      />
    </div>
  );
};

export default Aurora;
