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

export const coverImg = `
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`

export const containImg = `
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
`

export const clearFix = `
  &::after{
    content: "";
    clear: both;
    display: table;
  }
`
