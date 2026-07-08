import { SITE } from '@/data/traditionalGroup';
import { cn } from '@/lib/utils';

type TraditionalGroupLogoProps = {
  className?: string;
  priority?: boolean;
};

const TraditionalGroupLogo = ({ className, priority = false }: TraditionalGroupLogoProps) => {
  return (
    <img
      src={SITE.logo}
      alt="Traditional Group"
      width={320}
      height={150}
      decoding={priority ? 'sync' : 'async'}
      loading={priority ? 'eager' : 'lazy'}
      className={cn('h-8 w-auto xs:h-8 sm:h-9 object-contain', className)}
    />
  );
};

export default TraditionalGroupLogo;
