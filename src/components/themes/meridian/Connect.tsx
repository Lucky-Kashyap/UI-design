import { Mail, MapPin, Phone } from 'lucide-react';
import AnimatedContent from '@/components/react-bits/AnimatedContent';
import ElectricBorder from '@/components/react-bits/ElectricBorder';
import GradientText from '@/components/react-bits/GradientText';
import { MERIDIAN_CONNECT } from '@/data/meridianContent';
import { SITE } from '@/data/traditionalGroup';

const MeridianConnect = () => {
  return (
    <section
      id="connect"
      className="scroll-mt-[var(--tg-header-offset,5.5rem)] bg-tg-bg py-12 xxs:py-14 xs:py-16 md:py-20 lg:py-28"
      aria-labelledby="connect-heading"
    >
      <div className="tg-container min-w-0">
        <div className="grid min-w-0 gap-6 rounded-tg-xl border border-tg-line bg-tg-soft p-4 xxs:gap-8 xxs:p-5 xs:gap-10 xs:p-6 md:gap-12 md:p-10 lg:grid-cols-2 lg:p-14">
          <AnimatedContent className="min-w-0">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-tg-cyan xs:text-xs xs:tracking-[0.2em]">Connect</p>
            <h2 id="connect-heading" className="mt-3 font-display text-[clamp(1.75rem,6vw,3.25rem)] text-tg-ink xs:mt-4">
              <GradientText as="span">Let&apos;s build</GradientText>{' '}
              <span className="text-tg-ink">something lasting</span>
            </h2>
            <p className="mt-4 max-w-md text-sm text-tg-muted xs:mt-5 xs:text-base">
              {MERIDIAN_CONNECT.body}
            </p>
            <div className="mt-6 xs:mt-8">
              <ElectricBorder className="inline-block w-full sm:w-auto">
                <a
                  href={MERIDIAN_CONNECT.cta.href}
                  className="inline-flex min-h-[2.75rem] w-full items-center justify-center px-5 text-sm font-semibold text-tg-ink xs:px-6 sm:w-auto"
                >
                  {MERIDIAN_CONNECT.cta.label}
                </a>
              </ElectricBorder>
            </div>
          </AnimatedContent>

          <AnimatedContent delay={0.15} className="grid min-w-0 gap-3 xs:gap-4">
            <a
              href={SITE.phoneHref}
              className="flex items-start gap-3 rounded-tg-lg border border-tg-line bg-tg-bg p-4 transition-colors hover:border-tg-cyan/40 xs:gap-4 xs:p-5"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-tg-md bg-tg-navy/10 text-tg-cyan xs:h-10 xs:w-10">
                <Phone className="h-4 w-4 xs:h-5 xs:w-5" />
              </span>
              <div className="min-w-0">
                <p className="text-[0.65rem] font-semibold uppercase tracking-wider text-tg-muted xs:text-xs">Call</p>
                <p className="mt-1 text-sm font-semibold text-tg-ink xs:text-base">{SITE.phoneDisplay}</p>
                <p className="text-xs text-tg-muted xs:text-sm">{SITE.officePhoneDisplay}</p>
              </div>
            </a>

            <a
              href={`mailto:${SITE.email}`}
              className="flex items-start gap-3 rounded-tg-lg border border-tg-line bg-tg-bg p-4 transition-colors hover:border-tg-cyan/40 xs:gap-4 xs:p-5"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-tg-md bg-tg-navy/10 text-tg-cyan xs:h-10 xs:w-10">
                <Mail className="h-4 w-4 xs:h-5 xs:w-5" />
              </span>
              <div className="min-w-0">
                <p className="text-[0.65rem] font-semibold uppercase tracking-wider text-tg-muted xs:text-xs">Email</p>
                <p className="mt-1 break-all text-sm font-semibold text-tg-ink xs:text-base">{SITE.email}</p>
              </div>
            </a>

            <div className="flex items-start gap-3 rounded-tg-lg border border-tg-line bg-tg-bg p-4 xs:gap-4 xs:p-5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-tg-md bg-tg-navy/10 text-tg-cyan xs:h-10 xs:w-10">
                <MapPin className="h-4 w-4 xs:h-5 xs:w-5" />
              </span>
              <div className="min-w-0">
                <p className="text-[0.65rem] font-semibold uppercase tracking-wider text-tg-muted xs:text-xs">Visit</p>
                <p className="mt-1 text-xs leading-relaxed text-tg-ink xs:text-sm">{SITE.address}</p>
              </div>
            </div>
          </AnimatedContent>
        </div>
      </div>
    </section>
  );
};

export default MeridianConnect;
