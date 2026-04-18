import { Hero } from '@/components/marketing/hero';
import { ProblemGrid } from '@/components/marketing/problem-grid';
import { Pillars } from '@/components/marketing/pillars';
import { FeatureGrid } from '@/components/marketing/feature-grid';
import { Steps } from '@/components/marketing/steps';
import { RoleTabs } from '@/components/marketing/role-tabs';
import { AISection } from '@/components/marketing/ai-section';
import { UseCases } from '@/components/marketing/use-cases';
import { TestimonialPlaceholder } from '@/components/marketing/testimonial';
import { CtaFinal } from '@/components/marketing/cta-final';
import { buildMetadata } from '@/lib/utils';
import { siteConfig } from '@/lib/site-config';

export const metadata = buildMetadata({
  title: siteConfig.name,
  description: siteConfig.description,
  path: '/',
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemGrid />
      <Pillars />
      <FeatureGrid anchorId="features" />
      <Steps />
      <RoleTabs />
      <AISection />
      <UseCases />
      <TestimonialPlaceholder />
      <CtaFinal
        headline="Stop managing operations on"
        accent="gut feel."
        lead="Start your free account today. No credit card required. Upgrade when you’re ready."
      />
    </>
  );
}
