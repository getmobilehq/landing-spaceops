import type { Metadata } from 'next';
import { siteConfig } from './site-config';

export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function buildMetadata(input: {
  title: string;
  description?: string;
  path?: string;
  noindex?: boolean;
}): Metadata {
  const { title, description, path = '/', noindex = false } = input;
  const fullTitle = title === siteConfig.name ? title : `${title} — ${siteConfig.name}`;
  const url = `${siteConfig.url}${path}`;
  const desc = description || siteConfig.description;

  return {
    title: fullTitle,
    description: desc,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      url,
      title: fullTitle,
      description: desc,
      siteName: siteConfig.name,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: desc,
    },
    robots: noindex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
