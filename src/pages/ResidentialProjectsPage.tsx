import React from 'react';
import { Project, PageId } from '../types';
import { PROJECTS } from '../data/projectsData';
import { ProjectCard } from '../components/ProjectCard';
import { ArrowRight } from 'lucide-react';

interface ResidentialProjectsPageProps {
  onSelectProject: (project: Project) => void;
  onNavigate: (page: PageId) => void;
}

export const ResidentialProjectsPage: React.FC<ResidentialProjectsPageProps> = ({
  onSelectProject,
  onNavigate,
}) => {
  const residentialProjects = PROJECTS.filter((p) => p.category === 'Residential');

  return (
    <div className="w-full pt-32 pb-28 md:pt-40 md:pb-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header & Editorial Narrative */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.24em] uppercase text-[#6C8290] font-medium">
            <span className="w-2 h-2 rounded-full bg-[#6C8290]" />
            <span>Residential Portfolio</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1C1A18] font-normal leading-tight">
            Residential Interiors
          </h1>
          <p className="text-base sm:text-lg text-[#5A524A] font-light leading-relaxed pt-2">
            Homes conceived as authentic sanctuaries. We work closely with homeowners across Southern Oregon to plan new construction and substantial remodels that harmonize layout, natural illumination, and enduring craftsmanship.
          </p>
        </div>

        {/* Studio Approach Pillars for Residential */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10 border-y border-[#EAE4DA] mb-16">
          <div className="space-y-2">
            <h3 className="font-serif text-xl text-[#1C1A18]">New Builds & Architecture</h3>
            <p className="text-xs text-[#5A524A] leading-relaxed font-light">
              Collaborating from the blueprint stage to establish clear sightlines, functional room proportions, and logical transitions between spaces.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-serif text-xl text-[#1C1A18]">Remodels & Reconfiguration</h3>
            <p className="text-xs text-[#5A524A] leading-relaxed font-light">
              Respecting the existing character of Rogue Valley homes while modernizing layouts, lighting, cabinetry, and spatial volume.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-serif text-xl text-[#1C1A18]">Furnishings & Textures</h3>
            <p className="text-xs text-[#5A524A] leading-relaxed font-light">
              Sourcing trade-only furnishings, custom upholstery, tactile linens, and layered architectural lighting designed for comfortable daily living.
            </p>
          </div>
        </div>

        {/* Gallery */}
        <div className="space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
            {residentialProjects.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={onSelectProject}
                aspectRatio={idx % 2 === 0 ? 'landscape' : 'portrait'}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-24 p-10 bg-[#F4EFEB] border border-[#EAE4DA] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="font-serif text-2xl text-[#1C1A18]">
              Planning a residential build or renovation?
            </h3>
            <p className="text-xs text-[#736B63]">
              Learn more about our dedicated residential design process and scheduling.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigate('services-residential')}
              className="px-6 py-3 border border-[#1C1A18] text-[#1C1A18] text-xs tracking-[0.18em] uppercase font-medium hover:bg-[#1C1A18] hover:text-white transition-colors cursor-pointer"
            >
              Residential Services
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 bg-[#1C1A18] text-[#FBF9F5] text-xs tracking-[0.18em] uppercase font-medium hover:bg-[#2E2724] transition-colors cursor-pointer"
            >
              Inquire
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
