import React from 'react';
import { Project, PageId } from '../types';
import { PROJECTS } from '../data/projectsData';
import { ProjectCard } from '../components/ProjectCard';

interface CommercialProjectsPageProps {
  onSelectProject: (project: Project) => void;
  onNavigate: (page: PageId) => void;
}

export const CommercialProjectsPage: React.FC<CommercialProjectsPageProps> = ({
  onSelectProject,
  onNavigate,
}) => {
  const commercialProjects = PROJECTS.filter((p) => p.category === 'Commercial');

  return (
    <div className="w-full pt-32 pb-28 md:pt-40 md:pb-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header & Editorial Statement */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.24em] uppercase text-[#6C8290] font-medium">
            <span className="w-2 h-2 rounded-full bg-[#6C8290]" />
            <span>Commercial Practice</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1C1A18] font-normal leading-tight">
            Commercial Interiors
          </h1>
          <p className="text-base sm:text-lg text-[#5A524A] font-light leading-relaxed pt-2">
            Workplaces, boutique retail, and professional practices designed with residential warmth and commercial durability. We shape environments that communicate credibility, calm, and genuine hospitality.
          </p>
        </div>

        {/* Commercial Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10 border-y border-[#EAE4DA] mb-16">
          <div className="space-y-2">
            <h3 className="font-serif text-xl text-[#1C1A18]">Professional Offices</h3>
            <p className="text-xs text-[#5A524A] leading-relaxed font-light">
              Designing welcoming reception lounges, conference rooms with balanced acoustics, and private workspaces that promote clarity and focus.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-serif text-xl text-[#1C1A18]">Hospitality & Retail</h3>
            <p className="text-xs text-[#5A524A] leading-relaxed font-light">
              Crafting immersive customer journeys with tactile surfaces, purposeful lighting levels, and thoughtful point-of-sale touchpoints.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-serif text-xl text-[#1C1A18]">Durability & Code</h3>
            <p className="text-xs text-[#5A524A] leading-relaxed font-light">
              Specifying high-traffic commercial finishes, acoustic mitigation, and ADA-compliant spatial flows that look refined without feeling clinical.
            </p>
          </div>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
          {commercialProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={onSelectProject}
              aspectRatio="landscape"
            />
          ))}
        </div>

        {/* Commercial Inquiry Callout */}
        <div className="mt-24 p-10 bg-[#2E2724] text-[#FBF9F5] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="font-serif text-2xl text-white">
              Designing a Southern Oregon commercial space?
            </h3>
            <p className="text-xs text-[#D8D0C5]">
              Let’s discuss your team’s workflow, client experience, and timeline requirements.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigate('services-commercial')}
              className="px-6 py-3 border border-[#D8D0C5] text-white text-xs tracking-[0.18em] uppercase font-medium hover:bg-white hover:text-[#1C1A18] transition-colors cursor-pointer"
            >
              Commercial Services
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 bg-[#FBF9F5] text-[#1C1A18] text-xs tracking-[0.18em] uppercase font-medium hover:bg-[#EAE4DA] transition-colors cursor-pointer"
            >
              Start an Inquiry
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
