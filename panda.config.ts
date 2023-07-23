import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  preflight: true,
  include: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  exclude: [],
  theme: {
    extend: {},
  },
  outdir: 'styled-system',
})
