import Link from 'next/link';
import { cn } from '@/lib/utils';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';

type Variant = 'primary' | 'ghost' | 'outline' | 'inverse' | 'outline-inverse';
type Size = 'default' | 'lg';

// v3: Mulish 800, 6px radius, borders before shadows, one easing curve.
const base =
  'inline-flex items-center justify-center gap-2 font-extrabold tracking-[0.01em] whitespace-nowrap rounded border transition-colors duration-200 ease-ease active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-indigo-3';

const variantStyles: Record<Variant, string> = {
  // Border colour lives in each variant: cn() doesn't merge conflicting classes.
  primary: 'border-transparent bg-ink text-bg hover:bg-indigo-3 hover:text-white',
  ghost: 'border-transparent text-ink hover:bg-bg-tint',
  outline: 'bg-bg-card border-line-strong text-ink hover:border-ink',
  // On night surfaces
  inverse: 'border-transparent bg-bg text-ink hover:bg-white hover:text-indigo-3',
  'outline-inverse':
    'border-[rgba(250,250,247,0.32)] text-night-fg hover:border-night-fg hover:text-white focus-visible:outline-indigo-light',
};

const sizeStyles: Record<Size, string> = {
  default: 'h-10 px-[18px] text-[14px]',
  lg: 'h-[52px] px-6 text-[16px]',
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
