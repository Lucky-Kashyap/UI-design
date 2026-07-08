import React from 'react';
import { SITE } from '@/data/traditionalGroup';
import { Facebook, Linkedin, Twitter } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="bg-tg-navy text-white text-xs xs:text-sm">
      <div className="tg-container flex flex-wrap items-center justify-between gap-2 py-2.5">
        <a
          href={`mailto:${SITE.email}`}
          className="hover:text-white/80 transition-colors break-all"
        >
          {SITE.email}
        </a>
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="hidden xs:flex items-center gap-2">
            <a
              href={SITE.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Traditional Group on Facebook"
              className="hover:text-white/80 transition-colors"
            >
              <Facebook className="h-4 w-4" fill="currentColor" />
            </a>
            <a
              href={SITE.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Traditional Group on X"
              className="hover:text-white/80 transition-colors"
            >
              <Twitter className="h-4 w-4" fill="currentColor" />
            </a>
            <a
              href={SITE.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Traditional Group on LinkedIn"
              className="hover:text-white/80 transition-colors"
            >
              <Linkedin className="h-4 w-4" fill="currentColor" />
            </a>
          </div>
          <a href={SITE.phoneHref} className="font-semibold hover:text-white/80 transition-colors">
            {SITE.phoneDisplay}
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
