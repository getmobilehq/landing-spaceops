import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'ui-monospace', 'monospace'],
        serif: ['var(--font-instrument-serif)', 'Georgia', 'serif'],
      },
      colors: {
        bg: {
          DEFAULT: '#FAFAF7',
          tint: '#F3F3EE',
          card: '#FFFFFF',
        },
        ink: {
          DEFAULT: '#0A0A0A',
          2: '#262626',
          3: '#525252',
          4: '#737373',
        },
        line: {
          DEFAULT: '#E7E5E0',
          strong: '#D4D1C9',
        },
        indigo: {
          DEFAULT: '#1E1B4B',
          2: '#312E81',
          3: '#4338CA',
          soft: '#EEF2FF',
        },
        success: '#166534',
        warn: '#A16207',
      },
      maxWidth: {
        site: '1240px',
      },
      fontSize: {
        micro: ['12px', { lineHeight: '1.4', letterSpacing: '0.04em' }],
        small: ['14px', { lineHeight: '1.5' }],
        body: ['16.5px', { lineHeight: '1.55' }],
      },
      letterSpacing: {
        tighter: '-0.028em',
        tightest: '-0.035em',
      },
      borderRadius: {
        DEFAULT: '6px',
        sm: '4px',
        lg: '8px',
      },
      transitionTimingFunction: {
        ease: 'cubic-bezier(0.2, 0.6, 0.2, 1)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.2, 0.6, 0.2, 1) both',
      },
    },
  },
  plugins: [],
};

export default config;
