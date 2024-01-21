import { defineConfig } from '@pandacss/dev'
import { textStyles } from './src/theme/text-styles'

export default defineConfig({
  preflight: true,
  include: [
    './src/app/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  exclude: [],
  theme: {
    extend: {
      textStyles,
      tokens: {
        colors: {
          'trip-green': { value: '#1de9b6' },
          'trip-gray': { value: '#BDBDBD' },
        },
      },
    },
  },
  outdir: 'styled-system',
  jsxFramework: 'react',
})
