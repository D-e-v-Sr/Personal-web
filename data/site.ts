/**
 * Central site configuration.
 *
 * Everything that identifies Sharaf — identity, contact details, social
 * profiles, SEO defaults and brand tokens — lives here so the rest of the
 * codebase never hardcodes a value that might need to change.
 *
 * Runtime secrets (Resend keys, etc.) intentionally do NOT live here. See
 * `.env.example`.
 */

export const siteConfig = {
  /** Canonical origin. Set NEXT_PUBLIC_SITE_URL in your deployment env. */
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://sharaf.dev').replace(/\/$/, ''),

  name: 'Sharaf',
  /** Used for <title> template and structured data. */
  fullName: 'Sharaf',
  role: 'Full-Stack Developer',
  secondaryRole: 'Digital Product Builder',
  tagline: 'Building digital experiences that work beautifully.',
  description:
    'Full-Stack Developer building fast, accessible websites, web applications and CMS products — from first idea to production deployment.',

  /** Short editorial intro used on the home page and in structured data. */
  intro:
    'I design and build modern web experiences from idea to deployment — interfaces that stay quick, readable and maintainable long after launch.',

  /** Longer first-person bio, used on /about and in Person JSON-LD. */
  bio: [
    'I am a full-stack developer based in Dubai, with more than seven years spent building websites, web applications and CMS platforms for startups, agencies and enterprise teams across India and the UAE.',
    'Most of my work sits where design meets infrastructure: turning a rough idea into a product that loads fast, behaves predictably on a phone, and can be handed to a business without a technical background.',
  ],

  /** Accent colour. Keep in sync with `--brand-accent` in app/globals.css. */
  accentColor: '#3a3fe0',
  themeColorLight: '#faf9f6',
  themeColorDark: '#111110',

  email: 'dev.sharafu@gmail.com',
  /** Where contact form submissions are delivered (server-side only). */
  contactInbox: process.env.CONTACT_TO_EMAIL ?? 'sharafukp19@gmail.com',

  whatsapp: {
    /** Digits only, as required by wa.me links. */
    number: '971543014975',
    /** Human-readable, used for copy-to-clipboard and tel: links. */
    display: '+971 54 301 4975',
  },

  location: {
    city: 'Dubai',
    country: 'United Arab Emirates',
    countryCode: 'AE',
    region: 'Dubai, United Arab Emirates',
    /** Place of origin, shown on the contact page map. */
    hometown: 'Malappuram, Kerala, India',
    timezone: 'Asia/Dubai',
    timezoneLabel: 'GST · UTC+04:00',
    coordinates: { latitude: 25.2048, longitude: 55.2708 },
  },

  languages: ['English', 'Malayalam'],

  availability: {
    available: true,
    label: 'Available for freelance projects',
    shortLabel: 'Available',
    /** Plain-language note. Update when the status changes. */
    note: 'Taking on freelance and contract work, plus full-time conversations.',
    /** Typical engagement start, in weeks. */
    responseTime: 'I usually reply within two business days.',
  },

  resume: {
    /** Placeholder path — drop a PDF at public/resume.pdf to activate. */
    href: '/resume.pdf',
    label: 'Download résumé',
  },

  socials: [
    {
      label: 'GitHub',
      handle: '@D-e-v-Sr',
      href: 'https://github.com/D-e-v-Sr',
    },
    {
      label: 'LinkedIn',
      handle: '/in/sharafukp',
      href: 'https://linkedin.com/in/sharafukp',
    },
    {
      label: 'WhatsApp',
      handle: '+971 54 301 4975',
      href: 'https://wa.me/971543014975',
    },
    {
      label: 'Email',
      handle: 'dev.sharafu@gmail.com',
      href: 'mailto:dev.sharafu@gmail.com',
    },
  ],

  /** Small developer-culture details used sparingly across the UI. */
  details: {
    framework: 'Next.js',
    builtWith: 'Built with Next.js, Tailwind CSS and Motion',
    designedBy: 'Designed & developed by Sharaf',
    repositoryPath: '~/projects',
  },
} as const;

export type SiteConfig = typeof siteConfig;

export function absoluteUrl(path = '/') {
  return `${siteConfig.url}${path.startsWith('/') ? path : `/${path}`}`;
}