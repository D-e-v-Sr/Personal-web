import type { Metadata } from 'next';

import { absoluteUrl, siteConfig } from '@/data/site';

interface BuildMetadataParams {
  title: string;
  description: string;
  /** Route path, used for the canonical URL. */
  path: string;
  /** Optional Open Graph image override (absolute or root-relative). */
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
}

/**
 * Single builder for per-route metadata so titles, canonicals, Open Graph and
 * Twitter cards stay consistent across every page.
 */
export function buildMetadata({
  title,
  description,
  path,
  image,
  type = 'website',
  publishedTime,
}: BuildMetadataParams): Metadata {
  const canonical = absoluteUrl(path);
  const ogImage = image ?? '/opengraph-image';

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type,
      url: canonical,
      siteName: `${siteConfig.name} — ${siteConfig.role}`,
      title,
      description,
      locale: 'en_US',
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

/* -------------------------------------------------------------------------- */
/*  JSON-LD structured data                                                  */
/* -------------------------------------------------------------------------- */

export function personSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${siteConfig.url}/#person`,
    name: siteConfig.fullName,
    jobTitle: siteConfig.role,
    alternateName: siteConfig.secondaryRole,
    description: siteConfig.description,
    url: siteConfig.url,
    email: `mailto:${siteConfig.email}`,
    image: absoluteUrl('/opengraph-image'),
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.location.city,
      addressRegion: siteConfig.location.region,
      addressCountry: siteConfig.location.countryCode,
    },
    knowsAbout: [
      'Full-stack development',
      'Next.js',
      'React',
      'TypeScript',
      'Node.js',
      'WordPress',
      'Web performance',
      'Accessibility',
    ],
    knowsLanguage: siteConfig.languages,
    sameAs: siteConfig.socials
      .filter((social) => social.href.startsWith('http'))
      .map((social) => social.href),
  };
}

export function webSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: `${siteConfig.name} — ${siteConfig.role}`,
    description: siteConfig.description,
    inLanguage: 'en',
    publisher: { '@id': `${siteConfig.url}/#person` },
  };
}

export function professionalServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${siteConfig.url}/#service`,
    name: `${siteConfig.fullName} — ${siteConfig.role}`,
    description: siteConfig.description,
    url: siteConfig.url,
    email: `mailto:${siteConfig.email}`,
    founder: { '@id': `${siteConfig.url}/#person` },
    areaServed: [
      { '@type': 'Place', name: 'United Arab Emirates' },
      { '@type': 'Place', name: 'India' },
    ],
    availableLanguage: siteConfig.languages,
    priceRange: '$$',
    serviceType: [
      'Full-Stack Web Development',
      'Next.js Application Development',
      'WordPress Development',
      'CMS Development',
      'Website Redesign',
      'Web Performance Optimisation',
    ],
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/** Serialises a schema object for safe embedding in a <script> tag. */
export function jsonLd(schema: object) {
  return JSON.stringify(schema).replace(/</g, '\\u003c');
}