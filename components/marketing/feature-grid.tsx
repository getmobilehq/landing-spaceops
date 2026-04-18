import { Container } from '@/components/ui/container';
import { SectionHead } from '@/components/ui/section-head';
import { Reveal } from '@/components/ui/reveal';

type IconName =
  | 'building'
  | 'calendar'
  | 'gps'
  | 'inspection'
  | 'alert'
  | 'chart'
  | 'portal'
  | 'payroll';

const Icon = ({ name }: { name: IconName }) => {
  const common = {
    viewBox: '0 0 28 28',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.5,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };
  switch (name) {
    case 'building':
      return (
        <svg {...common}>
          <rect x="3.5" y="5" width="21" height="18" rx="1" />
          <path d="M3.5 12h21M10 5v18M17 5v18" />
        </svg>
      );
    case 'calendar':
      return (
        <svg {...common}>
          <rect x="3.5" y="5" width="21" height="19" rx="1" />
          <path d="M3.5 10h21M8 3v4M20 3v4" />
          <path d="M8 15l3 3 6-6" />
        </svg>
      );
    case 'gps':
      return (
        <svg {...common}>
          <circle cx="14" cy="12" r="8" />
          <circle cx="14" cy="12" r="3" />
          <path d="M14 4v-1M14 21v-1M5 12h-1M24 12h-1" />
          <path d="M14 20l-3 5h6l-3-5z" />
        </svg>
      );
    case 'inspection':
      return (
        <svg {...common}>
          <rect x="5" y="5" width="18" height="18" rx="1" />
          <path d="M10 12h8M10 16h8M10 8h5" />
          <circle cx="19" cy="8" r="1.5" />
        </svg>
      );
    case 'alert':
      return (
        <svg {...common}>
          <path d="M14 3l11 19H3L14 3z" />
          <path d="M14 11v5M14 19v0.5" />
        </svg>
      );
    case 'chart':
      return (
        <svg {...common}>
          <path d="M5 23V11M11 23V7M17 23v-9M23 23V5" />
          <path d="M4 23h20" />
        </svg>
      );
    case 'portal':
      return (
        <svg {...common}>
          <rect x="3.5" y="5" width="21" height="15" rx="1" />
          <circle cx="14" cy="12.5" r="3" />
          <path d="M9 20v3M19 20v3M9 23h10" />
        </svg>
      );
    case 'payroll':
      return (
        <svg {...common}>
          <circle cx="14" cy="14" r="9" />
          <path d="M14 9v5l3 2" />
          <path d="M11 18h6" />
        </svg>
      );
  }
};

const features: { icon: IconName; title: string; body: string }[] = [
  {
    icon: 'building',
    title: 'Buildings & floor plans',
    body:
      'Add buildings, define floors and rooms, upload floor plans, and let AI detect room boundaries automatically.',
  },
  {
    icon: 'calendar',
    title: 'Smart scheduling',
    body:
      'Daily, weekly, or monthly recurring templates. Assign janitors to specific rooms with a few clicks.',
  },
  {
    icon: 'gps',
    title: 'GPS-verified attendance',
    body:
      'Geofenced clock-in. No buddy punching, no guesswork. Know exactly when staff arrived and where.',
  },
  {
    icon: 'inspection',
    title: 'Quality inspections',
    body:
      'QR-scan rooms, run custom checklists, record results instantly. Pass rates calculate automatically.',
  },
  {
    icon: 'alert',
    title: 'Issue tracking',
    body:
      'Report deficiencies with photos, severity levels, and precise room locations. SLA timers track resolution.',
  },
  {
    icon: 'chart',
    title: 'AI-powered reports',
    body:
      'One-click PDFs with AI-written executive summaries. Charts show trends by building, floor, team, client.',
  },
  {
    icon: 'portal',
    title: 'Client portal',
    body:
      'Read-only dashboards for clients. SLA compliance, activity history, pass rates — transparency builds trust.',
  },
  {
    icon: 'payroll',
    title: 'Payroll management',
    body:
      'Hourly rates, overtime rules, automatic calculation from clock-ins. Approve and export to CSV.',
  },
];

export function FeatureGrid({ anchorId }: { anchorId?: string }) {
  return (
    <section className="section" id={anchorId}>
      <Container>
        <Reveal>
          <SectionHead
            eyebrow="Capabilities"
            title={
              <>
                Everything you need to run a <span className="serif">best-in-class</span> operation.
              </>
            }
          />
        </Reveal>
      </Container>
      <Container>
        <Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-line">
            {features.map((f) => (
              <article
                key={f.title}
                className="p-8 border-r border-b border-line bg-bg-card hover:bg-bg-tint transition-colors duration-200"
              >
                <div className="w-7 h-7 mb-6 text-indigo-3">
                  <Icon name={f.icon} />
                </div>
                <h3 className="text-[16px] font-medium mb-2 tracking-[-0.01em]">{f.title}</h3>
                <p className="text-ink-3 text-[14px] leading-[1.55]">{f.body}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
