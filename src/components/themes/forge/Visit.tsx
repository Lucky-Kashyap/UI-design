import { Mail, MapPin, Phone } from 'lucide-react';
import AnimatedContent from '@/components/react-bits/AnimatedContent';
import { SITE } from '@/data/traditionalGroup';

const ForgeVisit = () => (
  <section id="visit" className="tg-section scroll-mt-[var(--tg-header-offset,5.5rem)]" aria-labelledby="visit-heading">
    <div className="tg-container min-w-0">
      <div className="overflow-hidden rounded-tg-lg border border-tg-gold/30 bg-gradient-to-br from-tg-soft to-tg-bg p-5 xxs:p-6 xs:rounded-tg-xl xs:p-8 md:p-12">
        <AnimatedContent className="grid min-w-0 gap-8 xs:gap-10 lg:grid-cols-2">
          <div className="min-w-0">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-tg-gold xs:text-xs">Visit</p>
            <h2 id="visit-heading" className="mt-2 font-display text-[clamp(1.75rem,6vw,3.25rem)] text-tg-ink xs:mt-3">
              Visit the hearth
            </h2>
            <p className="mt-4 text-sm text-tg-muted xs:text-base">
              Walk in, call, or write — we welcome conversations about ventures, partnerships, and stays.
            </p>
          </div>
          <div className="grid min-w-0 gap-3 xs:gap-4">
            <a href={SITE.phoneHref} className="flex items-center gap-3 rounded-tg-md border border-tg-line bg-tg-bg p-3.5 text-sm xs:gap-4 xs:p-4 xs:text-base">
              <Phone className="h-4 w-4 shrink-0 text-tg-gold" aria-hidden="true" />
              <span className="font-medium text-tg-ink">{SITE.phoneDisplay}</span>
            </a>
            <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 rounded-tg-md border border-tg-line bg-tg-bg p-3.5 text-sm xs:gap-4 xs:p-4 xs:text-base">
              <Mail className="h-4 w-4 shrink-0 text-tg-gold" aria-hidden="true" />
              <span className="break-all font-medium text-tg-ink">{SITE.email}</span>
            </a>
            <div className="flex items-start gap-3 rounded-tg-md border border-tg-line bg-tg-bg p-3.5 xs:gap-4 xs:p-4">
              <MapPin className="h-4 w-4 shrink-0 text-tg-gold" aria-hidden="true" />
              <span className="text-xs leading-relaxed text-tg-muted xs:text-sm">{SITE.address}</span>
            </div>
          </div>
        </AnimatedContent>
      </div>
    </div>
  </section>
);

export default ForgeVisit;
