import { Mail, MapPin, Phone } from 'lucide-react';
import AnimatedContent from '@/components/react-bits/AnimatedContent';
import { SITE } from '@/data/traditionalGroup';
import { HORIZON_BG_REACH, HORIZON_REACH_FEATURE } from './media';
import {
  HorizonBody,
  HorizonContainer,
  HorizonEyebrow,
  HorizonH2,
  HorizonImage,
  HorizonSection,
  HorizonSectionBg,
} from './ui';

const HorizonReach = () => (
  <HorizonSection id="reach" className="relative overflow-hidden bg-tg-bg" aria-labelledby="reach-heading">
    <HorizonSectionBg src={HORIZON_BG_REACH} overlay="light" />

    <HorizonContainer className="relative z-[1] grid min-w-0 gap-8 xs:gap-10 lg:grid-cols-2 lg:items-center">
      <AnimatedContent className="min-w-0">
        <HorizonEyebrow>Reach</HorizonEyebrow>
        <HorizonH2 id="reach-heading" className="mt-2 xs:mt-3">
          Reach out with confidence
        </HorizonH2>
        <HorizonBody className="mt-4">
          Partnerships, admissions, hospitality bookings, or general enquiries — our Jaipur team is ready.
        </HorizonBody>
        <div className="mt-6 overflow-hidden rounded-tg-xl border border-tg-line shadow-sm lg:hidden">
          <HorizonImage
            src={HORIZON_REACH_FEATURE}
            alt="Jaipur office exterior at sunrise"
            className="aspect-[16/10] w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
      </AnimatedContent>

      <div className="grid min-w-0 gap-6">
        <AnimatedContent delay={0.05} className="hidden overflow-hidden rounded-tg-xl border border-tg-line shadow-sm lg:block">
          <HorizonImage
            src={HORIZON_REACH_FEATURE}
            alt="Jaipur office exterior at sunrise"
            className="aspect-[16/10] w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </AnimatedContent>

        <AnimatedContent delay={0.1} className="grid min-w-0 gap-3 xs:gap-4">
          <a
            href={SITE.phoneHref}
            className="flex min-h-[3rem] items-center gap-3 rounded-tg-lg border border-tg-line/80 bg-tg-bg/80 p-4 backdrop-blur-sm transition-colors hover:border-tg-cyan xs:gap-4 xs:p-5"
          >
            <Phone className="h-5 w-5 shrink-0 text-tg-cyan" />
            <span className="hz-body font-medium text-tg-ink">{SITE.phoneDisplay}</span>
          </a>
          <a
            href={`mailto:${SITE.email}`}
            className="flex min-h-[3rem] items-center gap-3 rounded-tg-lg border border-tg-line/80 bg-tg-bg/80 p-4 backdrop-blur-sm transition-colors hover:border-tg-cyan xs:gap-4 xs:p-5"
          >
            <Mail className="h-5 w-5 shrink-0 text-tg-cyan" />
            <span className="hz-body break-all font-medium text-tg-ink">{SITE.email}</span>
          </a>
          <div className="flex items-start gap-3 rounded-tg-lg border border-tg-line/80 bg-tg-bg/80 p-4 backdrop-blur-sm xs:gap-4 xs:p-5">
            <MapPin className="h-5 w-5 shrink-0 text-tg-cyan" />
            <span className="hz-body text-tg-muted">{SITE.address}</span>
          </div>
        </AnimatedContent>
      </div>
    </HorizonContainer>
  </HorizonSection>
);

export default HorizonReach;
