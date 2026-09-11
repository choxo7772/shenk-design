import React, { useState } from 'react';
import { Project, ProjectCategory } from '../types';
import { PROJECTS } from '../data/projectsData';
import { ProjectCard } from '../components/ProjectCard';

interface ProjectsPageProps {
  onSelectProject: (project: Project) => void;
  initialCategory?: string;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  onSelectProject,
  initialCategory = 'All',
}) => {
  const [activeFilter, setActiveFilter] = useState<string>(initialCategory);

  const categories = ['All', 'Residential', 'Commercial', 'Kitchen & Bath'];

  const filteredProjects =
    activeFilter === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === (activeFilter as ProjectCategory));

  return (
    <div className="w-full pt-32 pb-28 md:pt-40 md:pb-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Page Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.24em] uppercase text-[#6C8290] font-medium">
            <span className="w-2 h-2 rounded-full bg-[#6C8290]" />
            <span>Portfolio</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1C1A18] font-normal tracking-tight">
            Projects
          </h1>
          <p className="text-base sm:text-lg text-[#5A524A] font-light leading-relaxed pt-2">
            A curated selection of residential and commercial spaces designed across Southern Oregon. Each project reflects a tailored synthesis of client vision, architectural context, and honest material character.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-4 pb-12 border-b border-[#EAE4DA] mb-16 text-xs tracking-[0.16em] uppercase font-medium">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 transition-all cursor-pointer ${
                activeFilter === cat
                  ? 'bg-[#1C1A18] text-[#FBF9F5]'
                  : 'text-[#5A524A] hover:text-[#1C1A18] hover:bg-[#F4EFEB]'
              }`}
            >
              {cat}
            </button>
          ))}
          <span className="ml-auto text-xs text-[#9E9182] hidden sm:inline">
            Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'Project' : 'Projects'}
          </span>
        </div>

        {/* Asymmetric Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {filteredProjects.map((project, idx) => {
            // Asymmetric visual weighting
            const isFullWidth = idx === 0 && activeFilter === 'All';
            const isTall = idx % 3 === 1;

            if (isFullWidth) {
              return (
                <div key={project.id} className="col-span-1 md:col-span-2 lg:col-span-12 mb-6">
                  <ProjectCard
                    project={project}
                    onClick={onSelectProject}
                    aspectRatio="landscape"
                  />
                </div>
              );
            }

            return (
              <div
                key={project.id}
                className={`col-span-1 md:col-span-1 ${
                  isTall ? 'lg:col-span-5' : 'lg:col-span-7'
                }`}
              >
                <ProjectCard
                  project={project}
                  onClick={onSelectProject}
                  aspectRatio={isTall ? 'portrait' : 'landscape'}
                />
              </div>
            );
          })}
        </div>

        {filteredProjects.length === 0 && (
          <div className="py-20 text-center text-[#736B63]">
            <p className="font-serif text-2xl">No projects found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};
