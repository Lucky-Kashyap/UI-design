import { Mail, MapPin, Phone } from 'lucide-react';
import AnimatedContent from '@/components/react-bits/AnimatedContent';
import { SITE } from '@/data/traditionalGroup';
import { FORGE_VISIT_BG } from './media';
import { ForgeBody, ForgeContainer, ForgeEyebrow, ForgeH2, ForgeImage, ForgeSection } from './ui';

const ForgeVisit = () => (
  <ForgeSection id="visit" aria-labelledby="visit-heading">
    <ForgeContainer>
      <div className="fg-visit-panel">
        <div className="fg-visit-panel__bg" aria-hidden="true">
          <ForgeImage src={FORGE_VISIT_BG} alt="" loading="lazy" decoding="async" />
        </div>

        <AnimatedContent className="fg-visit-panel__content grid min-w-0 gap-8 p-5 xs:gap-10 xs:p-8 md:grid-cols-2 md:p-12 lg:gap-14">
          <div className="min-w-0">
            <ForgeEyebrow>Visit</ForgeEyebrow>
            <ForgeH2 id="visit-heading" className="mt-2 xs:mt-3">
              Visit the hearth
            </ForgeH2>
            <ForgeBody className="mt-4 max-w-md">
              Walk in, call, or write — we welcome conversations about ventures, partnerships, and stays.
            </ForgeBody>
          </div>

          <div className="grid min-w-0 gap-3 xs:gap-4">
            <a href={SITE.phoneHref} className="fg-contact-chip">
              <Phone className="h-5 w-5 shrink-0 text-tg-gold" aria-hidden="true" />
              <span className="fg-body font-medium text-tg-ink">{SITE.phoneDisplay}</span>
            </a>
            <a href={`mailto:${SITE.email}`} className="fg-contact-chip">
              <Mail className="h-5 w-5 shrink-0 text-tg-gold" aria-hidden="true" />
              <span className="fg-body break-all font-medium text-tg-ink">{SITE.email}</span>
            </a>
            <div className="fg-contact-chip items-start">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-tg-gold" aria-hidden="true" />
              <span className="fg-body text-tg-muted">{SITE.address}</span>
            </div>
          </div>
        </AnimatedContent>
      </div>
    </ForgeContainer>
  </ForgeSection>
);

export default ForgeVisit;
