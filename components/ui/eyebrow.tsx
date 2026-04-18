import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn('eyebrow', className)}>{children}</div>;
}
