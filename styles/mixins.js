import { css } from 'styled-components'
import { styles } from './variables'

// sizes for media query mixin
const sizes = styles.mediaSizes

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `
  return acc
}, {})
