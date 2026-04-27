import { NextResponse } from 'next/server';
import { Resend } from 'resend';

type ContactBody = {
  name: string;
  email: string;
  company?: string;
  role?: string;
  buildings?: string;
  message?: string;
  website?: string;
};

const MAX_BODY_BYTES = 16_384;
const FIELD_CAPS = { name: 200, email: 320, company: 200, role: 80, buildings: 40, message: 5000 };

const escape = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const oneLine = (s: string) => s.replace(/[\r\n]+/g, ' ').trim();

export async function POST(req: Request) {
  const contentLength = Number(req.headers.get('content-length') ?? 0);
  if (contentLength > MAX_BODY_BYTES) {
    return NextResponse.json({ error: 'Payload too large.' }, { status: 413 });
  }

  let body: ContactBody;
  try {
    body = (await req.json()) as ContactBody;
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  if (body.website && body.website.trim() !== '') {
    return NextResponse.json({ ok: true });
  }

  const name = (body.name ?? '').slice(0, FIELD_CAPS.name);
  const email = (body.email ?? '').slice(0, FIELD_CAPS.email);
  const company = (body.company ?? '').slice(0, FIELD_CAPS.company);
  const role = (body.role ?? '').slice(0, FIELD_CAPS.role);
  const buildings = (body.buildings ?? '').slice(0, FIELD_CAPS.buildings);
  const message = (body.message ?? '').slice(0, FIELD_CAPS.message);

  if (!name.trim() || !email.trim()) {
    return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;
  const toEmail = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !fromEmail || !toEmail) {
    console.warn(
      '[contact] Resend not configured — submission accepted but no email sent. Set RESEND_API_KEY, CONTACT_FROM_EMAIL, CONTACT_TO_EMAIL.',
    );
    return NextResponse.json({ ok: true });
  }

  const resend = new Resend(apiKey);
  const safeSubjectName = oneLine(name);
  const safeSubjectCompany = oneLine(company);

  const html = `
    <!DOCTYPE html>
    <html>
      <body style="font-family: -apple-system, BlinkMacSystemFont, sans-serif; color: #0A0A0A; line-height: 1.55;">
        <h2 style="margin: 0 0 16px; font-weight: 500;">New contact form submission</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 560px;">
          <tr><td style="padding: 8px 0; color: #525252; width: 140px;">Name</td><td><strong>${escape(name)}</strong></td></tr>
          <tr><td style="padding: 8px 0; color: #525252;">Email</td><td><a href="mailto:${escape(email)}">${escape(email)}</a></td></tr>
          <tr><td style="padding: 8px 0; color: #525252;">Company</td><td>${escape(company) || '—'}</td></tr>
          <tr><td style="padding: 8px 0; color: #525252;">Role</td><td>${escape(role) || '—'}</td></tr>
          <tr><td style="padding: 8px 0; color: #525252;">Buildings</td><td>${escape(buildings) || '—'}</td></tr>
        </table>
        <hr style="border: none; border-top: 1px solid #E7E5E0; margin: 24px 0;" />
        <div style="color: #525252; font-size: 13px; margin-bottom: 8px;">Message</div>
        <div style="white-space: pre-wrap;">${escape(message) || '—'}</div>
      </body>
    </html>
  `;

  try {
    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `SpaceOPS contact — ${safeSubjectName}${safeSubjectCompany ? ` (${safeSubjectCompany})` : ''}`,
      html,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[contact] Resend error:', err);
    return NextResponse.json(
      { error: 'Could not send message. Please try again or email support@onyxspaceops.com directly.' },
      { status: 500 },
    );
  }
}
