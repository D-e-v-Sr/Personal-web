/**
 * Editorial layout variants used by the work sections.
 * Deliberately mixed so no two project rows read the same way.
 */
export type ProjectLayout = 'feature' | 'split' | 'horizontal' | 'grid';

export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  slug: string;
  title: string;
  /** One-line summary for cards and list rows. */
  summary: string;
  /** Longer overview paragraph for the case study. */
  overview: string;
  /** Industry or category, e.g. "Internal tooling". */
  category: string;
  year: string;
  role: string;
  client: string;
  timeline: string;
  technologies: string[];
  image: ProjectImage;
  gallery: ProjectImage[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  layout: ProjectLayout;
  services: string[];
  challenge: string;
  approach: string;
  solution: string;
  features: string[];
  results: string[];
  /**
   * True when a field still holds owner-supplied placeholder copy that should
   * be replaced with real details. Rendered nowhere — it exists so the data
   * layer stays honest about what is real.
   */
  draft?: boolean;
}

/**
 * PLACEHOLDER CONTENT NOTICE
 * ---------------------------
 * Titles, summaries, technology stacks and years below reflect real work.
 * The `challenge` / `approach` / `solution` copy is written from the public
 * scope of each project — replace it with first-hand detail when you have it.
 * `client` is intentionally anonymised for confidential/internal work.
 * `liveUrl` and `githubUrl` are absent where no public URL exists.
 */
export const projects: Project[] = [
  {
    slug: 'hr-recruitment-system',
    title: 'HR Recruitment Management System',
    summary:
      'An internal web application that carries a hiring request from open role to approved offer.',
    overview:
      'A recruitment platform built for a multi-entity investment group, replacing a chain of spreadsheets and email threads. Recruiters post roles, track candidates through each stage of the pipeline, and route approvals — while leadership keeps a single view of hiring across business units.',
    category: 'Internal tooling',
    year: '2024',
    role: 'Full-Stack Developer',
    client: 'Confidential · Investment group',
    timeline: 'Built and shipped in 2024',
    technologies: ['React.js', 'Node.js', 'MySQL', 'REST APIs'],
    image: {
      src: '/images/projects/hr-recruitment.svg',
      alt: 'Placeholder preview of the recruitment system interface, showing a candidate pipeline across four stages.',
      caption: 'Recruitment dashboard — placeholder preview',
    },
    gallery: [
      {
        src: '/images/gallery/desktop-frame.svg',
        alt: 'Placeholder desktop application frame showing the main dashboard view.',
        caption: 'Desktop view',
      },
      {
        src: '/images/gallery/mobile-frame.svg',
        alt: 'Placeholder mobile application frame showing a stacked list view.',
        caption: 'Mobile view',
      },
      {
        src: '/images/gallery/flow-frame.svg',
        alt: 'Placeholder diagram of a multi-stage approval workflow.',
        caption: 'Approval flow',
      },
    ],
    featured: true,
    layout: 'feature',
    services: [
      'Product architecture',
      'Interface design',
      'Front-end build',
      'API design',
      'Database modelling',
    ],
    challenge:
      'Hiring was being tracked across spreadsheets, email threads and scattered notes. Nobody could answer simple questions — how many roles are open, where a candidate is stuck, or which approval is holding things up — without doing the work manually.',
    approach:
      'I started from the workflow rather than the screens. Working through the real recruitment path with the team, I mapped every stage, every handoff and every permission, then designed the data model around those transitions instead of around the org chart.',
    solution:
      'A React front end over a Node.js API, with MySQL holding the relational core. Job openings, candidates, stages and approvals became first-class records, so the pipeline is a query rather than a reconstruction.',
    features: [
      'Job requisition creation and approval routing',
      'Candidate pipeline with stage-by-stage history',
      'Recruiter notes and document handling',
      'Role-based access across business entities',
      'Reporting views for open roles and pipeline health',
    ],
    results: [
      'One source of truth replaced for hiring across the group',
      'Approvals moved out of email and into the system where they belong',
      'Recruiters work from a single pipeline view instead of reconciling files',
    ],
  },
  {
    slug: 'it-asset-management',
    title: 'IT Asset Management Platform',
    summary:
      'Company-wide tracking for procurement, assignment and the full lifecycle of every device.',
    overview:
      'An internal platform for the IT function to see where every piece of hardware is, who has it, and what state it is in. Procurement, assignment, transfers and retirement all leave an audit trail, so answers about equipment stop depending on whoever last handled the box.',
    category: 'Internal tooling',
    year: '2024',
    role: 'Full-Stack Developer',
    client: 'Confidential · Investment group',
    timeline: 'Built and shipped in 2024',
    technologies: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    image: {
      src: '/images/projects/it-assets.svg',
      alt: 'Placeholder preview of an asset register interface showing a table of devices, owners and statuses.',
      caption: 'Asset register — placeholder preview',
    },
    gallery: [
      {
        src: '/images/gallery/desktop-frame.svg',
        alt: 'Placeholder desktop application frame showing a data table.',
        caption: 'Asset register',
      },
      {
        src: '/images/gallery/mobile-frame.svg',
        alt: 'Placeholder mobile application frame showing asset details.',
        caption: 'Assigned to a person',
      },
    ],
    featured: true,
    layout: 'split',
    services: [
      'Data modelling',
      'Front-end build',
      'Role permissions',
      'Deployment',
    ],
    challenge:
      'Devices moved between people, departments and sites without a reliable record. Stock counts were manual, audit questions could not be answered quickly, and there was no dependable way to see the shape of the estate at once.',
    approach:
      'I treated the asset as the unit of record and everything else as events against it. That made the history implicit in the data model, which removed a whole category of reporting bugs and made the audit trail something the system produced rather than something people remembered to write.',
    solution:
      'A Next.js and TypeScript application on Supabase, with row-level security handling the boundaries between business sectors. The interface is a dense, keyboard-friendly register — the kind of screen an IT administrator can actually work in all day.',
    features: [
      'Asset register with search, filter and bulk actions',
      'Procurement, assignment, transfer and retirement states',
      'Per-person and per-department holdings',
      'Sector-scoped permissions via row-level security',
      'Exportable registers for audits',
    ],
    results: [
      'A live picture of the hardware estate across multiple business sectors',
      'Audit questions answered from the system rather than from memory',
      'A register dense and fast enough to work in daily',
    ],
  },
  {
    slug: 'real-estate-platform',
    title: 'Real Estate & Property Management Website',
    summary:
      'A maintained property platform where listings stay accurate and the browsing experience stays calm.',
    overview:
      'A property listings and management website covering search, listing detail and enquiry flow. Beyond the build, the ongoing job was keeping inventory accurate and the front end fast — a platform that stays useful long after launch.',
    category: 'Property technology',
    year: '2024',
    role: 'Full-Stack Developer',
    client: 'Confidential · Real estate',
    timeline: 'Maintained and extended in 2024',
    technologies: ['Next.js', 'TypeScript', 'Express.js', 'GraphQL', 'REST APIs'],
    image: {
      src: '/images/projects/real-estate.svg',
      alt: 'Placeholder preview of a property listings interface showing a filter rail and a grid of listing cards.',
      caption: 'Listings — placeholder preview',
    },
    gallery: [
      {
        src: '/images/gallery/desktop-frame.svg',
        alt: 'Placeholder desktop application frame showing a search and filter layout.',
        caption: 'Search and filters',
      },
      {
        src: '/images/gallery/mobile-frame.svg',
        alt: 'Placeholder mobile application frame showing a single listing card.',
        caption: 'Listing detail',
      },
      {
        src: '/images/gallery/flow-frame.svg',
        alt: 'Placeholder diagram of an enquiry submission flow.',
        caption: 'Enquiry flow',
      },
    ],
    featured: true,
    layout: 'horizontal',
    services: [
      'Front-end architecture',
      'GraphQL & REST integration',
      'Performance work',
      'Ongoing maintenance',
    ],
    challenge:
      'Property sites live or die on listing accuracy and on how quickly someone can get from "I am looking" to "this one". The catalogue needed to be manageable by non-technical staff, and the search experience needed to stay instant on a phone.',
    approach:
      'I split the work in two: a data layer that keeps listing state clean and publishable, and a front end that renders that data without waiting on it. Filters resolve client-side where they can, and the API only does the work that genuinely needs a round trip.',
    solution:
      'A Next.js and TypeScript front end over an Express service, reading through GraphQL for composed page data and REST where the shape is already right. The result is a listings surface that stays responsive while inventory changes underneath it.',
    features: [
      'Filterable listing grid with URL-persisted search state',
      'Listing detail pages with galleries and enquiry forms',
      'GraphQL for composed page data, REST for focused endpoints',
      'Image and caching strategy tuned for browsing speed',
      'Admin tooling for non-technical content updates',
    ],
    results: [
      'Listings that stay accurate without developer intervention',
      'Search state that survives sharing and back-navigation',
      'A maintenance model that keeps improving the site after handover',
    ],
  },
  {
    slug: 'ecommerce-platforms',
    title: 'E-Commerce Platforms',
    summary:
      'Multiple storefronts built and maintained on WordPress and Magento, tuned for search and conversion.',
    overview:
      'A run of e-commerce builds delivered on WordPress and Magento. The recurring work was the unglamorous kind that decides whether a store performs: catalogue structure, product data hygiene, on-page SEO, and the checkout path.',
    category: 'E-commerce',
    year: '2019 — 2021',
    role: 'Web Developer',
    client: 'Multiple small businesses',
    timeline: 'Delivered across 2019 — 2021',
    technologies: ['WordPress', 'Magento', 'JavaScript', 'SEO'],
    image: {
      src: '/images/projects/ecommerce.svg',
      alt: 'Placeholder preview of an online store interface showing a product grid and a checkout panel.',
      caption: 'Storefront — placeholder preview',
    },
    gallery: [
      {
        src: '/images/gallery/desktop-frame.svg',
        alt: 'Placeholder desktop application frame showing a product listing grid.',
        caption: 'Product listing',
      },
      {
        src: '/images/gallery/mobile-frame.svg',
        alt: 'Placeholder mobile application frame showing a product detail view.',
        caption: 'Product detail',
      },
    ],
    featured: false,
    layout: 'grid',
    services: [
      'Storefront build',
      'Catalogue & inventory setup',
      'SEO implementation',
      'Theme customisation',
    ],
    challenge:
      'Small retail stores needed a storefront that could be run by their own team, ranked in search, and still convert on a phone — usually without a large budget or a long agency engagement.',
    approach:
      'Custom themes over a stock base, so the store looked designed rather than templated, and so the catalogue stayed editable by owners. On-page SEO was treated as part of the build rather than a later add-on.',
    solution:
      'WordPress and Magento builds with customised themes, structured product data and a checkout flow reduced to as few steps as the catalogue allowed. JavaScript handled the interaction layer where it earned its place.',
    features: [
      'Custom themes built on WordPress and Magento',
      'Product catalogue and inventory management',
      'Structured product data and on-page SEO',
      'Responsive product and checkout flows',
      'Handover documentation for store owners',
    ],
    results: [
      'Storefronts owners could run and update themselves',
      'Product pages structured for search visibility',
      'Checkout paths shortened on mobile, where most retail traffic lands',
    ],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

/** Wrap-around ordering for the previous / next case study navigation. */
export function getProjectNeighbours(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) return { previous: undefined, next: undefined };

  return {
    previous: projects[(index - 1 + projects.length) % projects.length],
    next: projects[(index + 1) % projects.length],
  };
}

export const projectIndexLabel = (slug: string) => {
  const index = projects.findIndex((project) => project.slug === slug);
  return String(index + 1).padStart(2, '0');
};