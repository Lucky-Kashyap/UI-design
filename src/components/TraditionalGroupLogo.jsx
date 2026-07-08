import React from 'react';
import { SITE } from '@/data/traditionalGroup';
import { cn } from '@/lib/utils';

const TraditionalGroupLogo = ({ className, priority = false }) => {
  return (
    <img
      src={SITE.logo}
      alt="Traditional Group"
      width={320}
      height={150}
      decoding={priority ? 'sync' : 'async'}
      loading={priority ? 'eager' : 'lazy'}
      className={cn('h-9 w-auto xs:h-10 sm:h-11 md:h-12 object-contain', className)}
    />
  );
};

export default TraditionalGroupLogo;
