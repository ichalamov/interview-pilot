/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep navy background palette
        navy: {
          900: '#0a0e1a',
          850: '#0d1221',
          800: '#101628',
          750: '#151b30',
          700: '#1a2138',
        },
        // Cyan/teal accent palette (like LockedIn AI)
        cyan: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },
        // Keep primary as alias to cyan
        primary: {
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
        },
        // Gray alternatives for dark mode
        gray: {
          750: '#1a1f2e',
          800: '#101628',
          850: '#0d1221',
          900: '#0a0e1a',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #06b6d4 0%, #22d3ee 100%)',
        'gradient-glow': 'linear-gradient(135deg, rgba(6,182,212,0.15) 0%, rgba(34,211,238,0.05) 100%)',
        'gradient-subtle': 'linear-gradient(180deg, rgba(34,211,238,0.03) 0%, transparent 100%)',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(6,182,212,0.3)',
        'glow-sm': '0 0 10px rgba(6,182,212,0.2)',
        'card': '0 4px 20px rgba(0,0,0,0.3)',
        'card-hover': '0 8px 30px rgba(0,0,0,0.4)',
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'slide-in': 'slide-in 0.3s ease-out',
        'fade-in': 'fade-in 0.2s ease-out',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(6,182,212,0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(6,182,212,0.5)' },
        },
        'slide-in': {
          '0%': { transform: 'translateX(-10px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
