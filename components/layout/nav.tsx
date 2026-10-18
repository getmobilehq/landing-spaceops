'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Logo } from './logo';
import { primaryNav, siteConfig } from '@/lib/site-config';

/**
 * v3 site header: night surface, reversed logo. Under 900px the links move
 * into a full-screen night menu with large Arvo links and full-width CTAs.
 */
export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Lock page scroll behind the open menu and close it on Escape.
  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMobileOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [mobileOpen]);

  return (
    <nav className="sticky top-0 z-50 bg-night border-b border-night-line">
      <Container>
        <div className="flex items-center justify-between gap-10 h-16 min-[900px]:h-[72px]">
          <Logo reversed />

          <div className="hidden min-[900px]:flex gap-[clamp(18px,2.2vw,32px)] mr-auto text-[14px] font-bold">
            {primaryNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-night-muted hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden min-[900px]:flex items-center gap-2">
            <Button href={siteConfig.signinUrl} external variant="outline-inverse">
              Sign in
            </Button>
            <Button href={siteConfig.signupUrl} external variant="inverse">
              Start free →
            </Button>
          </div>

          <button
            onClick={() => setMobileOpen(true)}
            className="min-[900px]:hidden inline-flex items-center justify-center w-11 h-11 -mr-2 text-night-fg"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="square">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </Container>

      {mobileOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="min-[900px]:hidden fixed inset-0 z-[60] bg-night text-night-fg flex flex-col px-[clamp(20px,4vw,40px)] pb-[max(24px,env(safe-area-inset-bottom))] animate-fade-up"
        >
          <div className="h-16 flex items-center justify-between">
            <Logo reversed />
            <button
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center w-11 h-11 -mr-2 text-night-fg"
              aria-label="Close menu"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="square">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>

          <div className="flex flex-col mt-6">
            {primaryNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-display font-bold text-[36px] tracking-[-0.02em] text-night-fg py-3.5 border-b border-night-line flex items-center justify-between"
              >
                {link.label}
                <span aria-hidden="true" className="text-night-muted text-[24px]">→</span>
              </Link>
            ))}
          </div>

          <div className="mt-auto grid gap-2.5 pt-8">
            <Button href={siteConfig.signinUrl} external variant="outline-inverse" size="lg">
              Sign in
            </Button>
            <Button href={siteConfig.signupUrl} external variant="inverse" size="lg">
              Start free →
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
