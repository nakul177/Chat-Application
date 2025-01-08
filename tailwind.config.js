/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        'bg-Inverse': 'var(--color-inverse)',
        textColor: 'var(--color-text)',
        primary: 'var(--color-primary)',
        primaryHover: 'var(--color-primary-hover)',
        secondary: 'var(--color-secondary)',
        secondaryHover: 'var(--color-secondary-hover)',
        border: 'var(--color-border)',
        error: 'var(--color-error)',
        errorHover: 'var(--color-error-hover)',
        warning: 'var(--color-warning)',
        warningHover: 'var(--color-warning-hover)',
        textHover: 'var(--color-text-hover)',
        'text-inverse': 'var(--color-inverse-text)',
        link: 'var(--color-link)',
        linkHover: 'var(--color-link-hover)',
        linkInverse: 'var(--color-link-inverse)',
      },
      borderRadius: {
        'btn': '12px',
      },
      padding: {
        'btn-sm': '0.5rem 1rem',
        'btn-md': '0.75rem 1.5rem',
        'btn-lg': '1rem 2rem',
      },
      transitionProperty: {
        'color-bg': 'color, background-color, border-color',
      },
    },
  },
  plugins: [],
}

