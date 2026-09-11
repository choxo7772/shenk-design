import React from 'react';
import { PageId } from '../types';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface CommercialServicesPageProps {
  onNavigate: (page: PageId) => void;
}

export const CommercialServicesPage: React.FC<CommercialServicesPageProps> = ({
  onNavigate,
}) => {
  return (
    <div className="w-full pt-32 pb-28 md:pt-40 md:pb-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.24em] uppercase text-[#6C8290] font-medium">
            <span className="w-2 h-2 rounded-full bg-[#6C8290]" />
            <span>Commercial Practice</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1C1A18] font-normal leading-tight">
            Commercial Design Services
          </h1>
          <p className="text-base sm:text-lg text-[#5A524A] font-light leading-relaxed pt-2">
            Tailored commercial interiors for Southern Oregon businesses. We craft functional, brand-aligned environments for boutique offices, healthcare practices, retail, and hospitality spaces.
          </p>
        </div>

        {/* Hero Vignette */}
        <div className="w-full aspect-[21/9] overflow-hidden bg-[#EAE4DA] mb-20">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=85"
            alt="Commercial conference and collaborative space"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Commercial Disciplines Breakdown */}
        <div className="space-y-16 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 bg-[#F4EFEB] border border-[#EAE4DA] space-y-3">
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#6C8290] font-mono">01</span>
              <h3 className="font-serif text-2xl text-[#1C1A18]">Space Planning & Flow</h3>
              <p className="text-xs text-[#5A524A] font-light leading-relaxed">
                Analyzing workflow patterns, team adjacencies, circulation paths, and ADA accessibility to create intuitive floor plans that maximize usable square footage.
              </p>
            </div>

            <div className="p-8 bg-[#F4EFEB] border border-[#EAE4DA] space-y-3">
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#6C8290] font-mono">02</span>
              <h3 className="font-serif text-2xl text-[#1C1A18]">Materials & Finishes</h3>
              <p className="text-xs text-[#5A524A] font-light leading-relaxed">
                Specifying high-abrasion commercial-grade flooring, acoustic wall paneling, durable millwork laminates, and low-VOC paints for healthy workspaces.
              </p>
            </div>

            <div className="p-8 bg-[#F4EFEB] border border-[#EAE4DA] space-y-3">
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#6C8290] font-mono">03</span>
              <h3 className="font-serif text-2xl text-[#1C1A18]">Furniture & Lighting</h3>
              <p className="text-xs text-[#5A524A] font-light leading-relaxed">
                Sourcing contract-grade seating, collaborative workstations, custom conference tables, and layered illumination that reduces digital eye strain.
              </p>
            </div>

            <div className="p-8 bg-[#F4EFEB] border border-[#EAE4DA] space-y-3">
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#6C8290] font-mono">04</span>
              <h3 className="font-serif text-2xl text-[#1C1A18]">Brand Alignment</h3>
              <p className="text-xs text-[#5A524A] font-light leading-relaxed">
                Translating your company’s values and professional identity into a physical environment that impresses clients and energizes your workforce.
              </p>
            </div>

            <div className="p-8 bg-[#F4EFEB] border border-[#EAE4DA] space-y-3">
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#6C8290] font-mono">05</span>
              <h3 className="font-serif text-2xl text-[#1C1A18]">Renovation Coordination</h3>
              <p className="text-xs text-[#5A524A] font-light leading-relaxed">
                Working closely with commercial contractors, MEP engineers, and building managers to minimize operational downtime during buildouts.
              </p>
            </div>

            <div className="p-8 bg-[#F4EFEB] border border-[#EAE4DA] space-y-3">
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#6C8290] font-mono">06</span>
              <h3 className="font-serif text-2xl text-[#1C1A18]">Final Styling & Reveal</h3>
              <p className="text-xs text-[#5A524A] font-light leading-relaxed">
                Curating art, botanical elements, signage coordination, and decorative accessories that complete the environment for opening day.
              </p>
            </div>
          </div>
        </div>

        {/* Commercial Inquiry CTA */}
        <div className="p-12 bg-[#2E2724] text-[#FBF9F5] text-center space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal">
            Elevate Your Southern Oregon Workplace
          </h2>
          <p className="text-sm text-[#D8D0C5] max-w-xl mx-auto font-light leading-relaxed">
            Contact us to discuss your commercial space in Medford, Ashland, Jacksonville, or the Rogue Valley.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-3.5 bg-[#FBF9F5] text-[#1C1A18] text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#EAE4DA] transition-colors inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Start a Commercial Inquiry</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
