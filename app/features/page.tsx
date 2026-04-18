import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { Eyebrow } from '@/components/ui/eyebrow';
import { CtaFinal } from '@/components/marketing/cta-final';
import { features } from '@/lib/features';
import { buildMetadata } from '@/lib/utils';

export const metadata = buildMetadata({
  title: 'Features',
  description:
    'Everything you need to run a cleaning operation: smart scheduling, GPS attendance, quality inspections, AI reports, payroll, and a client portal.',
  path: '/features',
});

export default function FeaturesPage() {
  return (
    <>
      <section className="pt-[clamp(96px,10vw,128px)] pb-[clamp(48px,6vw,80px)]">
        <Container>
          <div className="max-w-[760px]">
            <Eyebrow className="mb-5">Features</Eyebrow>
            <h1 className="mb-7">
              Every tool your operation needs — <span className="serif">in one place</span>.
            </h1>
            <p className="lead">
              From scheduling to payroll, from inspections to client reporting. SpaceOPS covers the
              full lifecycle of facility management.
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-[clamp(80px,9vw,128px)]">
        <Container>
          <div className="border-t border-line">
            {features.map((f, i) => (
              <Link
                key={f.slug}
                href={`/features/${f.slug}`}
                className="group grid grid-cols-1 md:grid-cols-[80px_1fr_auto] gap-6 md:gap-10 items-baseline py-8 md:py-10 border-b border-line hover:bg-bg-tint transition-colors duration-200 -mx-6 px-6"
              >
                <div className="font-mono text-[12px] text-ink-4 tracking-[0.06em] uppercase">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <h2 className="text-[24px] md:text-[28px] font-medium tracking-[-0.02em] mb-2 group-hover:text-indigo-3 transition-colors">
                    {f.name}
                  </h2>
                  <p className="text-ink-3 text-[15.5px] leading-[1.55] max-w-[620px]">
                    {f.oneLiner}
                  </p>
                </div>
                <div className="font-mono text-small text-ink-4 group-hover:text-indigo-3 transition-colors">
                  Read more →
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CtaFinal
        headline="See it all working"
        accent="together."
        lead="Start free, or book a 15-minute walkthrough with the team."
      />
    </>
  );
}
