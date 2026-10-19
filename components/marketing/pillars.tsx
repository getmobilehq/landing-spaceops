import { Container } from '@/components/ui/container';
import { SectionHead } from '@/components/ui/section-head';
import { Reveal } from '@/components/ui/reveal';

const pillars = [
  {
    title: 'Plan & schedule',
    body:
      'Create cleaning activities, assign rooms, and set recurring schedules. Templates replicate proven routines across buildings in seconds.',
  },
  {
    title: 'Execute & track',
    body:
      'Janitors clock in with GPS-verified attendance, work through assigned tasks, and flag issues on the spot. Always know who’s where.',
  },
  {
    title: 'Inspect & score',
    body:
      'Supervisors scan rooms, run inspections against custom checklists, and record pass/fail. Every room gets a quality score.',
  },
  {
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
                <h3 className="text-[22px] leading-[1.2] mb-3.5 tracking-[-0.015em]">{p.title}</h3>
                <p className="text-ink-3 text-[15px] leading-[1.6]">{p.body}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
