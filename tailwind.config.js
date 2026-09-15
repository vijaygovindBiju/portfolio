/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'ui-monospace', 'monospace'],
      },
      colors: {
        // Dark theme backgrounds
        navy: {
          950: '#0B1120',
          900: '#111827',
          800: '#151F32',
          700: '#1A263B',
          600: '#1E2D45',
        },
        // Accents
        cyan: {
          400: '#22D3EE',
          500: '#06B6D4',
          600: '#0891B2',
          700: '#0E7490',
        },
        amber: {
          400: '#F59E0B',
          500: '#D97706',
        },
        // Project identities
        project: {
          netra: '#22D3EE',
          music: '#818CF8',
          terminal: '#F59E0B',
          ai: '#38BDF8',
        },
      },
      maxWidth: {
        container: '1280px',
      },
      lineHeight: {
        relaxed: '1.7',
        loose: '1.8',
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
      },
      borderWidth: {
        DEFAULT: '1px',
        3: '3px',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out both',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'flow': 'flow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        flow: {
          '0%': { opacity: '0.2', strokeDashoffset: '100' },
          '50%': { opacity: '1', strokeDashoffset: '0' },
          '100%': { opacity: '0.2', strokeDashoffset: '-100' },
        },
      },
      backgroundImage: {
        'grid-dark': 'linear-gradient(rgba(34,211,238,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.03) 1px, transparent 1px)',
        'grid-light': 'linear-gradient(rgba(8,145,178,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(8,145,178,0.04) 1px, transparent 1px)',
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
      },
      backgroundSize: {
        grid: '48px 48px',
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0,0,0,0.3), 0 1px 2px rgba(0,0,0,0.2)',
        'card-hover': '0 8px 25px rgba(0,0,0,0.4)',
        'cyan-glow': '0 0 20px rgba(34,211,238,0.12)',
        'input': 'inset 0 1px 2px rgba(0,0,0,0.2)',
      },
    },
  },
  plugins: [],
}
