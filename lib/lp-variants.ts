export type LpVariant = {
  slug: string;
  persona: string;
  headline: string;
  headlineAccent: string; // will be rendered in serif italic
  subheadline: string;
  keyMessages: string[];
  ctaPrimary: string;
  ctaSecondary: string;
};

export const lpVariants: LpVariant[] = [
  {
    slug: 'cleaning-companies',
    persona: 'For cleaning company owners',
    headline: 'Run your cleaning company like a',
    headlineAccent: 'tech company.',
    subheadline:
      'SpaceOPS gives you real-time visibility into every building, every team, and every room — so you can grow without losing quality.',
    keyMessages: [
      'Know which buildings are clean before your client calls to complain',
      'GPS-verified attendance — no more buddy punching',
      'Send clients branded reports they\u2019ll actually read',
      'Generate payroll from actual hours, not estimates',
    ],
    ctaPrimary: 'Start free',
    ctaSecondary: 'Book a demo',
  },
  {
    slug: 'facility-managers',
    persona: 'For facility managers',
    headline: 'Finally, a system that matches',
    headlineAccent: 'how you actually work.',
    subheadline:
      'Scheduling, inspections, attendance, issues, and reports — connected in one platform built specifically for facility operations.',
    keyMessages: [
      'Replace 5 spreadsheets with 1 dashboard',
      'Inspect rooms with QR codes — results recorded instantly',
      'Track issue resolution with SLA timers',
      'AI writes your executive summary so you don\u2019t have to',
    ],
    ctaPrimary: 'Start free',
    ctaSecondary: 'Book a demo',
  },
  {
    slug: 'property-managers',
    persona: 'For property managers',
    headline: 'Hold your cleaning contractors accountable —',
    headlineAccent: 'without micromanaging.',
    subheadline:
      'Give contractors SpaceOPS. Get a client portal with pass rates, SLA compliance, and issue tracking. Know the job is done without being on-site.',
    keyMessages: [
      'See pass rates by building, floor, and room',
      'Track open issues and resolution times',
      'No more "trust me, we cleaned it"',
      'One dashboard for all your properties',
    ],
    ctaPrimary: 'Get a demo',
    ctaSecondary: 'Talk to sales',
  },
];

export const getLpVariant = (slug: string) => lpVariants.find((v) => v.slug === slug);
