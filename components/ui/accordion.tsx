'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

export function Accordion({
  items,
}: {
  items: { q: string; a: string }[];
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="border-t border-line">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="border-b border-line">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-6 py-6 text-left group"
              aria-expanded={isOpen}
            >
              <span className="text-ink font-medium text-[17px] tracking-[-0.01em] group-hover:text-indigo-3 transition-colors">
                {item.q}
              </span>
              <span
                className={cn(
                  'flex-shrink-0 w-5 h-5 relative transition-transform duration-200',
                  isOpen && 'rotate-45',
                )}
                aria-hidden="true"
              >
                <span className="absolute inset-x-0 top-1/2 h-px bg-ink-3" />
                <span className="absolute inset-y-0 left-1/2 w-px bg-ink-3" />
              </span>
            </button>
            <div
              className={cn(
                'grid transition-all duration-300 ease-ease',
                isOpen ? 'grid-rows-[1fr] opacity-100 pb-6' : 'grid-rows-[0fr] opacity-0',
              )}
            >
              <div className="overflow-hidden">
                <p className="text-ink-3 text-[15px] leading-relaxed max-w-[720px]">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
