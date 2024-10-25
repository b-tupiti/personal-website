import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#0a1c29',
      },
      minHeight: {
        'screen-minus-header': 'calc(100vh - 168px)',
      },
    },
  },
  plugins: [],
}
export default config
