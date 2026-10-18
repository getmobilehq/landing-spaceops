'use client';

import { useState } from 'react';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { pricingTiers, type PricingTier } from '@/lib/pricing';
import { cn } from '@/lib/utils';

export function PricingTable() {
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <Container>
      {/* Toggle */}
      <div className="flex justify-center mb-14">
        <div className="inline-flex items-center gap-0 p-1 bg-bg-tint border border-line rounded-lg">
          <button
            onClick={() => setBilling('monthly')}
            className={cn(
              'px-5 h-10 text-small font-bold rounded transition-colors',
              billing === 'monthly' ? 'bg-bg-card text-ink ring-1 ring-line' : 'text-ink-3 hover:text-ink',
            )}
          >
            Monthly
          </button>
          <button
            onClick={() => setBilling('yearly')}
            className={cn(
              'px-5 h-10 text-small font-bold rounded transition-colors inline-flex items-center gap-2',
              billing === 'yearly' ? 'bg-bg-card text-ink ring-1 ring-line' : 'text-ink-3 hover:text-ink',
            )}
          >
            Yearly
            <span className="badge bg-indigo-soft text-indigo-3">SAVE 17%</span>
          </button>
        </div>
      </div>

      {/* Tiers */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6 max-w-5xl mx-auto">
        {pricingTiers.map((tier) => (
          <TierCard key={tier.id} tier={tier} billing={billing} />
        ))}
      </div>
    </Container>
  );
}

function TierCard({ tier, billing }: { tier: PricingTier; billing: 'monthly' | 'yearly' }) {
  const price = billing === 'monthly' ? tier.priceMonthly : tier.priceYearly;
  const period = billing === 'monthly' ? '/mo' : '/yr';

  return (
    <article
      className={cn(
        'border rounded-lg p-8 flex flex-col',
        tier.highlighted
          ? 'border-2 border-ink bg-bg-card relative'
          : 'border-line bg-bg-card',
      )}
    >
      {tier.highlighted && (
        <div className="badge absolute -top-[11px] left-8 bg-ink text-bg">Most popular</div>
      )}

      <div className="mb-6">
        <h3 className="text-[24px] tracking-[-0.02em]">{tier.name}</h3>
        <p className="text-ink-4 text-[14px] mt-1">{tier.tagline}</p>
      </div>

      <div className="mb-8 min-h-[80px]">
        {price === null ? (
          <>
            <div className="font-display font-bold text-[44px] tracking-[-0.03em] leading-none">Custom</div>
            <div className="text-ink-4 text-[11px] mt-3 font-mono uppercase tracking-[0.1em]">
              Contact sales
            </div>
          </>
        ) : (
          <>
            <div className="flex items-baseline gap-1">
              <span className="font-display font-bold text-[44px] tracking-[-0.03em] leading-none tabular-nums">
                ${price.toLocaleString('en-US')}
              </span>
              <span className="font-mono text-ink-4 text-[14px]">{price > 0 ? period : ''}</span>
            </div>
            <div className="text-ink-4 text-[11px] mt-3 font-mono uppercase tracking-[0.1em]">
              {price === 0
                ? 'Free forever'
                : billing === 'yearly'
                  ? 'Billed annually'
                  : 'Billed monthly'}
            </div>
          </>
        )}
      </div>

      <Button
        href={tier.ctaHref}
        external={tier.ctaHref.startsWith('http')}
        variant={tier.highlighted ? 'primary' : 'outline'}
        size="lg"
        className="w-full mb-8"
      >
        {tier.ctaLabel}
      </Button>

      {tier.includesHeader && (
        <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-4 mb-4">
          {tier.includesHeader}
        </div>
      )}

      <ul className="flex flex-col gap-3 text-[14.5px] text-ink-2">
        {tier.features.map((f) => (
          <li key={f} className="flex items-start gap-3">
            <svg
              className="w-4 h-4 mt-[3px] flex-shrink-0 text-ink"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="square"
              strokeLinejoin="miter"
            >
              <path d="M3 8l3.5 3.5L13 5" />
            </svg>
            <span>{f}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
