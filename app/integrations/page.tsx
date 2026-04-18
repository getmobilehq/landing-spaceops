import { Container } from '@/components/ui/container';
import { Eyebrow } from '@/components/ui/eyebrow';
import { CtaFinal } from '@/components/marketing/cta-final';
import { buildMetadata } from '@/lib/utils';

export const metadata = buildMetadata({
  title: 'Integrations',
  description:
    'Stripe billing, REST API access, CSV exports, branded PDF reports, and email notifications. SpaceOPS fits into your existing workflow.',
  path: '/integrations',
});

const integrations = [
  {
    name: 'Stripe',
    tag: 'Billing',
    body:
      'Subscription billing, plan upgrades, and payment management are handled through Stripe. Enterprise customers can request invoice billing.',
  },
  {
    name: 'REST API',
    tag: 'Enterprise',
    body:
      'Connect SpaceOPS to your ERP, BI tools, HRIS, or custom dashboards. Full OpenAPI documentation makes integration straightforward.',
  },
  {
    name: 'CSV Export',
    tag: 'All plans',
    body:
      'Every data view — reports, payroll, activity logs — can be exported as CSV for use in Excel, Google Sheets, or any data tool.',
  },
  {
    name: 'PDF Reports',
    tag: 'All plans',
    body:
      'Generate branded PDF reports with your organisation logo, AI-written summaries, and performance charts. Share with clients or archive for compliance.',
  },
  {
    name: 'Email notifications',
    tag: 'All plans',
    body:
      'User invitations and password resets are sent via email. Team members get started without any manual credential distribution.',
  },
];

export default function IntegrationsPage() {
  return (
    <>
      <section className="pt-[clamp(96px,10vw,128px)] pb-[clamp(48px,6vw,80px)]">
        <Container>
          <div className="max-w-[760px]">
            <Eyebrow className="mb-5">Integrations</Eyebrow>
            <h1 className="mb-7">
              SpaceOPS fits into <span className="serif">your workflow</span>.
            </h1>
            <p className="lead">
              Built-in integrations with the tools you already use. And for everything else, a
              REST API.
            </p>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl">
            {integrations.map((item) => (
              <article
                key={item.name}
                className="border border-line rounded-lg p-7 bg-bg-card"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-[20px] font-medium tracking-[-0.015em]">{item.name}</h3>
                  <span className="font-mono text-[10.5px] uppercase tracking-[0.08em] text-ink-4 border border-line px-2 py-1 rounded-sm">
                    {item.tag}
                  </span>
                </div>
                <p className="text-ink-3 text-[15px] leading-[1.6]">{item.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CtaFinal
        headline="Have an integration in"
        accent="mind?"
        lead="Talk to our team about custom integrations on the Enterprise plan."
        primaryLabel="Contact sales"
        primaryHref="/contact"
        primaryExternal={false}
        secondaryLabel="Start free →"
        secondaryHref="https://app.onyxspaceops.com/signup"
      />
    </>
  );
}
