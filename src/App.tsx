import React, { useState, useEffect } from 'react';
import { PageId, Project, JournalArticle, InstagramPost } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { InstagramModal } from './components/InstagramModal';

// Pages
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { ResidentialProjectsPage } from './pages/ResidentialProjectsPage';
import { CommercialProjectsPage } from './pages/CommercialProjectsPage';
import { KitchenBathPage } from './pages/KitchenBathPage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ResidentialServicesPage } from './pages/ResidentialServicesPage';
import { CommercialServicesPage } from './pages/CommercialServicesPage';
import { JournalPage } from './pages/JournalPage';
import { JournalArticlePage } from './pages/JournalArticlePage';
import { ContactPage } from './pages/ContactPage';
import { LegalPage } from './pages/LegalPage';

import { PROJECTS } from './data/projectsData';
import { JOURNAL_ARTICLES } from './data/journalData';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<JournalArticle | null>(null);

  // Instagram Modal state
  const [instagramModalOpen, setInstagramModalOpen] = useState(false);
  const [selectedInstagramPost, setSelectedInstagramPost] = useState<InstagramPost | null>(null);

  // Synchronize with window history for browser back/forward buttons
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (event.state && event.state.page) {
        setCurrentPage(event.state.page);
        if (event.state.projectId) {
          const found = PROJECTS.find((p) => p.id === event.state.projectId);
          if (found) setSelectedProject(found);
        }
        if (event.state.articleId) {
          const found = JOURNAL_ARTICLES.find((a) => a.id === event.state.articleId);
          if (found) setSelectedArticle(found);
        }
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (page: PageId, extraState?: { project?: Project; article?: JournalArticle }) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const stateObj: { page: PageId; projectId?: string; articleId?: string } = { page };

    if (extraState?.project) {
      setSelectedProject(extraState.project);
      stateObj.projectId = extraState.project.id;
    }
    if (extraState?.article) {
      setSelectedArticle(extraState.article);
      stateObj.articleId = extraState.article.id;
    }

    try {
      window.history.pushState(stateObj, '', `#${page}`);
    } catch {
      // Ignore in sandbox environments if restricted
    }
  };

  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);
    navigateTo('project-detail', { project });
  };

  const handleSelectArticle = (article: JournalArticle) => {
    setSelectedArticle(article);
    navigateTo('journal-article', { article });
  };

  const handleOpenInstagram = (post?: InstagramPost) => {
    setSelectedInstagramPost(post || null);
    setInstagramModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#1C1A18] selection:bg-[#EAE4DA] selection:text-[#1C1A18]">
      {/* Editorial Header */}
      <Header
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenInstagram={() => handleOpenInstagram()}
      />

      {/* Main Page Content Router */}
      <main id="main-content" className="flex-grow">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={navigateTo}
            onSelectProject={handleSelectProject}
            onSelectArticle={handleSelectArticle}
            onOpenInstagram={handleOpenInstagram}
          />
        )}

        {currentPage === 'projects' && (
          <ProjectsPage onSelectProject={handleSelectProject} />
        )}

        {(currentPage === 'projects-residential' || currentPage === 'residential-projects') && (
          <ResidentialProjectsPage
            onSelectProject={handleSelectProject}
            onNavigate={navigateTo}
          />
        )}

        {(currentPage === 'projects-commercial' || currentPage === 'commercial-projects') && (
          <CommercialProjectsPage
            onSelectProject={handleSelectProject}
            onNavigate={navigateTo}
          />
        )}

        {(currentPage === 'projects-kitchen-bath' || currentPage === 'kitchen-bath') && (
          <KitchenBathPage
            onSelectProject={handleSelectProject}
            onNavigate={navigateTo}
          />
        )}

        {currentPage === 'project-detail' && selectedProject && (
          <ProjectDetailPage
            project={selectedProject}
            onSelectProject={handleSelectProject}
            onNavigate={navigateTo}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage onNavigate={navigateTo} />
        )}

        {currentPage === 'services' && (
          <ServicesPage onNavigate={navigateTo} />
        )}

        {currentPage === 'services-residential' && (
          <ResidentialServicesPage onNavigate={navigateTo} />
        )}

        {currentPage === 'services-commercial' && (
          <CommercialServicesPage onNavigate={navigateTo} />
        )}

        {currentPage === 'journal' && (
          <JournalPage
            onSelectArticle={handleSelectArticle}
            onNavigate={navigateTo}
          />
        )}

        {currentPage === 'journal-article' && selectedArticle && (
          <JournalArticlePage
            article={selectedArticle}
            onNavigate={navigateTo}
            onSelectArticle={handleSelectArticle}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage />
        )}

        {(currentPage === 'privacy' ||
          currentPage === 'terms' ||
          currentPage === 'accessibility' ||
          currentPage === 'cookies') && (
          <LegalPage page={currentPage} onNavigate={navigateTo} />
        )}
      </main>

      {/* Editorial Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenInstagram={() => handleOpenInstagram()}
      />

      {/* Instagram Editorial Showcase Modal */}
      <InstagramModal
        isOpen={instagramModalOpen}
        onClose={() => setInstagramModalOpen(false)}
        selectedPost={selectedInstagramPost}
      />
    </div>
  );
}
