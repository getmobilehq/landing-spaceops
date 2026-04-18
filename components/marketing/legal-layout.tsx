import { Container } from '@/components/ui/container';
import { Eyebrow } from '@/components/ui/eyebrow';
import type { ReactNode } from 'react';

export function LegalPageLayout({
  eyebrow,
  title,
  lastUpdated,
  placeholder,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lastUpdated: string;
  placeholder?: boolean;
  children: ReactNode;
}) {
  return (
    <>
      <section className="pt-[clamp(96px,10vw,128px)] pb-[clamp(48px,6vw,80px)]">
        <Container>
          <div className="max-w-[780px]">
            <Eyebrow className="mb-5">{eyebrow}</Eyebrow>
            <h1 className="mb-5">{title}</h1>
            <div className="font-mono text-[12px] uppercase tracking-[0.06em] text-ink-4">
              Last updated: {lastUpdated}
            </div>
          </div>
        </Container>
      </section>

      {placeholder && (
        <section className="pb-12">
          <Container>
            <div className="max-w-[780px] border border-dashed border-line-strong rounded-lg p-6 bg-bg-tint">
              <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-warn mb-2">
                Placeholder
              </div>
              <p className="text-ink-3 text-[14.5px] leading-[1.6]">
                This page contains a skeleton of the sections to be covered. Replace with full
                legal copy drafted by your legal counsel before launch.
              </p>
            </div>
          </Container>
        </section>
      )}

      <section className="pb-[clamp(96px,10vw,128px)]">
        <Container>
          <div className="max-w-[780px] flex flex-col gap-10">{children}</div>
        </Container>
      </section>
    </>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div>
      <h2 className="text-[22px] md:text-[24px] font-medium mb-4 tracking-[-0.02em]">{title}</h2>
      <div className="text-ink-2 text-[15.5px] leading-[1.7] flex flex-col gap-3">{children}</div>
    </div>
  );
}
