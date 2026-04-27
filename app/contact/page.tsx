import { Container } from '@/components/ui/container';
import { Eyebrow } from '@/components/ui/eyebrow';
import { ContactForm } from '@/components/marketing/contact-form';
import { buildMetadata } from '@/lib/utils';

export const metadata = buildMetadata({
  title: 'Contact',
  description:
    'Get in touch for a demo, a pricing conversation, or an Enterprise evaluation. We usually respond within one business day.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <section className="pt-[clamp(96px,10vw,128px)] pb-[clamp(96px,10vw,128px)]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 max-w-6xl">
          <div>
            <Eyebrow className="mb-5">Contact</Eyebrow>
            <h1 className="mb-7">
              Let&rsquo;s <span className="serif">talk</span>.
            </h1>
            <p className="lead mb-10">
              Whether you want a walkthrough, a custom quote, or help evaluating SpaceOPS for a
              large operation — send us a note and we&rsquo;ll be in touch within one business day.
            </p>

            <div className="flex flex-col gap-8">
              <InfoBlock label="Email" value="support@onyxspaceops.com" href="mailto:support@onyxspaceops.com" />
              <InfoBlock label="Or, skip the form" value="Start a free account now →" href="https://app.onyxspaceops.com/signup" external />
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}

function InfoBlock({
  label,
  value,
  href,
  external,
}: {
  label: string;
  value: string;
  href: string;
  external?: boolean;
}) {
  return (
    <div>
      <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink-4 mb-2">
        {label}
      </div>
      <a
        href={href}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        className="text-[17px] text-ink hover:text-indigo-3 transition-colors"
      >
        {value}
      </a>
    </div>
  );
}
