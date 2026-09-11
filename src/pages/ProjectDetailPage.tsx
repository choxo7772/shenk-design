import React from 'react';
import { Project, PageId } from '../types';
import { PROJECTS } from '../data/projectsData';
import { ArrowLeft, ArrowRight, ArrowUpRight, MapPin } from 'lucide-react';

interface ProjectDetailPageProps {
  project: Project;
  onSelectProject: (project: Project) => void;
  onNavigate: (page: PageId) => void;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({
  project,
  onSelectProject,
  onNavigate,
}) => {
  // Find current index, next, prev
  const currentIndex = PROJECTS.findIndex((p) => p.id === project.id);
  const prevProject = currentIndex > 0 ? PROJECTS[currentIndex - 1] : PROJECTS[PROJECTS.length - 1];
  const nextProject = currentIndex < PROJECTS.length - 1 ? PROJECTS[currentIndex + 1] : PROJECTS[0];

  return (
    <article className="w-full pt-32 pb-28 md:pt-40 md:pb-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Back Link */}
        <div className="mb-10">
          <button
            onClick={() => onNavigate('projects')}
            className="inline-flex items-center gap-2 text-xs tracking-[0.18em] uppercase text-[#6C8290] hover:text-[#1C1A18] transition-colors font-medium cursor-pointer"
          >
            <ArrowLeft size={14} />
            <span>Back to Projects</span>
          </button>
        </div>

        {/* Project Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-baseline mb-12">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-[#6C8290] font-medium">
              <span>{project.category}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin size={13} />
                {project.location}
              </span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1C1A18] font-normal leading-tight">
              {project.title}
            </h1>
          </div>

          <div className="lg:col-span-4 lg:text-right">
            {project.year && (
              <span className="text-xs tracking-[0.2em] uppercase text-[#9E9182] font-mono">
                Completed {project.year}
              </span>
            )}
          </div>
        </div>

        {/* Large Hero Photography */}
        <div className="w-full aspect-[16/9] overflow-hidden bg-[#EAE4DA] mb-16 shadow-[0_8px_32px_rgba(28,26,24,0.06)]">
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Project Information & Meta Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 py-12 border-y border-[#EAE4DA] mb-20">
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-6">
            <p className="font-serif text-2xl text-[#1C1A18] leading-relaxed font-normal">
              {project.summary}
            </p>
            <div className="space-y-4 text-base text-[#5A524A] font-light leading-relaxed">
              {project.description.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Specifications / Deliverables Column */}
          <div className="lg:col-span-5 space-y-8 lg:pl-8 lg:border-l lg:border-[#EAE4DA]">
            <div>
              <h4 className="text-[11px] tracking-[0.22em] uppercase text-[#6C8290] font-semibold mb-2">
                Project Scope
              </h4>
              <p className="text-sm text-[#1C1A18] font-normal">{project.scope}</p>
            </div>

            <div>
              <h4 className="text-[11px] tracking-[0.22em] uppercase text-[#6C8290] font-semibold mb-2">
                Services Provided
              </h4>
              <ul className="space-y-1.5 text-xs text-[#5A524A]">
                {project.services.map((service, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-[#6C8290] rounded-full" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {project.keyMaterials && project.keyMaterials.length > 0 && (
              <div>
                <h4 className="text-[11px] tracking-[0.22em] uppercase text-[#6C8290] font-semibold mb-2">
                  Key Materiality
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.keyMaterials.map((mat, i) => (
                    <span
                      key={i}
                      className="text-[11px] bg-[#F4EFEB] text-[#5A524A] px-2.5 py-1 border border-[#EAE4DA]"
                    >
                      {mat}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Editorial Photography Sequence */}
        <div className="space-y-16 lg:space-y-24 mb-24">
          <div className="border-b border-[#EAE4DA] pb-4">
            <span className="text-[11px] tracking-[0.24em] uppercase text-[#6C8290] font-semibold">
              Project Gallery & Vignettes
            </span>
          </div>

          {/* Sequential editorial layout */}
          {project.images.map((img, index) => {
            const isWide = img.aspect === 'wide' || index === 0;

            if (isWide) {
              return (
                <div key={index} className="space-y-3">
                  <div className="w-full aspect-[16/10] overflow-hidden bg-[#EAE4DA]">
                    <img
                      src={img.url}
                      alt={img.alt || project.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {img.caption && (
                    <p className="text-xs text-[#736B63] font-sans tracking-wide italic">
                      {img.caption}
                    </p>
                  )}
                </div>
              );
            }

            return (
              <div key={index} className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
                <div className="md:col-span-8 overflow-hidden aspect-[4/3] bg-[#EAE4DA]">
                  <img
                    src={img.url}
                    alt={img.alt || project.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:col-span-4 pb-4">
                  {img.caption && (
                    <div className="border-l border-[#6C8290] pl-4">
                      <p className="text-xs text-[#5A524A] leading-relaxed">
                        {img.caption}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Previous & Next Project Navigation */}
        <div className="pt-16 border-t border-[#EAE4DA] grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-between">
          <button
            onClick={() => onSelectProject(prevProject)}
            className="group text-left p-6 bg-[#F4EFEB] hover:bg-[#EAE4DA] transition-colors cursor-pointer border border-[#EAE4DA]"
          >
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#6C8290] font-medium flex items-center gap-1 mb-2">
              <ArrowLeft size={12} />
              <span>Previous Project</span>
            </span>
            <h4 className="font-serif text-xl text-[#1C1A18] group-hover:text-[#5C7482] transition-colors">
              {prevProject.title}
            </h4>
            <p className="text-xs text-[#736B63] mt-1">{prevProject.category}</p>
          </button>

          <button
            onClick={() => onSelectProject(nextProject)}
            className="group text-right p-6 bg-[#F4EFEB] hover:bg-[#EAE4DA] transition-colors cursor-pointer border border-[#EAE4DA]"
          >
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#6C8290] font-medium flex items-center justify-end gap-1 mb-2">
              <span>Next Project</span>
              <ArrowRight size={12} />
            </span>
            <h4 className="font-serif text-xl text-[#1C1A18] group-hover:text-[#5C7482] transition-colors">
              {nextProject.title}
            </h4>
            <p className="text-xs text-[#736B63] mt-1">{nextProject.category}</p>
          </button>
        </div>

        {/* Contextual Inquiry CTA */}
        <div className="mt-20 p-8 md:p-12 bg-[#1C1A18] text-[#FBF9F5] flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-2xl md:text-3xl text-white font-normal">
              Planning a similar project?
            </h3>
            <p className="text-xs text-[#D8D0C5] mt-1 font-light">
              We would be delighted to discuss the architectural and design potential of your space.
            </p>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="px-7 py-3 bg-[#FBF9F5] text-[#1C1A18] text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#EAE4DA] transition-colors shrink-0 cursor-pointer"
          >
            Inquire With Studio
          </button>
        </div>
      </div>
    </article>
  );
};
