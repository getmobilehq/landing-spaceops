import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site-config';
import { features } from '@/lib/features';
import { blogPosts } from '@/lib/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, '');
  const now = new Date();

  const staticRoutes = [
    '',
    '/pricing',
    '/features',
    '/security',
    '/integrations',
    '/compliance',
    '/about',
    '/blog',
    '/contact',
    '/terms',
    '/privacy',
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : 0.7,
  }));

  const featureRoutes = features.map((f) => ({
    url: `${base}/features/${f.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const blogRoutes = blogPosts
    .filter((p) => p.status === 'published')
    .map((p) => ({
      url: `${base}/blog/${p.slug}`,
      lastModified: p.date ? new Date(p.date) : now,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    }));

  return [...staticRoutes, ...featureRoutes, ...blogRoutes];
}
