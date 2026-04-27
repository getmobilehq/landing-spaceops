'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export function ContactForm() {
  const [state, setState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    buildings: '',
    message: '',
    website: '',
  });

  const update = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [field]: e.target.value });
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (state === 'submitting') return;

    setState('submitting');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || 'Something went wrong. Please try again.');
      }
      setState('success');
    } catch (err) {
      setState('error');
      setErrorMsg(err instanceof Error ? err.message : 'Unknown error');
    }
  }

  if (state === 'success') {
    return (
      <div className="border border-line rounded-lg p-10 bg-bg-card">
        <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-success mb-4">
          ✓ Message sent
        </div>
        <h3 className="text-[22px] font-medium mb-3 tracking-[-0.015em]">
          Thanks — we&rsquo;ll be in touch.
        </h3>
        <p className="text-ink-3 text-[15px] leading-[1.6]">
          We usually respond within one business day. If you&rsquo;d like to get started sooner,
          you can{' '}
          <a
            href="https://app.onyxspaceops.com/signup"
            className="text-indigo-3 underline underline-offset-2"
          >
            spin up a free account now
          </a>
          .
        </p>
      </div>
    );
  }

  const inputClass =
    'w-full bg-bg-card border border-line rounded px-4 py-3 text-[15px] text-ink placeholder:text-ink-4 transition-colors focus:outline-none focus:border-ink';

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}>
        <label>
          Website
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={form.website}
            onChange={update('website')}
          />
        </label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Field label="Full name" required>
          <input
            type="text"
            required
            value={form.name}
            onChange={update('name')}
            className={inputClass}
            placeholder="Jane Doe"
          />
        </Field>
        <Field label="Work email" required>
          <input
            type="email"
            required
            value={form.email}
            onChange={update('email')}
            className={inputClass}
            placeholder="jane@company.com"
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Field label="Company">
          <input
            type="text"
            value={form.company}
            onChange={update('company')}
            className={inputClass}
            placeholder="Acme Cleaning Co."
          />
        </Field>
        <Field label="Your role">
          <select
            value={form.role}
            onChange={update('role')}
            className={cn(inputClass, 'appearance-none bg-[url("data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 width=%2712%27 height=%2712%27 viewBox=%270 0 12 12%27 fill=%27none%27><path d=%27M3 4.5L6 7.5L9 4.5%27 stroke=%27%23525252%27 stroke-width=%271.5%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27/></svg>")] bg-no-repeat bg-[right_1rem_center] pr-10')}
          >
            <option value="">Select a role</option>
            <option value="owner">Owner / Founder</option>
            <option value="operations">Head of Operations</option>
            <option value="facility-manager">Facility Manager</option>
            <option value="property-manager">Property Manager</option>
            <option value="other">Other</option>
          </select>
        </Field>
      </div>

      <Field label="How many buildings do you manage?">
        <select
          value={form.buildings}
          onChange={update('buildings')}
          className={cn(inputClass, 'appearance-none bg-[url("data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 width=%2712%27 height=%2712%27 viewBox=%270 0 12 12%27 fill=%27none%27><path d=%27M3 4.5L6 7.5L9 4.5%27 stroke=%27%23525252%27 stroke-width=%271.5%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27/></svg>")] bg-no-repeat bg-[right_1rem_center] pr-10')}
        >
          <option value="">Select a range</option>
          <option value="1-5">1–5</option>
          <option value="6-20">6–20</option>
          <option value="21-50">21–50</option>
          <option value="50+">50+</option>
        </select>
      </Field>

      <Field label="What brings you to SpaceOPS?">
        <textarea
          value={form.message}
          onChange={update('message')}
          className={cn(inputClass, 'resize-none min-h-[140px]')}
          placeholder="Tell us a bit about your operation and what you&rsquo;re looking to solve."
          rows={5}
        />
      </Field>

      {state === 'error' && (
        <div className="text-small text-warn border border-warn/40 bg-warn/5 rounded px-4 py-3">
          {errorMsg || 'Something went wrong. Please try again.'}
        </div>
      )}

      <div className="flex items-center justify-between gap-4 pt-2">
        <p className="text-[13px] text-ink-4 max-w-md">
          We&rsquo;ll only use your details to reply to your enquiry.
        </p>
        <Button variant="primary" size="lg" className="min-w-[160px]">
          {state === 'submitting' ? 'Sending…' : 'Send message →'}
        </Button>
      </div>
    </form>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-[13px] font-medium text-ink-2">
        {label}
        {required && <span className="text-indigo-3 ml-1">*</span>}
      </span>
      {children}
    </label>
  );
}
