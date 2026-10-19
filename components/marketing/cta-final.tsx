import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/lib/site-config';

export function CtaFinal({
  headline,
  accent,
  lead,
  primaryLabel = 'Start free →',
  primaryHref = siteConfig.signupUrl,
  primaryExternal = true,
  secondaryLabel = 'Book a demo',
  secondaryHref = siteConfig.demoUrl,
}: {
  headline: string;
  accent?: string;
  lead?: string;
  primaryLabel?: string;
  primaryHref?: string;
  primaryExternal?: boolean;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  // v3 CTA band: the page's one indigo surface, title left, actions right.
  return (
    <section className="indigo-band">
      <Container>
        <div className="py-[clamp(64px,9vw,112px)] grid grid-cols-1 lg:grid-cols-[minmax(0,1.5fr)_auto] gap-x-16 gap-y-8 items-end">
          <div>
            <h2 className="max-w-[720px]">
              {headline}
              {accent && (
                <>
                  {' '}
                  <span className="serif">{accent}</span>
                </>
              )}
            </h2>
            {lead && <p className="lead mt-5 !text-[#E0E7FF] max-w-[48ch]">{lead}</p>}
          </div>
          <div className="flex flex-wrap gap-3">
            <Button
              href={primaryHref}
              external={primaryExternal}
              variant="inverse"
              size="lg"
              className="flex-1 sm:flex-none"
            >
              {primaryLabel}
            </Button>
            <Button
              href={secondaryHref}
              variant="outline-inverse"
              size="lg"
              className="flex-1 sm:flex-none"
            >
              {secondaryLabel}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
