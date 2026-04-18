export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  author: string;
  tag: string;
  body: string[]; // paragraphs
  status: 'draft' | 'published' | 'coming-soon';
};

// Seed posts — replace/extend with real content as it\u2019s written.
export const blogPosts: BlogPost[] = [
  {
    slug: 'welcome-to-spaceops',
    title: 'Welcome to SpaceOPS — a note on what we\u2019re building and why.',
    excerpt:
      'The cleaning industry runs on paper, group chats, and trust. We\u2019re changing that without adding complexity.',
    date: '2026-04-18',
    readingTime: '3 min read',
    author: 'The SpaceOPS Team',
    tag: 'Announcements',
    status: 'published',
    body: [
      'The cleaning industry is one of the last corners of commercial real estate that runs on a combination of paper timesheets, WhatsApp groups, and personal trust. We\u2019ve lived inside it long enough to know: the people doing the work are exceptional. The systems around them are not.',
      'SpaceOPS exists to change that without adding complexity. Every decision we make about the product comes back to one question: does this make the work more visible, or does it just add another screen to tap through?',
      'This blog is where we\u2019ll share what we\u2019re learning as we build — honest notes on operations, data, and the parts of this industry that deserve more attention than they get. Thanks for being here.',
    ],
  },
  // Coming soon placeholders — from the content doc blog post ideas
  {
    slug: 'true-cost-manual-attendance',
    title: 'The true cost of manual attendance tracking in facility management.',
    excerpt:
      'How paper-based and honour-system attendance leads to payroll inaccuracies, time theft, and client disputes.',
    date: '',
    readingTime: '',
    author: '',
    tag: 'Operations',
    status: 'coming-soon',
    body: [],
  },
  {
    slug: 'client-portal-churn',
    title: 'Why your cleaning company needs a client portal.',
    excerpt:
      'How transparency with clients reduces churn, increases renewals, and creates upsell opportunities.',
    date: '',
    readingTime: '',
    author: '',
    tag: 'Customer success',
    status: 'coming-soon',
    body: [],
  },
  {
    slug: 'inspection-checklists-verified-cleaning',
    title: 'Inspection checklists: the difference between cleaning and verified cleaning.',
    excerpt:
      'Why "we cleaned it" isn\u2019t enough and how structured inspections build accountability.',
    date: '',
    readingTime: '',
    author: '',
    tag: 'Quality',
    status: 'coming-soon',
    body: [],
  },
];

export const getBlogPost = (slug: string) => blogPosts.find((p) => p.slug === slug);
