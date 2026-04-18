import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Eyebrow } from '@/components/ui/eyebrow';

export default function NotFound() {
  return (
    <section className="pt-[clamp(96px,10vw,148px)] pb-[clamp(96px,10vw,148px)] min-h-[70vh] flex items-center">
      <Container>
        <div className="max-w-[620px]">
          <div className="font-serif italic text-[96px] text-indigo-3 leading-none mb-6 tracking-[-0.02em]">
            404
          </div>
          <Eyebrow className="mb-5">Not found</Eyebrow>
          <h1 className="mb-6">
            This page doesn&rsquo;t <span className="serif">exist</span>.
          </h1>
          <p className="lead mb-10">
            The URL you followed may be broken, or the page may have moved. Let&rsquo;s get you back
            to somewhere useful.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/" variant="primary" size="lg">
              Back to homepage →
            </Button>
            <Button href="/contact" variant="ghost" size="lg">
              Report this →
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
