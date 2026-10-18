import Link from 'next/link';
import { cn } from '@/lib/utils';

/** Design system v3 logo: plan mark with the inspected room in indigo. */
export function Logo({
  className,
  href = '/',
  reversed = false,
}: {
  className?: string;
  href?: string;
  /** Use on night surfaces. */
  reversed?: boolean;
}) {
  return (
    <Link href={href} className={cn('inline-flex items-center', className)} aria-label="SpaceOPS home">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={reversed ? '/brand/logo-reversed.svg' : '/brand/logo.svg'}
        alt="SpaceOPS"
        width={166}
        height={24}
        className="h-6 w-auto"
      />
    </Link>
  );
}
