import { defineTextStyles } from '@pandacss/dev'

export const textStyles = defineTextStyles({
  lg: {
    description: 'The lg text style - used in paragraphs',
    value: {
      fontFamily: 'Hiragino Maru Gothic Pro',
      fontWeight: 'bold',
      fontSize: '5rem',
    },
  },
  md: {
    description: 'The md text style - used in paragraphs',
    value: {
      fontFamily: 'Hiragino Maru Gothic Pro',
      fontWeight: 'bold',
      fontSize: '2rem',
    },
  },
})
