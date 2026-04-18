export const siteConfig = {
  name: 'SpaceOPS',
  domain: 'onyxspaceops.com',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://onyxspaceops.com',
  tagline: 'The operating system for facility management.',
  parent: {
    name: 'Onyx Building Solutions',
    tagline: 'Solutions for facilities professionals, by facilities professionals.',
  },
  description:
    'Manage cleaning teams, track inspections, verify attendance with GPS, and generate client-ready reports. Free to start. No credit card required.',
  signupUrl: 'https://app.onyxspaceops.com/signup',
  signinUrl: 'https://app.onyxspaceops.com/signin',
  demoUrl: '/contact',
};

export const primaryNav = [
  { label: 'Features', href: '/features' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
];

export const footerNav = {
  product: [
    { label: 'Features', href: '/features' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Integrations', href: '/integrations' },
    { label: 'Security', href: '/security' },
    { label: 'Compliance', href: '/compliance' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
  resources: [
    { label: 'Help Centre', href: '#', external: true },
    { label: 'Status', href: '#', external: true },
    { label: 'Changelog', href: '#', external: true },
  ],
  legal: [
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Privacy Policy', href: '/privacy' },
  ],
};
