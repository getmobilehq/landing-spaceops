import { Container } from '@/components/ui/container';
import { SectionHead } from '@/components/ui/section-head';
import { Reveal } from '@/components/ui/reveal';

export function AISection() {
  return (
    <section className="section">
      <Container>
        <Reveal>
          <SectionHead
            title={
              <>
                AI that actually <span className="serif">saves</span> you time.
              </>
            }
          />
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
          {/* Floor plan vectorisation */}
          <Reveal>
            <article className="border border-line rounded-lg p-10 bg-bg-card">
              <h3 className="text-[24px] leading-[1.2] mb-3 tracking-[-0.015em]">
                Upload a floor plan. Get rooms in seconds.
              </h3>
              <p className="text-ink-3 text-[15px] leading-[1.6] mb-7">
                SpaceOPS automatically detects rooms, labels them, and maps their boundaries from
                a static image. What used to take an hour of manual setup now takes seconds.
              </p>
              <div className="bg-bg-tint border border-line rounded p-5 font-mono text-[12.5px] text-ink-2 leading-[1.6]">
                → 47 rooms detected
                <br />
                → 3 floors mapped
                <br />
                → Room boundaries vectorised
                <br />
                → 12 room types classified
                <br />
                <span className="text-success">✓ Ready for assignment</span>
              </div>
            </article>
          </Reveal>

          {/* Executive summaries */}
          <Reveal>
            <article className="border border-line rounded-lg p-10 bg-bg-card">
              <h3 className="text-[24px] leading-[1.2] mb-3 tracking-[-0.015em]">
                Every report, written for the boardroom.
              </h3>
              <p className="text-ink-3 text-[15px] leading-[1.6] mb-7">
                An AI-generated executive summary analyses pass rates, highlights top and
                bottom-performing buildings, flags trends, and summarises the operational picture
                — in clear, professional language your clients will appreciate.
              </p>
              <div className="bg-bg-tint border border-line rounded p-5 italic font-sans text-[14px] text-ink-2 leading-[1.6]">
                &ldquo;Overall pass rate rose to 94.2% (+2.1 pts WoW), driven by sustained
                improvement at Midtown Tower. Harbor Plaza continues to trail at 87% — the
                restroom deep-clean checklist is the primary failure driver…&rdquo;
              </div>
            </article>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
