import Link from 'next/link';
import { cn } from '@/lib/utils';

export function Logo({
  className,
  href = '/',
}: {
  className?: string;
  href?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        'inline-flex items-center gap-[10px] font-semibold text-[17px] tracking-[-0.01em] text-ink',
        className,
      )}
      aria-label="SpaceOPS home"
    >
      <span className="w-[22px] h-[22px] inline-block" aria-hidden="true">
        <svg viewBox="0 0 22 22" fill="none" className="w-full h-full">
          <rect x="0.5" y="0.5" width="9" height="9" rx="1" stroke="#0A0A0A" />
          <rect x="12" y="0" width="10" height="10" rx="1.5" fill="#4338CA" />
          <rect x="0.5" y="12.5" width="9" height="9" rx="1" stroke="#0A0A0A" />
          <rect x="12.5" y="12.5" width="9" height="9" rx="1" stroke="#0A0A0A" />
        </svg>
      </span>
      <span>
        Space<span className="text-indigo-3">OPS</span>
      </span>
    </Link>
  );
}
