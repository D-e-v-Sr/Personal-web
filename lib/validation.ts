import { z } from 'zod';

/**
 * Select options for the contact form.
 * Kept here so the client form and the server validator cannot drift.
 */
export const projectTypeOptions = [
  { value: 'business-website', label: 'Business website' },
  { value: 'web-application', label: 'Web application' },
  { value: 'ecommerce', label: 'E-commerce' },
  { value: 'wordpress-cms', label: 'WordPress / CMS' },
  { value: 'redesign', label: 'Redesign or rebuild' },
  { value: 'performance', label: 'Performance work' },
  { value: 'maintenance', label: 'Maintenance & support' },
  { value: 'other', label: 'Something else' },
] as const;

export const budgetOptions = [
  { value: 'under-1k', label: 'Under $1,000' },
  { value: '1k-3k', label: '$1,000 — $3,000' },
  { value: '3k-7k', label: '$3,000 — $7,000' },
  { value: '7k-15k', label: '$7,000 — $15,000' },
  { value: '15k-plus', label: '$15,000+' },
  { value: 'unsure', label: 'Not sure yet' },
] as const;

export const timelineOptions = [
  { value: 'asap', label: 'As soon as possible' },
  { value: '1-month', label: 'Within a month' },
  { value: '1-3-months', label: '1 — 3 months' },
  { value: '3-plus-months', label: '3+ months' },
  { value: 'exploring', label: 'Just exploring' },
] as const;

export const contactMethodOptions = [
  { value: 'email', label: 'Email' },
  { value: 'whatsapp', label: 'WhatsApp' },
  { value: 'either', label: 'Either is fine' },
] as const;

export type ProjectTypeValue = (typeof projectTypeOptions)[number]['value'];
export type BudgetValue = (typeof budgetOptions)[number]['value'];
export type TimelineValue = (typeof timelineOptions)[number]['value'];
export type ContactMethodValue = (typeof contactMethodOptions)[number]['value'];

const valuesOf = <T extends readonly { value: string }[]>(options: T) =>
  options.map((option) => option.value);

/** Shared short-message helper so every field reports failures consistently. */
const text = (label: string, min: number, max: number) =>
  z
    .string()
    .trim()
    .min(min, `${label} is required`)
    .max(max, `${label} must be under ${max} characters`);

/** Optional fields accept an empty string (untouched form control). */
const optionalText = (max: number, label: string) =>
  z.union([z.literal(''), z.string().trim().max(max, `${label} must be under ${max} characters`)]);

/**
 * Shared contact form schema.
 *
 * Used on the client for instant feedback and on the server as the single
 * source of truth. Server validation is never skipped — the client copy only
 * improves the experience, it does not enforce anything.
 */
export const contactSchema = z.object({
  name: text('Name', 2, 100),
  email: z
    .string()
    .trim()
    .min(3, 'Email is required')
    .max(200, 'Email must be under 200 characters')
    .email('Enter a valid email address'),
  company: optionalText(120, 'Company'),
  projectType: z.enum(valuesOf(projectTypeOptions), {
    errorMap: { message: 'Choose a project type' },
  }),
  budget: z.union([
    z.literal(''),
    z.enum(valuesOf(budgetOptions), { errorMap: { message: 'Choose a budget range' } }),
  ]),
  timeline: z.union([
    z.literal(''),
    z.enum(valuesOf(timelineOptions), { errorMap: { message: 'Choose a timeline' } }),
  ]),
  message: text('Message', 20, 5000),
  whatsapp: optionalText(40, 'WhatsApp number'),
  preferredMethod: z.union([
    z.literal(''),
    z.enum(valuesOf(contactMethodOptions), {
      errorMap: { message: 'Choose a preferred contact method' },
    }),
  ]),
  /**
   * Honeypot. Visually hidden and removed from the accessibility tree, so a
   * screen reader never announces it. Must arrive empty.
   */
  company_website: z.literal('', {
    errorMap: { message: 'Submission rejected' },
  }),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

export type ContactField = keyof ContactFormValues;

/** The nine visible fields, in tab order. */
export const contactFieldNames: ContactField[] = [
  'name',
  'email',
  'company',
  'projectType',
  'budget',
  'timeline',
  'message',
  'whatsapp',
  'preferredMethod',
];

/** Field-level errors keyed by field name — safe to send to the client. */
export type ContactFieldErrors = Partial<Record<ContactField, string>>;

export function toFieldErrors(
  issues: { path: (string | number)[]; message: string }[],
): ContactFieldErrors {
  return issues.reduce<ContactFieldErrors>((errors, issue) => {
    const key = issue.path[0] as ContactField | undefined;
    if (key && !errors[key]) errors[key] = issue.message;
    return errors;
  }, {});
}

/** Empty shape used as the form's initial values and reset state. */
export const emptyContactForm: ContactFormValues = {
  name: '',
  email: '',
  company: '',
  projectType: 'business-website',
  budget: '',
  timeline: '',
  message: '',
  whatsapp: '',
  preferredMethod: '',
  company_website: '',
};

/** Human-readable label lookup, reused by the API's error reporting. */
export const contactFieldLabels: Record<ContactField, string> = {
  name: 'Name',
  email: 'Email',
  company: 'Company',
  projectType: 'Project type',
  budget: 'Budget',
  timeline: 'Timeline',
  message: 'Message',
  whatsapp: 'WhatsApp',
  preferredMethod: 'Preferred contact method',
  company_website: 'Company website',
};