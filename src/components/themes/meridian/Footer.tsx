import { MERIDIAN_NAV_LINKS } from '@/data/meridianContent';
import TraditionalGroupLogo from '@/components/TraditionalGroupLogo';
import { SITE } from '@/data/traditionalGroup';
import { MeridianBody, MeridianContainer } from './ui';

const MeridianFooter = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-tg-line bg-tg-deep text-white/75" role="contentinfo">
      <MeridianContainer className="py-10 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
          <div className="min-w-0">
            <a
              href="#home"
              aria-label="Traditional Group home"
              className="inline-block transition-transform hover:scale-[1.02]"
            >
              <TraditionalGroupLogo variant="hero" />
            </a>
            <MeridianBody className="mt-4 max-w-sm text-white/72">
              Meridian Atelier preview - {SITE.name} multi-venture collective, Jaipur.
            </MeridianBody>
          </div>

          <div className="min-w-0">
            <p className="md-eyebrow text-white/80">Explore</p>
            <ul className="mt-3 space-y-2">
              {MERIDIAN_NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="md-body text-white/75 transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0">
            <p className="md-eyebrow text-white/80">Connect</p>
            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
              <a
                href={SITE.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="md-body text-white/75 hover:text-white"
              >
                Facebook
              </a>
              <a href={`mailto:${SITE.email}`} className="md-body break-all text-white/75 hover:text-white">
                {SITE.email}
              </a>
            </div>
          </div>
        </div>
      </MeridianContainer>

      <div className="border-t border-white/10">
        <MeridianContainer className="py-4">
          <p className="md-caption text-white/45">© {year} {SITE.name}</p>
        </MeridianContainer>
      </div>
    </footer>
  );
};

export default MeridianFooter;
