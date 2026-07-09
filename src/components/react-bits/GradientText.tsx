import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type GradientTextProps = {
  children: ReactNode;
  className?: string;
  as?: 'span' | 'p' | 'h1' | 'h2' | 'h3';
};

const GradientText = ({ children, className, as: Tag = 'span' }: GradientTextProps) => (
  <Tag className={cn('bg-prism-band bg-clip-text text-transparent', className)}>{children}</Tag>
);

export default GradientText;
