import TraditionalGroupLogo from '@/components/TraditionalGroupLogo';
import { SITE } from '@/data/traditionalGroup';

const ForgeFooter = () => (
  <footer className="border-t border-tg-gold/20 bg-tg-deep py-8 text-center text-sm text-white/60" role="contentinfo">
    <a
      href="#home"
      aria-label="Traditional Group home"
      className="mx-auto inline-block transition-transform hover:scale-[1.02]"
    >
      <TraditionalGroupLogo variant="footer" />
    </a>
    <p className="mt-4 font-display text-tg-gold">{SITE.name}</p>
    <p className="mt-1">Copper Forge preview · © {new Date().getFullYear()}</p>
  </footer>
);

export default ForgeFooter;
