import { Container } from '@/components/ui/container';
import { SectionHead } from '@/components/ui/section-head';
import { Reveal } from '@/components/ui/reveal';

const problems = [
  {
    title: 'No visibility',
    body: 'You don’t know if your team showed up, which rooms were cleaned, or whether quality standards were met, until a client complains.',
  },
  {
    title: 'Manual everything',
    body: 'You’re tracking attendance on paper, scheduling on WhatsApp, and building reports in Excel. Every week, hours disappear into admin work.',
  },
  {
    title: 'Client trust gap',
    body: 'Clients ask for proof of service and you scramble to put together something presentable. There’s no system of record, just word of mouth.',
  },
];

export function ProblemGrid() {
  return (
    <section className="section">
      <Container>
        <Reveal>
          <SectionHead
            title={
              <>
                Running cleaning operations <span className="serif">shouldn’t</span> feel like this.
              </>
            }
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
          {problems.map((p) => (
            <Reveal key={p.title}>
              {/* v3 feature card: 2px ink rule, Arvo title, no box. */}
              <article className="grid gap-3.5 content-start pt-6 border-t-2 border-ink">
                <h3 className="text-[22px] leading-[1.2] tracking-[-0.015em]">{p.title}</h3>
                <p className="text-ink-3 text-[15px] leading-[1.6]">{p.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
