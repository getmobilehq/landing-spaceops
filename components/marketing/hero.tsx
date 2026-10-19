import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/lib/site-config';

type Kpi = {
  label: string;
  value: string;
  unit?: string;
  delta: string;
  warn?: boolean;
};

const kpis: Kpi[] = [
  { label: 'Pass rate', value: '94.2', unit: '%', delta: '↑ 2.1 vs. last week' },
  { label: 'Rooms inspected', value: '182', unit: '/194', delta: '↑ 12 completed' },
  { label: 'Open deficiencies', value: '7', delta: '2 high severity', warn: true },
  { label: 'On-site staff', value: '14', unit: '/16', delta: 'GPS verified' },
];

type Row = {
  activity: string;
  building: string;
  assigned: string;
  status: 'ok' | 'warn' | 'line';
  statusLabel: string;
  score: string;
};

const rows: Row[] = [
  {
    activity: 'Nightly clean, floors 3–8',
    building: 'Midtown Tower',
    assigned: 'M. Reyes +3',
    status: 'ok',
    statusLabel: 'Passed',
    score: '96%',
  },
  {
    activity: 'Restroom deep clean',
    building: 'Harbor Plaza',
    assigned: 'D. Chen',
    status: 'warn',
    statusLabel: 'In progress',
    score: '—',
  },
  {
    activity: 'Lobby inspection',
    building: 'Midtown Tower',
    assigned: 'J. Okoye',
    status: 'ok',
    statusLabel: 'Passed',
    score: '91%',
  },
  {
    activity: 'HVAC supply rooms',
    building: 'Cedar Campus',
    assigned: 'A. Park +2',
    status: 'line',
    statusLabel: 'Scheduled',
    score: '—',
  },
];

// v3 square badges: status colour only in the badge and its square dot.
const statusStyles: Record<Row['status'], string> = {
  ok: 'bg-[#DCFCE7] text-success',
  warn: 'bg-[#FEF3C7] text-warn',
  line: 'bg-transparent text-ink-3 shadow-[inset_0_0_0_1px_#C9C9CF]',
};

export function Hero() {
  return (
    <header className="night blueprint pt-[clamp(80px,11vw,148px)] pb-[clamp(80px,10vw,128px)] overflow-hidden">
      <Container>
        <div className="max-w-[920px]">
          <h1 className="mb-8 animate-fade-up" style={{ animationDelay: '0.04s' }}>
            The <span className="serif">Work Planning Tool</span>
            <br />
            for facility management.
          </h1>
          <p
            className="lead mb-10 animate-fade-up"
            style={{ animationDelay: '0.12s' }}
          >
            SpaceOPS replaces spreadsheets, WhatsApp groups, and guesswork with a single platform
            that manages your cleaning teams, tracks quality in real time, and proves performance
            to clients from day one.
          </p>
          <div
            className="flex flex-wrap gap-4 mb-8 animate-fade-up"
            style={{ animationDelay: '0.2s' }}
          >
            <Button href={siteConfig.signupUrl} external variant="inverse" size="lg">
              Start free →
            </Button>
            <Button href={siteConfig.demoUrl} variant="outline-inverse" size="lg">
              Book a demo →
            </Button>
          </div>
        </div>

        {/* Dashboard visual */}
        <div
          className="mt-[clamp(56px,7vw,88px)] border border-night-line rounded-lg bg-bg-card text-ink p-6 animate-fade-up"
          style={{ animationDelay: '0.36s' }}
          aria-hidden="true"
        >
          <div className="flex items-center justify-between pb-5 border-b border-line mb-6">
            <div className="flex items-center gap-[10px] font-mono text-[12px] text-ink-3 tracking-[0.04em]">
              <span className="w-1.5 h-1.5 bg-success" />
              <span>OPS / Midtown Tower · Live</span>
            </div>
            <div className="flex gap-1">
              {['Today', '7 days', '30 days'].map((tab, i) => (
                <div
                  key={tab}
                  className={`px-[10px] py-1 rounded font-mono text-[11px] ${
                    i === 0 ? 'bg-ink text-bg' : 'text-ink-4'
                  }`}
                >
                  {tab}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-line rounded overflow-hidden mb-6">
            {kpis.map((kpi) => (
              <div key={kpi.label} className="bg-bg-card p-5">
                <div className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-4 mb-3">
                  {kpi.label}
                </div>
                <div className="font-display font-bold text-[32px] tracking-[-0.03em] leading-none tabular-nums">
                  {kpi.value}
                  {kpi.unit && (
                    <span className="font-mono text-[14px] text-ink-4 font-medium tracking-normal ml-1">
                      {kpi.unit}
                    </span>
                  )}
                </div>
                <div
                  className={`font-mono text-[11px] mt-1.5 ${
                    kpi.warn ? 'text-warn' : 'text-success'
                  }`}
                >
                  {kpi.delta}
                </div>
              </div>
            ))}
          </div>

          <div>
            <div className="hidden md:grid grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-4 px-3 py-[10px] font-mono text-[11px] uppercase tracking-[0.1em] text-ink-4 bg-bg-tint border-b border-line">
              <div>Activity</div>
              <div>Building</div>
              <div>Assigned</div>
              <div>Status</div>
              <div>Score</div>
            </div>
            {rows.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-[2fr_1fr_1fr] md:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-4 px-3 py-3.5 text-[13.5px] items-center border-b border-line last:border-b-0"
              >
                <div>{row.activity}</div>
                <div>{row.building}</div>
                <div className="hidden md:block">{row.assigned}</div>
                <div>
                  <span className={`badge ${statusStyles[row.status]}`}>
                    <span className="badge-dot" aria-hidden="true" />
                    {row.statusLabel}
                  </span>
                </div>
                <div className="hidden md:block font-mono">{row.score}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </header>
  );
}
