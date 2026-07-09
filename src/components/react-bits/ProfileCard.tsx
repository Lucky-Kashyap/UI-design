import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type ProfileCardProps = {
  image: string;
  imageAlt: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
};

const ProfileCard = ({ image, imageAlt, title, subtitle, children, className }: ProfileCardProps) => (
  <div className={cn('overflow-hidden rounded-tg-xl border border-tg-line bg-tg-bg shadow-sm', className)}>
    <img src={image} alt={imageAlt} className="aspect-[4/3] w-full object-cover" loading="lazy" decoding="async" />
    <div className="p-5 xs:p-6">
      <h3 className="font-display text-xl text-tg-ink">{title}</h3>
      {subtitle && <p className="mt-1 text-sm text-tg-cyan">{subtitle}</p>}
      {children && <div className="mt-3 text-sm text-tg-muted">{children}</div>}
    </div>
  </div>
);

export default ProfileCard;
