import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Zero-pads a 1-based index into an editorial "01" style label. */
export function formatIndex(index: number) {
  return String(index + 1).padStart(2, '0');
}

/** Joins class names, dropping falsy values — useful for conditional lists. */
export function listClasses(...values: (string | false | null | undefined)[]) {
  return values.filter(Boolean).join(' ');
}

/**
 * Strips ASCII control characters and trims.
 * Used on server-received strings before they are logged or rendered.
 */
// eslint-disable-next-line no-control-regex
const CONTROL_CHARS = /[\u0000-\u001F\u007F]/g;

export function cleanText(value: string) {
  return value.replace(CONTROL_CHARS, '').trim();
}