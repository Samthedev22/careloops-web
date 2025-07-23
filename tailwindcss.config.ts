import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        '1280h800': { raw: '(width: 1280px) and (height: 800px)' },
      },
      fontFamily: {
        custom: ["var(--font-fredoka)"]
      },
    },
  },
  plugins: [],
} satisfies Config;
