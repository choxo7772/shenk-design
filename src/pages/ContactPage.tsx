import React, { useState } from 'react';
import { InquiryFormData } from '../types';
import { MapPin, Phone, Mail, Clock, CheckCircle2, ArrowRight, Instagram, Facebook, ArrowUpRight } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    email: '',
    phone: '',
    projectLocation: '',
    projectType: 'Residential',
    projectStage: 'Planning & Conceptual',
    timeline: '',
    budgetRange: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Generate an authentic client reference number
    const ref = `SD-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setReferenceId(ref);
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full pt-32 pb-28 md:pt-40 md:pb-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.24em] uppercase text-[#6C8290] font-medium">
            <span className="w-2 h-2 rounded-full bg-[#6C8290]" />
            <span>Project Inquiries</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1C1A18] font-normal leading-tight">
            Start a Project
          </h1>
          <p className="text-base sm:text-lg text-[#5A524A] font-light leading-relaxed pt-2">
            We would love to learn more about your space. Please share the details of your upcoming residential, commercial, or kitchen & bath project below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Inquiry Form Column */}
          <div className="lg:col-span-8 bg-[#F4EFEB] border border-[#EAE4DA] p-8 sm:p-12">
            {isSubmitted ? (
              <div className="py-12 space-y-6 text-center animate-in fade-in duration-300">
                <div className="w-14 h-14 bg-[#1C1A18] text-white flex items-center justify-center mx-auto rounded-full">
                  <CheckCircle2 size={28} />
                </div>
                <h3 className="font-serif text-3xl text-[#1C1A18]">
                  Thank You, {formData.fullName}
                </h3>
                <p className="text-sm text-[#5A524A] max-w-md mx-auto leading-relaxed">
                  Your project inquiry has been received. Diane Shenk will review your project details and follow up within two business days to arrange an initial consultation.
                </p>
                <div className="p-4 bg-[#FBF9F5] border border-[#EAE4DA] max-w-sm mx-auto text-xs text-[#736B63] space-y-1">
                  <p className="font-mono text-[#1C1A18]">Reference: {referenceId}</p>
                  <p>Type: {formData.projectType} • Location: {formData.projectLocation || 'Southern Oregon'}</p>
                </div>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: '',
                        email: '',
                        phone: '',
                        projectLocation: '',
                        projectType: 'Residential',
                        projectStage: 'Planning & Conceptual',
                        timeline: '',
                        budgetRange: '',
                        message: '',
                      });
                    }}
                    className="text-xs tracking-[0.16em] uppercase text-[#1C1A18] underline underline-offset-4 hover:text-[#5C7482]"
                  >
                    Submit another inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <h3 className="font-serif text-2xl text-[#1C1A18] mb-1">
                    Project Questionnaire
                  </h3>
                  <p className="text-xs text-[#736B63]">
                    Please provide as much context as possible to help us prepare for our conversation.
                  </p>
                </div>

                {/* Name & Contact */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="fullName"
                      className="block text-xs uppercase tracking-[0.16em] text-[#38332E] font-medium"
                    >
                      Full Name <span className="text-[#6C8290]">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Eleanor Vance"
                      className="w-full bg-[#FBF9F5] border border-[#DCD4C8] focus:border-[#1C1A18] px-4 py-3 text-sm text-[#1C1A18] outline-hidden transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="block text-xs uppercase tracking-[0.16em] text-[#38332E] font-medium"
                    >
                      Email Address <span className="text-[#6C8290]">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. name@domain.com"
                      className="w-full bg-[#FBF9F5] border border-[#DCD4C8] focus:border-[#1C1A18] px-4 py-3 text-sm text-[#1C1A18] outline-hidden transition-colors"
                    />
                  </div>
                </div>

                {/* Phone & Location */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="block text-xs uppercase tracking-[0.16em] text-[#38332E] font-medium"
                    >
                      Phone Number <span className="text-[#6C8290]">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(541) 000-0000"
                      className="w-full bg-[#FBF9F5] border border-[#DCD4C8] focus:border-[#1C1A18] px-4 py-3 text-sm text-[#1C1A18] outline-hidden transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="projectLocation"
                      className="block text-xs uppercase tracking-[0.16em] text-[#38332E] font-medium"
                    >
                      Project Location (City / Area) <span className="text-[#6C8290]">*</span>
                    </label>
                    <input
                      id="projectLocation"
                      type="text"
                      name="projectLocation"
                      required
                      value={formData.projectLocation}
                      onChange={handleChange}
                      placeholder="e.g. Medford, Ashland, Jacksonville"
                      className="w-full bg-[#FBF9F5] border border-[#DCD4C8] focus:border-[#1C1A18] px-4 py-3 text-sm text-[#1C1A18] outline-hidden transition-colors"
                    />
                  </div>
                </div>

                {/* Project Type & Stage */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="projectType"
                      className="block text-xs uppercase tracking-[0.16em] text-[#38332E] font-medium"
                    >
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full bg-[#FBF9F5] border border-[#DCD4C8] focus:border-[#1C1A18] px-4 py-3 text-sm text-[#1C1A18] outline-hidden transition-colors cursor-pointer"
                    >
                      <option value="Residential">Residential Interior Design</option>
                      <option value="Commercial">Commercial Interior Design</option>
                      <option value="Kitchen & Bath">Kitchen & Bath Design</option>
                      <option value="Full Renovation">Full Home Renovation</option>
                      <option value="Other">Other / Specialized</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="projectStage"
                      className="block text-xs uppercase tracking-[0.16em] text-[#38332E] font-medium"
                    >
                      Project Stage
                    </label>
                    <select
                      id="projectStage"
                      name="projectStage"
                      value={formData.projectStage}
                      onChange={handleChange}
                      className="w-full bg-[#FBF9F5] border border-[#DCD4C8] focus:border-[#1C1A18] px-4 py-3 text-sm text-[#1C1A18] outline-hidden transition-colors cursor-pointer"
                    >
                      <option value="Planning & Conceptual">Early Planning & Ideas</option>
                      <option value="Architectural Drawings in Progress">Architectural Drawings in Progress</option>
                      <option value="Ready for Construction">Ready for Construction / Permitted</option>
                      <option value="Furnishing & Styling">Furnishing, Lighting & Styling</option>
                    </select>
                  </div>
                </div>

                {/* Timeline & Budget Range */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="timeline"
                      className="block text-xs uppercase tracking-[0.16em] text-[#38332E] font-medium"
                    >
                      Estimated Timeline
                    </label>
                    <input
                      id="timeline"
                      type="text"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      placeholder="e.g. Immediate, 3-6 months, Fall 2024"
                      className="w-full bg-[#FBF9F5] border border-[#DCD4C8] focus:border-[#1C1A18] px-4 py-3 text-sm text-[#1C1A18] outline-hidden transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="budgetRange"
                      className="block text-xs uppercase tracking-[0.16em] text-[#38332E] font-medium"
                    >
                      Approximate Project Budget
                    </label>
                    <select
                      id="budgetRange"
                      name="budgetRange"
                      value={formData.budgetRange}
                      onChange={handleChange}
                      className="w-full bg-[#FBF9F5] border border-[#DCD4C8] focus:border-[#1C1A18] px-4 py-3 text-sm text-[#1C1A18] outline-hidden transition-colors cursor-pointer"
                    >
                      <option value="">Select an approximate range</option>
                      <option value="Under $25,000">Under $25,000</option>
                      <option value="$25,000 – $50,000">$25,000 – $50,000</option>
                      <option value="$50,000 – $100,000">$50,000 – $100,000</option>
                      <option value="$100,000 – $250,000">$100,000 – $250,000</option>
                      <option value="$250,000+">$250,000+</option>
                    </select>
                  </div>
                </div>

                {/* Message / Details */}
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block text-xs uppercase tracking-[0.16em] text-[#38332E] font-medium"
                  >
                    Tell us about your project <span className="text-[#6C8290]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your space, functional challenges, lifestyle goals, or any questions for our studio..."
                    className="w-full bg-[#FBF9F5] border border-[#DCD4C8] focus:border-[#1C1A18] p-4 text-sm text-[#1C1A18] outline-hidden transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-4 bg-[#1C1A18] text-[#FBF9F5] text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#2E2724] transition-colors cursor-pointer inline-flex items-center justify-center gap-2"
                  >
                    <span>Submit Inquiry</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Direct Studio Information Column */}
          <div className="lg:col-span-4 space-y-8">
            <div className="p-8 bg-[#FBF9F5] border border-[#EAE4DA] space-y-6">
              <h3 className="font-serif text-2xl text-[#1C1A18]">
                Studio Location & Direct Contact
              </h3>

              <div className="space-y-4 text-xs text-[#5A524A] font-light">
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-[#6C8290] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-medium text-[#1C1A18] text-sm font-serif">
                      SHENK DESIGN LLC
                    </strong>
                    <span>
                      307 S Holly St<br />
                      Medford, OR 97501<br />
                      United States
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <Phone size={16} className="text-[#6C8290] shrink-0" />
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-[#9E9182]">
                      Telephone
                    </span>
                    <a
                      href="tel:5412833126"
                      className="text-[#1C1A18] font-medium hover:text-[#5C7482] transition-colors"
                    >
                      (541) 283-3126
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-[#6C8290] shrink-0" />
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-[#9E9182]">
                      Email
                    </span>
                    <a
                      href="mailto:diane@shenkdesigngroup.com"
                      className="text-[#1C1A18] font-medium hover:text-[#5C7482] transition-colors break-all"
                    >
                      diane@shenkdesigngroup.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2">
                  <Clock size={16} className="text-[#6C8290] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-[#9E9182]">
                      Studio Hours
                    </span>
                    <span>Monday – Friday, by appointment</span>
                  </div>
                </div>

                {/* Social Channels */}
                <div className="pt-4 border-t border-[#EAE4DA] space-y-2">
                  <span className="block text-[10px] uppercase tracking-wider text-[#9E9182]">
                    Connect Online
                  </span>
                  <div className="flex items-center gap-4">
                    <a
                      href="https://www.instagram.com/shenkdesignllc"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-[#5A524A] hover:text-[#1C1A18] font-medium transition-colors"
                      title="Shenk Design Instagram"
                    >
                      <Instagram size={15} className="text-[#6C8290]" />
                      <span>@shenkdesignllc</span>
                      <ArrowUpRight size={11} className="opacity-70" />
                    </a>
                    <a
                      href="https://www.facebook.com/shenkdesign"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-[#5A524A] hover:text-[#1C1A18] font-medium transition-colors"
                      title="Shenk Design Facebook"
                    >
                      <Facebook size={15} className="text-[#6C8290]" />
                      <span>Facebook</span>
                      <ArrowUpRight size={11} className="opacity-70" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Regional Service Area Callout */}
            <div className="p-8 bg-[#F4EFEB] border border-[#EAE4DA] space-y-3">
              <h4 className="font-serif text-lg text-[#1C1A18]">
                Service Area
              </h4>
              <p className="text-xs text-[#5A524A] font-light leading-relaxed">
                Shenk Design serves clients throughout the Rogue Valley and Southern Oregon, including:
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs text-[#1C1A18] font-medium pt-1">
                <span>• Medford</span>
                <span>• Ashland</span>
                <span>• Jacksonville</span>
                <span>• Rogue River</span>
                <span>• Applegate Valley</span>
                <span>• Grants Pass</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
