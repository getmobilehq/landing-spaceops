import Link from 'next/link';
import { cn } from '@/lib/utils';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';

type Variant = 'primary' | 'ghost' | 'outline';
type Size = 'default' | 'lg';

const base =
  'inline-flex items-center justify-center gap-2 font-medium whitespace-nowrap rounded transition-all duration-[0.18s] ease-ease focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-indigo-3';

const variantStyles: Record<Variant, string> = {
  primary: 'bg-ink text-bg hover:bg-indigo-2 hover:-translate-y-[1px]',
  ghost: 'text-ink hover:text-indigo-3',
  outline: 'border border-line-strong text-ink hover:border-ink',
};

const sizeStyles: Record<Size, string> = {
  default: 'h-10 px-[18px] text-small',
  lg: 'h-12 px-6 text-[15px]',
};

type ButtonBaseProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
};

type AnchorProps = ButtonBaseProps & {
  href: string;
  external?: boolean;
} & Omit<ComponentPropsWithoutRef<'a'>, keyof ButtonBaseProps | 'href'>;

type ButtonProps = ButtonBaseProps & {
  href?: never;
} & Omit<ComponentPropsWithoutRef<'button'>, keyof ButtonBaseProps>;

export function Button(props: AnchorProps | ButtonProps) {
  const { variant = 'primary', size = 'default', className, children, ...rest } = props;
  const classes = cn(base, variantStyles[variant], sizeStyles[size], className);

  if ('href' in rest && rest.href) {
    const { href, external, ...anchorRest } = rest as AnchorProps;
    if (external || href.startsWith('http')) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...anchorRest}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...(anchorRest as object)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ComponentPropsWithoutRef<'button'>)}>
      {children}
    </button>
  );
}
