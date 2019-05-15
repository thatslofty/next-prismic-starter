import { createGlobalStyle } from 'styled-components';

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

  * {
    box-sizing: border-box;
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

  p {
    margin: 0;
  }

  a:focus,
  button:focus,
  input:focus,
  textarea:focus {
    outline: none;
  }

  ul, ol {
    list-style-type: disc;
    list-style-position: inside;
  }
`;
