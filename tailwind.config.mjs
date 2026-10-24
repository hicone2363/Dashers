/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff1f0',
          100: '#ffe4e1',
          200: '#ffc9c2',
          300: '#ffa194',
          400: '#ff6955',
          500: '#eb1700', // Dasher accent red
          600: '#c71300',
          700: '#a30f00',
          800: '#841003',
          900: '#6d1308',
          950: '#3c0501',
        },
        profit: {
          green: '#15803d',
          greenLight: '#dcfce7',
          amber: '#b45309',
          amberLight: '#fef3c7',
          red: '#b91c1c',
          redLight: '#fee2e2'
        }
      },
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace',
        ],
      },
    },
  },
  plugins: [],
};
