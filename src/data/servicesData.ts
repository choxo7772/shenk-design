import { ServiceDetail } from '../types';

export const SERVICES: ServiceDetail[] = [
  {
    id: 'residential-design',
    title: 'Residential Interior Design',
    category: 'residential',
    tagline: 'Comprehensive, considered interior design for custom homes, estates, and thoughtful renovations.',
    description:
      'From foundational space planning to final furnishings, we work alongside homeowners to create spaces that feel deeply personal, balanced, and responsive to daily life. We approach residential design with an emphasis on craftsmanship, authentic materials, and spatial harmony.',
    deliverables: [
      'Comprehensive spatial layouts & furniture plans',
      'Architectural millwork & custom cabinetry detailing',
      'Finish, flooring, countertop, and hardware specifications',
      'Curated furniture procurement, custom upholstery, and textile direction',
      'Architectural and decorative lighting plans',
      'Turnkey delivery, art installation, and white-glove styling',
    ],
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 'commercial-design',
    title: 'Commercial Interior Design',
    category: 'commercial',
    tagline: 'Refined, practical commercial environments that foster collaboration, focus, and welcoming hospitality.',
    description:
      'We partner with Southern Oregon businesses, boutique offices, healthcare suites, retail spaces, and hospitality venues to craft environments that reflect their brand ethos while withstanding high daily use. Our work balances acoustics, ergonomic comfort, durable materiality, and aesthetic restraint.',
    deliverables: [
      'Workplace programming & commercial space planning',
      'Brand-aligned reception, conference, and lounge concepts',
      'Contract-grade surface, flooring, and wall-covering selection',
      'Commercial lighting specification and acoustic mitigation',
      'Commercial furniture procurement & code coordination',
      'Staged installation minimizing business downtime',
    ],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 'kitchen-bath-design',
    title: 'Kitchen & Bath Design',
    category: 'specialized',
    tagline: 'Tactile, functional spaces detailed with precision craftsmanship and enduring stone, tile, and millwork.',
    description:
      'Kitchens and bathrooms are the most technically demanding and frequently experienced spaces in any building. We design custom cabinetry profiles, specify natural stone slabs and artisanal tile, and coordinate ergonomic plumbing fixtures to ensure these workhorses of the home are as intuitive as they are serene.',
    deliverables: [
      'Detailed millwork elevations and cabinet interior organization',
      'Slab selection, stone veining alignment, and edge detail coordination',
      'Plumbing fixture and appliance specification schedules',
      'Tile layouts, niche detailing, and grout coordination',
      'Layered task, ambient, and accent lighting design',
    ],
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 'renovation-planning',
    title: 'Interior Renovation Planning',
    category: 'specialized',
    tagline: 'Guiding homeowners and builders through architectural reconfiguration and finish upgrades.',
    description:
      'Renovations require a delicate balance between respecting existing architectural bones and optimizing current lifestyles. We help you re-imagine room relationships, widen sightlines, introduce natural daylight, and develop cohesive finish palettes throughout the entire structure.',
    deliverables: [
      'As-built space assessment and circulation analysis',
      'Structural and partition rearrangement guidance',
      'Builder-ready interior drawing sets and finish schedules',
      'Site visits and coordination with general contractors',
      'Problem-solving and refinement during active construction',
    ],
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 'materials-finishes',
    title: 'Finish & Material Selection',
    category: 'specialized',
    tagline: 'Curating natural woods, honed stones, woven textiles, and enduring architectural hardware.',
    description:
      'Every surface matters. We curate comprehensive material palettes composed of authentic woods, hand-crafted tiles, natural stones, lime plasters, and solid metals. We prioritize tactile honesty and finishes that age with grace rather than artificial coatings that quickly show wear.',
    deliverables: [
      'Physical material trays and curated finish palettes',
      'Comprehensive finish schedules for contractors',
      'Custom stain, glaze, and plaster sample approvals',
      'Hardware and trim scheduling',
      'Maintenance and longevity guidance',
    ],
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 'furniture-lighting',
    title: 'Furniture, Lighting & Styling',
    category: 'specialized',
    tagline: 'Artisanal furnishings, bespoke lighting, and thoughtful accessories curated for everyday comfort.',
    description:
      'The objects in a room dictate how it feels to inhabit it. We source trade-exclusive furnishings, design custom pieces tailored to your exact room proportions, specify architectural lighting that flatters human skin tones, and curate art and accessories for an effortless, collected appearance.',
    deliverables: [
      'Custom furniture specifications and fabric selections',
      'Access to exclusive designer trade showrooms and craftsmen',
      'Order tracking, freight warehousing, and white-glove delivery',
      'Window treatments, rugs, and custom pillows',
      'Final placement and styling for a turnkey reveal',
    ],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
  },
];
