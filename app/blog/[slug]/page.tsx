import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Container } from '@/components/ui/container';
import { blogPosts, getBlogPost } from '@/lib/blog';
import { buildMetadata } from '@/lib/utils';

export function generateStaticParams() {
  return blogPosts
    .filter((p) => p.status === 'published')
    .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
  });
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);
  if (!post || post.status !== 'published') notFound();

  return (
    <article>
      <section className="pt-[clamp(96px,10vw,128px)] pb-12">
        <Container>
          <div className="max-w-[720px]">
            <div className="font-mono text-[11px] uppercase tracking-[0.06em] text-ink-4 mb-6">
              <Link href="/blog" className="hover:text-ink transition-colors">
                ← All posts
              </Link>
            </div>
            <div className="font-mono text-[11px] uppercase tracking-[0.06em] text-ink-4 mb-4 flex items-center gap-3 flex-wrap">
              <span>{post.tag}</span>
              <span>·</span>
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.readingTime}</span>
              <span>·</span>
              <span>{post.author}</span>
            </div>
            <h1 className="text-[clamp(32px,5vw,56px)] leading-[1.1] tracking-[-0.025em] mb-6">
              {post.title}
            </h1>
            <p className="font-serif italic text-[22px] text-ink-3 leading-[1.5]">
              {post.excerpt}
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-[clamp(80px,9vw,128px)]">
        <Container>
          <div className="max-w-[680px] flex flex-col gap-6">
            {post.body.map((para, i) => (
              <p key={i} className="text-ink-2 text-[17.5px] leading-[1.7]">
                {para}
              </p>
            ))}
          </div>
        </Container>
      </section>
    </article>
  );
}
