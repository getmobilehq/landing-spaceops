import { Container } from '@/components/ui/container';
import { Eyebrow } from '@/components/ui/eyebrow';
import { SectionHead } from '@/components/ui/section-head';
import { Accordion } from '@/components/ui/accordion';
import { PricingTable } from '@/components/marketing/pricing-table';
import { CtaFinal } from '@/components/marketing/cta-final';
import { pricingFAQs } from '@/lib/pricing';
import { buildMetadata } from '@/lib/utils';

export const metadata = buildMetadata({
  title: 'Pricing',
  description:
    'Start free with one building and five team members. Upgrade to Pro for unlimited buildings and AI features, or Enterprise for API access and priority support.',
  path: '/pricing',
});

export default function PricingPage() {
  return (
    <>
      <section className="pt-[clamp(96px,10vw,128px)] pb-[clamp(64px,7vw,96px)]">
        <Container>
          <div className="max-w-[720px]">
            <Eyebrow className="mb-5">Pricing</Eyebrow>
            <h1 className="mb-7">
              Simple pricing. <span className="serif">No</span> surprises.
            </h1>
            <p className="lead">
              Start free, upgrade when your operation grows. All plans include unlimited
              activities, inspections, and reports.
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-[clamp(80px,9vw,128px)]">
        <PricingTable />
      </section>

      <section className="section">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 items-start">
            <SectionHead
              eyebrow="Frequently asked"
              title={
                <>
                  Answers, <span className="serif">straight</span>.
                </>
              }
              className="mb-0"
            />
            <Accordion items={pricingFAQs} />
          </div>
        </Container>
      </section>

      <CtaFinal
        headline="Ready to see it in"
        accent="action?"
        lead="Start your free account today. No credit card required."
      />
    </>
  );
}
