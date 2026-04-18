import { Container } from '@/components/ui/container';
import { Eyebrow } from '@/components/ui/eyebrow';
import { CtaFinal } from '@/components/marketing/cta-final';
import { buildMetadata } from '@/lib/utils';

export const metadata = buildMetadata({
  title: 'Security',
  description:
    'Row-level security, encryption in transit and at rest, token-based authentication with role-based access control. How SpaceOPS protects your data at every layer.',
  path: '/security',
});

const practices = [
  {
    title: 'Row-level security',
    body:
      'Every database query is scoped to the authenticated user’s organisation and role. Admins cannot see other organisations’ data. Janitors cannot see other janitors’ data. Clients only see their own buildings.',
  },
  {
    title: 'Authentication & access control',
    body:
      'SpaceOPS uses industry-standard signed-token authentication with role-based access control. Four distinct roles (admin, supervisor, janitor, client) enforce the principle of least privilege across every screen and API endpoint.',
  },
  {
    title: 'Encryption',
    body:
      'All data is encrypted in transit (TLS 1.2+) and at rest. Passwords are hashed and never stored in plain text.',
  },
  {
    title: 'Infrastructure',
    body:
      'SpaceOPS runs on enterprise-grade cloud infrastructure with automatic backups, geographic redundancy, and 24/7 uptime monitoring. Our managed database layer enforces access policies at the data tier, isolates tenants at the row level, and is backed by battle-tested open-source technology trusted across the industry.',
  },
  {
    title: 'Audit trails',
    body:
      'Platform-level audit logging tracks every significant action — who did what, when, and what changed. Payroll runs include creator and approver attribution with timestamps.',
  },
  {
    title: 'API security',
    body:
      'API access (Enterprise plan) is authenticated via API keys with per-key rate limiting and usage tracking. Keys can be revoked instantly from the admin dashboard.',
  },
];

export default function SecurityPage() {
  return (
    <>
      <section className="pt-[clamp(96px,10vw,128px)] pb-[clamp(48px,6vw,80px)]">
        <Container>
          <div className="max-w-[760px]">
            <Eyebrow className="mb-5">Security</Eyebrow>
            <h1 className="mb-7">
              Your data. <span className="serif">Protected</span> at every layer.
            </h1>
            <p className="lead">
              SpaceOPS is built with defense-in-depth security practices. Every request
              is authenticated, every query is scoped, every byte is encrypted.
            </p>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 max-w-5xl">
            {practices.map((p, i) => (
              <div key={p.title} className="flex gap-6">
                <div className="font-mono text-[12px] text-ink-4 tracking-[0.04em] pt-1 flex-shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="text-[19px] font-medium mb-3 tracking-[-0.015em]">{p.title}</h3>
                  <p className="text-ink-3 text-[15px] leading-[1.6]">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaFinal
        headline="Trust, built into"
        accent="every query."
        lead="Start with a free account and see how role-based access works in practice."
      />
    </>
  );
}
