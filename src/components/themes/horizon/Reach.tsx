import { Mail, MapPin, Phone } from 'lucide-react';
import AnimatedContent from '@/components/react-bits/AnimatedContent';
import { SITE } from '@/data/traditionalGroup';
import { HorizonBody, HorizonContainer, HorizonEyebrow, HorizonH2, HorizonSection } from './ui';

const HorizonReach = () => (
  <HorizonSection id="reach" className="bg-tg-bg" aria-labelledby="reach-heading">
    <HorizonContainer className="grid min-w-0 gap-8 xs:gap-10 lg:grid-cols-2 lg:items-center">
      <AnimatedContent className="min-w-0">
        <HorizonEyebrow>Reach</HorizonEyebrow>
        <HorizonH2 id="reach-heading" className="mt-2 xs:mt-3">
          Reach out with confidence
        </HorizonH2>
        <HorizonBody className="mt-4">
          Partnerships, admissions, hospitality bookings, or general enquiries — our Jaipur team is ready.
        </HorizonBody>
      </AnimatedContent>
      <AnimatedContent delay={0.1} className="grid min-w-0 gap-3 xs:gap-4">
        <a
          href={SITE.phoneHref}
          className="flex min-h-[3rem] items-center gap-3 rounded-tg-lg border border-tg-line p-4 transition-colors hover:border-tg-cyan xs:gap-4 xs:p-5"
        >
          <Phone className="h-5 w-5 shrink-0 text-tg-cyan" />
          <span className="hz-body font-medium text-tg-ink">{SITE.phoneDisplay}</span>
        </a>
        <a
          href={`mailto:${SITE.email}`}
          className="flex min-h-[3rem] items-center gap-3 rounded-tg-lg border border-tg-line p-4 transition-colors hover:border-tg-cyan xs:gap-4 xs:p-5"
        >
          <Mail className="h-5 w-5 shrink-0 text-tg-cyan" />
          <span className="hz-body break-all font-medium text-tg-ink">{SITE.email}</span>
        </a>
        <div className="flex items-start gap-3 rounded-tg-lg border border-tg-line p-4 xs:gap-4 xs:p-5">
          <MapPin className="h-5 w-5 shrink-0 text-tg-cyan" />
          <span className="hz-body text-tg-muted">{SITE.address}</span>
        </div>
      </AnimatedContent>
    </HorizonContainer>
  </HorizonSection>
);

export default HorizonReach;
