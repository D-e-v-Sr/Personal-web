import { siteConfig } from '@/data/site';

export interface SiteFact {
  value: string;
  label: string;
  detail: string;
}

/**
 * Lightweight proof points shown under the hero. Deliberately factual —
 * no invented percentages or client counts.
 */
export const siteFacts: SiteFact[] = [
  {
    value: '7+',
    label: 'Years shipping',
    detail: 'Web products built, launched and maintained since 2018.',
  },
  {
    value: 'Full-stack',
    label: 'End to end',
    detail: 'Interface, API, data model and infrastructure — owned together.',
  },
  {
    value: 'Next.js',
    label: 'Primary stack',
    detail: 'Alongside WordPress, Node.js and a considered CMS layer.',
  },
  {
    value: 'Performance',
    label: 'Core focus',
    detail: 'Responsive layouts, accessibility and Core Web Vitals as a baseline.',
  },
];

/** Secondary nav list used in the footer. */
export const footerNavigation = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Work', href: '/work' },
  { label: 'Services', href: '/services' },
  { label: 'Experience', href: '/experience' },
  { label: 'Contact', href: '/contact' },
] as const;

export const footerBuiltWith = `${siteConfig.details.builtWith} · ${siteConfig.location.timezoneLabel}`;