/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0066FF',
        dark: '#0a0a0a',
        'custom-blue': '#000ED0',
        'section-bg': '#FFFFFF1A',
        'button-bg': '#192239',
        'accent-orange': '#EB3700',
        'card-bg': '#0D0D0D',
        'text-muted': '#BFBFBF',
        'quality-bg': '#191919',
      },
      fontFamily: {
        sans: ['Lexend', 'system-ui', 'sans-serif'],
        lexend: ['Lexend', 'sans-serif'],
      },
      spacing: {
        '350px': '350px',
        '442px': '442px',
        '504px': '504px',
        '608px': '608px',
        '1200px': '1200px',
      },
      fontSize: {
        '52px': '52px',
        '74px': '74px',
      },
      lineHeight: {
        '52px': '52px',
        '64px': '64px',
        '74px': '74px',
        '100%': '100%',
      },
      letterSpacing: {
        '-4%': '-0.04em',
        '0%': '0em',
      },
      borderRadius: {
        '100px': '100px',
        '16px': '16px',
        '12px': '12px',
      },
      padding: {
        '8px': '8px',
        '16px': '16px',
        '18px': '18px',
        '24px': '24px',
        '44px': '44px',
      },
      margin: {
        '44px': '44px',
        '350px': '350px',
      },
      gap: {
        '10px': '10px',
      },
    },
  },
  plugins: [],
}

