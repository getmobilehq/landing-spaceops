import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { Eyebrow } from '@/components/ui/eyebrow';
import { blogPosts } from '@/lib/blog';
import { buildMetadata } from '@/lib/utils';

export const metadata = buildMetadata({
  title: 'Blog',
  description:
    'Notes on facility operations, product updates, and what we’re learning as we build SpaceOPS.',
  path: '/blog',
});

export default function BlogPage() {
  const published = blogPosts.filter((p) => p.status === 'published');
  const comingSoon = blogPosts.filter((p) => p.status === 'coming-soon');

  return (
    <>
      <section className="pt-[clamp(96px,10vw,128px)] pb-[clamp(48px,6vw,80px)]">
        <Container>
          <div className="max-w-[720px]">
            <Eyebrow className="mb-5">Blog</Eyebrow>
            <h1 className="mb-7">
              Notes from the <span className="serif">floor</span>.
            </h1>
            <p className="lead">
              Product updates, operational notes, and honest thoughts about the facility
              management industry.
            </p>
          </div>
        </Container>
      </section>

      {/* Published */}
      {published.length > 0 && (
        <section className="pb-20">
          <Container>
            <div className="border-t border-line">
              {published.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block py-10 border-b border-line -mx-6 px-6 hover:bg-bg-tint transition-colors"
                >
                  <div className="font-mono text-[11px] uppercase tracking-[0.06em] text-ink-4 mb-3 flex items-center gap-4">
                    <span>{post.tag}</span>
                    <span>·</span>
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readingTime}</span>
                  </div>
                  <h2 className="text-[24px] md:text-[28px] font-medium tracking-[-0.02em] mb-3 group-hover:text-indigo-3 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-ink-3 text-[15.5px] leading-[1.6] max-w-[680px]">
                    {post.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Coming soon */}
      {comingSoon.length > 0 && (
        <section className="section">
          <Container>
            <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink-4 mb-8">
              Coming soon
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
              {comingSoon.map((post) => (
                <article
                  key={post.slug}
                  className="border border-dashed border-line-strong rounded-lg p-6 bg-bg-card/60"
                >
                  <div className="font-mono text-[11px] uppercase tracking-[0.06em] text-ink-4 mb-3">
                    {post.tag}
                  </div>
                  <h3 className="text-[18px] font-medium mb-2 tracking-[-0.015em] text-ink-2">
                    {post.title}
                  </h3>
                  <p className="text-ink-4 text-[14px] leading-[1.55]">{post.excerpt}</p>
                </article>
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
