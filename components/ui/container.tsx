import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('w-full max-w-site mx-auto px-6', className)}>{children}</div>
  );
}
