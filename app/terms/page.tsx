import {
  LegalPageLayout,
  LegalSection,
} from '@/components/marketing/legal-layout';
import { buildMetadata } from '@/lib/utils';

export const metadata = buildMetadata({
  title: 'Terms of Service',
  description:
    'Terms of Service for SpaceOPS by Onyx Building Solutions. Account responsibilities, acceptable use, subscription terms, and more.',
  path: '/terms',
});

export default function TermsPage() {
  return (
    <LegalPageLayout
      eyebrow="Legal"
      title="Terms of Service"
      lastUpdated="18 April 2026"
      placeholder
    >
      <LegalSection title="Account creation and responsibilities">
        <p>
          Users are responsible for maintaining the confidentiality of their account credentials
          and for all activity that occurs under their account. Admins are responsible for the
          conduct of users they invite to their organisation.
        </p>
      </LegalSection>
      <LegalSection title="Acceptable use policy">
        <p>
          You may not use SpaceOPS for any unlawful purpose, to transmit harmful code, to infringe
          on the intellectual property rights of others, or to interfere with the integrity of the
          service.
        </p>
      </LegalSection>
      <LegalSection title="Subscription and billing">
        <p>
          Paid plans are billed in advance on a monthly or annual basis. Upgrades take effect
          immediately; downgrades take effect at the end of the current billing cycle. Refunds are
          handled on a case-by-case basis.
        </p>
      </LegalSection>
      <LegalSection title="Data ownership">
        <p>
          You own your data. SpaceOPS stores and processes it to provide the service. You may
          export your data in CSV format at any time. On account deletion, your data is
          permanently removed within 30 days.
        </p>
      </LegalSection>
      <LegalSection title="Service availability">
        <p>
          We aim for 99.9% uptime. Scheduled maintenance is announced in advance. The Enterprise
          plan includes a written SLA with credits for downtime.
        </p>
      </LegalSection>
      <LegalSection title="Termination and data export">
        <p>
          You may cancel your subscription at any time. On termination, you have 30 days to export
          your data before permanent deletion.
        </p>
      </LegalSection>
      <LegalSection title="Limitation of liability">
        <p>
          SpaceOPS is provided &ldquo;as is.&rdquo; To the maximum extent permitted by law,
          Onyx Building Solutions is not liable for indirect, incidental, or consequential damages
          arising from use of the service.
        </p>
      </LegalSection>
      <LegalSection title="Governing law">
        <p>These terms are governed by applicable law. Disputes will be resolved in the courts of competent jurisdiction.</p>
      </LegalSection>
    </LegalPageLayout>
  );
}
