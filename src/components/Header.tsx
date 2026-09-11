import React, { useState, useEffect, useRef } from 'react';
import { Logo } from './Logo';
import { PageId } from '../types';
import { ChevronDown, Menu, X, Instagram, Facebook, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId, extra?: { projectId?: string; category?: string; articleId?: string }) => void;
  onOpenInstagram?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenInstagram,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const projectsTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page navigate
  const handleNav = (page: PageId, extra?: { projectId?: string; category?: string; articleId?: string }) => {
    setMobileMenuOpen(false);
    setProjectsDropdownOpen(false);
    setServicesDropdownOpen(false);
    onNavigate(page, extra);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isProjectsActive = [
    'projects',
    'project-detail',
    'residential-projects',
    'commercial-projects',
    'kitchen-bath',
  ].includes(currentPage);

  const isServicesActive = [
    'services',
    'services-residential',
    'services-commercial',
  ].includes(currentPage);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#FBF9F5]/95 backdrop-blur-md shadow-[0_4px_24px_rgba(28,26,24,0.04)] py-4 border-b border-[#EAE4DA]'
          : 'bg-[#FBF9F5]/80 backdrop-blur-xs py-6 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Brand Identity / Logo */}
        <Logo
          variant="horizontal"
          onClick={() => handleNav('home')}
          className="hover:opacity-90 transition-opacity"
        />

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-8 text-[13px] tracking-[0.14em] uppercase text-[#38332E] font-medium"
          aria-label="Main Navigation"
        >
          {/* Projects with Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => {
              if (projectsTimeoutRef.current) clearTimeout(projectsTimeoutRef.current);
              setProjectsDropdownOpen(true);
            }}
            onMouseLeave={() => {
              projectsTimeoutRef.current = setTimeout(() => {
                setProjectsDropdownOpen(false);
              }, 180);
            }}
          >
            <button
              onClick={() => handleNav('projects')}
              className={`flex items-center gap-1.5 py-2 transition-colors duration-200 hover:text-[#1C1A18] cursor-pointer ${
                isProjectsActive ? 'text-[#1C1A18] font-semibold' : 'text-[#5A524A]'
              }`}
              aria-expanded={projectsDropdownOpen}
              aria-haspopup="true"
            >
              <span>Projects</span>
              <ChevronDown
                size={13}
                className={`transition-transform duration-200 ${
                  projectsDropdownOpen ? 'rotate-180 text-[#6C8290]' : 'opacity-60'
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            {projectsDropdownOpen && (
              <div className="absolute top-full left-0 pt-2 w-52 animate-in fade-in duration-200">
                <div className="bg-[#FBF9F5] border border-[#EAE4DA] shadow-[0_12px_32px_rgba(28,26,24,0.08)] py-2 px-1">
                  <button
                    onClick={() => handleNav('projects')}
                    className="w-full text-left px-4 py-2 text-[12px] tracking-[0.12em] uppercase text-[#5A524A] hover:text-[#1C1A18] hover:bg-[#F4EFEB] transition-colors"
                  >
                    All Projects
                  </button>
                  <button
                    onClick={() => handleNav('residential-projects')}
                    className="w-full text-left px-4 py-2 text-[12px] tracking-[0.12em] uppercase text-[#5A524A] hover:text-[#1C1A18] hover:bg-[#F4EFEB] transition-colors"
                  >
                    Residential
                  </button>
                  <button
                    onClick={() => handleNav('commercial-projects')}
                    className="w-full text-left px-4 py-2 text-[12px] tracking-[0.12em] uppercase text-[#5A524A] hover:text-[#1C1A18] hover:bg-[#F4EFEB] transition-colors"
                  >
                    Commercial
                  </button>
                  <button
                    onClick={() => handleNav('kitchen-bath')}
                    className="w-full text-left px-4 py-2 text-[12px] tracking-[0.12em] uppercase text-[#5A524A] hover:text-[#1C1A18] hover:bg-[#F4EFEB] transition-colors"
                  >
                    Kitchen & Bath
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* About */}
          <button
            onClick={() => handleNav('about')}
            className={`py-2 transition-colors duration-200 hover:text-[#1C1A18] cursor-pointer ${
              currentPage === 'about' ? 'text-[#1C1A18] font-semibold' : 'text-[#5A524A]'
            }`}
          >
            About
          </button>

          {/* Services with Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => {
              if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
              setServicesDropdownOpen(true);
            }}
            onMouseLeave={() => {
              servicesTimeoutRef.current = setTimeout(() => {
                setServicesDropdownOpen(false);
              }, 180);
            }}
          >
            <button
              onClick={() => handleNav('services')}
              className={`flex items-center gap-1.5 py-2 transition-colors duration-200 hover:text-[#1C1A18] cursor-pointer ${
                isServicesActive ? 'text-[#1C1A18] font-semibold' : 'text-[#5A524A]'
              }`}
              aria-expanded={servicesDropdownOpen}
              aria-haspopup="true"
            >
              <span>Services</span>
              <ChevronDown
                size={13}
                className={`transition-transform duration-200 ${
                  servicesDropdownOpen ? 'rotate-180 text-[#6C8290]' : 'opacity-60'
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            {servicesDropdownOpen && (
              <div className="absolute top-full left-0 pt-2 w-56 animate-in fade-in duration-200">
                <div className="bg-[#FBF9F5] border border-[#EAE4DA] shadow-[0_12px_32px_rgba(28,26,24,0.08)] py-2 px-1">
                  <button
                    onClick={() => handleNav('services')}
                    className="w-full text-left px-4 py-2 text-[12px] tracking-[0.12em] uppercase text-[#5A524A] hover:text-[#1C1A18] hover:bg-[#F4EFEB] transition-colors"
                  >
                    Overview
                  </button>
                  <button
                    onClick={() => handleNav('services-residential')}
                    className="w-full text-left px-4 py-2 text-[12px] tracking-[0.12em] uppercase text-[#5A524A] hover:text-[#1C1A18] hover:bg-[#F4EFEB] transition-colors"
                  >
                    Residential Design
                  </button>
                  <button
                    onClick={() => handleNav('services-commercial')}
                    className="w-full text-left px-4 py-2 text-[12px] tracking-[0.12em] uppercase text-[#5A524A] hover:text-[#1C1A18] hover:bg-[#F4EFEB] transition-colors"
                  >
                    Commercial Design
                  </button>
                  <button
                    onClick={() => handleNav('kitchen-bath')}
                    className="w-full text-left px-4 py-2 text-[12px] tracking-[0.12em] uppercase text-[#5A524A] hover:text-[#1C1A18] hover:bg-[#F4EFEB] transition-colors"
                  >
                    Kitchen & Bath
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Journal */}
          <button
            onClick={() => handleNav('journal')}
            className={`py-2 transition-colors duration-200 hover:text-[#1C1A18] cursor-pointer ${
              ['journal', 'journal-article'].includes(currentPage)
                ? 'text-[#1C1A18] font-semibold'
                : 'text-[#5A524A]'
            }`}
          >
            Journal
          </button>

          {/* Contact */}
          <button
            onClick={() => handleNav('contact')}
            className={`py-2 transition-colors duration-200 hover:text-[#1C1A18] cursor-pointer ${
              currentPage === 'contact' ? 'text-[#1C1A18] font-semibold' : 'text-[#5A524A]'
            }`}
          >
            Contact
          </button>
        </nav>

        {/* Right Action: Social links & Start a Project CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://www.instagram.com/shenkdesignllc"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6E675F] hover:text-[#1C1A18] transition-colors p-1.5"
            title="Shenk Design Instagram"
            aria-label="Shenk Design Instagram"
          >
            <Instagram size={18} strokeWidth={1.5} />
          </a>

          <a
            href="https://www.facebook.com/shenkdesign"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6E675F] hover:text-[#1C1A18] transition-colors p-1.5"
            title="Shenk Design Facebook"
            aria-label="Shenk Design Facebook"
          >
            <Facebook size={18} strokeWidth={1.5} />
          </a>

          <button
            onClick={() => handleNav('contact')}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1C1A18] text-[#FBF9F5] text-[11px] tracking-[0.2em] uppercase font-medium hover:bg-[#2E2724] transition-colors cursor-pointer ml-2"
          >
            <span>Start a Project</span>
            <ArrowUpRight size={13} />
          </button>
        </div>

        {/* Mobile Hamburger Toggle & Social Links */}
        <div className="flex md:hidden items-center gap-3">
          <a
            href="https://www.instagram.com/shenkdesignllc"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6E675F] p-1.5 hover:text-[#1C1A18] transition-colors"
            aria-label="Shenk Design Instagram"
          >
            <Instagram size={18} strokeWidth={1.5} />
          </a>

          <a
            href="https://www.facebook.com/shenkdesign"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6E675F] p-1.5 hover:text-[#1C1A18] transition-colors"
            aria-label="Shenk Design Facebook"
          >
            <Facebook size={18} strokeWidth={1.5} />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#1C1A18] hover:text-[#6C8290] transition-colors"
            aria-label="Toggle Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-full bg-[#FBF9F5] border-b border-[#EAE4DA] shadow-xl px-6 py-8 animate-in slide-in-from-top-2 duration-300">
          <div className="flex flex-col space-y-5 text-sm tracking-[0.14em] uppercase font-medium">
            <div className="space-y-2 border-b border-[#EAE4DA] pb-4">
              <button
                onClick={() => handleNav('projects')}
                className="block text-left text-base font-serif text-[#1C1A18] font-semibold"
              >
                Projects
              </button>
              <div className="pl-4 space-y-2 pt-1">
                <button
                  onClick={() => handleNav('projects')}
                  className="block text-left text-[12px] text-[#6E675F]"
                >
                  All Projects
                </button>
                <button
                  onClick={() => handleNav('residential-projects')}
                  className="block text-left text-[12px] text-[#6E675F]"
                >
                  Residential
                </button>
                <button
                  onClick={() => handleNav('commercial-projects')}
                  className="block text-left text-[12px] text-[#6E675F]"
                >
                  Commercial
                </button>
                <button
                  onClick={() => handleNav('kitchen-bath')}
                  className="block text-left text-[12px] text-[#6E675F]"
                >
                  Kitchen & Bath
                </button>
              </div>
            </div>

            <button
              onClick={() => handleNav('about')}
              className="text-left text-base font-serif text-[#1C1A18] border-b border-[#EAE4DA] pb-3"
            >
              About the Studio
            </button>

            <div className="space-y-2 border-b border-[#EAE4DA] pb-4">
              <button
                onClick={() => handleNav('services')}
                className="block text-left text-base font-serif text-[#1C1A18] font-semibold"
              >
                Services
              </button>
              <div className="pl-4 space-y-2 pt-1">
                <button
                  onClick={() => handleNav('services')}
                  className="block text-left text-[12px] text-[#6E675F]"
                >
                  Services Overview
                </button>
                <button
                  onClick={() => handleNav('services-residential')}
                  className="block text-left text-[12px] text-[#6E675F]"
                >
                  Residential Design
                </button>
                <button
                  onClick={() => handleNav('services-commercial')}
                  className="block text-left text-[12px] text-[#6E675F]"
                >
                  Commercial Design
                </button>
              </div>
            </div>

            <button
              onClick={() => handleNav('journal')}
              className="text-left text-base font-serif text-[#1C1A18] border-b border-[#EAE4DA] pb-3"
            >
              Journal
            </button>

            <button
              onClick={() => handleNav('contact')}
              className="text-left text-base font-serif text-[#1C1A18] border-b border-[#EAE4DA] pb-3"
            >
              Contact
            </button>

            <div className="pt-2">
              <button
                onClick={() => handleNav('contact')}
                className="w-full py-3 bg-[#1C1A18] text-[#FBF9F5] text-center text-xs tracking-[0.2em] uppercase font-medium"
              >
                Start a Project
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
