import { Mail, MapPin, Phone } from 'lucide-react';
import AnimatedContent from '@/components/react-bits/AnimatedContent';
import GradientText from '@/components/react-bits/GradientText';
import { MERIDIAN_CONNECT } from '@/data/meridianContent';
import { SITE } from '@/data/traditionalGroup';
import { MeridianBody, MeridianContainer, MeridianEyebrow, MeridianH2, MeridianSection } from './ui';

const MeridianConnect = () => (
  <MeridianSection id="connect" className="bg-tg-bg" aria-labelledby="connect-heading">
    <MeridianContainer>
      <div className="grid min-w-0 gap-6 rounded-2xl border border-tg-line bg-tg-soft p-4 xxs:gap-8 xxs:p-5 xs:gap-10 xs:p-6 md:gap-12 md:p-10 lg:grid-cols-2 lg:p-14">
        <AnimatedContent className="min-w-0">
          <MeridianEyebrow>Connect</MeridianEyebrow>
          <MeridianH2 id="connect-heading" className="mt-3 xs:mt-4">
            <GradientText as="span">Let&apos;s build</GradientText>{' '}
            <span className="text-tg-ink">something lasting</span>
          </MeridianH2>
          <MeridianBody className="mt-4 max-w-md xs:mt-5">{MERIDIAN_CONNECT.body}</MeridianBody>
          <div className="mt-6 xs:mt-8">
            <a
              href={MERIDIAN_CONNECT.cta.href}
              className="md-btn md-btn--primary w-full sm:w-auto"
              data-md-cursor="button"
            >
              {MERIDIAN_CONNECT.cta.label}
            </a>
          </div>
        </AnimatedContent>

        <AnimatedContent delay={0.15} className="grid min-w-0 gap-3 xs:gap-4">
          <a
            href={SITE.phoneHref}
            className="md-card-hover flex items-start gap-3 rounded-xl border border-tg-line bg-tg-bg p-4 transition-colors hover:border-tg-cyan/40 xs:gap-4 xs:p-5"
            data-md-cursor="card"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-tg-navy/10 text-tg-cyan">
              <Phone className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <p className="md-caption text-tg-muted">Call</p>
              <p className="md-body mt-1 font-semibold text-tg-ink">{SITE.phoneDisplay}</p>
              <p className="md-body text-tg-muted">{SITE.officePhoneDisplay}</p>
            </div>
          </a>

          <a
            href={`mailto:${SITE.email}`}
            className="md-card-hover flex items-start gap-3 rounded-xl border border-tg-line bg-tg-bg p-4 transition-colors hover:border-tg-cyan/40 xs:gap-4 xs:p-5"
            data-md-cursor="card"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-tg-navy/10 text-tg-cyan">
              <Mail className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <p className="md-caption text-tg-muted">Email</p>
              <p className="md-body mt-1 break-all font-semibold text-tg-ink">{SITE.email}</p>
            </div>
          </a>

          <div
            className="flex items-start gap-3 rounded-xl border border-tg-line bg-tg-bg p-4 xs:gap-4 xs:p-5"
            data-md-cursor="card"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-tg-navy/10 text-tg-cyan">
              <MapPin className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <p className="md-caption text-tg-muted">Visit</p>
              <p className="md-body mt-1 text-tg-ink">{SITE.address}</p>
            </div>
          </div>
        </AnimatedContent>
      </div>
    </MeridianContainer>
  </MeridianSection>
);

export default MeridianConnect;
