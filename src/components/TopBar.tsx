import { SITE } from '@/data/traditionalGroup';
import { useScrollPause } from '@/hooks/useScrollPause';
import { cn } from '@/lib/utils';
import { Facebook, Linkedin, Mail, Phone, Twitter } from 'lucide-react';

const TopBar = () => {
  const { showTopBar } = useScrollPause();

  return (
    <div
      className={cn(
        'tg-topbar text-white text-topbar leading-none transition-all duration-500 ease-tg',
        showTopBar
          ? 'tg-topbar--visible max-h-16 opacity-100 bg-tg-navy border-b border-white/10'
          : 'tg-topbar--hidden max-h-0 opacity-0 pointer-events-none',
      )}
      aria-hidden={!showTopBar}
    >
      <div className="tg-container flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
        <a
          href={`mailto:${SITE.email}`}
          className="tg-link-hover inline-flex items-center gap-1.5 text-white/85 hover:!text-tg-cyan break-all"
        >
          <Mail className="h-3.5 w-3.5 shrink-0 text-tg-cyan/90" aria-hidden="true" />
          <span>{SITE.email}</span>
        </a>
        <div className="flex items-center gap-2.5 sm:gap-3">
          <div className="hidden xs:flex items-center gap-1">
            <a
              href={SITE.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Traditional Group on Facebook"
              className="tg-icon-btn tg-icon-btn--light h-7 w-7 text-white/75"
            >
              <Facebook className="h-3 w-3" fill="currentColor" />
            </a>
            <a
              href={SITE.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Traditional Group on X"
              className="tg-icon-btn tg-icon-btn--light h-7 w-7 text-white/75"
            >
              <Twitter className="h-3 w-3" fill="currentColor" />
            </a>
            <a
              href={SITE.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Traditional Group on LinkedIn"
              className="tg-icon-btn tg-icon-btn--light h-7 w-7 text-white/75"
            >
              <Linkedin className="h-3 w-3" fill="currentColor" />
            </a>
          </div>
          <a
            href={SITE.phoneHref}
            className="tg-link-hover inline-flex items-center gap-1.5 font-semibold text-white/90 hover:!text-tg-amber"
          >
            <Phone className="h-3.5 w-3.5 shrink-0 text-tg-amber/90" aria-hidden="true" />
            <span>{SITE.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
