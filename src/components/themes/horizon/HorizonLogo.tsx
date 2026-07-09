import Logo from '@/components/layout/Logo';
import { cn } from '@/lib/utils';

type HorizonLogoProps = {
  className?: string;
  priority?: boolean;
  /** hero = nav over photography; solid = light nav bar or footer */
  surface?: 'hero' | 'solid';
};

const HorizonLogo = ({ className, priority = false, surface = 'solid' }: HorizonLogoProps) => (
  <span className={cn('hz-logo hz-logo--nav', className)}>
    <span className={surface === 'hero' ? 'hz-logo-hero' : 'hz-logo-brand'}>
      <Logo priority={priority} />
    </span>
  </span>
);

export default HorizonLogo;
