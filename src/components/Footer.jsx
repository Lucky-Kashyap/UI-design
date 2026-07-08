import React from 'react';
import { Facebook, Linkedin, Twitter } from 'lucide-react';
import TraditionalGroupLogo from '@/components/TraditionalGroupLogo';
import { FOOTER, NAV_LINKS, SITE, VENTURES } from '@/data/traditionalGroup';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-tg-navy text-white" role="contentinfo">
      <div className="tg-container py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#home" aria-label="Traditional Group home" className="inline-block mb-4 rounded-lg bg-white p-2">
              <TraditionalGroupLogo className="h-10" />
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
                    className="text-sm text-white/70 hover:text-white transition-colors"
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
                  <a href={link.href} className="text-sm text-white/70 hover:text-white transition-colors">
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
                Phone:{' '}
                <a href={SITE.officePhoneHref} className="hover:text-white">
                  {SITE.officePhoneDisplay}
                </a>
              </li>
              <li>
                Quote:{' '}
                <a href={SITE.phoneHref} className="hover:text-white">
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                Email:{' '}
                <a href={`mailto:${SITE.email}`} className="hover:text-white break-all">
                  {SITE.email}
                </a>
              </li>
              <li>{SITE.address}</li>
            </ul>
            <div className="mt-4 flex gap-3">
              <a
                href={SITE.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-white text-white/70"
              >
                <Facebook className="h-5 w-5" fill="currentColor" />
              </a>
              <a
                href={SITE.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="hover:text-white text-white/70"
              >
                <Twitter className="h-5 w-5" fill="currentColor" />
              </a>
              <a
                href={SITE.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-white text-white/70"
              >
                <Linkedin className="h-5 w-5" fill="currentColor" />
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
            <a href="#about" className="hover:text-white">
              About Us
            </a>
            <a href="#ventures" className="hover:text-white">
              Services
            </a>
            <a href="#contact" className="hover:text-white">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
