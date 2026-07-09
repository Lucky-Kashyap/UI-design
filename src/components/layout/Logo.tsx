import LazyImage from '@/components/ui/LazyImage';
import { SITE } from '@/config/site';
import { cn } from '@/lib/utils';

type LogoProps = {
  className?: string;
  priority?: boolean;
  variant?: 'default' | 'hero' | 'footer';
};

const Logo = ({ className, priority = false, variant = 'default' }: LogoProps) => {
  const image = (
    <LazyImage
      src={SITE.logo}
      alt={SITE.name}
      width={320}
      height={150}
      priority={priority}
      objectFit="contain"
      className={cn(
        'w-auto',
        variant === 'footer' ? 'h-8 sm:h-9' : 'h-8 sm:h-9',
        variant === 'hero' && 'h-7 sm:h-8',
        className,
      )}
    />
  );

  if (variant === 'hero') return <span className="tg-logo-hero">{image}</span>;
  if (variant === 'footer') return image;
  return image;
};

export default Logo;
