import { Container } from '@/components/ui/container';
import { SectionHead } from '@/components/ui/section-head';
import { Reveal } from '@/components/ui/reveal';

const pillars = [
  {
    num: '01 — PLAN',
    title: 'Plan & schedule',
    body:
      'Create cleaning activities, assign rooms, and set recurring schedules. Templates replicate proven routines across buildings in seconds.',
  },
  {
    num: '02 — EXECUTE',
    title: 'Execute & track',
    body:
      'Janitors clock in with GPS-verified attendance, work through assigned tasks, and flag issues on the spot. Always know who’s where.',
  },
  {
    num: '03 — INSPECT',
    title: 'Inspect & score',
    body:
      'Supervisors scan rooms, run inspections against custom checklists, and record pass/fail. Every room gets a quality score.',
  },
  {
    num: '04 — PROVE',
    title: 'Report & prove',
    body:
      'Generate polished PDFs with AI-written executive summaries, performance charts, and issue breakdowns. Send them to clients.',
  },
];

export function Pillars() {
  return (
    <section className="section">
      <Container>
        <Reveal>
          <SectionHead
            eyebrow="The platform"
            title={
              <>
                One platform. <span className="serif">Complete</span> control.
              </>
            }
            lead="SpaceOPS connects every role in your operation — from the janitor on the floor to the client in the boardroom — into a single, real-time workflow."
          />
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-b border-line">
            {pillars.map((p, i) => (
              <article
                key={p.title}
                className={`p-10 ${
                  i !== pillars.length - 1
                    ? 'border-b sm:border-b-0 lg:border-r border-line'
                    : ''
                } ${
                  i === 1 ? 'sm:border-r-0 lg:border-r border-line' : ''
                } ${
                  i < 2 ? 'sm:border-b border-line lg:border-b-0' : ''
                }`}
              >
                <div className="font-mono text-[12px] text-indigo-3 tracking-[0.06em] mb-7 font-medium">
                  {p.num}
                </div>
                <h3 className="text-[20px] font-medium mb-3.5 tracking-[-0.015em]">{p.title}</h3>
                <p className="text-ink-3 text-[14.5px] leading-[1.55]">{p.body}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
