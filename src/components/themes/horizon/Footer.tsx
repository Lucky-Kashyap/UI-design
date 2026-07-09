import TraditionalGroupLogo from '@/components/TraditionalGroupLogo';
import { SITE } from '@/data/traditionalGroup';

const HorizonFooter = () => (
  <footer className="border-t border-tg-line bg-tg-bg py-10 text-center text-sm text-tg-muted" role="contentinfo">
    <a
      href="#home"
      aria-label="Traditional Group home"
      className="mx-auto inline-block transition-transform hover:scale-[1.02]"
    >
      <TraditionalGroupLogo variant="footer" />
    </a>
    <p className="mt-4 font-display text-lg text-tg-ink">{SITE.name}</p>
    <p className="mt-2">Horizon Light preview · © {new Date().getFullYear()}</p>
  </footer>
);

export default HorizonFooter;
