import { SITE } from '@/data/traditionalGroup';
import { cn } from '@/lib/utils';

type TraditionalGroupLogoProps = {
  className?: string;
  priority?: boolean;
  variant?: 'default' | 'hero';
};

const TraditionalGroupLogo = ({
  className,
  priority = false,
  variant = 'default',
}: TraditionalGroupLogoProps) => {
  const image = (
    <img
      src={SITE.logo}
      alt="Traditional Group"
      width={320}
      height={150}
      decoding={priority ? 'sync' : 'async'}
      loading={priority ? 'eager' : 'lazy'}
      className={cn(
        'h-8 w-auto xs:h-8 sm:h-9 object-contain',
        variant === 'hero' && 'h-7 sm:h-8',
        className,
      )}
    />
  );

  if (variant === 'hero') {
    return <span className="tg-logo-hero">{image}</span>;
  }

  return image;
};

export default TraditionalGroupLogo;
