import { Container } from '@/components/ui/container';
import { SectionHead } from '@/components/ui/section-head';
import { Reveal } from '@/components/ui/reveal';

const cases = [
  {
    title: 'Commercial cleaning companies',
    body:
      'Manage multiple client buildings from a single dashboard. Prove service quality with data-backed reports. Reduce churn with transparent SLA tracking.',
  },
  {
    title: 'Facility management firms',
    body:
      'Standardise operations across your portfolio. Enforce quality with inspections and checklists. Centralise attendance, payroll, and reporting.',
  },
  {
    title: 'In-house facility teams',
    body:
      'Bring structure to internal cleaning operations. Track performance by building, floor, and team member. Replace manual logs with automated records.',
  },
  {
    title: 'Property management groups',
    body:
      'Monitor cleaning contractors across properties. Use the client portal to hold service providers accountable without micromanaging.',
  },
];

export function UseCases() {
  return (
    <section className="section">
      <Container>
        <Reveal>
          <SectionHead
            eyebrow="Who it's for"
            title={
              <>
                Built for operations that <span className="serif">demand</span> accountability.
              </>
            }
          />
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cases.map((c, i) => (
              <article
                key={c.title}
                className="border border-line rounded-lg p-8 bg-bg-card flex gap-6 items-start transition-colors duration-200 hover:border-ink"
              >
                <div className="font-serif italic text-[32px] text-ink-4 leading-none flex-shrink-0 pt-1">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="text-[17px] font-medium mb-2 tracking-[-0.01em]">{c.title}</h3>
                  <p className="text-ink-3 text-[14.5px] leading-[1.55]">{c.body}</p>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
