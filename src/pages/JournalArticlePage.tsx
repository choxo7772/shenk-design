import React from 'react';
import { JournalArticle, PageId } from '../types';
import { ArrowLeft, Clock, Share2 } from 'lucide-react';

interface JournalArticlePageProps {
  article: JournalArticle;
  onNavigate: (page: PageId) => void;
  onSelectArticle: (article: JournalArticle) => void;
}

export const JournalArticlePage: React.FC<JournalArticlePageProps> = ({
  article,
  onNavigate,
}) => {
  return (
    <article className="w-full pt-32 pb-28 md:pt-40 md:pb-36">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-10">
          <button
            onClick={() => onNavigate('journal')}
            className="inline-flex items-center gap-2 text-xs tracking-[0.18em] uppercase text-[#6C8290] hover:text-[#1C1A18] transition-colors font-medium cursor-pointer"
          >
            <ArrowLeft size={14} />
            <span>Back to Journal</span>
          </button>
        </div>

        {/* Article Header */}
        <header className="space-y-6 mb-12">
          <div className="flex items-center gap-3 text-xs tracking-[0.18em] uppercase text-[#6C8290] font-medium">
            <span>{article.category}</span>
            <span>•</span>
            <span>{article.date}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock size={12} />
              {article.readTime}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1C1A18] font-normal leading-tight">
            {article.title}
          </h1>

          <p className="text-lg text-[#5A524A] font-light leading-relaxed italic border-l-2 border-[#6C8290] pl-4 py-1">
            {article.excerpt}
          </p>

          <div className="text-xs text-[#736B63] font-sans pt-2">
            By <span className="font-medium text-[#1C1A18]">{article.author}</span> • Medford, Oregon
          </div>
        </header>

        {/* Hero Image */}
        <div className="w-full aspect-[16/10] overflow-hidden bg-[#EAE4DA] mb-14">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Flow */}
        <div className="space-y-12 text-base sm:text-lg text-[#38332E] font-light leading-relaxed">
          {article.content.map((section, idx) => (
            <section key={idx} className="space-y-6">
              {section.heading && (
                <h2 className="font-serif text-2xl sm:text-3xl text-[#1C1A18] pt-4">
                  {section.heading}
                </h2>
              )}

              {section.paragraphs.map((para, pIdx) => (
                <p key={pIdx} className="leading-relaxed">
                  {para}
                </p>
              ))}

              {section.quote && (
                <blockquote className="my-8 py-6 px-8 bg-[#F4EFEB] border-l-3 border-[#1C1A18] italic font-serif text-xl text-[#1C1A18] leading-snug">
                  “{section.quote}”
                </blockquote>
              )}

              {section.image && (
                <figure className="my-8 space-y-2">
                  <div className="aspect-[16/9] overflow-hidden bg-[#EAE4DA]">
                    <img
                      src={section.image.url}
                      alt={section.image.caption}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <figcaption className="text-xs text-[#736B63] italic">
                    {section.image.caption}
                  </figcaption>
                </figure>
              )}
            </section>
          ))}
        </div>

        {/* Author Footer & Studio Inquiries */}
        <div className="mt-20 pt-12 border-t border-[#EAE4DA] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-serif text-xl text-[#1C1A18]">Shenk Design Studio</h4>
            <p className="text-xs text-[#736B63] mt-0.5">
              Full-service interior architecture & design based in Medford, Oregon.
            </p>
          </div>

          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-3 bg-[#1C1A18] text-[#FBF9F5] text-xs tracking-[0.18em] uppercase font-medium hover:bg-[#2E2724] transition-colors cursor-pointer"
          >
            Start a Project
          </button>
        </div>
      </div>
    </article>
  );
};
