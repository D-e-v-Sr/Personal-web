export interface ExperienceEntry {
  id: string;
  company: string;
  location: string;
  role: string;
  period: string;
  /** Machine-friendly sort/label key, e.g. "2024 — present". */
  periodLabel: string;
  type: 'Full-time' | 'Contract' | 'Freelance';
  summary: string;
  responsibilities: string[];
  technologies: string[];
  /** Specific projects or systems worth naming. */
  notableWork: string[];
}

export const experience: ExperienceEntry[] = [
  {
    id: 'abdulla-al-arif',
    company: 'Abdulla Al Arif Investment LLC',
    location: 'Dubai, UAE',
    role: 'Full-Stack Developer',
    period: 'Apr 2024 — Mar 2026',
    periodLabel: '2024 — 2026',
    type: 'Full-time',
    summary:
      'Built and ran the internal web applications a multi-entity group depends on, and kept a wide web estate online across its business sectors.',
    responsibilities: [
      'Architected internal web applications end to end',
      'Managed and maintained websites across 20+ group entities',
      'Implemented on-page SEO strategies across the estate',
      'Administered web and application hosting environments',
      'Worked directly with stakeholders to scope and prioritise work',
    ],
    technologies: [
      'Next.js',
      'TypeScript',
      'React',
      'Supabase',
      'Node.js',
      'MySQL',
      'Tailwind CSS',
    ],
    notableWork: [
      'HR Recruitment Management System — React.js, Node.js, MySQL',
      'IT Asset Management Platform — Next.js, TypeScript, Supabase',
    ],
  },
  {
    id: 'soxo-tech',
    company: 'Soxo Tech LLC',
    location: 'Calicut, India',
    role: 'Full-Stack Developer',
    period: 'Mar 2023 — Oct 2024',
    periodLabel: '2023 — 2024',
    type: 'Full-time',
    summary:
      'Turned UI/UX designs into accurate, accessible React interfaces and integrated them with Firebase-backed services.',
    responsibilities: [
      'Built responsive, accessible interfaces in React.js and Next.js',
      'Translated UI/UX designs into pixel-accurate implementations',
      'Integrated React applications with Firebase',
      'Authored unit and integration tests with Jest and Cypress',
      'Developed and consumed RESTful APIs',
    ],
    technologies: ['React', 'Next.js', 'JavaScript', 'Firebase', 'Jest', 'Cypress', 'REST APIs'],
    notableWork: [
      'Client-facing React applications with tested API layers',
    ],
  },
  {
    id: 'sixth-matrix',
    company: 'Sixth Matrix',
    location: 'Calicut, India',
    role: 'Web Developer',
    period: 'Jun 2021 — Feb 2023',
    periodLabel: '2021 — 2023',
    type: 'Full-time',
    summary:
      'Delivered responsive client websites and took responsibility for how they performed and stayed secure.',
    responsibilities: [
      'Developed and delivered responsive websites from UI/UX designs',
      'Evaluated website performance and security',
      'Managed hosting and DNS configuration',
      'Maintained version control with Git and GitHub',
    ],
    technologies: ['JavaScript', 'PHP', 'MySQL', 'HTML', 'CSS', 'Git'],
    notableWork: [
      'Client website builds with managed hosting and DNS',
    ],
  },
  {
    id: 'team-sign-in',
    company: 'Team Sign In',
    location: 'Calicut, India',
    role: 'Web Developer',
    period: 'Mar 2019 — May 2021',
    periodLabel: '2019 — 2021',
    type: 'Full-time',
    summary:
      'Delivered e-commerce builds where catalogue accuracy, search visibility and the checkout path mattered more than anything decorative.',
    responsibilities: [
      'Delivered multiple responsive, SEO-friendly e-commerce projects',
      'Built and customised sites on WordPress and Magento',
      'Managed product listings and inventory',
      'Implemented Git-based version control workflows',
    ],
    technologies: ['WordPress', 'Magento', 'JavaScript', 'SEO'],
    notableWork: [
      'E-commerce platforms for multiple small businesses',
    ],
  },
  {
    id: 'freelance',
    company: 'Freelance',
    location: 'Remote',
    role: 'Freelance Web Developer',
    period: 'Apr 2018 — Feb 2019',
    periodLabel: '2018 — 2019',
    type: 'Freelance',
    summary:
      'Built and maintained WordPress sites for small clients across a range of industries, including redesigns and ongoing upkeep.',
    responsibilities: [
      'Designed, developed and launched WordPress websites',
      'Handled redesigns and content updates',
      'Provided ongoing maintenance',
      'Worked with Elementor, Beaver Builder and Divi',
    ],
    technologies: ['WordPress', 'Elementor', 'Beaver Builder', 'Divi', 'HTML', 'CSS'],
    notableWork: ['Small-business websites across several industries'],
  },
];

export const totalExperienceYears = '7+';

/** Condensed view used on /about so the full timeline lives on /experience. */
export const experienceHighlights = experience.slice(0, 4);