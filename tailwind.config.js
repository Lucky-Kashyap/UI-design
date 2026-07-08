/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    screens: {
      xs: '375px',
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
    },
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        xl: '1.5rem',
        '2xl': '2rem',
        full: '9999px',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        tg: {
          bg: 'var(--tg-bg)',
          soft: 'var(--tg-bg-soft)',
          navy: 'var(--tg-navy)',
          deep: 'var(--tg-navy-deep)',
          ink: 'var(--tg-ink)',
          muted: 'var(--tg-muted)',
          line: 'var(--tg-line)',
          emerald: 'var(--tg-prism-emerald)',
          cyan: 'var(--tg-prism-cyan)',
          amber: 'var(--tg-prism-amber)',
          coral: 'var(--tg-prism-coral)',
        },
      },
      spacing: {
        gutter: '24px',
        'container-max': '1200px',
        'margin-mobile': '16px',
        'margin-desktop': '48px',
        'section-gap': '96px',
      },
      maxWidth: {
        'container-max': '1200px',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Outfit', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-lg': [
          'clamp(2.25rem, 5vw, 4.5rem)',
          { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '500' },
        ],
        'headline-xl': [
          'clamp(1.75rem, 3.5vw, 3rem)',
          { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '560' },
        ],
        'headline-lg': [
          'clamp(1.35rem, 2.5vw, 2rem)',
          { lineHeight: '1.3', fontWeight: '560' },
        ],
        'body-lg': ['1.125rem', { lineHeight: '1.7', fontWeight: '400' }],
        'body-md': ['1rem', { lineHeight: '1.7', fontWeight: '400' }],
        'label-md': [
          '0.8125rem',
          { lineHeight: '1.2', letterSpacing: '0.08em', fontWeight: '600' },
        ],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'ken-burns': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.08)' },
        },
        'scroll-cue': {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0.4' },
          '50%': { transform: 'translateY(8px)', opacity: '1' },
        },
        'prism-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'ken-burns': 'ken-burns 22s ease-in-out infinite alternate',
        'scroll-cue': 'scroll-cue 1.8s ease-in-out infinite',
        'prism-shift': 'prism-shift 8s ease infinite',
        float: 'float 10s ease-in-out infinite',
      },
      backgroundImage: {
        'prism-band':
          'linear-gradient(90deg, var(--tg-prism-emerald), var(--tg-prism-cyan), var(--tg-prism-amber), var(--tg-prism-coral))',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
