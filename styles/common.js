import React from 'react'
import { Text } from 'rebass'
import styled, { createGlobalStyle } from 'styled-components'
import Link from 'next/link'
import { mediaQueries } from './variables'

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
  
  .header1 p {
    font-size: 36px;
    @media ${mediaQueries.largeDesktop} {
      font-size: 32px;
    }
    @media ${mediaQueries.desktop} {
      font-size: 30px;
    }
    @media ${mediaQueries.tablet} {
      font-size: 28px;
    }
    @media ${mediaQueries.largePhone} {
      font-size: 26px;
    }
    @media ${mediaQueries.phone} {
      font-size: 24px;
    }
  }

  .header2 p {
    font-size: 28px;
    @media ${mediaQueries.largeDesktop} {
      font-size: 26px;
    }
    @media ${mediaQueries.desktop} {
      font-size: 24px;
    }
    @media ${mediaQueries.tablet} {
      font-size: 22px;
    }
    @media ${mediaQueries.largePhone} {
      font-size: 20px;
    }
    @media ${mediaQueries.phone} {
      font-size: 18px;
    }
  }

  .header3 p {
    font-size: 22px;
    @media ${mediaQueries.largeDesktop} {
      font-size: 20px;
    }
    @media ${mediaQueries.desktop} {
      font-size: 18px;
    }
    @media ${mediaQueries.tablet} {
      font-size: 16px;
    }
    @media ${mediaQueries.largePhone} {
      font-size: 14px;
    }
    @media ${mediaQueries.phone} {
      font-size: 12px;
    }
  }

  .header4 p {

  }

  .paragraph p {
    font-family: 'Karla';
    font-size: 20px;
    line-height: 25px;
    @media ${mediaQueries.largeDesktop} {
      font-size: 16px;
      line-height: 23px;
    }
    @media ${mediaQueries.desktop} {
      font-size: 14px;
      line-height: 20px;
    }
  }
`

export const H1 = styled.h1`
  font-size: 36px;
  @media ${mediaQueries.largeDesktop} {
    font-size: 32px;
  }
  @media ${mediaQueries.desktop} {
    font-size: 30px;
  }
  @media ${mediaQueries.tablet} {
    font-size: 28px;
  }
  @media ${mediaQueries.largePhone} {
    font-size: 26px;
  }
  @media ${mediaQueries.phone} {
    font-size: 24px;
  }
`

export const H2 = styled.h2`
  font-size: 28px;
  @media ${mediaQueries.largeDesktop} {
    font-size: 26px;
  }
  @media ${mediaQueries.desktop} {
    font-size: 24px;
  }
  @media ${mediaQueries.tablet} {
    font-size: 22px;
  }
  @media ${mediaQueries.largePhone} {
    font-size: 20px;
  }
  @media ${mediaQueries.phone} {
    font-size: 18px;
  }
`

export const H3 = styled.h3`
  font-size: 22px;
  @media ${mediaQueries.largeDesktop} {
    font-size: 20px;
  }
  @media ${mediaQueries.desktop} {
    font-size: 18px;
  }
  @media ${mediaQueries.tablet} {
    font-size: 16px;
  }
  @media ${mediaQueries.largePhone} {
    font-size: 14px;
  }
  @media ${mediaQueries.phone} {
    font-size: 12px;
  }
`

export const H5 = styled.h5`
  font-size: 16px;
  margin-top: 10px;
  margin-bottom: 5px;
  @media ${mediaQueries.largeDesktop} {
    font-size: 16px;
  }
  @media ${mediaQueries.desktop} {
    font-size: 14px;
  }
  @media ${mediaQueries.tablet} {
    font-size: 14px;
  }
  @media ${mediaQueries.largePhone} {
    font-size: 14px;
  }
  @media ${mediaQueries.phone} {
    font-size: 12px;
  }
`

export const P = styled.p`
  font-family: 'Karla';
  font-size: 20px;
  line-height: 25px;
  @media ${mediaQueries.largeDesktop} {
    font-size: 16px;
    line-height: 23px;
  }
  @media ${mediaQueries.desktop} {
    font-size: 14px;
    line-height: 20px;
  }
`

export const BlueButton = styled(({ to, children, ...props }) => (
  <Link href={to}><a {...props}>{children}</a></Link>
))`
  width: 200px;
  height: 50px;
  .button-text {
    line-height: 50px;
    font-size: 16px;
  }
  @media ${mediaQueries.largeDesktop} {
    height: 45px;
    width: 175px;
    .button-text {
      line-height: 45px;
      font-size: 14px;
    }
  }
  @media ${mediaQueries.largePhone} {
    height: 40px;
    width: 150px;
    .button-text {
      line-height: 40px;
      font-size: 12px;
    }
  }
`

export const MainHeader = styled.div`
  font-size: 20px;
  font-family: Montserrat;
`

export const MainContainer = styled.div.attrs({ className: 'main-container' })`
  max-width: 1535px;
  margin: 0 auto;
  padding: 80px 80px;

  @media ${mediaQueries.largeDesktop} {
    padding: 60px 60px;
  }

  @media ${mediaQueries.largePhone} {
    padding: 40px 30px;
  }
`

export const ProductItemContainer = styled.div`
  max-width: 1535px;
  margin: 0 auto;
  padding: 80px 80px;

  @media ${mediaQueries.largeDesktop} {
    padding: 60px 60px;
  }

  @media ${mediaQueries.largePhone} {
    padding: 40px 30px;
  }
`

export const ProductContainerTitle = styled(Text)`
  font-family: 'Karla';
  font-size: 20px;
  font-weight: bold;
  font-style: italic;
  margin-top: 0;
  margin-bottom: 15px;
  @media ${mediaQueries.largePhone} {
    font-size: 18px;
  }
`
