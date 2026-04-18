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
        <div className="inline-flex items-center gap-0 p-1 bg-bg-tint border border-line rounded">
          <button
            onClick={() => setBilling('monthly')}
            className={cn(
              'px-5 py-2 text-small font-medium rounded-sm transition-all',
              billing === 'monthly' ? 'bg-bg-card text-ink shadow-sm' : 'text-ink-3',
            )}
          >
            Monthly
          </button>
          <button
            onClick={() => setBilling('yearly')}
            className={cn(
              'px-5 py-2 text-small font-medium rounded-sm transition-all inline-flex items-center gap-2',
              billing === 'yearly' ? 'bg-bg-card text-ink shadow-sm' : 'text-ink-3',
            )}
          >
            Yearly
            <span className="font-mono text-[10px] px-1.5 py-0.5 bg-indigo-soft text-indigo-3 rounded-sm tracking-[0.04em]">
              SAVE 17%
            </span>
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
          ? 'border-ink bg-bg-card relative'
          : 'border-line bg-bg-card',
      )}
    >
      {tier.highlighted && (
        <div className="absolute -top-3 left-8 font-mono text-[10px] uppercase tracking-[0.08em] bg-ink text-bg px-2.5 py-1 rounded-sm">
          Most popular
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-[22px] font-medium tracking-[-0.015em]">{tier.name}</h3>
        <p className="text-ink-4 text-[14px] mt-1">{tier.tagline}</p>
      </div>

      <div className="mb-8 min-h-[80px]">
        {price === null ? (
          <>
            <div className="text-[40px] font-medium tracking-[-0.025em] leading-none">Custom</div>
            <div className="text-ink-4 text-[13px] mt-2 font-mono uppercase tracking-[0.04em]">
              Contact sales
            </div>
          </>
        ) : (
          <>
            <div className="flex items-baseline gap-1">
              <span className="text-[40px] font-medium tracking-[-0.025em] leading-none">
                ${price}
              </span>
              <span className="text-ink-3 text-[16px]">{price > 0 ? period : ''}</span>
            </div>
            <div className="text-ink-4 text-[13px] mt-2 font-mono uppercase tracking-[0.04em]">
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
        <div className="font-mono text-[11px] uppercase tracking-[0.06em] text-ink-4 mb-4">
          {tier.includesHeader}
        </div>
      )}

      <ul className="flex flex-col gap-3 text-[14.5px] text-ink-2">
        {tier.features.map((f) => (
          <li key={f} className="flex items-start gap-3">
            <svg
              className="w-4 h-4 mt-[3px] flex-shrink-0 text-indigo-3"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
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
