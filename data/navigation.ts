import type { LucideIcon } from 'lucide-react';
import { Home, User, Briefcase, Layers, Server, Mail } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
  /** Short numeric marker used in the mobile menu and footer index. */
  index: string;
  description: string;
  icon: LucideIcon;
}

export const navItems: NavItem[] = [
  {
    label: 'Home',
    href: '/',
    index: '01',
    description: 'Overview and selected work',
    icon: Home,
  },
  {
    label: 'About',
    href: '/about',
    index: '02',
    description: 'Story, philosophy and approach',
    icon: User,
  },
  {
    label: 'Work',
    href: '/work',
    index: '03',
    description: 'Case studies and shipped products',
    icon: Briefcase,
  },
  {
    label: 'Services',
    href: '/services',
    index: '04',
    description: 'What I can build and maintain',
    icon: Layers,
  },
  {
    label: 'Experience',
    href: '/experience',
    index: '05',
    description: 'Timeline, stack and working style',
    icon: Server,
  },
  {
    label: 'Contact',
    href: '/contact',
    index: '06',
    description: 'Start a conversation',
    icon: Mail,
  },
];

export const ctaNavItem = {
  label: "Let's Work Together",
  href: '/contact',
} as const;