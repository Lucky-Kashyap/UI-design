import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type MasonryProps = {
  children: ReactNode;
  className?: string;
  columns?: 2 | 3;
};

const Masonry = ({ children, className, columns = 2 }: MasonryProps) => (
  <div
    className={cn(
      'columns-1 gap-3 xs:gap-4',
      columns === 2 && 'xs:columns-2',
      columns === 3 && 'xs:columns-2 lg:columns-3',
      className,
    )}
  >
    {children}
  </div>
);

export default Masonry;
