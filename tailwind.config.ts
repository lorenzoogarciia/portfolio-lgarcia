import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--color-background))",
        foreground: "rgb(var(--color-foreground))",
        primary: 'rgb(var(--color-primary))',
        secondary: 'rgb(var(--color-secondary))',
        accent: 'rgb(var(--color-accent))',
        muted: 'rgb(var(--color-muted))',
      },
      keyframes: {
        colorShift: {
          '0%':   { color: '#06b6d4' },  // text-cyan-500
          '25%':  { color: '#ec4899' },  // pink-500
          '50%':  { color: '#f97316' },  // orange-500
          '75%':  { color: '#22c55e' },  // green-500
          '100%': { color: '#06b6d4' },
        },
      },
      animation: {
        'color-shift': 'colorShift 4s infinite ease-in-out',
      },
      fontFamily: {
        sans: 'var(--font-geist-sans)',
        mono: 'var(--font-geist-mono)',
        inter: 'var(--font-inter)',
        roboto: 'var(--font-roboto)'
      }
    },
  },
  plugins: [
  ],
} satisfies Config;
