import LazyImage from '@/components/ui/LazyImage';
import { SITE } from '@/config/site';
import { BRAND_IMAGES, BRAND_LOGO_SIZE } from '@/lib/images';
import { cn } from '@/lib/utils';

type LogoProps = {
  className?: string;
  priority?: boolean;
  /** hero = white backing on photo backgrounds (navbar over hero only) */
  variant?: 'default' | 'hero' | 'footer';
};

const Logo = ({ className, priority = false, variant = 'default' }: LogoProps) => {
  const image = (
    <LazyImage
      src={BRAND_IMAGES.logoWebp}
      alt={SITE.name}
      width={BRAND_LOGO_SIZE.width}
      height={BRAND_LOGO_SIZE.height}
      priority={priority}
      objectFit="contain"
      className="tg-brand-logo__img"
    />
  );

  if (variant === 'hero' || variant === 'footer') {
    return <span className={cn('tg-logo-hero', className)}>{image}</span>;
  }

  return <span className={cn('tg-brand-logo', className)}>{image}</span>;
};

export default Logo;
