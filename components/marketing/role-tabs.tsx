'use client';

import { useState } from 'react';
import { Container } from '@/components/ui/container';
import { SectionHead } from '@/components/ui/section-head';
import { Reveal } from '@/components/ui/reveal';
import { cn } from '@/lib/utils';

type RoleId = 'admin' | 'supervisor' | 'janitor' | 'client';

type RoleData = {
  id: RoleId;
  label: string;
  num: string;
  eyebrow: string;
  title: string;
  body: string;
  features: string[];
};

const roles: RoleData[] = [
  {
    id: 'admin',
    label: 'Admin',
    num: '01',
    eyebrow: 'The command centre',
    title: 'Full control, end-to-end.',
    body:
      'Total oversight of buildings, users, clients, checklists, reports, payroll, and billing. Every operational lever in one place, without the clutter of role-specific views you don’t need.',
    features: [
      'Manage users & roles across the org',
      'Configure buildings, checklists, SLAs',
      'Run payroll & approve exports',
      'Generate client-ready reports',
    ],
  },
  {
    id: 'supervisor',
    label: 'Supervisor',
    num: '02',
    eyebrow: 'Day-to-day operations',
    title: 'The operator’s cockpit.',
    body:
      'Manage assigned buildings: create activities, assign tasks, run inspections, monitor attendance, and handle issues. A focused view on execution without admin-level noise.',
    features: [
      'Assign rooms & tasks to janitors',
      'Run QR-code room inspections',
      'Real-time attendance dashboard',
      'Triage & resolve open issues',
    ],
  },
  {
    id: 'janitor',
    label: 'Janitor',
    num: '03',
    eyebrow: 'Mobile-first',
    title: 'Clock in. See the work. Get it done.',
    body:
      'A focused mobile experience built for the floor. Clock in, see today’s assigned rooms, complete tasks, and report issues. No clutter, no confusion, no tutorials.',
    features: [
      'GPS-verified clock in / out',
      'Today’s rooms, clearly listed',
      'Report issues with photos',
      'Full Spanish & French support',
    ],
  },
  {
    id: 'client',
    label: 'Client',
    num: '04',
    eyebrow: 'Transparency, not control',
    title: 'Proof that the job is being done well.',
    body:
      'A read-only dashboard scoped to their buildings: SLA compliance, activity pass rates, open issues, recent history. Trust through visibility — never see your internal data, only the work that affects them.',
    features: [
      'SLA compliance dashboard',
      'Activity & inspection visibility',
      'Open issue tracking',
      'Scoped per client — zero leakage',
    ],
  },
];

export function RoleTabs() {
  const [active, setActive] = useState<RoleId>('admin');
  const current = roles.find((r) => r.id === active)!;

  return (
    <section className="section">
      <Container>
        <Reveal>
          <SectionHead
            eyebrow="Role-based experience"
            title={
              <>
                Built for <span className="serif">every role</span> in your organisation.
              </>
            }
          />
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8 md:gap-12 items-start">
            {/* Tabs */}
            <div
              role="tablist"
              aria-label="User roles"
              className="flex md:flex-col gap-0.5 overflow-x-auto md:overflow-visible border-b md:border-b-0 border-line"
            >
              {roles.map((r) => (
                <button
                  key={r.id}
                  role="tab"
                  aria-selected={active === r.id}
                  onClick={() => setActive(r.id)}
                  className={cn(
                    'py-3.5 px-[18px] text-left text-[15px] font-medium whitespace-nowrap transition-all duration-150 ease-ease',
                    'md:border-l-2 border-b-2 md:border-b-0 border-transparent',
                    active === r.id
                      ? 'text-ink md:border-l-ink border-b-ink md:bg-bg-tint md:rounded-r'
                      : 'text-ink-3 hover:text-ink md:border-l-line',
                  )}
                >
                  <span className="font-mono text-[10.5px] text-ink-4 tracking-[0.08em] uppercase mr-2">
                    {r.num}
                  </span>
                  {r.label}
                </button>
              ))}
            </div>

            {/* Panel */}
            <div
              key={current.id}
              className="border border-line rounded-lg p-8 md:p-10 bg-bg-card min-h-[320px] animate-fade-up"
            >
              <div className="font-mono text-[11px] text-indigo-3 tracking-[0.08em] uppercase mb-4">
                {current.eyebrow}
              </div>
              <h3 className="font-serif italic text-[28px] font-normal mb-4 tracking-[-0.02em] text-ink">
                {current.title}
              </h3>
              <p className="text-ink-3 text-[16px] leading-[1.6] max-w-[560px] mb-8">
                {current.body}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                {current.features.map((f) => (
                  <div key={f} className="flex items-start gap-2.5 text-[14px] text-ink-2">
                    <span className="w-1 h-1 rounded-full bg-indigo-3 mt-[9px] flex-shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
