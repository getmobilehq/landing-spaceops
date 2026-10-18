import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-mulish)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-arvo)', 'Rockwell', 'Georgia', 'serif'],
        mono: ['var(--font-geist-mono)', 'ui-monospace', 'monospace'],
        serif: ['var(--font-arvo)', 'Georgia', 'serif'],
      },
      colors: {
        // Design system v3: neutral zinc greys (no warm tints), night
        // surfaces for header/hero/footer, one indigo accent (indigo-3).
        bg: {
          DEFAULT: '#FAFAF7',
          tint: '#F4F4F5',
          card: '#FFFFFF',
        },
        ink: {
          DEFAULT: '#0A0A0A',
          2: '#27272A',
          3: '#52525B',
          4: '#71717A',
        },
        line: {
          DEFAULT: '#E4E4E7',
          strong: '#C9C9CF',
        },
        night: {
          DEFAULT: '#0A0A0A',
          2: '#141416',
          3: '#1F1F23',
          line: '#2E2E34',
          fg: '#FAFAF7',
          muted: '#B4B4BB',
        },
        indigo: {
          DEFAULT: '#1E1B4B',
          2: '#3730A3',
          3: '#4338CA',
          soft: '#EEF2FF',
          light: '#A5B4FC',
        },
        success: '#15803D',
        warn: '#B45309',
        danger: '#B91C1C',
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
        lg: '10px',
        xl: '16px',
      },
      transitionTimingFunction: {
        ease: 'cubic-bezier(0.2, 0.7, 0.2, 1)',
        'ease-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
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
