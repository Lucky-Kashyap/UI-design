import Logo from '@/components/layout/Logo';
import { cn } from '@/lib/utils';

type MeridianLogoProps = {
  className?: string;
  priority?: boolean;
  variant?: 'nav' | 'footer';
};

const MeridianLogo = ({ className, priority = false, variant = 'nav' }: MeridianLogoProps) => (
  <span
    className={cn(
      'md-logo',
      variant === 'nav' ? 'md-logo--nav' : 'md-logo--footer md-footer-logo',
      className,
    )}
  >
    <span className="md-logo-brand">
      <Logo priority={priority || variant === 'footer'} />
    </span>
  </span>
);

export default MeridianLogo;
