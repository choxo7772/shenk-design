export type PageId =
  | 'home'
  | 'projects'
  | 'project-detail'
  | 'residential-projects'
  | 'projects-residential'
  | 'commercial-projects'
  | 'projects-commercial'
  | 'kitchen-bath'
  | 'projects-kitchen-bath'
  | 'about'
  | 'services'
  | 'services-residential'
  | 'services-commercial'
  | 'journal'
  | 'journal-article'
  | 'contact'
  | 'privacy'
  | 'terms'
  | 'accessibility'
  | 'cookies';

export type ProjectCategory = 'Residential' | 'Commercial' | 'Kitchen & Bath';

export interface ProjectImage {
  url: string;
  caption?: string;
  alt: string;
  aspect?: 'wide' | 'tall' | 'square' | 'standard';
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  location: string;
  year?: string;
  heroImage: string;
  summary: string;
  scope: string;
  services: string[];
  keyMaterials?: string[];
  description: string[];
  images: ProjectImage[];
  featured?: boolean;
}

export interface JournalArticle {
  id: string;
  title: string;
  category: 'Interiors' | 'Design Notes' | 'Materials' | 'Renovation' | 'Southern Oregon';
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  author: string;
  content: {
    heading?: string;
    paragraphs: string[];
    quote?: string;
    image?: {
      url: string;
      caption: string;
    };
  }[];
}

export interface ServiceDetail {
  id: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  image: string;
  category: 'residential' | 'commercial' | 'specialized';
}

export interface InquiryFormData {
  fullName: string;
  email: string;
  phone: string;
  projectLocation: string;
  projectType: 'Residential' | 'Commercial' | 'Kitchen & Bath' | 'Full Renovation' | 'Other';
  projectStage: 'Planning & Conceptual' | 'Architectural Drawings in Progress' | 'Ready for Construction' | 'Furnishing & Styling';
  timeline: string;
  budgetRange: string;
  message: string;
}

export interface InstagramPost {
  img: string;
  caption: string;
}
