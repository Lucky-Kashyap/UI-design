import { motion, useReducedMotion } from 'framer-motion';
import { Phone, Mail } from 'lucide-react';
import { SITE } from '@/data/traditionalGroup';
import HeadingReveal from '@/components/HeadingReveal';

const CTASection = () => {
  const reduce = useReducedMotion() ?? false;

  return (
    <section
      id="contact"
      className="relative overflow-hidden text-white scroll-mt-[var(--tg-header-offset,5.5rem)]"
      aria-labelledby="cta-heading"
    >
      <div className="absolute inset-0">
        <img
          src="/media/cta-evening-resort-hospitality-jaipur.webp"
          alt="Evening resort hospitality ambience at Traditional Group Jaipur — contact Traditional Group"
          loading="lazy"
          decoding="async"
          className={`h-full w-full object-cover ${reduce ? '' : 'animate-ken-burns tg-img-drift'}`}
        />
        {!reduce && (
          <>
            <div className="absolute inset-0 tg-scanline opacity-50" aria-hidden="true" />
            <div className="absolute inset-0 tg-motion-orbs" aria-hidden="true" />
            <div className="absolute inset-0 tg-cta-shimmer" aria-hidden="true" />
          </>
        )}
        <div className="absolute inset-0 bg-tg-deep/78" />
        <div className="absolute inset-0 bg-gradient-to-r from-tg-deep via-tg-navy/75 to-tg-deep/55" />
      </div>
      <div className="absolute inset-x-0 top-0 h-1 tg-prism-line animate-prism-shift bg-[length:200%_100%]" aria-hidden="true" />

      <div className="tg-container relative py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <motion.div
            initial={reduce ? false : { opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="tg-eyebrow text-white/60 mb-3">
              Get in touch
            </p>
            <h2 id="cta-heading" className="font-display text-headline-xl mb-4">
              <HeadingReveal variant="light" block>
                Get a Free Quote
              </HeadingReveal>
            </h2>
            <div className="mb-5 h-1 w-16 rounded-full tg-prism-line" aria-hidden="true" />
            <p className="text-body-md text-white/75 mb-8 w-full max-w-none">
              Reach Traditional Group for manufacturing, hospitality, education, or eco-adventure
              enquiries. We are ready to help you take the next step.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={SITE.phoneHref}
                className="group tg-btn-gold gap-2"
              >
                <Phone className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                {SITE.phoneDisplay}
              </a>
              <a href={`mailto:${SITE.email}`} className="group tg-btn-secondary gap-2">
                <Mail className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-110" />
                Email us
              </a>
            </div>
          </motion.div>

          <motion.div
            className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md p-6 md:p-7 shadow-xl transition-all duration-500 hover:border-white/35 hover:bg-white/15 hover:-translate-y-1 hover:shadow-2xl"
            initial={reduce ? false : { opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            whileHover={reduce ? undefined : { y: -4 }}
          >
            <p className="tg-caption text-white/55 mb-3">Contact details</p>
            <address className="not-italic tg-card-body text-white/80 space-y-3">
              <p>{SITE.address}</p>
              <p>
                <a
                  href={SITE.officePhoneHref}
                  className="inline-flex items-center gap-2 text-white transition-colors hover:text-tg-cyan"
                >
                  <Phone className="h-3.5 w-3.5 shrink-0 text-tg-cyan/90" aria-hidden="true" />
                  <span>{SITE.officePhoneDisplay}</span>
                </a>
              </p>
              <p>
                <a
                  href={SITE.phoneHref}
                  className="inline-flex items-center gap-2 text-white transition-colors hover:text-tg-amber"
                >
                  <Phone className="h-3.5 w-3.5 shrink-0 text-tg-amber/90" aria-hidden="true" />
                  <span>{SITE.phoneDisplay}</span>
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${SITE.email}`}
                  className="inline-flex items-center gap-2 text-white transition-colors hover:text-tg-emerald break-all"
                >
                  <Mail className="h-3.5 w-3.5 shrink-0 text-tg-emerald/90" aria-hidden="true" />
                  <span>{SITE.email}</span>
                </a>
              </p>
            </address>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
