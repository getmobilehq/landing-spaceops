import { Container } from '@/components/ui/container';
import { SectionHead } from '@/components/ui/section-head';
import { Reveal } from '@/components/ui/reveal';

const problems = [
  {
    title: 'No visibility',
    body: 'You don’t know if your team showed up, which rooms were cleaned, or whether quality standards were met — until a client complains.',
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
            eyebrow="The status quo"
            title={
              <>
                Running cleaning operations <span className="serif">shouldn’t</span> feel like this.
              </>
            }
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <Reveal key={p.title}>
              <article className="border border-line rounded-lg p-8 bg-bg-card transition-all duration-300 ease-ease hover:border-line-strong hover:-translate-y-0.5">
                <div className="font-serif italic text-[44px] text-indigo-3 leading-none mb-7 tracking-[-0.02em]">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="text-[19px] font-medium mb-3 tracking-[-0.015em]">{p.title}</h3>
                <p className="text-ink-3 text-[15px] leading-[1.55]">{p.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
