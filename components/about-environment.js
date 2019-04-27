import React from 'react'
import styled from 'styled-components'
import { mediaQueries } from 'styles/variables'
import { MainContainer } from 'styles/common'
import { Copy } from 'context/copy'
import { Image } from 'context/images'
import CopyHeader from './copy-header'

export default (() => (
  <AboutEnvironmentStyles>
    <MainContainer className="container">
      <CopyHeader text="Environment" right dark extraClass="header" />
      <Copy className="paragraph" title="Environment" />
    </MainContainer>
  </AboutEnvironmentStyles>
))

const AboutEnvironmentStyles = styled(({ children, ...props }) => (
  <Image background title="Environment" {...props}>{children}</Image>
)).attrs({ className: 'about-environment-styles' })`
  height: 440px;
  background-size: cover;
  background-position: 50% 50%;
  ${'' /* padding: ${styles.spacing.extraLarge}px 0px; */}

  .container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
  }
  .header {
    margin: 0;
    margin-right: 15px;
  }
  p {
    font-family: 'Karla';
    ${'' /* font-size: 18px; */}
    color: #000000;
    max-width: 535px;
    margin-top: 5px;
    margin-left: 15px;
  }

  @media ${mediaQueries.phone} {
    .container {
      display: block;
    }
    .header {
      margin-right: 0;
    }
    p {
      text-align: right;
      margin-left: 0;
    }
  }
`
