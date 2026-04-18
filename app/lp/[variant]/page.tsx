import { notFound } from 'next/navigation';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Eyebrow } from '@/components/ui/eyebrow';
import { CtaFinal } from '@/components/marketing/cta-final';
import { lpVariants, getLpVariant } from '@/lib/lp-variants';
import { siteConfig } from '@/lib/site-config';
import { buildMetadata } from '@/lib/utils';

export function generateStaticParams() {
  return lpVariants.map((v) => ({ variant: v.slug }));
}

export async function generateMetadata({ params }: { params: { variant: string } }) {
  const variant = getLpVariant(params.variant);
  if (!variant) return {};
  return buildMetadata({
    title: variant.headline,
    description: variant.subheadline,
    path: `/lp/${variant.slug}`,
    noindex: true,
  });
}

export default function LandingVariantPage({ params }: { params: { variant: string } }) {
  const variant = getLpVariant(params.variant);
  if (!variant) notFound();

  return (
    <>
      <section className="pt-[clamp(96px,10vw,148px)] pb-[clamp(72px,9vw,128px)]">
        <Container>
          <div className="max-w-[920px]">
            <Eyebrow className="mb-5">{variant.persona}</Eyebrow>
            <h1 className="mb-8">
              {variant.headline}
              <br />
              <span className="serif">{variant.headlineAccent}</span>
            </h1>
            <p className="lead mb-10">{variant.subheadline}</p>
            <div className="flex flex-wrap gap-4">
              <Button href={siteConfig.signupUrl} external variant="primary" size="lg">
                {variant.ctaPrimary} →
              </Button>
              <Button href={siteConfig.demoUrl} variant="ghost" size="lg">
                {variant.ctaSecondary} →
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink-4 mb-10">
            What you get
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {variant.keyMessages.map((msg, i) => (
              <div key={i} className="flex gap-5 items-start border-t border-line pt-6">
                <div className="font-mono text-[12px] text-indigo-3 tracking-[0.06em] pt-1 flex-shrink-0 w-8">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <p className="text-[17px] leading-[1.5] text-ink-2 tracking-[-0.005em]">{msg}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaFinal
        headline="Try SpaceOPS"
        accent="free."
        lead="Full-featured free plan. No credit card required. No time limit."
        primaryLabel={`${variant.ctaPrimary} →`}
        secondaryLabel={variant.ctaSecondary}
      />
    </>
  );
}
