import { Container } from '@/components/ui/container';
import { Reveal } from '@/components/ui/reveal';

export function TestimonialPlaceholder() {
  return (
    <section className="section section-tight">
      <Container>
        <Reveal>
          <div className="border border-dashed border-line-strong rounded-lg py-12 px-10 text-center max-w-[780px] mx-auto">
            <p className="font-serif italic text-[clamp(24px,2.6vw,32px)] text-ink-3 leading-[1.35] tracking-[-0.015em] mb-6">
              &ldquo;Customer proof lives here. We&rsquo;ll replace this placeholder with a real
              operator quote the moment the first partner-program testimonials land.&rdquo;
            </p>
            <div className="font-mono text-[12px] text-ink-4 tracking-[0.04em] uppercase">
              Placeholder — partner quotes incoming
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
