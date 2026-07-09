import { Mail, MapPin, Phone } from 'lucide-react';
import AnimatedContent from '@/components/react-bits/AnimatedContent';
import { SITE } from '@/data/traditionalGroup';

const HorizonReach = () => (
  <section id="reach" className="tg-section scroll-mt-[var(--tg-header-offset,5.5rem)] bg-tg-bg" aria-labelledby="reach-heading">
    <div className="tg-container grid min-w-0 gap-8 xs:gap-10 lg:grid-cols-2 lg:items-center">
      <AnimatedContent className="min-w-0">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-tg-cyan xs:text-xs xs:tracking-[0.2em]">Reach</p>
        <h2 id="reach-heading" className="mt-2 font-display text-[clamp(1.75rem,6vw,3.25rem)] text-tg-ink xs:mt-3">
          Reach out with confidence
        </h2>
        <p className="mt-4 text-sm text-tg-muted xs:text-base">
          Partnerships, admissions, hospitality bookings, or general enquiries — our Jaipur team is ready.
        </p>
      </AnimatedContent>
      <AnimatedContent delay={0.1} className="grid min-w-0 gap-3 xs:gap-4">
        <a href={SITE.phoneHref} className="flex items-center gap-3 rounded-tg-lg border border-tg-line p-4 transition-colors hover:border-tg-cyan xs:gap-4 xs:p-5">
          <Phone className="h-4 w-4 shrink-0 text-tg-cyan xs:h-5 xs:w-5" />
          <span className="text-sm font-medium text-tg-ink xs:text-base">{SITE.phoneDisplay}</span>
        </a>
        <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 rounded-tg-lg border border-tg-line p-4 transition-colors hover:border-tg-cyan xs:gap-4 xs:p-5">
          <Mail className="h-4 w-4 shrink-0 text-tg-cyan xs:h-5 xs:w-5" />
          <span className="break-all text-sm font-medium text-tg-ink xs:text-base">{SITE.email}</span>
        </a>
        <div className="flex items-start gap-3 rounded-tg-lg border border-tg-line p-4 xs:gap-4 xs:p-5">
          <MapPin className="h-4 w-4 shrink-0 text-tg-cyan xs:h-5 xs:w-5" />
          <span className="text-xs leading-relaxed text-tg-muted xs:text-sm">{SITE.address}</span>
        </div>
      </AnimatedContent>
    </div>
  </section>
);

export default HorizonReach;
