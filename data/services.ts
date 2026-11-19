import type { LucideIcon } from 'lucide-react';
import {
  Boxes,
  Code2,
  Database,
  Gauge,
  Layout,
  LifeBuoy,
  Monitor,
  Pencil,
  RefreshCw,
  Server,
  ShoppingBag,
  Zap,
} from 'lucide-react';

export interface Service {
  slug: string;
  title: string;
  /** One-line positioning statement. */
  summary: string;
  /** What is actually included in the engagement. */
  includes: string[];
  /** Who this is a good fit for. */
  forWho: string;
  /** What the client receives. */
  deliverables: string[];
  technologies: string[];
  /** Optional pricing guidance. Always labelled as indicative. */
  engagement?: {
    label: string;
    detail: string;
  };
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    slug: 'full-stack-web-development',
    title: 'Full-Stack Web Development',
    summary:
      'End-to-end product work — interface, API, data model and deployment — owned by one person.',
    includes: [
      'Technical direction and stack selection up front',
      'Responsive interface build with accessible markup',
      'API and database design',
      'Authentication, permissions and error states',
      'Deployment, monitoring setup and handover documentation',
    ],
    forWho:
      'Teams and founders who want one accountable developer instead of coordinating front end, back end and infrastructure separately.',
    deliverables: [
      'Production application',
      'Documented data model and API surface',
      'Deployment pipeline',
      'Handover notes and a walkthrough',
    ],
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Supabase'],
    engagement: {
      label: 'Project based',
      detail:
        'Indicative only — scope is agreed after a short discovery call. No pricing published until requirements are clear.',
    },
    icon: Code2,
  },
  {
    slug: 'nextjs-applications',
    title: 'Next.js Applications',
    summary:
      'Server-first React applications with routing, caching and metadata handled properly from the start.',
    includes: [
      'App Router architecture with server components by default',
      'Data fetching and caching strategy',
      'Dynamic metadata, sitemap and structured data',
      'Image optimisation and asset pipeline',
      'Bundle budgets and Core Web Vitals work',
    ],
    forWho:
      'Product teams that have outgrown a single-page app and need rendering strategy, routing and performance handled with intent.',
    deliverables: [
      'Next.js application',
      'Performance budget and Core Web Vitals report',
      'SEO metadata and sitemap configuration',
      'Documented rendering and caching decisions',
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    icon: Boxes,
  },
  {
    slug: 'wordpress-development',
    title: 'WordPress Development',
    summary:
      'Custom themes and integrations that keep WordPress fast and editable by the people who own the content.',
    includes: [
      'Custom theme development, child-theme first',
      'Page builder setup and content modelling',
      'Custom fields, templates and archive rules',
      'REST API integration with external services',
      'Hardening, backups and update discipline',
    ],
    forWho:
      'Businesses and publishers who need to update their own content daily without waiting on a developer.',
    deliverables: [
      'Custom theme and template set',
      'Documented content model',
      'Integration endpoints',
      'Editor training session',
    ],
    technologies: ['WordPress', 'PHP', 'Elementor', 'Custom fields'],
    icon: Layout,
  },
  {
    slug: 'business-websites',
    title: 'Business Websites',
    summary:
      'Marketing sites that load fast, read clearly, and are structured so search engines can follow them.',
    includes: [
      'Content-first page structure',
      'Responsive layouts designed per breakpoint',
      'On-page SEO and structured data',
      'Contact, booking or enquiry flows',
      'Analytics and search console setup',
    ],
    forWho:
      'Small and mid-sized businesses replacing an ageing site, or launching their first credible online presence.',
    deliverables: [
      'Designed and built website',
      'CMS access for content updates',
      'SEO and analytics configuration',
      'Launch checklist and post-launch support window',
    ],
    technologies: ['Next.js', 'WordPress', 'Tailwind CSS', 'Vercel'],
    icon: Monitor,
  },
  {
    slug: 'landing-pages',
    title: 'Landing Pages',
    summary:
      'Focused pages for a campaign or launch — designed to load instantly and argue one clear case.',
    includes: [
      'Single clear conversion goal',
      'Copy and layout collaboration',
      'Fast, dependency-light build',
      'Form or booking integration',
      'A/B-ready structure',
    ],
    forWho:
      'Teams launching a product, campaign or waitlist who need something live this week.',
    deliverables: [
      'Responsive landing page',
      'Conversion form or booking embed',
      'Analytics with event tracking',
      'One round of revisions included',
    ],
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    icon: Pencil,
  },
  {
    slug: 'cms-development',
    title: 'CMS Development',
    summary:
      'Content systems shaped around your content, not the other way around.',
    includes: [
      'Content model and field design',
      'Editor-facing admin experience',
      'Preview and draft workflows',
      'Role-based publishing permissions',
      'Migration from an existing system',
    ],
    forWho:
      'Teams whose content has outgrown the default admin and who need editors to be productive, not frustrated.',
    deliverables: [
      'Content model and admin interface',
      'Migration of existing content',
      'Permission and workflow configuration',
      'Editor documentation',
    ],
    technologies: ['WordPress', 'Sanity-ready headless CMS', 'Next.js', 'REST APIs'],
    icon: Database,
  },
  {
    slug: 'website-redesign',
    title: 'Website Redesign',
    summary:
      'Rebuilds that keep what works, fix what does not, and leave you with something maintainable.',
    includes: [
      'Audit of the current site before anything changes',
      'New information architecture',
      'Refreshed visual system and component library',
      'Content migration with redirects',
      'Post-launch comparison against the baseline',
    ],
    forWho:
      'Established sites that have drifted — visually, technically, or both — and need a considered reset rather than a reskin.',
    deliverables: [
      'Audit and recommendation document',
      'Redesigned site',
      'Component library and design tokens',
      'Redirect map and launch plan',
    ],
    technologies: ['Next.js', 'Tailwind CSS', 'Figma'],
    icon: RefreshCw,
  },
  {
    slug: 'performance-optimisation',
    title: 'Performance Optimisation',
    summary:
      'Measured work on what is actually slow — not a checklist, and not guesswork.',
    includes: [
      'Core Web Vitals and field-data baseline',
      'Bundle analysis and code splitting',
      'Image, font and caching optimisation',
      'Server rendering and database query tuning',
      'A regression budget wired into the build',
    ],
    forWho:
      'Sites losing traffic or conversions to load time, and teams that want the gains to stay after the sprint ends.',
    deliverables: [
      'Before and after performance report',
      'Prioritised fix list with effort estimates',
      'Optimised build',
      'Performance budget for CI',
    ],
    technologies: ['Next.js', 'Vercel', 'Lighthouse', 'Chrome DevTools'],
    icon: Gauge,
  },
  {
    slug: 'maintenance-support',
    title: 'Maintenance & Support',
    summary:
      'Ongoing technical cover for the site you already have — updates, monitoring and small improvements.',
    includes: [
      'Dependency and security updates',
      'Uptime and error monitoring',
      'Content and layout changes',
      'Monthly performance reporting',
      'Priority response window',
    ],
    forWho:
      'Businesses with a live site and nobody responsible for it — the most common and least glamorous need.',
    deliverables: [
      'Monthly maintenance plan',
      'Monitoring and alerting',
      'Documented change log',
      'Defined response times',
    ],
    technologies: ['Git', 'GitHub Actions', 'Vercel', 'Cloudflare'],
    icon: LifeBuoy,
  },
];

/** Re-exported so the "how I work" page and home page share one source. */
export const serviceIcons = {
  fullstack: Code2,
  nextjs: Boxes,
  wordpress: Layout,
  cms: Database,
  speed: Zap,
  ecommerce: ShoppingBag,
  devops: Server,
} as const;