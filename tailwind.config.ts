import type { Config } from 'tailwindcss';

export default {
  content: [
    './index.html',
    './index.tsx',
    './App.tsx',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        slate: {
          950: '#020617',
        }
      },
      fontFamily: {
        sans: ['Noto Sans', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
        grotesk: ['Space Grotesk', 'sans-serif'],
      }
    }
  },
  plugins: [],
} satisfies Config;
