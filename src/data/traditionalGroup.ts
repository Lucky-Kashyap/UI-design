export const SITE = {
  name: 'Traditional Group',
  tagline: 'Quality and innovation across every sector we serve.',
  url: 'https://traditionalgroup.in',
  email: 'info@traditionalgroup.in',
  phoneDisplay: '97845 55227',
  phoneHref: 'tel:+919784555227',
  officePhoneDisplay: '+0141 4202222',
  officePhoneHref: 'tel:+91414202222',
  address:
    'SP-6&7 RIICO Industrial Area, Shipra Path, Mansarovar, Jaipur, Rajasthan 302020',
  facebook:
    'https://www.facebook.com/people/Traditional-Gallery-Pvt-ltd/100057586114920/',
  logo: '/traditional-group-logo.png',
} as const;

export type NavLink = { label: string; href: string };

/** Primary nav links — order matches page layout (see Home.tsx). */
export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#ventures' },
  { label: 'About Us', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

/** Nav links rendered in the header menu. */
export const HEADER_NAV_LINKS = NAV_LINKS;

/** All anchored sections in page order — used for scroll-spy. */
export const PAGE_SECTION_IDS = ['home', 'ventures', 'about', 'gallery', 'contact'] as const;

export const CONTACT_CTA = { label: 'Get a Free Quote', href: '#contact' } as const;

export type HeroSlide = {
  src: string;
  alt: string;
};

export const HERO_SLIDES: HeroSlide[] = [
  {
    src: '/media/hero-rajasthan-haveli-heritage-architecture.webp',
    alt: 'Rajasthan heritage haveli architecture — Traditional Group Jaipur hospitality',
  },
  {
    src: '/media/hero-luxury-hospitality-resort-jaipur.webp',
    alt: 'Luxury hospitality resort experience in Jaipur — Traditional Heritage Haveli',
  },
  {
    src: '/media/hero-education-campus-students-jaipur.webp',
    alt: 'Education campus and student activities in Jaipur — Shanti Asiatic School and Kindori',
  },
  {
    src: '/media/hero-adventure-nature-landscape-rajasthan.webp',
    alt: 'Adventure and nature landscape in Rajasthan — Leopard Valley eco-adventure',
  },
  {
    src: '/media/hero-manufacturing-craftsmanship-traditional-gallery.webp',
    alt: 'Premium clothing manufacturing and craftsmanship — Traditional Gallery Jaipur',
  },
];

export const HERO = {
  title: 'Traditional Group',
  titleSubline: 'Multi-venture organisation · Jaipur',
  liveLabel: 'Live across Jaipur ventures',
  descriptionShort:
    'Quality and innovation across manufacturing, education, hospitality, and eco-adventure in Jaipur.',
  description:
    'A diverse multi-venture organisation in Jaipur, dedicated to quality and innovation across manufacturing, education, hospitality, and eco-adventure.',
  primaryCta: { label: 'Contact Us', href: '#contact' },
  secondaryCta: { label: 'Explore Ventures', href: '#ventures' },
  backgroundImage: HERO_SLIDES[0].src,
} as const;

export type Venture = {
  id: string;
  name: string;
  shortName: string;
  description: string;
  sector: string;
  href: string;
  image: string;
  logoImage: string;
};

export type GalleryItem = {
  id: string;
  alt: string;
  src: string;
  sector: string;
  title: string;
  description: string;
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  venture: string;
  rating: number;
  quote: string;
};

export const VENTURES: Venture[] = [
  {
    id: 'gallery',
    name: 'Traditional Gallery Pvt. Ltd.',
    shortName: 'Traditional Gallery',
    description: 'Premium clothing manufacturing and craftsmanship.',
    sector: 'Manufacturing',
    href: 'https://traditionalgallery.com/',
    image: '/media/hero-manufacturing-craftsmanship-traditional-gallery.webp',
    logoImage:
      'https://traditionalgroup.in/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-02-at-2.42.52-PM.jpeg',
  },
  {
    id: 'haveli',
    name: 'Traditional Heritage Haveli',
    shortName: 'Heritage Haveli',
    description: 'Luxury boutique hotel experience in Jaipur.',
    sector: 'Hospitality',
    href: 'https://www.traditionalheritagehaveli.com/',
    image: '/media/hero-luxury-hospitality-resort-jaipur.webp',
    logoImage:
      'https://traditionalgroup.in/wp-content/uploads/2025/11/trdaition.webp',
  },
  {
    id: 'sas',
    name: 'Shanti Asiatic School, Jaipur',
    shortName: 'SAS Jaipur',
    description: 'World-class education rooted in values and excellence.',
    sector: 'Education',
    href: 'https://sasjaipur.com/',
    image: '/media/hero-education-campus-students-jaipur.webp',
    logoImage:
      'https://traditionalgroup.in/wp-content/uploads/2025/11/logo-1400x600-1.webp',
  },
  {
    id: 'kindori',
    name: 'Kindori IB World School, Jaipur',
    shortName: 'Kindori',
    description: 'IB World School nurturing global learners.',
    sector: 'Education',
    href: 'https://kindori.in/',
    image: '/media/gallery-education-campus-shanti-asiatic-jaipur.webp',
    logoImage:
      'https://traditionalgroup.in/wp-content/uploads/2025/11/KINDORI-LOGO-PNG-2-scaled.webp',
  },
  {
    id: 'leopard',
    name: 'Leopard Valley by Traditional Eco Adventure',
    shortName: 'Leopard Valley',
    description: 'Eco-adventure and resort experiences in nature.',
    sector: 'Eco-Adventure',
    href: 'https://www.leopardvalley.in/',
    image: '/media/hero-adventure-nature-landscape-rajasthan.webp',
    logoImage:
      'https://traditionalgroup.in/wp-content/uploads/2025/11/leoperd.webp',
  },
];

export const ABOUT = {
  eyebrow: 'Get to know us',
  title: 'About us',
  body:
    'Traditional Group is a diverse multi-venture organisation dedicated to quality and innovation. From premium clothing manufacturing to world-class education, luxury hospitality, and eco-adventure experiences, we continue to create value across every sector we serve.',
  sectors: [
    { id: 'manufacturing', label: 'Clothing and Manufacturing' },
    { id: 'hospitality', label: 'Hotel Industry' },
    { id: 'education', label: 'Education' },
    { id: 'ib-school', label: 'IB World School' },
    { id: 'eco-adventure', label: 'Eco-Adventure & Resort' },
  ],
  image: '/media/about-haveli-interior-heritage-jaipur.webp',
  stats: [
    { label: 'Ventures', value: 5, suffix: '+' },
    { label: 'Sectors', value: 5, suffix: '' },
    { label: 'Years of Trust', value: 25, suffix: '+' },
  ],
};

export const GALLERY: GalleryItem[] = [
  {
    id: 'g1',
    alt: 'Heritage haveli façade at golden hour',
    src: '/media/hero-rajasthan-haveli-heritage-architecture.webp',
    sector: 'Hospitality',
    title: 'Heritage at golden hour',
    description:
      'Tradition meets boutique luxury — the Architectural soul of Traditional Heritage Haveli, framed in Rajasthan light.',
  },
  {
    id: 'g2',
    alt: 'Premium clothing craftsmanship atelier',
    src: '/media/gallery-manufacturing-craft-traditional-gallery.webp',
    sector: 'Manufacturing',
    title: 'Craft behind Traditional Gallery',
    description:
      'Precision clothing manufacturing where fabric, fit, and finish are shaped with care and consistency.',
  },
  {
    id: 'g3',
    alt: 'Eco adventure valley and hills',
    src: '/media/gallery-eco-adventure-leopard-valley-rajasthan.webp',
    sector: 'Eco-Adventure',
    title: 'Wild edges of Leopard Valley',
    description:
      'Eco-adventure landscapes that invite guests into nature, recreation, and resort experiences.',
  },
  {
    id: 'g4',
    alt: 'Modern education campus architecture',
    src: '/media/gallery-education-campus-shanti-asiatic-jaipur.webp',
    sector: 'Education',
    title: 'Campuses that shape futures',
    description:
      'Spaces designed for learning — from Shanti Asiatic School to Kindori IB World School.',
  },
  {
    id: 'g5',
    alt: 'Boutique hotel courtyard interiors',
    src: '/media/about-haveli-interior-heritage-jaipur.webp',
    sector: 'Hospitality',
    title: 'Courtyards of calm',
    description:
      'Quiet hospitality interiors that turn heritage architecture into living guest experiences.',
  },
  {
    id: 'g6',
    alt: 'Evening resort hospitality ambience',
    src: '/media/cta-evening-resort-hospitality-jaipur.webp',
    sector: 'Resort',
    title: 'Evenings that stay with you',
    description:
      'Resort ambience after dark — soft light, open water, and the finish of a memorable stay.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'John Doe',
    role: 'Accountant',
    venture: 'Traditional Gallery',
    rating: 4.9,
    quote:
      'Traditional Group maintains exceptional standards across all its enterprises. Their dedication to customer satisfaction and long-term value truly sets them apart.',
  },
  {
    id: 't2',
    name: 'Jenny Andersson',
    role: 'Graphic designer',
    venture: 'Heritage Haveli',
    rating: 4.8,
    quote:
      'Whether it’s the premium experience at Traditional Heritage Haveli, the quality of education at Shanti Asiatic School, or the craftsmanship from Traditional Gallery.',
  },
  {
    id: 't3',
    name: 'George Smith',
    role: 'Lawyer',
    venture: 'Traditional Group',
    rating: 5,
    quote:
      'A brand you can rely on. Traditional Group brings quality, consistency, and care in every service they offer. We are fully satisfied from the Services.',
  },
  {
    id: 't4',
    name: 'Priya Sharma',
    role: 'Hospitality consultant',
    venture: 'Leopard Valley',
    rating: 4.9,
    quote:
      'From Heritage Haveli to Leopard Valley, every Traditional Group experience feels intentional, premium, and rooted in genuine Rajasthan hospitality.',
  },
];

export const FOOTER = {
  blurb:
    'Traditional Group is a multi-venture organization committed to quality and trust. From education and hospitality to manufacturing and eco-adventure, we deliver reliable services and meaningful experiences across every sector.',
};
