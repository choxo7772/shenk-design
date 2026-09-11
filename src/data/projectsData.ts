import { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'rogue-valley-residence',
    title: 'Rogue Valley Residence',
    category: 'Residential',
    location: 'Rogue River, Oregon',
    year: '2023',
    featured: true,
    heroImage:
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=85',
    summary:
      'A light-filled contemporary home nestled along the foothills of Southern Oregon, designed with warm white oak, soft natural linen, and expansive glazing that frames the landscape.',
    scope: 'Complete Interior Design, Custom Cabinetry & Spatial Flow, Full Home Furnishings',
    services: [
      'Comprehensive Space Planning',
      'Custom Millwork & Cabinetry',
      'Architectural Lighting Design',
      'Finish & Material Selection',
      'Full Furniture Procurement & Styling',
    ],
    keyMaterials: [
      'Rift-sawn White Oak',
      'Hand-troweled Lime Plaster',
      'Honed Taj Mahal Quartzite',
      'Belgian Linen',
      'Unlacquered Brass',
    ],
    description: [
      'Set against the rolling landscape of Southern Oregon, the Rogue Valley Residence was conceived as a calm sanctuary that honors the subtle shifts in Pacific Northwest light throughout the day.',
      'Our studio developed an understated material palette anchored by natural white oak, soft textured wall finishes, and honed stone. Rather than competing with the surrounding topography, the interior forms quiet vantage points, allowing architectural proportion and tactile honesty to take precedence.',
      'Custom built-in seating, architectural niches, and low-profile upholstery provide deep comfort while preserving long sightlines across the primary living and dining areas.',
    ],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85',
        caption: 'Primary living salon with floor-to-ceiling glazing opening to the Rogue Valley landscape.',
        alt: 'Bright living space with white oak flooring and minimalist furniture',
        aspect: 'wide',
      },
      {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
        caption: 'Dining room featuring bespoke oak table and sculptural brass pendant.',
        alt: 'Editorial dining room with clean lines and natural light',
        aspect: 'standard',
      },
      {
        url: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=85',
        caption: 'Kitchen island clad in honed quartzite with integrated recessed storage.',
        alt: 'Minimalist warm kitchen with quartzite and custom cabinetry',
        aspect: 'standard',
      },
      {
        url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85',
        caption: 'Reading nook with tactile linen drapery and bespoke shelving.',
        alt: 'Quiet reading corner with natural light and linen textures',
        aspect: 'tall',
      },
      {
        url: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=85',
        caption: 'Material vignette: bleached walnut joinery, hand-finished ceramics, and woven textile.',
        alt: 'Close-up architectural detail of wood and linen',
        aspect: 'wide',
      },
    ],
  },
  {
    id: 'east-medford-renovation',
    title: 'East Medford Renovation',
    category: 'Residential',
    location: 'Medford, Oregon',
    year: '2023',
    featured: true,
    heroImage:
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=2000&q=85',
    summary:
      'A thorough residential remodel in East Medford, reconfiguring a traditional floor plan into an open, enduring home with textured limewash, customized storage, and restrained luxury.',
    scope: 'Interior Architecture Reconfiguration, Kitchen & Primary Suite Renovation, Furnishings',
    services: [
      'Renovation Planning & Layout',
      'Kitchen & Bath Detail Design',
      'Flooring & Surface Specifications',
      'Color Consulting & Paint Schemes',
      'Procurement & Installation',
    ],
    keyMaterials: [
      'Smoked European Oak',
      'Roman Clay Finishes',
      'Calacatta Viola Marble Accents',
      'Brushed Bronze Fixtures',
    ],
    description: [
      'The owners of this East Medford property sought to breathe new warmth and clarity into an existing home with compartmentalized living spaces.',
      'We reorganized circulation to invite natural south-facing daylight into the central hearth and kitchen. By introducing gently softened archways and hand-finished plaster surfaces, the home gained acoustic quiet and tactile depth.',
      'Every finish was selected for longevity and graceful aging, from the solid bronze hardware to the wide-plank oiled oak flooring.',
    ],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1600&q=85',
        caption: 'Main living room anchored by a custom plaster fireplace and low-slung linen sofa.',
        alt: 'Refined living room with plaster fireplace and neutral furnishings',
        aspect: 'wide',
      },
      {
        url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85',
        caption: 'Primary suite framed with muted clay tones and custom upholstered headboard.',
        alt: 'Calm bedroom with natural fabrics and subtle lighting',
        aspect: 'standard',
      },
      {
        url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=85',
        caption: 'En-suite bath featuring double vanity in quarter-sawn oak and unlacquered brass.',
        alt: 'Primary bathroom with warm wood vanity and elegant mirrors',
        aspect: 'standard',
      },
      {
        url: 'https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?auto=format&fit=crop&w=1200&q=85',
        caption: 'Entryway console with natural stone vessel and layered architectural lighting.',
        alt: 'Entryway console vignette with warm styling',
        aspect: 'tall',
      },
    ],
  },
  {
    id: 'contemporary-kitchen',
    title: 'Contemporary Kitchen',
    category: 'Kitchen & Bath',
    location: 'Ashland, Oregon',
    year: '2024',
    featured: true,
    heroImage:
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=2000&q=85',
    summary:
      'An intentionally balanced kitchen in Ashland combining dark soapstone surfaces, custom flat-panel white oak cabinetry, and integrated architectural lighting.',
    scope: 'Complete Kitchen Architecture, Island Design, Lighting & Appliance Integration',
    services: [
      'Comprehensive Kitchen Layout & Ergonomics',
      'Custom Cabinetry Detailing',
      'Slab Selection & Fabrication Coordination',
      'Plumbing & Appliance Specification',
      'Hardware & Decorative Lighting',
    ],
    keyMaterials: [
      'Natural Charcoal Soapstone',
      'Rift White Oak Veneer',
      'Fluted Glass Accents',
      'Solid Cast Bronze Pulls',
    ],
    description: [
      'Created for clients who celebrate home cooking and gathering, this Ashland kitchen strips away visual clutter to elevate the natural beauty of authentic materials.',
      'The central island is anchored by a deep matte charcoal soapstone slab that will develop a handsome patina over decades of use. Appliances are integrated flush behind precision millwork, ensuring a seamless visual transition to the adjacent dining area.',
      'A dedicated scullery pantry handles food prep and small appliances, keeping the primary surfaces serene and ready for entertaining.',
    ],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=85',
        caption: 'Kitchen overview featuring the monolithic stone island and custom perimeter cabinetry.',
        alt: 'Modern architectural kitchen with wood cabinetry and dark stone',
        aspect: 'wide',
      },
      {
        url: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=85',
        caption: 'Detail of integrated range wall with seamless stone backsplash and brass task lighting.',
        alt: 'Kitchen counter detail with brass fixtures and stone',
        aspect: 'standard',
      },
      {
        url: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=85',
        caption: 'Breakfast bar seating with custom leather stools and concealed storage.',
        alt: 'Breakfast bar with clean design and stools',
        aspect: 'standard',
      },
      {
        url: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=1200&q=85',
        caption: 'Adjacent powder room with fluted vanity and wall-mounted brass spout.',
        alt: 'Powder room with fluted oak and bronze accents',
        aspect: 'tall',
      },
    ],
  },
  {
    id: 'southern-oregon-retreat',
    title: 'Southern Oregon Retreat',
    category: 'Residential',
    location: 'Applegate Valley, Oregon',
    year: '2022',
    featured: true,
    heroImage:
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2000&q=85',
    summary:
      'A quiet pastoral retreat framed by timber beams, reclaimed local stone, and tailored wool upholstery that reflects the surrounding Siskiyou mountain ridges.',
    scope: 'Interior Architecture Direction, Furniture Procurement, Fireplace & Hearth Design',
    services: [
      'Hearth & Architectural Feature Design',
      'Whole-Home Material Selection',
      'Custom Upholstery & Furniture',
      'Art Curation & Textile Selection',
    ],
    keyMaterials: [
      'Reclaimed Oregon Pine',
      'Locally Quarried Granite',
      'Hand-woven Wool Carpeting',
      'Patinated Saddle Leather',
    ],
    description: [
      'Located in the scenic Applegate Valley, this home was planned around quiet retreats and communal gatherings around the fire.',
      'Our team introduced a refined rustic aesthetic that balances the rugged Southern Oregon terrain with tailored elegance. We contrasted heavy timber framing with clean-lined Scandinavian silhouettes and textural woven textiles.',
      'Natural daylight pours through western exposures, shifting the mood of the rooms from crisp clarity at midday to warm amber by late afternoon.',
    ],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85',
        caption: 'Great room centered on the floor-to-ceiling dry-stack stone hearth.',
        alt: 'Spacious great room with stone fireplace and timber accents',
        aspect: 'wide',
      },
      {
        url: 'https://images.unsplash.com/photo-1600573472591-ee6c563aaec9?auto=format&fit=crop&w=1200&q=85',
        caption: 'Guest bedroom with custom pine millwork and organic wool bedding.',
        alt: 'Inviting bedroom with warm wood and wool textures',
        aspect: 'standard',
      },
      {
        url: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=85',
        caption: 'Covered terrace lounge connecting indoor living with valley panoramas.',
        alt: 'Outdoor terrace with comfortable modern seating',
        aspect: 'wide',
      },
    ],
  },
  {
    id: 'boutique-commercial-interior',
    title: 'Boutique Commercial Studio',
    category: 'Commercial',
    location: 'Medford, Oregon',
    year: '2023',
    featured: true,
    heroImage:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=85',
    summary:
      'A professional workspace designed to feel welcoming, collaborative, and acoustically calm, moving away from corporate austerity toward residential warmth.',
    scope: 'Commercial Space Planning, Reception & Conference Interiors, Finish Schedule',
    services: [
      'Commercial Space Optimization',
      'Client Reception & Lounge Design',
      'Acoustic Treatment & Lighting Plans',
      'Contract Grade Furnishings Selection',
      'Brand Environment Coordination',
    ],
    keyMaterials: [
      'Micro-cement Flooring',
      'Acoustic Felt Wall Panels in Sage',
      'Walnut Reception Millwork',
      'Frosted Fluted Glass Partitions',
    ],
    description: [
      'This Medford professional office required a comprehensive redesign to support modern, hybrid client consultations while cultivating an approachable, premium atmosphere.',
      'We replaced generic cubicles and harsh fluorescent troffers with layered warm dimming light, acoustic paneling concealed within custom wood slat walls, and ergonomic furniture wrapped in durable performance fabrics.',
      'The reception area sets an immediate tone of calm professionalism, welcoming visitors with a bespoke walnut desk and comfortable lounge seating.',
    ],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=85',
        caption: 'Main conference space with custom conference table and warm perimeter illumination.',
        alt: 'Modern conference room with natural light and walnut table',
        aspect: 'wide',
      },
      {
        url: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1200&q=85',
        caption: 'Reception lounge with tailored seating and fluted glass partitions.',
        alt: 'Welcoming commercial lounge area',
        aspect: 'standard',
      },
      {
        url: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=85',
        caption: 'Quiet focus office with built-in cabinetry and soft indirect lighting.',
        alt: 'Private office with built-in shelving and calm atmosphere',
        aspect: 'standard',
      },
    ],
  },
  {
    id: 'siskiyou-bath-suite',
    title: 'Siskiyou Bath & Primary Suite',
    category: 'Kitchen & Bath',
    location: 'Jacksonville, Oregon',
    year: '2024',
    featured: false,
    heroImage:
      'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=2000&q=85',
    summary:
      'A tranquil primary bath retreat featuring a freestanding composite stone soaking tub, handmade zellige wall tiles, and an airy walk-in rain shower.',
    scope: 'Complete Bath Reconfiguration, Custom Double Vanity, Plumbing Specifications',
    services: [
      'Bathroom Space Planning & Waterproofing Coordination',
      'Tile & Stone Specification',
      'Custom Millwork Detailing',
      'Plumbing Fixture Selection',
      'Atmospheric Lighting Scheme',
    ],
    keyMaterials: [
      'Handmade Off-White Zellige Tile',
      'Honed Limestone Flooring',
      'Natural Teak Slats',
      'Aged Iron & Brushed Nickel Fixtures',
    ],
    description: [
      'Designed as a private spa-like sanctuary in historic Jacksonville, this bath suite emphasizes water, stone, and natural morning light.',
      'The layout was reorganized to position the soaking tub under a garden-facing window, framed by softly shimmering handmade tiles that capture shifting shadows.',
      'Radiant floor heating under honed limestone tiles and a custom teak slatted bench in the walk-in shower provide daily comfort and warmth.',
    ],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1600&q=85',
        caption: 'Freestanding stone soaking tub set against handmade zellige tile wall.',
        alt: 'Freestanding tub in bright bathroom with textured tile',
        aspect: 'wide',
      },
      {
        url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=85',
        caption: 'Dual vanity with under-mount sinks and recessed medicine cabinets.',
        alt: 'Double vanity with stone counter and warm lighting',
        aspect: 'standard',
      },
      {
        url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85',
        caption: 'Walk-in rain shower with frameless glass enclosure and curbless entry.',
        alt: 'Walk-in shower with natural stone tile',
        aspect: 'standard',
      },
    ],
  },
  {
    id: 'jacksonville-historic-residence',
    title: 'Jacksonville Historic Residence',
    category: 'Residential',
    location: 'Jacksonville, Oregon',
    year: '2022',
    featured: false,
    heroImage:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85',
    summary:
      'A respectful interior refresh of a historic Jacksonville residence, preserving period architectural character while updating furniture, lighting, and textiles.',
    scope: 'Interior Decoration, Historic Color Consultation, Custom Upholstery, Lighting',
    services: [
      'Preservation-Sensitive Color Palette',
      'Antique & Modern Furniture Pairing',
      'Custom Window Treatments',
      'Lighting Modernization',
      'Accessory & Art Placement',
    ],
    keyMaterials: [
      'Original Fir Flooring',
      'Textured Wool & Mohair',
      'Hand-cast Ceramic Fixtures',
      'Antique Walnut & Brass',
    ],
    description: [
      'Historic homes in Jacksonville hold unique charm and architectural soul. Our approach focused on gentle restoration paired with thoughtful contemporary curation.',
      'We revitalized original moldings and wood floors, painting walls in warm parchment tones that highlight historic proportions without feeling dated.',
      'Carefully selected modern upholstered silhouettes sit alongside heirloom case goods, creating an authentic, lived-in atmosphere that honors the home’s heritage.',
    ],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
        caption: 'Historic dining salon pairing classic molding with contemporary lighting.',
        alt: 'Historic dining room with curated modern furniture',
        aspect: 'wide',
      },
      {
        url: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85',
        caption: 'Custom library shelving with brass library ladder and wool runner.',
        alt: 'Home library with wood shelves and books',
        aspect: 'standard',
      },
    ],
  },
  {
    id: 'ashland-creative-workplace',
    title: 'Ashland Creative Workplace',
    category: 'Commercial',
    location: 'Ashland, Oregon',
    year: '2023',
    featured: false,
    heroImage:
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=2000&q=85',
    summary:
      'A collaborative boutique office designed for a creative practice, featuring flexible breakout zones, natural timber finishes, and abundant natural greenery.',
    scope: 'Full Commercial Interior Architecture, Custom Workstations, Lighting Scheme',
    services: [
      'Workplace Space Analysis',
      'Modular Storage & Desk Systems',
      'Custom Break Room & Kitchenette',
      'Lighting & Daylight Optimization',
    ],
    keyMaterials: [
      'Pacific Maple Plywood',
      'Recycled Acoustic Panels',
      'Matte Black Steel Framing',
      'Wool Upholstery',
    ],
    description: [
      'Designed for an Ashland-based design and technology consultancy, this workplace bridges creative energy with practical functionality.',
      'We designed custom workstations with integrated cable management and soft pinboards, complemented by informal lounge clusters for casual collaboration and team discussions.',
      'The space is bathed in natural daylight from clerestory windows, creating an uplifting and focused environment for daily work.',
    ],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=85',
        caption: 'Open collaborative studio with maple desks and acoustic partitions.',
        alt: 'Bright creative office studio',
        aspect: 'wide',
      },
      {
        url: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1200&q=85',
        caption: 'Hospitality kitchenette and informal coffee bar.',
        alt: 'Office coffee bar with timber detailing',
        aspect: 'standard',
      },
    ],
  },
];
