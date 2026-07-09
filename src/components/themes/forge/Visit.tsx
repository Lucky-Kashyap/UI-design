import { Mail, MapPin, Phone } from 'lucide-react';
import AnimatedContent from '@/components/react-bits/AnimatedContent';
import { SITE } from '@/data/traditionalGroup';
import { ForgeBody, ForgeContainer, ForgeEyebrow, ForgeH2, ForgeSection } from './ui';

const ForgeVisit = () => (
  <ForgeSection id="visit" aria-labelledby="visit-heading">
    <ForgeContainer>
      <div className="overflow-hidden rounded-tg-lg border border-tg-gold/30 bg-gradient-to-br from-tg-soft to-tg-bg p-5 xs:rounded-tg-xl xs:p-8 md:p-12">
        <AnimatedContent className="grid min-w-0 gap-8 xs:gap-10 lg:grid-cols-2">
          <div className="min-w-0">
            <ForgeEyebrow>Visit</ForgeEyebrow>
            <ForgeH2 id="visit-heading" className="mt-2 xs:mt-3">
              Visit the hearth
            </ForgeH2>
            <ForgeBody className="mt-4">
              Walk in, call, or write — we welcome conversations about ventures, partnerships, and stays.
            </ForgeBody>
          </div>
          <div className="grid min-w-0 gap-3 xs:gap-4">
            <a
              href={SITE.phoneHref}
              className="flex min-h-[3rem] items-center gap-3 rounded-tg-md border border-tg-line bg-tg-bg p-4 xs:gap-4"
            >
              <Phone className="h-5 w-5 shrink-0 text-tg-gold" aria-hidden="true" />
              <span className="fg-body font-medium text-tg-ink">{SITE.phoneDisplay}</span>
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="flex min-h-[3rem] items-center gap-3 rounded-tg-md border border-tg-line bg-tg-bg p-4 xs:gap-4"
            >
              <Mail className="h-5 w-5 shrink-0 text-tg-gold" aria-hidden="true" />
              <span className="fg-body break-all font-medium text-tg-ink">{SITE.email}</span>
            </a>
            <div className="flex items-start gap-3 rounded-tg-md border border-tg-line bg-tg-bg p-4 xs:gap-4">
              <MapPin className="h-5 w-5 shrink-0 text-tg-gold" aria-hidden="true" />
              <span className="fg-body text-tg-muted">{SITE.address}</span>
            </div>
          </div>
        </AnimatedContent>
      </div>
    </ForgeContainer>
  </ForgeSection>
);

export default ForgeVisit;
