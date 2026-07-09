import Logo from '@/components/layout/Logo';
import { cn } from '@/lib/utils';

type MeridianLogoProps = {
  className?: string;
  priority?: boolean;
  variant?: 'nav' | 'footer';
};

const MeridianLogo = ({ className, priority = false, variant = 'nav' }: MeridianLogoProps) => (
  <Logo
    priority={priority || variant === 'footer'}
    className={cn(variant === 'footer' && 'md-footer-logo', className)}
  />
);

export default MeridianLogo;
