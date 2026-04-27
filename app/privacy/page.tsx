import {
  LegalPageLayout,
  LegalSection,
} from '@/components/marketing/legal-layout';
import { buildMetadata } from '@/lib/utils';

export const metadata = buildMetadata({
  title: 'Privacy Policy',
  description:
    'How SpaceOPS collects, uses, and protects your data. Third-party processors, retention, and your rights.',
  path: '/privacy',
});

export default function PrivacyPage() {
  return (
    <LegalPageLayout
      eyebrow="Legal"
      title="Privacy Policy"
      lastUpdated="18 April 2026"
      placeholder
    >
      <LegalSection title="What data we collect">
        <p>
          Account information (name, email, organisation details), attendance records (clock-in
          and clock-out timestamps, GPS coordinates at the moment of clock-in), uploaded images
          (floor plans, issue photos), and usage analytics.
        </p>
      </LegalSection>
      <LegalSection title="How we use your data">
        <p>
          To provide the SpaceOPS service (scheduling, attendance verification, reporting, and
          client portal access), to process billing, to communicate with you about your account,
          and to improve the platform.
        </p>
      </LegalSection>
      <LegalSection title="Data retention">
        <p>
          We retain your organisation&rsquo;s data for as long as your account is active. On
          account deletion, data is permanently removed within 30 days, except where retention is
          required by law (for example, FLSA payroll and timekeeping retention periods).
        </p>
      </LegalSection>
      <LegalSection title="Third-party processors">
        <p>We rely on a small number of trusted sub-processors:</p>
        <ul className="list-disc pl-6 flex flex-col gap-1.5">
          <li>Supabase — database and authentication</li>
          <li>Stripe — subscription billing</li>
          <li>Anthropic — AI features (executive summaries, floor plan detection)</li>
          <li>Resend — transactional email</li>
          <li>Vercel — hosting and delivery</li>
          <li>Sentry — error monitoring</li>
        </ul>
      </LegalSection>
      <LegalSection title="Your rights">
        <p>
          Subject to applicable law (GDPR, CCPA, Virginia CDPA, and others), you may have the
          right to access, correct, export, or delete your personal data. Contact
          support@onyxspaceops.com for requests.
        </p>
      </LegalSection>
      <LegalSection title="Cookies">
        <p>
          We use essential cookies for authentication and session management. We use privacy-first
          analytics that do not rely on tracking cookies and do not build user profiles across
          sites.
        </p>
      </LegalSection>
      <LegalSection title="Contact">
        <p>
          For any privacy-related enquiries, contact{' '}
          <a href="mailto:support@onyxspaceops.com" className="text-indigo-3 underline underline-offset-2">
            support@onyxspaceops.com
          </a>
          .
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
}
