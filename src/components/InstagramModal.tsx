import React from 'react';
import { X, Instagram, Facebook, ArrowRight, ArrowUpRight } from 'lucide-react';
import { InstagramPost } from '../types';

interface InstagramModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartProject?: () => void;
  selectedPost?: InstagramPost | null;
}

export const InstagramModal: React.FC<InstagramModalProps> = ({
  isOpen,
  onClose,
  onStartProject,
  selectedPost,
}) => {
  if (!isOpen) return null;

  const instagramPosts: InstagramPost[] = [
    {
      img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80',
      caption: 'Quiet morning light filtering through Belgian linen in our Rogue Valley project.',
    },
    {
      img: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80',
      caption: 'Material studies: Honed soapstone meets rift-sawn white oak cabinetry.',
    },
    {
      img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80',
      caption: 'Details matter. Tactile lime plaster and unlacquered brass hardware.',
    },
    {
      img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80',
      caption: 'Workplace interiors reimagined with residential warmth in Medford.',
    },
    {
      img: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=600&q=80',
      caption: 'Primary bath retreat in historic Jacksonville: zellige tiles and soaking tub.',
    },
    {
      img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
      caption: 'Midday shadows and quiet symmetry in East Medford.',
    },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#FBF9F5] border border-[#EAE4DA] shadow-2xl p-6 md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#736B63] hover:text-[#1C1A18] p-1.5 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className="flex items-center justify-between mb-4 pr-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#EAE4DA] flex items-center justify-center text-[#1C1A18]">
              <Instagram size={20} strokeWidth={1.75} />
            </div>
            <div>
              <h3 className="font-serif text-xl text-[#1C1A18] font-medium">
                Shenk Design on Instagram
              </h3>
              <a
                href="https://www.instagram.com/shenkdesignllc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#6C8290] hover:text-[#1C1A18] tracking-wider font-sans font-medium inline-flex items-center gap-1 transition-colors"
              >
                <span>@shenkdesignllc</span>
                <ArrowUpRight size={11} />
              </a>
            </div>
          </div>

          <a
            href="https://www.facebook.com/shenkdesign"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#EAE4DA] text-xs text-[#5A524A] hover:text-[#1C1A18] hover:border-[#1C1A18] transition-colors"
            title="Shenk Design on Facebook"
          >
            <Facebook size={13} className="text-[#6C8290]" />
            <span>Facebook</span>
            <ArrowUpRight size={10} />
          </a>
        </div>

        <p className="text-xs text-[#6E675F] mb-6 leading-relaxed">
          Follow along for behind-the-scenes material explorations, site visits, and finished project reveals across Southern Oregon and the Rogue Valley.
        </p>

        {/* Selected Post Feature (if passed) */}
        {selectedPost && (
          <div className="mb-6 p-4 bg-[#F4EFEB] border border-[#EAE4DA] flex flex-col sm:flex-row gap-4 items-center">
            <img
              src={selectedPost.img}
              alt="Selected Instagram vignette"
              className="w-24 h-24 object-cover"
            />
            <p className="text-xs text-[#38332E] italic">
              “{selectedPost.caption}”
            </p>
          </div>
        )}

        {/* Visual Feed Preview */}
        <div className="grid grid-cols-3 gap-2 md:gap-3 mb-6">
          {instagramPosts.map((post, idx) => (
            <div
              key={idx}
              className="group relative aspect-square overflow-hidden bg-[#EAE4DA]"
            >
              <img
                src={post.img}
                alt="Instagram post"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity p-2 flex items-center justify-center text-center">
                <p className="text-[10px] text-white leading-tight line-clamp-3">
                  {post.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#EAE4DA]">
          <div className="flex items-center gap-4 text-[11px] text-[#857B70]">
            <a
              href="https://www.instagram.com/shenkdesignllc"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1C1A18] transition-colors inline-flex items-center gap-1"
            >
              <span>instagram.com/shenkdesignllc</span>
              <ArrowUpRight size={11} />
            </a>
            <span className="text-[#DCD4C8]">•</span>
            <a
              href="https://www.facebook.com/shenkdesign"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1C1A18] transition-colors inline-flex items-center gap-1"
            >
              <span>facebook.com/shenkdesign</span>
              <ArrowUpRight size={11} />
            </a>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            {onStartProject && (
              <button
                onClick={() => {
                  onClose();
                  onStartProject();
                }}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#1C1A18] text-[#FBF9F5] text-[11px] tracking-[0.16em] uppercase font-medium hover:bg-[#2E2724] transition-colors cursor-pointer"
              >
                <span>Inquire for a Project</span>
                <ArrowRight size={13} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
