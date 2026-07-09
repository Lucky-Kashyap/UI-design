import { MERIDIAN_NAV_LINKS } from '@/data/meridianContent';
import { SITE } from '@/data/traditionalGroup';
import { MeridianBody, MeridianContainer } from './ui';
import MeridianLogo from './MeridianLogo';

const MeridianFooter = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="md-footer" role="contentinfo">
      <MeridianContainer className="py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="min-w-0 lg:col-span-4">
            <a
              href="#home"
              aria-label="Traditional Group home"
              className="tg-brand-logo-link md-footer-logo-link inline-flex"
            >
              <MeridianLogo variant="footer" />
            </a>
            <MeridianBody className="mt-5 max-w-sm text-white/70">
              {SITE.name} - a multi-venture collective rooted in Jaipur. Manufacturing, hospitality,
              education, and adventure under one Meridian standard.
            </MeridianBody>
          </div>

          <div className="min-w-0 sm:col-span-1 lg:col-span-3 lg:col-start-6">
            <p className="md-eyebrow text-white/60">Navigation</p>
            <ul className="mt-4 space-y-2.5">
              {MERIDIAN_NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="md-footer-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0 sm:col-span-1 lg:col-span-3">
            <p className="md-eyebrow text-white/60">Connect</p>
            <div className="mt-4 space-y-3">
              <a href={`mailto:${SITE.email}`} className="md-footer-link block break-all">
                {SITE.email}
              </a>
              <a href={SITE.phoneHref} className="md-footer-link block">
                {SITE.phoneDisplay}
              </a>
              <p className="md-body text-white/55">{SITE.address}</p>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              <a
                href={SITE.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="md-footer-social"
                aria-label="Facebook"
              >
                <span className="text-xs font-semibold">FB</span>
              </a>
            </div>
          </div>
        </div>
      </MeridianContainer>

      <div className="border-t border-white/8">
        <MeridianContainer className="flex flex-col items-start justify-between gap-2 py-5 sm:flex-row sm:items-center">
          <p className="md-caption text-white/40">
            &copy; {year} {SITE.name}. All rights reserved.
          </p>
          <p className="md-caption text-white/35">Meridian Atelier</p>
        </MeridianContainer>
      </div>
    </footer>
  );
};

export default MeridianFooter;
