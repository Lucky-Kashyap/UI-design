import TraditionalGroupLogo from '@/components/TraditionalGroupLogo';
import { SITE } from '@/data/traditionalGroup';
import { ForgeBody, ForgeContainer } from './ui';

const ForgeFooter = () => (
  <footer className="border-t border-tg-gold/20 bg-tg-deep py-8 text-center text-white/60" role="contentinfo">
    <ForgeContainer>
      <a href="#home" aria-label="Traditional Group home" className="mx-auto inline-block transition-transform hover:scale-[1.02]">
        <TraditionalGroupLogo variant="footer" />
      </a>
      <p className="fg-h3 mt-4 text-tg-gold">{SITE.name}</p>
      <ForgeBody className="mt-1">Copper Forge preview · © {new Date().getFullYear()}</ForgeBody>
    </ForgeContainer>
  </footer>
);

export default ForgeFooter;
