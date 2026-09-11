import React from 'react';
import { PageId } from '../types';

interface LegalPageProps {
  page: 'privacy' | 'terms' | 'accessibility' | 'cookies';
  onNavigate: (page: PageId) => void;
}

export const LegalPage: React.FC<LegalPageProps> = ({ page, onNavigate }) => {
  const tabs = [
    { id: 'privacy', label: 'Privacy Policy' },
    { id: 'terms', label: 'Terms of Use' },
    { id: 'accessibility', label: 'Accessibility Statement' },
    { id: 'cookies', label: 'Cookie Policy' },
  ];

  return (
    <div className="w-full pt-32 pb-28 md:pt-40 md:pb-36">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 pb-6 border-b border-[#EAE4DA] mb-12 text-xs tracking-[0.16em] uppercase font-medium">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onNavigate(tab.id as PageId)}
              className={`px-4 py-2 transition-all cursor-pointer ${
                page === tab.id
                  ? 'bg-[#1C1A18] text-[#FBF9F5]'
                  : 'text-[#5A524A] hover:text-[#1C1A18] hover:bg-[#F4EFEB]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content based on selected legal page */}
        {page === 'privacy' && (
          <div className="space-y-8 text-[#38332E] font-light leading-relaxed">
            <div>
              <span className="text-[11px] tracking-[0.24em] uppercase text-[#6C8290] font-semibold block mb-2">
                Legal
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl text-[#1C1A18]">
                Privacy Policy
              </h1>
              <p className="text-xs text-[#736B63] mt-2">
                Last updated: January 2024 • SHENK DESIGN LLC
              </p>
            </div>

            <section className="space-y-4">
              <h2 className="font-serif text-2xl text-[#1C1A18]">1. Introduction</h2>
              <p>
                Shenk Design LLC (&quot;Shenk Design&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates the website located at shenkdesigngroup.com. This Privacy Policy informs prospective and current clients about our policies regarding the collection, use, and disclosure of personal information when using our website or engaging our interior design services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-2xl text-[#1C1A18]">2. Information We Collect</h2>
              <p>
                We only collect personal information that you voluntarily provide when submitting a project inquiry or contacting us directly via email or telephone. This information typically includes:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Your full name and contact information (email address, telephone number)</li>
                <li>Project details (location of property, project scope, stage, budget range, and timeline)</li>
                <li>Design preferences, architectural drawings, or photographs you share for review</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-2xl text-[#1C1A18]">3. How We Use Your Information</h2>
              <p>
                We use the information you provide solely to:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Evaluate and respond to your design inquiry</li>
                <li>Prepare design proposals, contracts, and interior specification documents</li>
                <li>Coordinate with trusted trades, suppliers, and contractors on your behalf</li>
                <li>Communicate project milestones and administrative updates</li>
              </ul>
              <p>
                We do not sell, rent, or trade your personal information to third parties for advertising or marketing purposes.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-2xl text-[#1C1A18]">4. Studio Contact</h2>
              <p>
                If you have questions regarding this Privacy Policy, please contact our studio at:
              </p>
              <p className="text-sm font-sans bg-[#F4EFEB] p-4 border border-[#EAE4DA]">
                <strong>SHENK DESIGN LLC</strong><br />
                307 S Holly St, Medford, OR 97501<br />
                Email: diane@shenkdesigngroup.com<br />
                Phone: (541) 283-3126
              </p>
            </section>
          </div>
        )}

        {page === 'terms' && (
          <div className="space-y-8 text-[#38332E] font-light leading-relaxed">
            <div>
              <span className="text-[11px] tracking-[0.24em] uppercase text-[#6C8290] font-semibold block mb-2">
                Legal
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl text-[#1C1A18]">
                Terms of Use
              </h1>
              <p className="text-xs text-[#736B63] mt-2">
                Last updated: January 2024 • SHENK DESIGN LLC
              </p>
            </div>

            <section className="space-y-4">
              <h2 className="font-serif text-2xl text-[#1C1A18]">1. Acceptance of Terms</h2>
              <p>
                By accessing and using this website (shenkdesigngroup.com), you accept and agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our website.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-2xl text-[#1C1A18]">2. Intellectual Property & Photography</h2>
              <p>
                All content published on this website—including photography, project portfolios, drawings, renderings, text, logo designs, monograms, and graphic elements—is the intellectual property of SHENK DESIGN LLC or its respective copyright holders. Content may not be reproduced, copied, distributed, or republished without prior written permission from Shenk Design LLC.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-2xl text-[#1C1A18]">3. Design Services & Engagement</h2>
              <p>
                The information provided on this website is for informational and portfolio presentation purposes only. It does not constitute a binding contract or formal commitment to perform design work. Official design engagements are governed by separate, signed written agreements outlining project scope, fee schedules, and deliverables.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-2xl text-[#1C1A18]">4. Governing Law</h2>
              <p>
                These terms are governed by and construed in accordance with the laws of the State of Oregon, without regard to its conflict of law principles.
              </p>
            </section>
          </div>
        )}

        {page === 'accessibility' && (
          <div className="space-y-8 text-[#38332E] font-light leading-relaxed">
            <div>
              <span className="text-[11px] tracking-[0.24em] uppercase text-[#6C8290] font-semibold block mb-2">
                Accessibility
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl text-[#1C1A18]">
                Accessibility Statement
              </h1>
              <p className="text-xs text-[#736B63] mt-2">
                Commitment to Digital Accessibility • SHENK DESIGN LLC
              </p>
            </div>

            <section className="space-y-4">
              <h2 className="font-serif text-2xl text-[#1C1A18]">Our Commitment</h2>
              <p>
                Shenk Design LLC is committed to making our digital experience accessible to all visitors, including individuals with visual, auditory, cognitive, or motor impairments. We strive to conform with the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-2xl text-[#1C1A18]">Accessibility Features</h2>
              <p>Our website incorporates:</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>High contrast color pairings adhering to WCAG AA recommendations</li>
                <li>Full keyboard accessibility across all interactive links, buttons, and navigation elements</li>
                <li>Descriptive alternative text for all project and editorial imagery</li>
                <li>Semantic HTML heading hierarchy (H1 through H4) for screen reader navigation</li>
                <li>Accessible form controls with explicit labels and focus indicators</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-2xl text-[#1C1A18]">Feedback & Assistance</h2>
              <p>
                If you encounter any difficulty accessing any content on our website or require assistance with any part of our site, please contact Diane Shenk at:
              </p>
              <p className="text-sm font-sans bg-[#F4EFEB] p-4 border border-[#EAE4DA]">
                Email: diane@shenkdesigngroup.com<br />
                Telephone: (541) 283-3126<br />
                Address: 307 S Holly St, Medford, OR 97501
              </p>
            </section>
          </div>
        )}

        {page === 'cookies' && (
          <div className="space-y-8 text-[#38332E] font-light leading-relaxed">
            <div>
              <span className="text-[11px] tracking-[0.24em] uppercase text-[#6C8290] font-semibold block mb-2">
                Cookies & Storage
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl text-[#1C1A18]">
                Cookie Policy
              </h1>
              <p className="text-xs text-[#736B63] mt-2">
                Last updated: January 2024 • SHENK DESIGN LLC
              </p>
            </div>

            <section className="space-y-4">
              <h2 className="font-serif text-2xl text-[#1C1A18]">1. What Are Cookies?</h2>
              <p>
                Cookies are small text files placed on your device to ensure the proper functionality of our website and improve your browsing experience.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-2xl text-[#1C1A18]">2. How We Use Cookies</h2>
              <p>
                Our website uses only essential, lightweight cookies and client-side session storage to:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Remember your navigation state between pages</li>
                <li>Ensure smooth transitions and typography rendering</li>
                <li>Preserve inquiry form state during active sessions</li>
              </ul>
              <p>
                We do not deploy aggressive third-party behavioral trackers or sell tracking data to advertising networks.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-2xl text-[#1C1A18]">3. Managing Cookies</h2>
              <p>
                You can configure your web browser to refuse all cookies or notify you when a cookie is sent. Please refer to your browser’s help settings for instructions.
              </p>
            </section>
          </div>
        )}
      </div>
    </div>
  );
};
