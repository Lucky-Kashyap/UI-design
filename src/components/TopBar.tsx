import { SITE } from '@/data/traditionalGroup';
import { useScrollPause } from '@/hooks/useScrollPause';
import { cn } from '@/lib/utils';
import { Facebook, Linkedin, Mail, Phone, Twitter } from 'lucide-react';

const SOCIAL_LINKS = [
  { href: SITE.facebook, label: 'Traditional Group on Facebook', Icon: Facebook },
  { href: SITE.facebook, label: 'Traditional Group on X', Icon: Twitter },
  { href: SITE.facebook, label: 'Traditional Group on LinkedIn', Icon: Linkedin },
] as const;

const EmailLink = () => (
  <a
    href={`mailto:${SITE.email}`}
    className="tg-link-hover inline-flex min-w-0 items-center gap-1.5 text-white/85 hover:!text-tg-cyan"
  >
    <Mail className="h-3 w-3 shrink-0 text-tg-cyan/90 sm:h-3.5 sm:w-3.5" aria-hidden="true" />
    <span className="truncate">{SITE.email}</span>
  </a>
);

const PhoneLink = ({ className }: { className?: string }) => (
  <a
    href={SITE.phoneHref}
    className={cn(
      'tg-link-hover inline-flex shrink-0 items-center gap-1.5 text-white/90 hover:!text-tg-amber',
      className,
    )}
  >
    <Phone className="h-3 w-3 shrink-0 text-tg-amber/90 sm:h-3.5 sm:w-3.5" aria-hidden="true" />
    <span className="whitespace-nowrap">{SITE.phoneDisplay}</span>
  </a>
);

const SocialLinks = () => (
  <div className="flex shrink-0 items-center gap-0.5 sm:gap-1">
    {SOCIAL_LINKS.map(({ href, label, Icon }) => (
      <a
        key={label}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="tg-icon-btn tg-icon-btn--light h-6 w-6 text-white/75 sm:h-7 sm:w-7"
      >
        <Icon className="h-2.5 w-2.5 sm:h-3 sm:w-3" fill="currentColor" />
      </a>
    ))}
  </div>
);

const TopBar = () => {
  const { showTopBar } = useScrollPause();

  return (
    <div
      className={cn(
        'max-lg:hidden tg-topbar text-white text-topbar transition-all duration-500 ease-tg',
        showTopBar
          ? 'tg-topbar--visible max-h-none opacity-100 bg-tg-navy border-b border-white/10'
          : 'tg-topbar--hidden max-h-0 opacity-0 pointer-events-none',
      )}
      aria-hidden={!showTopBar}
    >
      <div className="tg-container min-w-0">
        {/* Mobile: email + social on row 1, phone centered on row 2 */}
        <div className="flex flex-col gap-1.5 sm:hidden">
          <div className="flex min-w-0 items-center justify-between gap-2">
            <EmailLink />
            <SocialLinks />
          </div>
          <PhoneLink className="w-full justify-center" />
        </div>

        {/* Desktop: email left, social + phone right */}
        <div className="hidden min-w-0 items-center justify-between gap-3 sm:flex">
          <EmailLink />
          <div className="flex shrink-0 items-center gap-2.5 md:gap-3">
            <SocialLinks />
            <PhoneLink />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
