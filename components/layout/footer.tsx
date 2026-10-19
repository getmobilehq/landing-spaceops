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
    <footer className="night pt-[clamp(56px,8vw,96px)] pb-8">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr] gap-10 pb-14 border-b border-night-line">
          <div className="col-span-2 lg:col-span-1">
            <Logo reversed />
            <p className="font-display font-bold text-[clamp(26px,3vw,36px)] text-night-fg mt-6 mb-3 max-w-[16ch] leading-[1.1] tracking-[-0.02em]">
              {siteConfig.tagline}
            </p>
            <p className="text-[13px] text-night-muted max-w-[280px] leading-relaxed">
              A product by {siteConfig.parent.name}: {siteConfig.parent.tagline.toLowerCase()}
            </p>
          </div>

          {columns.map(({ title, key }) => (
            <div key={key}>
              <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-night-muted font-medium mb-4">
                {title}
              </div>
              <ul className="flex flex-col gap-2.5">
                {footerNav[key].map((link) => {
                  const isExternal = 'external' in link && link.external;
                  return (
                    <li key={link.label}>
                      {isExternal ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[14px] font-semibold text-night-fg hover:text-indigo-light transition-colors"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-[14px] font-semibold text-night-fg hover:text-indigo-light transition-colors"
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

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left font-mono text-[11.5px] text-night-muted tracking-[0.04em]">
          <div>© {new Date().getFullYear()} SpaceOPS · All rights reserved</div>
          <div>{siteConfig.domain}</div>
        </div>
      </Container>
    </footer>
  );
}
