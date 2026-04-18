import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { Logo } from './logo';
import { footerNav, siteConfig } from '@/lib/site-config';

const columns: { title: string; key: keyof typeof footerNav }[] = [
  { title: 'Product', key: 'product' },
  { title: 'Company', key: 'company' },
  { title: 'Resources', key: 'resources' },
  { title: 'Legal', key: 'legal' },
];

export function Footer() {
  return (
    <footer className="bg-bg pt-20 pb-8 border-t border-line">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-10 lg:gap-12 mb-16">
          <div>
            <Logo />
            <p className="font-serif italic text-[22px] text-ink mt-5 mb-2 max-w-[320px] leading-[1.3]">
              {siteConfig.tagline}
            </p>
            <p className="text-[13px] text-ink-4 max-w-[280px] leading-relaxed">
              A product by {siteConfig.parent.name} — {siteConfig.parent.tagline.toLowerCase()}
            </p>
          </div>

          {columns.map(({ title, key }) => (
            <div key={key}>
              <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink-4 font-medium mb-5">
                {title}
              </div>
              <ul className="flex flex-col gap-3">
                {footerNav[key].map((link) => {
                  const isExternal = 'external' in link && link.external;
                  return (
                    <li key={link.label}>
                      {isExternal ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-small text-ink-3 hover:text-ink transition-colors"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-small text-ink-3 hover:text-ink transition-colors"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left font-mono text-[12px] text-ink-4 tracking-[0.04em]">
          <div>© {new Date().getFullYear()} SpaceOPS · All rights reserved</div>
          <div>{siteConfig.domain}</div>
        </div>
      </Container>
    </footer>
  );
}
