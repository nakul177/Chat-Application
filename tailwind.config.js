/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
      "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Backgrounds
        background: 'var(--color-background)', // Neutral light
        surface: 'var(--color-surface)',
        'surface-inverse': 'var(--color-inverse-surface)',
        text: 'var(--color-text)',             // Primary text
        'text-inverse': 'var(--color-inverse-text)', // High-contrast inverse text
        placeholder: 'var(--color-placeholder)', // Placeholder text

        // Primary Buttons and Links
        primary: 'var(--color-primary)',       // Primary button/link
        primaryHover: 'var(--color-primary-hover)', // Accessible hover color
        link: 'var(--color-link)',             // Accessible links
        linkHover: 'var(--color-link-hover)',  // Link hover

        // Secondary
        secondary: 'var(--color-secondary)',   // Accent secondary
        secondaryHover: 'var(--color-secondary-hover)',

        // Borders and States
        border: 'var(--color-border)',
        error: 'var(--color-error)',           // Errors
        errorHover: 'var(--color-error-hover)',// Error hover
        warning: 'var(--color-warning)',       // Warnings
        warningHover: 'var(--color-warning-hover)',

        // Interactive States
        'border-focus': 'var(--color-border-focus)', // Input focus state
        'text-hover': 'var(--color-text-hover)',     // Text on hover
      },
      borderRadius: {
        btn: '12px', // Buttons
      },
      padding: {
        'btn-sm': '0.5rem 1rem',
        'btn-md': '0.75rem 1.5rem',
        'btn-lg': '1rem 2rem',
      },
      transitionProperty: {
        'color-bg': 'color, background-color, border-color',
      },
      fontSize: {
        'sub-title-size': ['1rem', {
          lineHeight: '2rem',
          letterSpacing: '-0.01em',
          fontWeight: '400',
        }],
        'title-size': ['1.3rem', {
          lineHeight: '2.25rem',
          letterSpacing: '-0.02em',
          fontWeight: '500',
        }],
      },
      spacing: {
        'sideBarWidth': '50px',
      },
    },
  },
  plugins: [nextui()],
};
