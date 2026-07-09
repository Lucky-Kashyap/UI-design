import { Facebook, Linkedin, Mail, Phone, Twitter } from 'lucide-react';
import TraditionalGroupLogo from '@/components/TraditionalGroupLogo';
import { FOOTER, NAV_LINKS, SITE, VENTURES } from '@/data/traditionalGroup';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-tg-navy text-white" role="contentinfo">
      <div className="tg-container py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <a
              href="#home"
              aria-label="Traditional Group home"
              className="inline-block mb-4 transition-transform duration-300 hover:scale-[1.03] hover:shadow-lg"
            >
              <TraditionalGroupLogo variant="footer" />
            </a>
            <p className="text-sm text-white/70 leading-relaxed">{FOOTER.blurb}</p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2.5">
              {VENTURES.map((venture) => (
                <li key={venture.id}>
                  <a
                    href={venture.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tg-link-hover text-sm text-white/70 hover:!text-tg-cyan"
                  >
                    {venture.shortName}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Explore</h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="tg-link-hover text-sm text-white/70 hover:!text-tg-amber">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Contact us</h3>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>
                <a
                  href={SITE.officePhoneHref}
                  className="tg-link-hover inline-flex items-center gap-2 hover:!text-tg-cyan"
                >
                  <Phone className="h-3.5 w-3.5 shrink-0 text-tg-cyan/80" aria-hidden="true" />
                  <span>{SITE.officePhoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={SITE.phoneHref}
                  className="tg-link-hover inline-flex items-center gap-2 hover:!text-tg-amber"
                >
                  <Phone className="h-3.5 w-3.5 shrink-0 text-tg-amber/80" aria-hidden="true" />
                  <span>{SITE.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="tg-link-hover inline-flex items-center gap-2 hover:!text-tg-emerald break-all"
                >
                  <Mail className="h-3.5 w-3.5 shrink-0 text-tg-emerald/80" aria-hidden="true" />
                  <span>{SITE.email}</span>
                </a>
              </li>
              <li>{SITE.address}</li>
            </ul>
            <div className="mt-4 flex gap-2">
              <a
                href={SITE.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="tg-icon-btn tg-icon-btn--light h-9 w-9 text-white/70"
              >
                <Facebook className="h-4 w-4" fill="currentColor" />
              </a>
              <a
                href={SITE.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="tg-icon-btn tg-icon-btn--light h-9 w-9 text-white/70"
              >
                <Twitter className="h-4 w-4" fill="currentColor" />
              </a>
              <a
                href={SITE.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="tg-icon-btn tg-icon-btn--light h-9 w-9 text-white/70"
              >
                <Linkedin className="h-4 w-4" fill="currentColor" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="tg-container flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 py-5 text-xs text-white/55">
          <p>
            © {year} {SITE.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#about" className="transition-colors hover:text-tg-cyan">
              About Us
            </a>
            <a href="#ventures" className="transition-colors hover:text-tg-amber">
              Services
            </a>
            <a href="#contact" className="transition-colors hover:text-tg-emerald">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
