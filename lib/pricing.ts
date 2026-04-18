/**
 * Pricing tiers — single source of truth.
 *
 * ─────────────────────────────────────────────────────────────
 *  TODO (Joseph): REPLACE PLACEHOLDER PRICES
 *  The Pro numbers below are market-rate placeholders ($49/mo,
 *  $490/yr reflecting the 17% annual discount). Swap them for
 *  your real pricing before launch.
 * ─────────────────────────────────────────────────────────────
 */

export type PricingTier = {
  id: 'free' | 'pro' | 'enterprise';
  name: string;
  tagline: string;
  priceMonthly: number | null; // null = "Contact us"
  priceYearly: number | null;
  ctaLabel: string;
  ctaHref: string;
  highlighted?: boolean;
  includesHeader?: string;
  features: string[];
};

export const pricingTiers: PricingTier[] = [
  {
    id: 'free',
    name: 'Free',
    tagline: 'Perfect for getting started',
    priceMonthly: 0,
    priceYearly: 0,
    ctaLabel: 'Start free',
    ctaHref: 'https://app.onyxspaceops.com/signup',
    features: [
      '1 building',
      '5 team members',
      'Unlimited activities & inspections',
      'Custom checklists',
      'GPS-verified attendance',
      'Issue tracking',
      'Quality reports (PDF & CSV)',
      'Client portal',
      '3 languages (EN, ES, FR)',
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    tagline: 'For growing cleaning operations',
    priceMonthly: 49,
    priceYearly: 490,
    ctaLabel: 'Start Pro trial',
    ctaHref: 'https://app.onyxspaceops.com/signup?plan=pro',
    highlighted: true,
    includesHeader: 'Everything in Free, plus:',
    features: [
      'Unlimited buildings',
      'Unlimited team members',
      'AI floor plan vectorisation',
      'AI-powered executive summaries',
      'Advanced analytics & trends',
      'Priority email support',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    tagline: 'For large-scale operations',
    priceMonthly: null,
    priceYearly: null,
    ctaLabel: 'Contact sales',
    ctaHref: '/contact',
    includesHeader: 'Everything in Pro, plus:',
    features: [
      'REST API access',
      'Dedicated onboarding',
      'Custom integrations',
      'Priority support with SLA',
      'Single sign-on (SSO)',
      'Custom data retention',
    ],
  },
];

export const pricingFAQs = [
  {
    q: 'Is there really a free plan?',
    a: 'Yes. The free plan includes one building and five team members with no time limit. You can run real operations on it — it\u2019s not a trial.',
  },
  {
    q: 'Can I upgrade or downgrade at any time?',
    a: 'Absolutely. Upgrade to Pro or Enterprise whenever you need more buildings, more seats, or AI features. Downgrade at any time from your billing dashboard.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept all major credit and debit cards through Stripe. Enterprise customers can request invoice billing.',
  },
  {
    q: 'Do you offer discounts for annual billing?',
    a: 'Yes. Annual plans save 17% compared to monthly billing.',
  },
  {
    q: 'Is my data secure?',
    a: 'SpaceOPS enforces row-level security at the database tier. Every user only sees data belonging to their organisation and role. All data is encrypted in transit and at rest.',
  },
  {
    q: 'Can I import my existing buildings and rooms?',
    a: 'You can set up buildings manually or upload floor plan images and let AI detect rooms automatically. For Enterprise customers, we offer assisted onboarding and data migration.',
  },
  {
    q: 'What happens when I hit the free plan limits?',
    a: 'You\u2019ll see a prompt to upgrade. Nothing breaks — you just can\u2019t add more buildings or users until you upgrade or remove existing ones.',
  },
  {
    q: 'Do janitors need their own account?',
    a: 'Yes. Each janitor gets their own login so attendance, task completion, and issue reports are tracked individually. This is essential for accountability and payroll.',
  },
  {
    q: 'Can my clients see the data?',
    a: 'Yes. You can invite clients with a read-only client role. They see their buildings\u2019 pass rates, activity history, and open issues — but nothing about your internal operations, payroll, or other clients.',
  },
  {
    q: 'Is there an API?',
    a: 'Yes, on the Enterprise plan. The REST API gives you programmatic access to buildings, users, activities, and reports. Full OpenAPI documentation is included.',
  },
];
