import React from 'react';
import { PageId } from '../types';
import { SERVICES } from '../data/servicesData';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const steps = [
    {
      title: 'Discovery',
      subtitle: 'Understanding the Foundation',
      desc: 'We begin with an in-depth conversation to understand your space, functional requirements, architectural context, aesthetic preferences, budget, and project timeline.',
    },
    {
      title: 'Direction',
      subtitle: 'Concept & Spatial Planning',
      desc: 'Developing initial layout options, space flow studies, color directions, and cohesive material narratives that establish the overall creative vision.',
    },
    {
      title: 'Development',
      subtitle: 'Detailing & Specifications',
      desc: 'Refining every dimension: custom millwork drawings, architectural lighting plans, plumbing and hardware specifications, and tailored furniture selections.',
    },
    {
      title: 'Implementation',
      subtitle: 'Execution & Collaboration',
      desc: 'Coordinating directly with your general contractor and trade specialists to ensure selections and architectural details are executed with fidelity.',
    },
    {
      title: 'Completion',
      subtitle: 'Installation & Styling',
      desc: 'White-glove furniture delivery, art placement, textile steaming, and final styling touches for a seamless, turnkey reveal.',
    },
  ];

  return (
    <div className="w-full pt-32 pb-28 md:pt-40 md:pb-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.24em] uppercase text-[#6C8290] font-medium">
            <span className="w-2 h-2 rounded-full bg-[#6C8290]" />
            <span>Studio Capabilities</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1C1A18] font-normal leading-tight">
            Interior Design Services
          </h1>
          <p className="text-base sm:text-lg text-[#5A524A] font-light leading-relaxed pt-2">
            Shenk Design provides full-service interior design across Southern Oregon. We offer a structured, transparent process tailored to new construction, extensive renovations, and bespoke furnishings.
          </p>
        </div>

        {/* Core Dedicated Pathways: Residential & Commercial Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <div
            onClick={() => onNavigate('services-residential')}
            className="group cursor-pointer p-8 bg-[#F4EFEB] hover:bg-[#EAE4DA] transition-all border border-[#EAE4DA] flex flex-col justify-between"
          >
            <div className="space-y-4">
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#6C8290] font-semibold">
                Dedicated Practice
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#1C1A18] group-hover:text-[#5C7482] transition-colors">
                Residential Design Services
              </h3>
              <p className="text-sm text-[#5A524A] font-light leading-relaxed">
                Full-service interior architecture and custom furnishings for primary residences, mountain retreats, and complete remodels.
              </p>
            </div>
            <div className="pt-6 flex items-center gap-2 text-xs tracking-[0.16em] uppercase text-[#1C1A18] font-medium">
              <span>Explore Residential Services</span>
              <ArrowUpRight size={14} />
            </div>
          </div>

          <div
            onClick={() => onNavigate('services-commercial')}
            className="group cursor-pointer p-8 bg-[#F4EFEB] hover:bg-[#EAE4DA] transition-all border border-[#EAE4DA] flex flex-col justify-between"
          >
            <div className="space-y-4">
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#6C8290] font-semibold">
                Dedicated Practice
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#1C1A18] group-hover:text-[#5C7482] transition-colors">
                Commercial Design Services
              </h3>
              <p className="text-sm text-[#5A524A] font-light leading-relaxed">
                Refined, brand-aligned environments for boutique offices, healthcare suites, retail, and hospitality spaces.
              </p>
            </div>
            <div className="pt-6 flex items-center gap-2 text-xs tracking-[0.16em] uppercase text-[#1C1A18] font-medium">
              <span>Explore Commercial Services</span>
              <ArrowUpRight size={14} />
            </div>
          </div>
        </div>

        {/* Detailed Service Disciplines List */}
        <div className="space-y-16 mb-28">
          <div className="border-b border-[#EAE4DA] pb-4">
            <span className="text-[11px] tracking-[0.24em] uppercase text-[#6C8290] font-semibold">
              Our Disciplines in Detail
            </span>
          </div>

          <div className="space-y-16">
            {SERVICES.map((service, index) => (
              <div
                key={service.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-8 first:pt-0 border-t first:border-t-0 border-[#EAE4DA]"
              >
                <div className="lg:col-span-4 space-y-3">
                  <span className="text-xs font-mono text-[#6C8290]">
                    0{index + 1}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#1C1A18]">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#6C8290] uppercase tracking-wider font-sans">
                    {service.tagline}
                  </p>
                </div>

                <div className="lg:col-span-4 space-y-4">
                  <p className="text-sm text-[#5A524A] font-light leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-1.5 text-xs text-[#5A524A]">
                    {service.deliverables.map((deliv, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1 h-1 bg-[#6C8290] rounded-full mt-1.5 shrink-0" />
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:col-span-4">
                  <div className="aspect-[4/3] overflow-hidden bg-[#EAE4DA]">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Design Process - Simple Editorial Flow (No giant numbered gimmick boxes) */}
        <div className="py-20 border-y border-[#EAE4DA] mb-24">
          <div className="max-w-2xl mb-12">
            <span className="text-[11px] tracking-[0.24em] uppercase text-[#6C8290] font-semibold block mb-2">
              Methodology
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1A18]">
              The Design Process
            </h2>
            <p className="text-sm text-[#736B63] mt-2 font-light">
              We guide every project through five clearly defined stages to ensure creative alignment and smooth execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="space-y-2 border-t-2 border-[#1C1A18] pt-4">
                <span className="text-[10px] tracking-[0.2em] font-mono uppercase text-[#6C8290] block">
                  Stage 0{idx + 1}
                </span>
                <h3 className="font-serif text-xl text-[#1C1A18]">{step.title}</h3>
                <p className="text-[11px] font-sans text-[#736B63] font-medium">{step.subtitle}</p>
                <p className="text-xs text-[#5A524A] font-light leading-relaxed pt-1">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Project Inquiry CTA */}
        <div className="p-12 bg-[#F4EFEB] border border-[#EAE4DA] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#1C1A18]">
              Ready to discuss your upcoming project?
            </h3>
            <p className="text-xs text-[#736B63] mt-1">
              Contact Diane Shenk directly to schedule an introductory consultation.
            </p>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-3.5 bg-[#1C1A18] text-[#FBF9F5] text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#2E2724] transition-colors cursor-pointer shrink-0"
          >
            Start a Project
          </button>
        </div>
      </div>
    </div>
  );
};
