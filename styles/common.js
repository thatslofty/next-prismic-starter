// import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
// import { mediaQueries } from './variables'

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
    width: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font: initial;
    box-sizing: unset;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  div,
  button {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  body {
    margin: 0;
  }

  html,
  body {
    background-color: #EAF4F6;
    user-select: none;
    height: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: 'Montserrat';
  }

  p {
    margin: 0;
  }

  a:focus,
  button:focus,
  input:focus,
  textarea:focus {
    outline: none;
  }
`


