import React, { useState } from 'react';
import { PageId } from '../types';
import { MapPin, Phone, Mail, ArrowRight, Layers, Sparkles, Compass, Instagram, Facebook, ArrowUpRight } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

interface MaterialSpecimen {
  id: string;
  name: string;
  category: string;
  origin: string;
  characteristics: string;
  application: string;
  image: string;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const materials: MaterialSpecimen[] = [
    {
      id: 'oak',
      name: 'Rift-Sawn Oregon White Oak',
      category: 'Sustainable Timber',
      origin: 'Pacific Northwest',
      characteristics: 'Tight, linear grain with warm sandy undertones. Wire-brushed and sealed with matte organic hardwax oil.',
      application: 'Custom architectural millwork, floorboards, casework, and bespoke dining tables.',
      image: 'https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&w=900&q=85',
    },
    {
      id: 'stone',
      name: 'Honed Soapstone & Quartzite',
      category: 'Natural Slabs',
      origin: 'Pacific West Coast',
      characteristics: 'Soft velvety matte surface with continuous mineral veining. Exceptional thermal retention and tactile softness.',
      application: 'Kitchen perimeter countertops, fireplace mantels, water surfaces, and island worktops.',
      image: 'https://images.unsplash.com/photo-1598880940371-c756e015fea1?auto=format&fit=crop&w=900&q=85',
    },
    {
      id: 'brass',
      name: 'Unlacquered Living Brass',
      category: 'Patinated Metals',
      origin: 'Regional Metalcraft',
      characteristics: 'Bare, raw alloy that reacts to oxygen and hand contact over decades, slowly developing deep golden and bronze patina.',
      application: 'Architectural cabinet pulls, custom lighting hardware, plumbing levers, and transition strips.',
      image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=900&q=85',
    },
    {
      id: 'plaster',
      name: 'Artisan Lime Plaster & Linen',
      category: 'Mineral & Fiber',
      origin: 'Old World Mineral Blends',
      characteristics: 'Breathable lime base that diffuses directional daylight with gentle shadow gradients, paired with heavy washed Belgian linen.',
      application: 'Focal wall surfaces, custom upholstered seating, acoustic drapery, and fireplace breasts.',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=85',
    },
  ];

  const [activeMaterial, setActiveMaterial] = useState<MaterialSpecimen>(materials[0]);

  return (
    <div className="w-full pt-32 pb-28 md:pt-40 md:pb-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.24em] uppercase text-[#6C8290] font-medium">
            <span className="w-2 h-2 rounded-full bg-[#6C8290]" />
            <span>Medford, Oregon</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1C1A18] font-normal leading-tight">
            About Shenk Design
          </h1>
          <p className="text-base sm:text-lg text-[#5A524A] font-light leading-relaxed pt-2">
            Established in 2015, Shenk Design LLC is an independent full-service interior design studio creating thoughtful residential and commercial spaces throughout the Rogue Valley and Southern Oregon.
          </p>
        </div>

        {/* Studio Atelier & Materiality Composition (Replaces person photo with architectural craft) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
          {/* Left Column: Original Atelier Visual & Material Palette Inspector */}
          <div className="lg:col-span-6 space-y-6">
            {/* Atelier Photography */}
            <div className="aspect-[16/11] overflow-hidden bg-[#EAE4DA] relative group">
              <img
                src={activeMaterial.image}
                alt={activeMaterial.name}
                className="w-full h-full object-cover transition-all duration-700"
              />
              <div className="absolute top-4 left-4 bg-[#1C1A18]/80 text-[#FBF9F5] backdrop-blur-xs px-3 py-1 text-[10px] tracking-[0.2em] uppercase font-mono">
                Studio Material Study
              </div>
              <div className="absolute bottom-4 right-4 bg-[#FBF9F5]/90 backdrop-blur-xs px-3 py-1.5 text-xs text-[#1C1A18] font-serif border border-[#EAE4DA]">
                {activeMaterial.name}
              </div>
            </div>

            {/* Architectural Studio Specification Plate */}
            <div className="p-6 bg-[#F4EFEB] border border-[#EAE4DA] space-y-4">
              <div className="flex items-center justify-between border-b border-[#DCD4C8] pb-3">
                <div className="flex items-center gap-2">
                  <Compass size={14} className="text-[#6C8290]" />
                  <span className="text-[11px] tracking-[0.2em] uppercase font-mono font-medium text-[#1C1A18]">
                    STUDIO SPECIFICATION PLATE № 2015-OR
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#6C8290]">42°19&apos;N 122°52&apos;W</span>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-[10px] tracking-wider uppercase text-[#9E9182] block">
                    PRACTICE LEADERSHIP
                  </span>
                  <span className="font-serif text-base text-[#1C1A18] block mt-0.5">
                    Diane Renee Shenk
                  </span>
                  <span className="text-[11px] text-[#736B63]">Studio Principal & Primary Contact</span>
                </div>
                <div>
                  <span className="text-[10px] tracking-wider uppercase text-[#9E9182] block">
                    LOCATION & ADDRESS
                  </span>
                  <span className="font-serif text-base text-[#1C1A18] block mt-0.5">
                    Medford, Oregon
                  </span>
                  <span className="text-[11px] text-[#736B63]">307 S Holly St, OR 97501</span>
                </div>
              </div>

              {/* Interactive Material Specimen Selector */}
              <div className="pt-3 border-t border-[#DCD4C8]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] tracking-[0.18em] uppercase text-[#6C8290] font-semibold flex items-center gap-1.5">
                    <Layers size={12} />
                    <span>Tactile Palette Exploration</span>
                  </span>
                  <span className="text-[10px] text-[#9E9182] font-mono">Select to inspect</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {materials.map((mat) => (
                    <button
                      key={mat.id}
                      onClick={() => setActiveMaterial(mat)}
                      className={`p-2 text-left transition-all border cursor-pointer ${
                        activeMaterial.id === mat.id
                          ? 'bg-[#1C1A18] text-white border-[#1C1A18]'
                          : 'bg-[#FBF9F5] text-[#5A524A] border-[#DCD4C8] hover:border-[#1C1A18]'
                      }`}
                    >
                      <span className="block text-[10px] font-mono opacity-60 uppercase truncate">
                        {mat.category}
                      </span>
                      <span className="block text-[11px] font-medium font-sans truncate mt-0.5">
                        {mat.name.split(' ')[0]} {mat.name.split(' ')[1]}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Active Material Insight */}
                <div className="mt-3 p-3 bg-[#FBF9F5] border border-[#EAE4DA] text-xs space-y-1">
                  <p className="text-[#38332E] font-light leading-relaxed">
                    <strong className="font-medium text-[#1C1A18]">Characteristics: </strong>
                    {activeMaterial.characteristics}
                  </p>
                  <p className="text-[#6C8290] text-[11px]">
                    <strong className="font-medium text-[#5A524A]">Primary Applications: </strong>
                    {activeMaterial.application}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Studio Narrative */}
          <div className="lg:col-span-6 space-y-6 text-[#5A524A] text-base leading-relaxed font-light">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1A18] leading-snug">
              Designing with intention, respect for place, and genuine human connection.
            </h2>
            <p>
              Shenk Design was founded on the conviction that good interior design is both an art and a practical discipline. Based in downtown Medford at 307 S Holly Street, our studio guides clients through every phase of building, renovating, or furnishing their space.
            </p>
            <p>
              Under the leadership of Diane Renee Shenk, we approach every project with curiosity and clarity. Rather than imposing a predetermined signature aesthetic, we listen intently to how our clients live, work, and host. The resulting spaces feel organic, grounded, and intrinsically personal.
            </p>
            <p>
              We maintain close working partnerships with regional general contractors, custom woodworkers, stone fabricators, and specialized artisans across Jackson County and beyond. This collaborative spirit ensures that design concepts translate cleanly from architectural drawings to tactile reality.
            </p>

            <div className="pt-6 border-t border-[#EAE4DA] grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="flex items-center gap-2 text-[#5A524A]">
                <MapPin size={14} className="text-[#6C8290]" />
                <span>307 S Holly St, Medford, OR 97501</span>
              </div>
              <div className="flex items-center gap-2 text-[#5A524A]">
                <Phone size={14} className="text-[#6C8290]" />
                <a href="tel:5412833126" className="hover:text-[#1C1A18]">(541) 283-3126</a>
              </div>
              <div className="flex items-center gap-2 text-[#5A524A]">
                <Mail size={14} className="text-[#6C8290]" />
                <a href="mailto:diane@shenkdesigngroup.com" className="hover:text-[#1C1A18]">
                  diane@shenkdesigngroup.com
                </a>
              </div>
              <div className="flex items-center gap-4 text-[#5A524A]">
                <a
                  href="https://www.instagram.com/shenkdesignllc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-[#1C1A18] transition-colors"
                  title="Shenk Design Instagram"
                >
                  <Instagram size={14} className="text-[#6C8290]" />
                  <span>Instagram</span>
                  <ArrowUpRight size={10} className="opacity-70" />
                </a>
                <a
                  href="https://www.facebook.com/shenkdesign"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-[#1C1A18] transition-colors"
                  title="Shenk Design Facebook"
                >
                  <Facebook size={14} className="text-[#6C8290]" />
                  <span>Facebook</span>
                  <ArrowUpRight size={10} className="opacity-70" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Studio Philosophy & Values Grid */}
        <div className="py-16 border-y border-[#EAE4DA] mb-24">
          <div className="max-w-2xl mb-12">
            <span className="text-[11px] tracking-[0.24em] uppercase text-[#6C8290] font-semibold block mb-2">
              Our Core Principles
            </span>
            <h2 className="font-serif text-3xl text-[#1C1A18]">
              Interiors shaped by six enduring values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-[#F4EFEB] border border-[#EAE4DA] space-y-2">
              <h3 className="font-serif text-xl text-[#1C1A18]">Functional Clarity</h3>
              <p className="text-xs text-[#5A524A] font-light leading-relaxed">
                A beautiful room must first work effortlessly. We study spatial traffic, storage requirements, and daily rituals so every element serves an intuitive purpose.
              </p>
            </div>

            <div className="p-6 bg-[#F4EFEB] border border-[#EAE4DA] space-y-2">
              <h3 className="font-serif text-xl text-[#1C1A18]">Personal Resonance</h3>
              <p className="text-xs text-[#5A524A] font-light leading-relaxed">
                We believe your environment should reflect your life, travels, and heirlooms—never looking like a staged showroom or generic template.
              </p>
            </div>

            <div className="p-6 bg-[#F4EFEB] border border-[#EAE4DA] space-y-2">
              <h3 className="font-serif text-xl text-[#1C1A18]">Visual Balance</h3>
              <p className="text-xs text-[#5A524A] font-light leading-relaxed">
                Achieved through restrained architectural proportion, thoughtful negative space, and deliberate contrasts between light and shadow.
              </p>
            </div>

            <div className="p-6 bg-[#F4EFEB] border border-[#EAE4DA] space-y-2">
              <h3 className="font-serif text-xl text-[#1C1A18]">Deep Comfort</h3>
              <p className="text-xs text-[#5A524A] font-light leading-relaxed">
                Comfort is acoustic, thermal, and physical. We select supportive seating, tactile textiles, and warm illumination that makes being at home a restorative joy.
              </p>
            </div>

            <div className="p-6 bg-[#F4EFEB] border border-[#EAE4DA] space-y-2">
              <h3 className="font-serif text-xl text-[#1C1A18]">Honest Materiality</h3>
              <p className="text-xs text-[#5A524A] font-light leading-relaxed">
                Natural woods, unlacquered metals, plaster, wool, and stone. Finishes that gain character and patina over time rather than wearing out.
              </p>
            </div>

            <div className="p-6 bg-[#F4EFEB] border border-[#EAE4DA] space-y-2">
              <h3 className="font-serif text-xl text-[#1C1A18]">Timeless Restraint</h3>
              <p className="text-xs text-[#5A524A] font-light leading-relaxed">
                By steering clear of fast-cycle design fads, our work maintains its quiet elegance decade after decade.
              </p>
            </div>
          </div>
        </div>

        {/* Southern Oregon Connection */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[11px] tracking-[0.24em] uppercase text-[#6C8290] font-semibold block">
              Regional Context
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1A18] font-normal leading-tight">
              Rooted in the Rogue Valley
            </h2>
            <div className="space-y-4 text-base text-[#5A524A] font-light leading-relaxed">
              <p>
                Southern Oregon possesses an inspiring landscape—surrounded by the Siskiyou and Cascade mountains, vineyard-covered valleys, and ancient river basins. Living here inspires a deep appreciation for the natural world.
              </p>
              <p>
                We design homes and commercial spaces in Medford, Ashland, Jacksonville, Rogue River, and the Applegate Valley that harmonize with this geography: framing views, maximizing natural daylight, and bringing authentic regional timber and stone inside.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="aspect-[16/10] overflow-hidden bg-[#EAE4DA]">
              <img
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85"
                alt="Southern Oregon architecture and landscape"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-xs text-[#736B63] mt-2 italic">
              Southern Oregon’s natural light and organic landscape inform our studio’s palette.
            </p>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="p-12 bg-[#1C1A18] text-[#FBF9F5] text-center space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal">
            Begin Your Project with Diane Shenk
          </h2>
          <p className="text-sm text-[#D8D0C5] max-w-xl mx-auto font-light leading-relaxed">
            Whether you are embarking on new construction, remodeling your current home, or redesigning a commercial space, we welcome your inquiry.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-3.5 bg-[#FBF9F5] text-[#1C1A18] text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#EAE4DA] transition-colors inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Start a Project</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
