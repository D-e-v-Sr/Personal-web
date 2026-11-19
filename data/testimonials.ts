/**
 * PLACEHOLDER TESTIMONIALS
 * -------------------------
 * Every entry below is sample copy written for layout purposes. The names,
 * companies and quotes are NOT real clients and must be replaced before the
 * site goes live.
 *
 * Replace this array with genuine, permissioned testimonials. Keep the shape:
 * `quote`, `author`, `role`, `company`, and `placeholder: true`.
 */
export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  /** Set to true while the entry is placeholder copy. */
  placeholder: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: 'placeholder-1',
    quote:
      'Placeholder testimonial — replace with a real client quote about communication, delivery and the finished result.',
    author: 'Client name',
    role: 'Role',
    company: 'Company',
    placeholder: true,
  },
  {
    id: 'placeholder-2',
    quote:
      'Placeholder testimonial — a second entry keeps the layout honest at three-up on desktop and stacked on mobile.',
    author: 'Client name',
    role: 'Role',
    company: 'Company',
    placeholder: true,
  },
  {
    id: 'placeholder-3',
    quote:
      'Placeholder testimonial — keep it specific. Concrete outcomes are more persuasive than general praise.',
    author: 'Client name',
    role: 'Role',
    company: 'Company',
    placeholder: true,
  },
];