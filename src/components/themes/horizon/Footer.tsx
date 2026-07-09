import TraditionalGroupLogo from '@/components/TraditionalGroupLogo';
import { SITE } from '@/data/traditionalGroup';
import { HorizonBody, HorizonContainer } from './ui';

const HorizonFooter = () => (
  <footer className="border-t border-tg-line bg-tg-bg py-10 text-center" role="contentinfo">
    <HorizonContainer>
      <a href="#home" aria-label="Traditional Group home" className="tg-brand-logo-link mx-auto inline-flex">
        <TraditionalGroupLogo priority />
      </a>
      <p className="hz-h3 mt-4 text-tg-ink">{SITE.name}</p>
      <HorizonBody className="mt-2">Horizon Light preview · © {new Date().getFullYear()}</HorizonBody>
    </HorizonContainer>
  </footer>
);

export default HorizonFooter;
