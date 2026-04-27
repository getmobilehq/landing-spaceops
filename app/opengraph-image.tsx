import { ImageResponse } from 'next/og';
import { siteConfig } from '@/lib/site-config';

export const runtime = 'edge';
export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          background: '#FAFAF7',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <svg width="36" height="36" viewBox="0 0 22 22" fill="none">
            <rect x="0.5" y="0.5" width="9" height="9" rx="1" stroke="#0A0A0A" />
            <rect x="12" y="0" width="10" height="10" rx="1.5" fill="#4338CA" />
            <rect x="0.5" y="12.5" width="9" height="9" rx="1" stroke="#0A0A0A" />
            <rect x="12.5" y="12.5" width="9" height="9" rx="1" stroke="#0A0A0A" />
          </svg>
          <div style={{ fontSize: 28, fontWeight: 600, letterSpacing: '-0.01em' }}>
            Space<span style={{ color: '#4338CA' }}>OPS</span>
          </div>
        </div>

        <div
          style={{
            fontSize: 80,
            fontWeight: 500,
            lineHeight: 1.05,
            letterSpacing: '-0.035em',
            color: '#0A0A0A',
            maxWidth: '900px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <span>The Work Planning Tool</span>
          <span>for facility management.</span>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 18,
            color: '#525252',
            fontFamily: 'monospace',
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
          }}
        >
          <span>{siteConfig.domain}</span>
          <span>Free plan · No credit card</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
