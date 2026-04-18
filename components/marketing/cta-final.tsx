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
  subline = '1 building · 5 seats · unlimited activities · no time limit',
}: {
  headline: string;
  accent?: string;
  lead?: string;
  primaryLabel?: string;
  primaryHref?: string;
  primaryExternal?: boolean;
  secondaryLabel?: string;
  secondaryHref?: string;
  subline?: string;
}) {
  return (
    <section className="bg-ink text-bg">
      <Container>
        <div className="py-[clamp(72px,9vw,128px)] flex flex-col items-start">
          <div className="eyebrow mb-5" style={{ color: 'rgba(250, 250, 247, 0.6)' }}>
            Start today
          </div>
          <h2 className="text-bg max-w-[720px]">
            {headline}
            {accent && (
              <>
                {' '}
                <span className="serif">{accent}</span>
              </>
            )}
          </h2>
          {lead && (
            <p
              className="lead mt-7 mb-10"
              style={{ color: 'rgba(250, 250, 247, 0.7)', maxWidth: '580px' }}
            >
              {lead}
            </p>
          )}
          <div className="flex flex-wrap gap-4 mt-10">
            <Button
              href={primaryHref}
              external={primaryExternal}
              variant="primary"
              size="lg"
              className="!bg-bg !text-ink hover:!bg-indigo-soft hover:!text-indigo"
            >
              {primaryLabel}
            </Button>
            <Button
              href={secondaryHref}
              variant="outline"
              size="lg"
              className="!border-[rgba(250,250,247,0.25)] !text-bg hover:!border-bg"
            >
              {secondaryLabel}
            </Button>
          </div>
          {subline && (
            <div
              className="mt-8 font-mono text-[12px] tracking-[0.04em] uppercase"
              style={{ color: 'rgba(250, 250, 247, 0.5)' }}
            >
              {subline}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
