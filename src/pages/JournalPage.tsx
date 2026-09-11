import React, { useState } from 'react';
import { JournalArticle, PageId } from '../types';
import { JOURNAL_ARTICLES } from '../data/journalData';
import { ArrowRight, Clock } from 'lucide-react';

interface JournalPageProps {
  onSelectArticle: (article: JournalArticle) => void;
  onNavigate: (page: PageId) => void;
}

export const JournalPage: React.FC<JournalPageProps> = ({ onSelectArticle, onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Interiors', 'Design Notes', 'Materials', 'Southern Oregon'];

  const filteredArticles =
    activeCategory === 'All'
      ? JOURNAL_ARTICLES
      : JOURNAL_ARTICLES.filter((a) => a.category === activeCategory);

  return (
    <div className="w-full pt-32 pb-28 md:pt-40 md:pb-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.24em] uppercase text-[#6C8290] font-medium">
            <span className="w-2 h-2 rounded-full bg-[#6C8290]" />
            <span>Studio Journal & Observations</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1C1A18] font-normal leading-tight">
            Journal
          </h1>
          <p className="text-base sm:text-lg text-[#5A524A] font-light leading-relaxed pt-2">
            Reflections on interior architecture, regional Pacific Northwest light, tactile materials, and the timeless rituals of home living.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-4 pb-8 border-b border-[#EAE4DA] mb-16 text-xs tracking-[0.16em] uppercase font-medium">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#1C1A18] text-[#FBF9F5]'
                  : 'text-[#5A524A] hover:text-[#1C1A18] hover:bg-[#F4EFEB]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Editorial Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              onClick={() => onSelectArticle(article)}
              className="group cursor-pointer flex flex-col space-y-5"
            >
              <div className="aspect-[16/10] overflow-hidden bg-[#EAE4DA]">
                <img
                  src={article.image}
                  alt={article.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                />
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-xs tracking-[0.16em] uppercase text-[#6C8290] font-medium">
                  <span>{article.category}</span>
                  <span>•</span>
                  <span>{article.date}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {article.readTime}
                  </span>
                </div>

                <h2 className="font-serif text-2xl sm:text-3xl text-[#1C1A18] group-hover:text-[#5C7482] transition-colors leading-snug">
                  {article.title}
                </h2>

                <p className="text-sm text-[#5A524A] font-light leading-relaxed">
                  {article.excerpt}
                </p>

                <div className="pt-2 text-xs tracking-[0.18em] uppercase text-[#1C1A18] font-medium inline-flex items-center gap-2">
                  <span>Read Article</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
