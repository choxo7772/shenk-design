import React from 'react';
import { Project } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
  aspectRatio?: 'landscape' | 'portrait' | 'square';
  className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onClick,
  aspectRatio = 'landscape',
  className = '',
}) => {
  const aspectClass =
    aspectRatio === 'portrait'
      ? 'aspect-[4/5]'
      : aspectRatio === 'square'
      ? 'aspect-square'
      : 'aspect-[16/10]';

  return (
    <article
      onClick={() => onClick(project)}
      className={`group cursor-pointer flex flex-col ${className}`}
    >
      {/* Image container with subtle architectural frame */}
      <div
        className={`relative w-full ${aspectClass} overflow-hidden bg-[#EAE4DA]`}
      >
        <img
          src={project.heroImage}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-103"
        />
        {/* Subtle dark gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        {/* Hover arrow badge */}
        <div className="absolute top-4 right-4 w-9 h-9 bg-[#FBF9F5]/90 backdrop-blur-xs text-[#1C1A18] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
          <ArrowUpRight size={16} />
        </div>

        {/* Category tag pill inside image corner */}
        <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-[10px] tracking-[0.2em] uppercase font-medium bg-[#1C1A18]/80 text-[#FBF9F5] px-2.5 py-1 backdrop-blur-xs">
            {project.category}
          </span>
        </div>
      </div>

      {/* Editorial caption block below */}
      <div className="pt-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-serif text-xl text-[#1C1A18] group-hover:text-[#5C7482] transition-colors leading-snug">
            {project.title}
          </h3>
          <p className="text-xs text-[#736B63] tracking-wide mt-1 font-sans">
            {project.location}
          </p>
        </div>
        <span className="text-[11px] tracking-[0.16em] uppercase text-[#9E9182] font-medium shrink-0 pt-1">
          {project.category}
        </span>
      </div>
    </article>
  );
};
