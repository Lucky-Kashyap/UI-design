import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { MeridianImage } from './ui';

type MeridianProfileCardProps = {
  image: string;
  imageAlt: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
};

const MeridianProfileCard = ({
  image,
  imageAlt,
  title,
  subtitle,
  children,
  className,
}: MeridianProfileCardProps) => (
  <div className={cn('overflow-hidden rounded-2xl border border-tg-line bg-tg-bg shadow-sm', className)}>
    <MeridianImage
      src={image}
      alt={imageAlt}
      className="aspect-[4/3] w-full object-cover"
      loading="lazy"
      decoding="async"
      width={1200}
      height={900}
      cursorMode="image"
    />
    <div className="p-5 xs:p-6">
      <h3 className="md-h3 text-tg-ink">{title}</h3>
      {subtitle && <p className="md-body mt-1 font-medium text-tg-cyan">{subtitle}</p>}
      {children && <div className="md-body mt-3 text-tg-muted">{children}</div>}
    </div>
  </div>
);

export default MeridianProfileCard;
