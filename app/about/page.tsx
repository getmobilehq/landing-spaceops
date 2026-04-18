import { Container } from '@/components/ui/container';
import { Eyebrow } from '@/components/ui/eyebrow';
import { CtaFinal } from '@/components/marketing/cta-final';
import { buildMetadata } from '@/lib/utils';

export const metadata = buildMetadata({
  title: 'About',
  description:
    'SpaceOPS is a product by Onyx Building Solutions. We’re building the operating system for facility management — by facilities professionals, for facilities professionals.',
  path: '/about',
});

const values = [
  {
    title: 'Operational truth',
    body:
      'We believe decisions should be based on data, not assumptions. SpaceOPS captures what actually happened — who showed up, what got done, how it scored — so you never have to guess.',
  },
  {
    title: 'Role clarity',
    body:
      'Everyone in an operation has a different job. SpaceOPS gives each role exactly what they need and nothing they don’t. Janitors see tasks. Supervisors see teams. Admins see everything. Clients see results.',
  },
  {
    title: 'Transparency builds trust',
    body:
      'The best way to retain clients is to show them the work. The client portal exists because we believe transparency isn’t a risk — it’s a competitive advantage.',
  },
  {
    title: 'Simplicity over features',
    body:
      'We’d rather do 10 things exceptionally well than 50 things poorly. Every feature in SpaceOPS exists because it solves a real problem that facility teams face every day.',
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-[clamp(96px,10vw,128px)] pb-[clamp(48px,6vw,80px)]">
        <Container>
          <div className="max-w-[820px]">
            <Eyebrow className="mb-5">About</Eyebrow>
            <h1 className="mb-10">
              We&rsquo;re building the future of <span className="serif">facility management</span>.
            </h1>
            <div className="space-y-5 text-[17px] leading-[1.65] text-ink-2 max-w-[680px]">
              <p>
                SpaceOPS was born from a simple observation: the cleaning industry runs on paper,
                group chats, and trust. Buildings worth millions are maintained by teams using
                tools from the last century.
              </p>
              <p>
                We built SpaceOPS to change that. Not by adding complexity, but by giving every
                person in the chain — from the janitor to the building owner — the right
                information at the right time.
              </p>
              <p>
                Our platform is used by cleaning companies and facility management teams to bring
                structure, accountability, and transparency to their operations. We believe that
                when you can measure quality, you can improve it. When you can prove quality, you
                can grow.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="max-w-[720px] mb-16">
            <Eyebrow className="mb-5">Principles</Eyebrow>
            <h2>
              What we <span className="serif">believe</span>.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14 max-w-5xl">
            {values.map((v, i) => (
              <div key={v.title}>
                <div className="font-mono text-[12px] text-indigo-3 tracking-[0.06em] mb-4 font-medium">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="text-[22px] font-medium mb-3 tracking-[-0.02em]">{v.title}</h3>
                <p className="text-ink-3 text-[15.5px] leading-[1.65]">{v.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="max-w-[680px] border border-line rounded-lg p-10 bg-bg-card">
            <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink-4 mb-4">
              Parent company
            </div>
            <h3 className="text-[24px] font-medium mb-4 tracking-[-0.02em]">
              Onyx Building Solutions
            </h3>
            <p className="text-ink-3 text-[16px] leading-[1.6] italic">
              Solutions for facilities professionals, by facilities professionals.
            </p>
          </div>
        </Container>
      </section>

      <CtaFinal
        headline="Join us in building"
        accent="something better."
        lead="Start your free account today and help shape the future of facility operations."
      />
    </>
  );
}
