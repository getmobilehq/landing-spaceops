import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

export function SectionHead({
  title,
  lead,
  centered = false,
  className,
}: {
  title: ReactNode;
  lead?: ReactNode;
  centered?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'max-w-[720px] mb-[clamp(48px,6vw,80px)]',
        centered && 'text-center mx-auto',
        className,
      )}
    >
      <h2>{title}</h2>
      {lead && <p className="lead mt-5">{lead}</p>}
    </div>
  );
}
