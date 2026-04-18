import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Container } from '@/components/ui/container';
import { Eyebrow } from '@/components/ui/eyebrow';
import { Button } from '@/components/ui/button';
import { CtaFinal } from '@/components/marketing/cta-final';
import { features, getFeature } from '@/lib/features';
import { siteConfig } from '@/lib/site-config';
import { buildMetadata } from '@/lib/utils';

export function generateStaticParams() {
  return features.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const feature = getFeature(params.slug);
  if (!feature) return {};
  return buildMetadata({
    title: feature.name,
    description: feature.oneLiner,
    path: `/features/${feature.slug}`,
  });
}

export default function FeatureDetailPage({ params }: { params: { slug: string } }) {
  const feature = getFeature(params.slug);
  if (!feature) notFound();

  const others = features.filter((f) => f.slug !== feature.slug).slice(0, 3);

  return (
    <>
      {/* Breadcrumb */}
      <section className="pt-[clamp(72px,8vw,104px)] pb-4">
        <Container>
          <div className="font-mono text-[12px] text-ink-4 tracking-[0.04em] mb-10">
            <Link href="/features" className="hover:text-ink transition-colors">
              ← All features
            </Link>
          </div>
        </Container>
      </section>

      {/* Headline */}
      <section className="pb-[clamp(56px,7vw,96px)]">
        <Container>
          <div className="max-w-[820px]">
            <Eyebrow className="mb-5">{feature.name}</Eyebrow>
            <h1 className="mb-7">{feature.headline}</h1>
            <p className="lead max-w-[680px]">{feature.oneLiner}</p>
          </div>
        </Container>
      </section>

      {/* Body */}
      <section className="section">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-20">
            <div className="prose-body">
              {feature.body.map((para, i) => (
                <p
                  key={i}
                  className="text-ink-2 text-[17px] leading-[1.65] mb-6 last:mb-0 max-w-[680px]"
                >
                  {para}
                </p>
              ))}
            </div>

            <aside className="lg:sticky lg:top-24 self-start">
              <div className="border border-line rounded-lg p-7 bg-bg-card">
                <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink-4 mb-4">
                  Key capabilities
                </div>
                <ul className="flex flex-col gap-3">
                  {feature.keyPoints.map((kp) => (
                    <li key={kp} className="flex items-start gap-3 text-[14.5px] text-ink-2">
                      <svg
                        className="w-4 h-4 mt-[3px] flex-shrink-0 text-indigo-3"
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      >
                        <path d="M3 8l3.5 3.5L13 5" />
                      </svg>
                      <span>{kp}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-line">
                  <Button href={siteConfig.signupUrl} external variant="primary" size="lg" className="w-full">
                    Try it free →
                  </Button>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* Related */}
      <section className="section">
        <Container>
          <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink-4 mb-8">
            Related capabilities
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {others.map((f) => (
              <Link
                key={f.slug}
                href={`/features/${f.slug}`}
                className="group border border-line rounded-lg p-7 bg-bg-card hover:border-ink transition-colors duration-200"
              >
                <h3 className="text-[17px] font-medium mb-2 tracking-[-0.01em] group-hover:text-indigo-3 transition-colors">
                  {f.name}
                </h3>
                <p className="text-ink-3 text-[14.5px] leading-[1.55]">{f.oneLiner}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CtaFinal
        headline="One platform."
        accent="Complete control."
        lead="Start free today. No credit card required."
      />
    </>
  );
}
