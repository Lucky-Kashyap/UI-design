import TraditionalGroupLogo from '@/components/TraditionalGroupLogo';
import { SITE } from '@/data/traditionalGroup';

const MeridianFooter = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-tg-line bg-tg-deep py-8 text-white/70" role="contentinfo">
      <div className="tg-container flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex min-w-0 flex-col gap-4 sm:flex-row sm:items-center">
          <a href="#home" aria-label="Traditional Group home" className="shrink-0 transition-transform hover:scale-[1.02]">
            <TraditionalGroupLogo variant="footer" />
          </a>
          <p className="max-w-xs text-sm">
            Meridian Atelier preview — {SITE.name} multi-venture collective, Jaipur.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm">
          <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-white">
            Facebook
          </a>
          <a href={`mailto:${SITE.email}`} className="hover:text-white">
            {SITE.email}
          </a>
          <span className="text-white/40">© {year} {SITE.name}</span>
        </div>
      </div>
    </footer>
  );
};

export default MeridianFooter;
