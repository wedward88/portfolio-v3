import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: [
      {
        nord: {
          ...require('daisyui/src/theming/themes')['nord'],
          '.navdrawer': {
            'background-color': 'rgb(236, 239, 244)',
            color: 'rgb(178, 197, 216)',
            'padding-top': '10vh',
            'min-height': '100%',
            width: '20rem',
          },
        },
        dim: {
          ...require('daisyui/src/theming/themes')['dim'],
          '.navdrawer': {
            'background-color': 'rgb(43, 48, 60)',
            color: 'rgb(255, 126, 92)',
            'padding-top': '10vh',
            'min-height': '100%',
            width: '20rem',
          },
        },
      },
    ],
    base: true,
    styled: true,
  },
} satisfies Config;
