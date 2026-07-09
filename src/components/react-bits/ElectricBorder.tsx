import { type ReactNode } from 'react';
import { cn } from '@/lib/utils';

type ElectricBorderProps = {
  children: ReactNode;
  className?: string;
  color?: string;
};

const ElectricBorder = ({ children, className, color = '#7c3aed' }: ElectricBorderProps) => {
  return (
    <div
      className={cn('relative rounded-tg-pill p-[1px]', className)}
      style={{
        background: `linear-gradient(90deg, ${color}, #06b6d4, #d4a853, ${color})`,
        backgroundSize: '200% 100%',
        animation: 'prism-shift 4s ease infinite',
      }}
    >
      <div className="rounded-tg-pill bg-tg-navy">{children}</div>
    </div>
  );
};

export default ElectricBorder;
