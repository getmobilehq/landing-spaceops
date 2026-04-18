import { Container } from '@/components/ui/container';
import { Eyebrow } from '@/components/ui/eyebrow';
import { complianceSections } from '@/lib/compliance';
import { buildMetadata } from '@/lib/utils';

export const metadata = buildMetadata({
  title: 'US Compliance & Regulations',
  description:
    'How SpaceOPS helps facility management and cleaning companies stay on the right side of FLSA, state overtime laws, GPS privacy, BIPA, OSHA, and janitorial industry regulations.',
  path: '/compliance',
});

export default function CompliancePage() {
  return (
    <>
      <section className="pt-[clamp(96px,10vw,128px)] pb-[clamp(48px,6vw,80px)]">
        <Container>
          <div className="max-w-[820px]">
            <Eyebrow className="mb-5">Compliance</Eyebrow>
            <h1 className="mb-7">
              Built with US labour and privacy regulations <span className="serif">in mind</span>.
            </h1>
            <p className="lead">
              SpaceOPS helps facility management companies and cleaning operators stay on the
              right side of federal and state regulations — from overtime calculations to GPS
              tracking consent.
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-[clamp(96px,10vw,128px)] border-t border-line pt-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-12 lg:gap-20">
            {/* Sticky TOC */}
            <aside className="lg:sticky lg:top-24 self-start">
              <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink-4 mb-5">
                On this page
              </div>
              <ul className="flex flex-col gap-2.5 border-l border-line pl-4">
                {complianceSections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="block text-small text-ink-3 hover:text-ink transition-colors leading-tight"
                    >
                      {s.eyebrow}
                    </a>
                  </li>
                ))}
              </ul>
            </aside>

            {/* Sections */}
            <div className="max-w-[780px]">
              {complianceSections.map((s, idx) => (
                <article
                  key={s.id}
                  id={s.id}
                  className={`scroll-mt-24 ${idx !== 0 ? 'mt-20 pt-20 border-t border-line' : ''}`}
                >
                  <Eyebrow className="mb-4">{s.eyebrow}</Eyebrow>
                  <h2 className="text-[28px] md:text-[32px] mb-6 tracking-[-0.025em] leading-[1.15]">
                    {s.headline}
                  </h2>

                  {s.paragraphs.map((p, i) => (
                    <p key={i} className="text-ink-2 text-[16.5px] leading-[1.7] mb-5">
                      {p}
                    </p>
                  ))}

                  {s.subsections && (
                    <div className="flex flex-col gap-7 mt-8">
                      {s.subsections.map((sub) => (
                        <div key={sub.title}>
                          <h3 className="text-[17px] font-medium mb-2 tracking-[-0.01em]">
                            {sub.title}
                          </h3>
                          <p className="text-ink-3 text-[15.5px] leading-[1.65]">{sub.body}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {s.table && (
                    <div className="mt-8 border border-line rounded-lg overflow-hidden">
                      <table className="w-full text-[14px]">
                        <thead>
                          <tr className="bg-bg-tint border-b border-line">
                            {s.table.headers.map((h) => (
                              <th
                                key={h}
                                className="text-left px-5 py-3 font-mono text-[11px] uppercase tracking-[0.06em] text-ink-4 font-medium"
                              >
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {s.table.rows.map((row, i) => (
                            <tr key={i} className="border-b border-line last:border-b-0">
                              {row.map((cell, j) => (
                                <td key={j} className="px-5 py-3.5 text-ink-2">
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {s.keyPoints && (
                    <div className="mt-8 p-6 border border-line rounded-lg bg-bg-card">
                      <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-indigo-3 mb-4 font-medium">
                        Key features
                      </div>
                      <ul className="flex flex-col gap-2.5">
                        {s.keyPoints.map((kp) => (
                          <li
                            key={kp}
                            className="flex items-start gap-3 text-[14.5px] text-ink-2"
                          >
                            <svg
                              className="w-4 h-4 mt-[3px] flex-shrink-0 text-indigo-3"
                              viewBox="0 0 16 16"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                            >
                              <path d="M3 8l3.5 3.5L13 5" />
                            </svg>
                            <span>{kp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {s.note && (
                    <div className="mt-6 pl-5 border-l-2 border-line-strong text-[14.5px] text-ink-3 italic leading-[1.65]">
                      <span className="not-italic font-mono text-[10.5px] uppercase tracking-[0.08em] text-ink-4 mr-2">
                        Note
                      </span>
                      {s.note}
                    </div>
                  )}
                </article>
              ))}

              {/* Disclaimer */}
              <div className="mt-20 pt-10 border-t border-line">
                <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink-4 mb-4">
                  Important disclaimer
                </div>
                <p className="text-ink-3 text-[14px] leading-[1.7]">
                  SpaceOPS is a facility management platform, not a legal compliance service. The
                  information on this page is provided for general guidance only and does not
                  constitute legal advice. Labour laws, privacy regulations, and industry
                  requirements vary by jurisdiction and change over time. Always consult qualified
                  legal counsel and your payroll provider to ensure your operations comply with
                  all applicable federal, state, and local laws.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
