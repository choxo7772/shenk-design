import React from 'react';
import { Project, PageId } from '../types';
import { PROJECTS } from '../data/projectsData';
import { ProjectCard } from '../components/ProjectCard';

interface KitchenBathPageProps {
  onSelectProject: (project: Project) => void;
  onNavigate: (page: PageId) => void;
}

export const KitchenBathPage: React.FC<KitchenBathPageProps> = ({
  onSelectProject,
  onNavigate,
}) => {
  const kbProjects = PROJECTS.filter((p) => p.category === 'Kitchen & Bath');

  return (
    <div className="w-full pt-32 pb-28 md:pt-40 md:pb-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header & Editorial Statement */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.24em] uppercase text-[#6C8290] font-medium">
            <span className="w-2 h-2 rounded-full bg-[#6C8290]" />
            <span>Specialized Discipline</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1C1A18] font-normal leading-tight">
            Kitchen & Bath Design
          </h1>
          <p className="text-base sm:text-lg text-[#5A524A] font-light leading-relaxed pt-2">
            The kitchen and bath are the tactile centers of every home. We combine rigorous spatial ergonomics with artisan cabinetry, honed natural stone, and layered lighting to create spaces that are both effortlessly functional and deeply serene.
          </p>
        </div>

        {/* Detailed Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-10 border-y border-[#EAE4DA] mb-16">
          <div className="p-6 bg-[#F4EFEB] border border-[#EAE4DA] space-y-2">
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#6C8290] font-mono">01</span>
            <h3 className="font-serif text-lg text-[#1C1A18]">Custom Cabinetry</h3>
            <p className="text-xs text-[#5A524A] font-light leading-relaxed">
              Precision millwork drawings, custom door profiles, integrated appliance panels, and customized interior organizers.
            </p>
          </div>

          <div className="p-6 bg-[#F4EFEB] border border-[#EAE4DA] space-y-2">
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#6C8290] font-mono">02</span>
            <h3 className="font-serif text-lg text-[#1C1A18]">Countertops & Slabs</h3>
            <p className="text-xs text-[#5A524A] font-light leading-relaxed">
              Curating authentic soapstone, quartzite, and marble slabs with hand-picked vein matching and bespoke edge details.
            </p>
          </div>

          <div className="p-6 bg-[#F4EFEB] border border-[#EAE4DA] space-y-2">
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#6C8290] font-mono">03</span>
            <h3 className="font-serif text-lg text-[#1C1A18]">Artisan Tile & Stone</h3>
            <p className="text-xs text-[#5A524A] font-light leading-relaxed">
              Specifying handmade zellige, terracotta, and honed limestone with precise tile layout maps and grout tone matching.
            </p>
          </div>

          <div className="p-6 bg-[#F4EFEB] border border-[#EAE4DA] space-y-2">
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#6C8290] font-mono">04</span>
            <h3 className="font-serif text-lg text-[#1C1A18]">Plumbing & Lighting</h3>
            <p className="text-xs text-[#5A524A] font-light leading-relaxed">
              Coordinating unlacquered brass and bronze faucets, cast iron fixtures, and recessed architectural task illumination.
            </p>
          </div>
        </div>

        {/* Showcase Gallery */}
        <div className="space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
            {kbProjects.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={onSelectProject}
                aspectRatio={idx % 2 === 0 ? 'landscape' : 'portrait'}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 p-10 bg-[#F4EFEB] border border-[#EAE4DA] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-2xl text-[#1C1A18]">
              Ready to reimagine your kitchen or primary bath?
            </h3>
            <p className="text-xs text-[#736B63] mt-1">
              Contact our Medford studio to schedule a design consultation.
            </p>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="px-7 py-3 bg-[#1C1A18] text-[#FBF9F5] text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#2E2724] transition-colors cursor-pointer"
          >
            Start a Project
          </button>
        </div>
      </div>
    </div>
  );
};
