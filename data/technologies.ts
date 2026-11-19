import type { LucideIcon } from 'lucide-react';
import {
  Accessibility,
  Box,
  Boxes,
  Bug,
  Cloud,
  Compass,
  Database,
  FileCode2,
  Figma,
  GitBranch,
  GitPullRequest,
  Github,
  Globe,
  Layers,
  Layout,
  MonitorSmartphone,
  Network,
  Package,
  Paintbrush,
  Rocket,
  Server,
  Settings2,
  ShieldCheck,
  Terminal,
  TestTube2,
  Workflow,
  Zap,
} from 'lucide-react';

export interface TechGroup {
  id: string;
  title: string;
  /** Where this group sits in the stack. */
  summary: string;
  items: TechItem[];
}

export interface TechItem {
  name: string;
  /** Optional one-line note on how it is used. */
  note?: string;
}

/**
 * Technology groups, ordered from interface to infrastructure.
 * Only tools actually used in delivery are listed.
 */
export const technologyGroups: TechGroup[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    summary: 'Interface construction, from layout to animation.',
    items: [
      { name: 'Next.js', note: 'App Router, server rendering, caching' },
      { name: 'React', note: 'Component architecture and state' },
      { name: 'TypeScript', note: 'Types as design feedback' },
      { name: 'JavaScript (ES6+)', note: 'Language foundation' },
      { name: 'Tailwind CSS', note: 'Token-driven styling systems' },
      { name: 'HTML5', note: 'Semantic, accessible markup' },
      { name: 'CSS3', note: 'Grid, custom properties, cascade layers' },
      { name: 'Framer Motion', note: 'Interaction and reveal choreography' },
      { name: 'Accessibility', note: 'WCAG-minded keyboard and focus support' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    summary: 'Server logic, APIs and authentication.',
    items: [
      { name: 'Node.js', note: 'Service and API runtime' },
      { name: 'Express.js', note: 'HTTP routing and middleware' },
      { name: 'REST APIs', note: 'Resource-oriented contracts' },
      { name: 'GraphQL', note: 'Composed page data' },
      { name: 'PHP', note: 'WordPress and legacy integrations' },
      { name: 'Authentication', note: 'Sessions, OAuth, role-based access' },
      { name: 'Server-side rendering', note: 'First paint from the server' },
    ],
  },
  {
    id: 'database',
    title: 'Database',
    summary: 'Schemas designed around real questions.',
    items: [
      { name: 'Supabase', note: 'Postgres, auth and row-level security' },
      { name: 'PostgreSQL', note: 'Relational modelling' },
      { name: 'MySQL', note: 'Relational modelling and reporting' },
      { name: 'MongoDB', note: 'Document modelling' },
      { name: 'Firebase', note: 'Realtime document storage' },
      { name: 'Schema design', note: 'Modelling the domain first' },
    ],
  },
  {
    id: 'cms',
    title: 'CMS',
    summary: 'Content systems owners can actually operate.',
    items: [
      { name: 'WordPress', note: 'Custom themes and content models' },
      { name: 'Elementor', note: 'Page composition' },
      { name: 'Custom themes', note: 'Child-theme-first development' },
      { name: 'Custom fields', note: 'Structured, editor-friendly content' },
      { name: 'Headless CMS', note: 'Decoupled front end from content' },
      { name: 'Custom integrations', note: 'Payments, CRM, email, webhooks' },
    ],
  },
  {
    id: 'devops',
    title: 'DevOps',
    summary: 'Shipping and keeping things running.',
    items: [
      { name: 'Git', note: 'Branch discipline and history' },
      { name: 'GitHub', note: 'Repositories, pull requests, CI' },
      { name: 'Vercel', note: 'Deployment and edge hosting' },
      { name: 'Hosting & DNS', note: 'Nameservers, records, SSL' },
      { name: 'CI/CD pipelines', note: 'Build, test and deploy on push' },
      { name: 'Testing', note: 'Jest and Cypress' },
      { name: 'Performance budgets', note: 'Regression guardrails in CI' },
    ],
  },
  {
    id: 'design',
    title: 'Design',
    summary: 'Design literacy — enough to make better technical calls.',
    items: [
      { name: 'Figma', note: 'Interface design and handoff' },
      { name: 'Design systems', note: 'Tokens, components, documentation' },
      { name: 'Responsive design', note: 'Layouts designed per breakpoint' },
      { name: 'Interaction design', note: 'States, feedback and timing' },
      { name: 'Typography', note: 'Hierarchy, rhythm and legibility' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    summary: 'The daily environment.',
    items: [
      { name: 'VS Code', note: 'Primary editor' },
      { name: 'ESLint & Prettier', note: 'Automated style and correctness' },
      { name: 'Chrome DevTools', note: 'Performance and accessibility audits' },
      { name: 'Postman', note: 'API exploration and testing' },
      { name: 'Docker', note: 'Consistent local environments' },
      { name: 'Cloudflare', note: 'DNS, caching and edge rules' },
    ],
  },
];

/**
 * Compact icon strip used in the home-page tech section. Icons are chosen to
 * communicate category rather than reproduce vendor logos.
 */
export const techIconMap: Record<string, LucideIcon> = {
  'next.js': Boxes,
  react: Box,
  typescript: FileCode2,
  javascript: FileCode2,
  tailwind: Paintbrush,
  html5: Globe,
  css3: Layers,
  'framer motion': Workflow,
  accessibility: Accessibility,
  'node.js': Server,
  'express.js': Network,
  'rest apis': Network,
  graphql: Database,
  php: Settings2,
  authentication: ShieldCheck,
  supabase: Database,
  postgresql: Database,
  mysql: Database,
  mongodb: Database,
  firebase: Zap,
  wordpress: Layout,
  elementor: Layout,
  git: GitBranch,
  github: Github,
  vercel: Rocket,
  'ci/cd pipelines': GitPullRequest,
  testing: TestTube2,
  figma: Figma,
  'design systems': Paintbrush,
  'responsive design': MonitorSmartphone,
  'interaction design': Zap,
  typography: FileCode2,
  'vs code': Terminal,
  eslint: Bug,
  docker: Package,
  cloudflare: Cloud,
  compass: Compass,
};

export function techIcon(name: string): LucideIcon {
  return techIconMap[name.toLowerCase()] ?? Boxes;
}