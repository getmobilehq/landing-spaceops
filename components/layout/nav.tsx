'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Logo } from './logo';
import { primaryNav, siteConfig } from '@/lib/site-config';
import { cn } from '@/lib/utils';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={cn(
        'sticky top-0 z-50 nav-glass border-b transition-colors duration-200',
        scrolled ? 'border-line' : 'border-transparent',
      )}
    >
      <Container>
        <div className="flex items-center justify-between h-16">
          <Logo />

          <div className="hidden lg:flex gap-8 text-small text-ink-3">
            {primaryNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-ink transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button href={siteConfig.signinUrl} external variant="ghost">
              Sign in
            </Button>
            <Button href={siteConfig.signupUrl} external variant="primary">
              Start free →
            </Button>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-[5px] p-2"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span
              className={cn(
                'block w-5 h-px bg-ink transition-transform duration-200',
                mobileOpen && 'translate-y-[6px] rotate-45',
              )}
            />
            <span
              className={cn(
                'block w-5 h-px bg-ink transition-opacity duration-200',
                mobileOpen && 'opacity-0',
              )}
            />
            <span
              className={cn(
                'block w-5 h-px bg-ink transition-transform duration-200',
                mobileOpen && '-translate-y-[6px] -rotate-45',
              )}
            />
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden pb-6 border-t border-line pt-6 animate-fade-up">
            <div className="flex flex-col gap-4 mb-6">
              {primaryNav.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-ink text-[16px]"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <Button href={siteConfig.signinUrl} external variant="outline" size="lg">
                Sign in
              </Button>
              <Button href={siteConfig.signupUrl} external variant="primary" size="lg">
                Start free →
              </Button>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
}
