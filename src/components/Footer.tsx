import React from 'react';
import { Logo } from './Logo';
import { PageId } from '../types';
import { Instagram, Facebook, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId, extra?: { category?: string }) => void;
  onOpenInstagram?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenInstagram }) => {
  const currentYear = new Date().getFullYear();

  const handleNav = (page: PageId, extra?: { category?: string }) => {
    onNavigate(page, extra);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1C1A18] text-[#D8D0C5] border-t border-[#2E2724] pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Top Section: Studio Branding & Inquiry prompt */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[#2E2724]">
          <div className="lg:col-span-5 space-y-6">
            <Logo
              variant="horizontal"
              theme="light"
              iconSize={44}
              onClick={() => handleNav('home')}
              className="items-center"
            />
            <p className="font-serif italic text-lg text-[#EAE4DA] max-w-sm pt-2">
              “Interiors designed for the way you live.”
            </p>
            <p className="text-xs text-[#9E9182] leading-relaxed max-w-md">
              Shenk Design LLC is an independent interior design studio based in Medford, Oregon,
              creating thoughtful residential and commercial spaces throughout the Rogue Valley and Southern Oregon.
            </p>
          </div>

          {/* Quick Links Column 1: Projects */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[11px] uppercase tracking-[0.24em] text-[#EAE4DA] font-semibold">
              Projects
            </h4>
            <ul className="space-y-2.5 text-xs text-[#A39688]">
              <li>
                <button
                  onClick={() => handleNav('projects')}
                  className="hover:text-white transition-colors"
                >
                  All Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('residential-projects')}
                  className="hover:text-white transition-colors"
                >
                  Residential Interiors
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('commercial-projects')}
                  className="hover:text-white transition-colors"
                >
                  Commercial Interiors
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('kitchen-bath')}
                  className="hover:text-white transition-colors"
                >
                  Kitchen & Bath Design
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Links Column 2: Studio */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[11px] uppercase tracking-[0.24em] text-[#EAE4DA] font-semibold">
              Studio
            </h4>
            <ul className="space-y-2.5 text-xs text-[#A39688]">
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-white transition-colors"
                >
                  About the Studio
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-white transition-colors"
                >
                  Design Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('journal')}
                  className="hover:text-white transition-colors"
                >
                  Journal & Notes
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-white transition-colors"
                >
                  Start a Project
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[11px] uppercase tracking-[0.24em] text-[#EAE4DA] font-semibold">
              Studio & Contact
            </h4>
            <div className="space-y-3 text-xs text-[#A39688]">
              <div className="flex items-start gap-2.5">
                <MapPin size={15} className="text-[#6C8290] shrink-0 mt-0.5" />
                <span>
                  307 S Holly St<br />
                  Medford, OR 97501<br />
                  United States
                </span>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <Phone size={15} className="text-[#6C8290] shrink-0" />
                <a
                  href="tel:5412833126"
                  className="hover:text-white transition-colors"
                >
                  (541) 283-3126
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail size={15} className="text-[#6C8290] shrink-0" />
                <a
                  href="mailto:diane@shenkdesigngroup.com"
                  className="hover:text-white transition-colors break-all"
                >
                  diane@shenkdesigngroup.com
                </a>
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <a
                  href="https://www.instagram.com/shenkdesignllc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-[#6C8290] hover:text-[#EAE4DA] transition-colors group"
                >
                  <Instagram size={14} className="group-hover:text-white" />
                  <span>Instagram</span>
                  <ArrowUpRight size={11} className="opacity-70 group-hover:opacity-100" />
                </a>

                <a
                  href="https://www.facebook.com/shenkdesign"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-[#6C8290] hover:text-[#EAE4DA] transition-colors group"
                >
                  <Facebook size={14} className="group-hover:text-white" />
                  <span>Facebook</span>
                  <ArrowUpRight size={11} className="opacity-70 group-hover:opacity-100" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal, Regional SEO note & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] text-[#857B70]">
          <div>
            <p>
              © {currentYear} SHENK DESIGN LLC. All rights reserved. Medford, Oregon Interior Design.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <button
              onClick={() => handleNav('privacy')}
              className="hover:text-stone-300 transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => handleNav('terms')}
              className="hover:text-stone-300 transition-colors"
            >
              Terms of Use
            </button>
            <button
              onClick={() => handleNav('accessibility')}
              className="hover:text-stone-300 transition-colors"
            >
              Accessibility
            </button>
            <button
              onClick={() => handleNav('cookies')}
              className="hover:text-stone-300 transition-colors"
            >
              Cookie Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
