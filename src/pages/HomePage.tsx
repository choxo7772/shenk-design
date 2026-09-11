import React from 'react';
import { Project, PageId } from '../types';
import { PROJECTS } from '../data/projectsData';
import { SERVICES } from '../data/servicesData';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId, extra?: { projectId?: string; category?: string }) => void;
  onSelectProject: (project: Project) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onSelectProject }) => {
  // Select featured works
  const heroProject = PROJECTS.find((p) => p.id === 'rogue-valley-residence') || PROJECTS[0];
  const featuredList = PROJECTS.slice(0, 5);
  const selectedCaseStudy = PROJECTS.find((p) => p.id === 'contemporary-kitchen') || PROJECTS[2];

  return (
    <div className="w-full">
      {/* =========================================================================
          HERO SECTION - Understated Architectural Composition
         ========================================================================= */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-44 lg:pb-32 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end">
          {/* Hero Typography & Intent */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.24em] uppercase text-[#6C8290] font-medium">
              <span className="w-2 h-2 rounded-full bg-[#6C8290]" />
              <span>Medford, Southern Oregon</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1C1A18] font-normal tracking-tight leading-[1.12]">
              Interiors designed for the way you live.
            </h1>

            <p className="text-base sm:text-lg text-[#5A524A] font-sans font-light leading-relaxed max-w-xl">
              Shenk Design is a Southern Oregon interior design studio creating thoughtful residential and commercial spaces that balance beauty, function, and enduring character.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onNavigate('projects')}
                className="px-7 py-3.5 bg-[#1C1A18] text-[#FBF9F5] text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#2E2724] transition-colors inline-flex items-center gap-2 cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowRight size={14} />
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="px-7 py-3.5 border border-[#1C1A18] text-[#1C1A18] text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#1C1A18] hover:text-[#FBF9F5] transition-colors cursor-pointer"
              >
                Start a Project
              </button>
            </div>
          </div>

          {/* Hero Photography Vignette */}
          <div className="lg:col-span-5">
            <div
              onClick={() => onSelectProject(heroProject)}
              className="group cursor-pointer relative overflow-hidden bg-[#EAE4DA] shadow-[0_12px_40px_rgba(28,26,24,0.06)]"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={heroProject.heroImage}
                  alt={heroProject.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-103"
                />
              </div>
              <div className="p-4 bg-[#FBF9F5] border-t border-[#EAE4DA] flex items-center justify-between">
                <div>
                  <p className="font-serif text-base text-[#1C1A18] group-hover:text-[#5C7482] transition-colors">
                    {heroProject.title}
                  </p>
                  <p className="text-[11px] text-[#736B63]">{heroProject.location}</p>
                </div>
                <div className="text-[10px] tracking-[0.16em] uppercase text-[#6C8290] font-medium flex items-center gap-1">
                  <span>Explore</span>
                  <ArrowUpRight size={12} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          STUDIO INTRODUCTION - Editorial Narrative
         ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#F4EFEB] border-y border-[#EAE4DA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-4">
              <span className="text-[11px] tracking-[0.24em] uppercase text-[#6C8290] font-semibold block mb-3">
                Studio Philosophy
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1A18] font-normal leading-tight">
                Thoughtful interiors. Personal spaces.
              </h2>
            </div>

            <div className="lg:col-span-8 space-y-6 text-[#5A524A] text-base sm:text-lg leading-relaxed font-light">
              <p>
                Shenk Design provides full-service interior design for residential and commercial clients throughout Southern Oregon. We believe a well-designed interior is not defined by transient trends, but by how naturally it supports the lives and rituals of the people who inhabit it.
              </p>
              <p>
                From practical layouts and custom cabinetry to tactile material selection, lighting, and finishes, our studio collaborates closely with homeowners, architects, and builders. We guide projects from early spatial planning through final styling, crafting distinctive environments of enduring quality and quiet comfort.
              </p>
              <div className="pt-4 flex items-center gap-8 text-xs tracking-[0.16em] uppercase text-[#1C1A18] font-medium">
                <span>Residential Design</span>
                <span className="text-[#6C8290]">•</span>
                <span>Commercial Interiors</span>
                <span className="text-[#6C8290]">•</span>
                <span>Kitchen & Bath</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FEATURED PROJECTS - Asymmetric Editorial Grid
         ========================================================================= */}
      <section className="py-24 md:py-32 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-[11px] tracking-[0.24em] uppercase text-[#6C8290] font-semibold block mb-2">
              Portfolio
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1A18] font-normal">
              Selected Works
            </h2>
          </div>

          <button
            onClick={() => onNavigate('projects')}
            className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#1C1A18] hover:text-[#5C7482] transition-colors font-medium cursor-pointer"
          >
            <span>View All Projects</span>
            <ArrowRight size={14} />
          </button>
        </div>

        {/* Asymmetric layout: 1 large full-width showcase, then 2 asymmetric columns, then 2 balanced items */}
        <div className="space-y-16">
          {/* Main Large Feature */}
          {featuredList[0] && (
            <div
              onClick={() => onSelectProject(featuredList[0])}
              className="group cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-8 overflow-hidden aspect-[16/10] bg-[#EAE4DA]">
                <img
                  src={featuredList[0].heroImage}
                  alt={featuredList[0].title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-102"
                />
              </div>
              <div className="lg:col-span-4 space-y-4">
                <span className="text-[11px] tracking-[0.2em] uppercase text-[#6C8290] font-medium">
                  {featuredList[0].category}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#1C1A18] group-hover:text-[#5C7482] transition-colors">
                  {featuredList[0].title}
                </h3>
                <p className="text-sm text-[#736B63] leading-relaxed">
                  {featuredList[0].summary}
                </p>
                <div className="pt-2 text-[11px] tracking-[0.16em] uppercase text-[#1C1A18] font-medium inline-flex items-center gap-2">
                  <span>View Project Details</span>
                  <ArrowUpRight size={14} />
                </div>
              </div>
            </div>
          )}

          {/* 2-Column Asymmetric Pair */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14">
            {featuredList[1] && (
              <div
                onClick={() => onSelectProject(featuredList[1])}
                className="md:col-span-7 group cursor-pointer space-y-4"
              >
                <div className="aspect-[4/3] overflow-hidden bg-[#EAE4DA]">
                  <img
                    src={featuredList[1].heroImage}
                    alt={featuredList[1].title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                  />
                </div>
                <div className="flex items-start justify-between gap-4 pt-1">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl text-[#1C1A18] group-hover:text-[#5C7482] transition-colors">
                      {featuredList[1].title}
                    </h3>
                    <p className="text-xs text-[#736B63] mt-1">{featuredList[1].location}</p>
                  </div>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[#9E9182] pt-1">
                    {featuredList[1].category}
                  </span>
                </div>
              </div>
            )}

            {featuredList[2] && (
              <div
                onClick={() => onSelectProject(featuredList[2])}
                className="md:col-span-5 group cursor-pointer space-y-4 md:pt-12"
              >
                <div className="aspect-[3/4] overflow-hidden bg-[#EAE4DA]">
                  <img
                    src={featuredList[2].heroImage}
                    alt={featuredList[2].title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                  />
                </div>
                <div className="flex items-start justify-between gap-4 pt-1">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl text-[#1C1A18] group-hover:text-[#5C7482] transition-colors">
                      {featuredList[2].title}
                    </h3>
                    <p className="text-xs text-[#736B63] mt-1">{featuredList[2].location}</p>
                  </div>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[#9E9182] pt-1">
                    {featuredList[2].category}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Another 2-Column Pair */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
            {featuredList[3] && (
              <div
                onClick={() => onSelectProject(featuredList[3])}
                className="group cursor-pointer space-y-4"
              >
                <div className="aspect-[16/10] overflow-hidden bg-[#EAE4DA]">
                  <img
                    src={featuredList[3].heroImage}
                    alt={featuredList[3].title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                  />
                </div>
                <div className="flex items-start justify-between gap-4 pt-1">
                  <div>
                    <h3 className="font-serif text-xl text-[#1C1A18] group-hover:text-[#5C7482] transition-colors">
                      {featuredList[3].title}
                    </h3>
                    <p className="text-xs text-[#736B63] mt-1">{featuredList[3].location}</p>
                  </div>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[#9E9182] pt-1">
                    {featuredList[3].category}
                  </span>
                </div>
              </div>
            )}

            {featuredList[4] && (
              <div
                onClick={() => onSelectProject(featuredList[4])}
                className="group cursor-pointer space-y-4"
              >
                <div className="aspect-[16/10] overflow-hidden bg-[#EAE4DA]">
                  <img
                    src={featuredList[4].heroImage}
                    alt={featuredList[4].title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                  />
                </div>
                <div className="flex items-start justify-between gap-4 pt-1">
                  <div>
                    <h3 className="font-serif text-xl text-[#1C1A18] group-hover:text-[#5C7482] transition-colors">
                      {featuredList[4].title}
                    </h3>
                    <p className="text-xs text-[#736B63] mt-1">{featuredList[4].location}</p>
                  </div>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[#9E9182] pt-1">
                    {featuredList[4].category}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SERVICES PREVIEW - Editorial Typography & Layout (No generic icon cards)
         ========================================================================= */}
      <section className="py-24 md:py-32 bg-[#F4EFEB] border-t border-[#EAE4DA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-5">
              <span className="text-[11px] tracking-[0.24em] uppercase text-[#6C8290] font-semibold block mb-3">
                Disciplines
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1A18] font-normal leading-tight">
                Full-Service Interior Design
              </h2>
            </div>
            <div className="lg:col-span-7 flex flex-col justify-end">
              <p className="text-base text-[#5A524A] font-light leading-relaxed">
                Whether undertaking a ground-up build, renovating a historic property, or outfitting a commercial workspace, we bring clarity, structure, and refined aesthetic direction to every phase of the process.
              </p>
            </div>
          </div>

          {/* Editorial Service Rows */}
          <div className="divide-y divide-[#EAE4DA] border-y border-[#EAE4DA]">
            {SERVICES.map((service, index) => (
              <div
                key={service.id}
                onClick={() => onNavigate('services')}
                className="group cursor-pointer py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline transition-colors hover:bg-[#FBF9F5]/60 px-4 -mx-4"
              >
                <div className="md:col-span-1 text-[11px] tracking-[0.2em] font-serif text-[#9E9182]">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="md:col-span-4">
                  <h3 className="font-serif text-2xl text-[#1C1A18] group-hover:text-[#5C7482] transition-colors">
                    {service.title}
                  </h3>
                </div>
                <div className="md:col-span-6 text-sm text-[#5A524A] font-light leading-relaxed">
                  {service.tagline}
                </div>
                <div className="md:col-span-1 flex justify-end">
                  <ArrowUpRight
                    size={18}
                    className="text-[#9E9182] group-hover:text-[#1C1A18] transition-colors"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <button
              onClick={() => onNavigate('services')}
              className="px-7 py-3 bg-[#1C1A18] text-[#FBF9F5] text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#2E2724] transition-colors cursor-pointer"
            >
              Explore All Services & Process
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          DESIGN PHILOSOPHY - Restrained & Tactile
         ========================================================================= */}
      <section className="py-24 md:py-32 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[11px] tracking-[0.24em] uppercase text-[#6C8290] font-semibold block">
              Design Philosophy
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1A18] font-normal leading-snug">
              Every project begins with understanding the people who will use the space.
            </h2>
            <p className="text-base text-[#5A524A] font-light leading-relaxed">
              We approach each interior not as an empty stage to be decorated, but as an architectural environment shaped by proportion, materiality, and daily ritual.
            </p>
            <p className="text-base text-[#5A524A] font-light leading-relaxed">
              Our process carefully balances six core tenets:
            </p>
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="border-l-2 border-[#6C8290] pl-4">
                <h4 className="font-serif text-base text-[#1C1A18]">Aesthetics & Proportion</h4>
                <p className="text-xs text-[#736B63] mt-0.5">Visual harmony and balanced spatial flow.</p>
              </div>
              <div className="border-l-2 border-[#6C8290] pl-4">
                <h4 className="font-serif text-base text-[#1C1A18]">Functionality</h4>
                <p className="text-xs text-[#736B63] mt-0.5">Intuitive storage and ergonomic utility.</p>
              </div>
              <div className="border-l-2 border-[#6C8290] pl-4">
                <h4 className="font-serif text-base text-[#1C1A18]">Materiality</h4>
                <p className="text-xs text-[#736B63] mt-0.5">Natural woods, living metals, and stone.</p>
              </div>
              <div className="border-l-2 border-[#6C8290] pl-4">
                <h4 className="font-serif text-base text-[#1C1A18]">Durability</h4>
                <p className="text-xs text-[#736B63] mt-0.5">Crafted to age gracefully with everyday use.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="aspect-[4/5] overflow-hidden bg-[#EAE4DA] shadow-[0_12px_40px_rgba(28,26,24,0.05)]">
              <img
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=85"
                alt="Tactile materials: wood, linen, ceramics"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SELECTED PROJECT CASE STUDY PREVIEW
         ========================================================================= */}
      <section className="py-24 md:py-32 bg-[#2E2724] text-[#FBF9F5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="aspect-[16/10] overflow-hidden bg-[#1C1A18]">
                <img
                  src={selectedCaseStudy.heroImage}
                  alt={selectedCaseStudy.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="text-[11px] tracking-[0.24em] uppercase text-[#6C8290] font-medium">
                Featured Case Study
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal leading-tight">
                {selectedCaseStudy.title}
              </h2>
              <p className="text-xs text-[#D8D0C5] tracking-wider uppercase font-sans">
                {selectedCaseStudy.location} • {selectedCaseStudy.category}
              </p>
              <p className="text-sm sm:text-base text-[#D8D0C5] font-light leading-relaxed">
                {selectedCaseStudy.summary}
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onSelectProject(selectedCaseStudy)}
                  className="px-7 py-3.5 bg-[#FBF9F5] text-[#1C1A18] text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#EAE4DA] transition-colors inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>View Project</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          ABOUT PREVIEW - Architectural Studio Introduction
         ========================================================================= */}
      <section className="py-24 md:py-32 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1 space-y-3">
            <div className="aspect-[4/5] overflow-hidden bg-[#EAE4DA] relative group shadow-[0_8px_30px_rgba(28,26,24,0.06)]">
              <img
                src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=85"
                alt="Shenk Design studio atelier and tactile materials in Medford, Oregon"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1A18]/80 via-[#1C1A18]/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-[10px] tracking-[0.24em] uppercase font-mono text-[#D8D0C5] block">
                  Studio Atelier • Medford, OR
                </span>
                <p className="font-serif text-xl text-white font-normal leading-snug">
                  Curated materials, natural light, and quiet proportion.
                </p>
              </div>
            </div>

            {/* Architectural Studio Specification Plate */}
            <div className="p-4 bg-[#F4EFEB] border border-[#EAE4DA] flex items-center justify-between text-xs">
              <div>
                <span className="text-[10px] tracking-wider uppercase text-[#9E9182] block font-mono">
                  Principal Practice
                </span>
                <span className="font-serif text-sm text-[#1C1A18] font-medium">
                  Diane Renee Shenk
                </span>
              </div>
              <div className="text-right">
                <span className="text-[10px] tracking-wider uppercase text-[#9E9182] block font-mono">
                  Location
                </span>
                <span className="text-[11px] font-mono text-[#6C8290]">
                  307 S Holly St • Est. 2015
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <span className="text-[11px] tracking-[0.24em] uppercase text-[#6C8290] font-semibold block">
              The Studio
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1A18] font-normal leading-tight">
              An independent interior design studio based in Medford, Oregon.
            </h2>
            <div className="space-y-4 text-[#5A524A] text-base leading-relaxed font-light">
              <p>
                Shenk Design is an independent interior design studio based in Medford, Oregon, serving homeowners and businesses throughout Southern Oregon. Established in 2015, the studio provides comprehensive residential and commercial design services tailored to the unique geography and architectural vernacular of the Rogue Valley.
              </p>
              <p>
                Led by Diane Renee Shenk, the studio focuses on creating interiors that are practical, beautiful, comfortable, and timeless. We work with clients who value craftsmanship, intentional material choices, and a personal design experience.
              </p>
            </div>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('about')}
                className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#1C1A18] hover:text-[#5C7482] transition-colors font-medium cursor-pointer"
              >
                <span>About the Studio</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CONTACT CTA - Elegant Invitation
         ========================================================================= */}
      <section className="py-24 md:py-32 bg-[#F4EFEB] border-t border-[#EAE4DA]">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <span className="text-[11px] tracking-[0.24em] uppercase text-[#6C8290] font-semibold block">
            Start a Conversation
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#1C1A18] font-normal">
            Have a space in mind?
          </h2>
          <p className="text-base sm:text-lg text-[#5A524A] font-light leading-relaxed max-w-xl mx-auto">
            Tell us about your home, renovation, commercial space, or upcoming project. We would love to discuss how our studio can help guide your space.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-3.5 bg-[#1C1A18] text-[#FBF9F5] text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#2E2724] transition-colors cursor-pointer"
            >
              Start a Project
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="px-8 py-3.5 border border-[#1C1A18] text-[#1C1A18] text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#1C1A18] hover:text-[#FBF9F5] transition-colors cursor-pointer"
            >
              Contact the Studio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
