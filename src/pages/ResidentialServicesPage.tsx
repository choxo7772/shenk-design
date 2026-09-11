import React from 'react';
import { PageId } from '../types';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface ResidentialServicesPageProps {
  onNavigate: (page: PageId) => void;
}

export const ResidentialServicesPage: React.FC<ResidentialServicesPageProps> = ({
  onNavigate,
}) => {
  return (
    <div className="w-full pt-32 pb-28 md:pt-40 md:pb-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.24em] uppercase text-[#6C8290] font-medium">
            <span className="w-2 h-2 rounded-full bg-[#6C8290]" />
            <span>Residential Practice</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1C1A18] font-normal leading-tight">
            Residential Design Services
          </h1>
          <p className="text-base sm:text-lg text-[#5A524A] font-light leading-relaxed pt-2">
            Comprehensive, bespoke interior design for custom new builds, extensive renovations, and curated residential furnishings throughout Southern Oregon.
          </p>
        </div>

        {/* Hero Vignette */}
        <div className="w-full aspect-[21/9] overflow-hidden bg-[#EAE4DA] mb-20">
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=85"
            alt="Residential living interior"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Service Pillars Breakdown */}
        <div className="space-y-20 mb-24">
          {/* Pillar 1: Full-Service Interior Design */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-[11px] tracking-[0.2em] uppercase text-[#6C8290] font-semibold">
                New Construction & Complete Scope
              </span>
              <h2 className="font-serif text-3xl text-[#1C1A18]">
                Full-Service Interior Design
              </h2>
              <p className="text-sm text-[#5A524A] font-light leading-relaxed">
                We partner with you and your architect from the earliest conceptual sketches through final furnishing installation. We ensure room layouts flow logically, windows frame optimal views, and every interior architectural surface communicates quality.
              </p>
              <ul className="space-y-2 text-xs text-[#5A524A] pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#6C8290]" />
                  <span>Floor plan evaluations and interior architectural detailing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#6C8290]" />
                  <span>Custom fireplace surrounds, stair railings, and built-ins</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#6C8290]" />
                  <span>Comprehensive architectural lighting and switching schedules</span>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-6 aspect-[4/3] overflow-hidden bg-[#EAE4DA]">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85"
                alt="Living and dining interior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Pillar 2: Renovations & Remodels */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 lg:order-2 space-y-4">
              <span className="text-[11px] tracking-[0.2em] uppercase text-[#6C8290] font-semibold">
                Structural & Spatial Refresh
              </span>
              <h2 className="font-serif text-3xl text-[#1C1A18]">
                Renovations & Remodels
              </h2>
              <p className="text-sm text-[#5A524A] font-light leading-relaxed">
                Remodeling an established Rogue Valley home requires an appreciation of its existing structure and a sharp eye for modern efficiency. We remove bottlenecks, expand daylighting, and modernize surfaces to suit contemporary living.
              </p>
              <ul className="space-y-2 text-xs text-[#5A524A] pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#6C8290]" />
                  <span>Wall removals and space opening feasibility</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#6C8290]" />
                  <span>Contractor drawing packages and finish schedules</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#6C8290]" />
                  <span>Historic preservation and character retention</span>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-6 lg:order-1 aspect-[4/3] overflow-hidden bg-[#EAE4DA]">
              <img
                src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1000&q=85"
                alt="Renovated living room with fireplace"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Pillar 3: Kitchen & Bath */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-[11px] tracking-[0.2em] uppercase text-[#6C8290] font-semibold">
                High-Detail Environments
              </span>
              <h2 className="font-serif text-3xl text-[#1C1A18]">
                Kitchen & Bath Design
              </h2>
              <p className="text-sm text-[#5A524A] font-light leading-relaxed">
                Our team provides full cabinetry specifications, stone slab selections, artisanal tile patterns, plumbing fixtures, and ergonomic layouts for the most vital rooms in your home.
              </p>
              <ul className="space-y-2 text-xs text-[#5A524A] pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#6C8290]" />
                  <span>Detailed millwork elevations and interior cabinet organizers</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#6C8290]" />
                  <span>Natural stone slab sourcing and vein-matching</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#6C8290]" />
                  <span>Curbless shower detailing and freestanding tub framing</span>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-6 aspect-[4/3] overflow-hidden bg-[#EAE4DA]">
              <img
                src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=85"
                alt="Contemporary kitchen island"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Pillar 4: Furniture & Styling */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 lg:order-2 space-y-4">
              <span className="text-[11px] tracking-[0.2em] uppercase text-[#6C8290] font-semibold">
                Furnishings & Curation
              </span>
              <h2 className="font-serif text-3xl text-[#1C1A18]">
                Furniture, Lighting & Styling
              </h2>
              <p className="text-sm text-[#5A524A] font-light leading-relaxed">
                Every sofa, rug, dining table, and table lamp is thoughtfully curated to harmonize in scale, comfort, and durability. We access trade-only manufacturers and local Pacific Northwest craftsmen to source heirloom pieces.
              </p>
              <ul className="space-y-2 text-xs text-[#5A524A] pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#6C8290]" />
                  <span>Custom upholstery with stain-resistant performance textiles</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#6C8290]" />
                  <span>Bespoke window treatments and acoustic drapery</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#6C8290]" />
                  <span>White-glove delivery, assembly, and fine art placement</span>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-6 lg:order-1 aspect-[4/3] overflow-hidden bg-[#EAE4DA]">
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=85"
                alt="Linen armchair and reading area"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Inquiry CTA */}
        <div className="p-12 bg-[#1C1A18] text-[#FBF9F5] text-center space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal">
            Ready to design your home?
          </h2>
          <p className="text-sm text-[#D8D0C5] max-w-xl mx-auto font-light leading-relaxed">
            Tell us about your upcoming residential build, remodel, or furnishing project. We look forward to connecting with you.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-3.5 bg-[#FBF9F5] text-[#1C1A18] text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#EAE4DA] transition-colors inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Submit a Project Inquiry</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
