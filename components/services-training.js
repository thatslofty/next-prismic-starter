import React from 'react'
import styled from 'styled-components'
import { styles, mediaQueries } from 'styles/variables'
import { MainContainer } from 'styles/common'
import { Copy } from 'context/copy'
import { Image } from 'context/images'
import CopyHeader from './copy-header'

export default (() => (
  <ServicesTrainingStyles light>
    <MainContainer className="main-container">
      <div className="titled-paragraph">
        <CopyHeader light text="Training" />
        <Copy className="paragraph text" title="Training" />
      </div>
      <div className="overlapping-grid">
        <Image title="Training Top" className="overlapping-img overlapping-img-0" />
        <Image title="Training Right" className="overlapping-img overlapping-img-2" />
      </div>
    </MainContainer>
  </ServicesTrainingStyles>
))

const ServicesTrainingStyles = styled.div.attrs({ className: 'text-and-grid' })`
  background-color: ${styles.backgroundDark};
  display: flex;

  .main-container{ display: flex; }
  .titled-paragraph {
    margin-right: ${styles.spacing.large}px;
    max-width: 440px;
    color: ${styles.whiteCopy};
    font-family: 'Montserrat';
    font-weight: ${styles.fonts.medium};
    .text p {
      margin-bottom: 20px;
    }
  }

  .overlapping-grid {
    white-space: nowrap;

    .overlapping-img{
      display: inline-block;
      position: relative;
      width: 17em;
      &-0{
        display: block;
        margin: 0 auto -13em 14em;
        z-index: 10;
      }
      &-2{
        transform: translateY(-10%);
      }
    }

    @media ${mediaQueries.desktopLarge} {
      .overlapping-img {
        width: 15em;
      }
    }

    @media ${mediaQueries.desktop} {
      .overlapping-img {
        width: 23vw;
        &-0 {
          margin: 4.5em auto -19em 19em;
        }
      }
    }

    @media only screen and (max-width: ${styles.mediaSizes.desktop}px) {
      .overlapping-img{
        font-size: 1vw;
      }
    }

    @media ${mediaQueries.largePhone} {
      width: 100%;
      margin: 25px auto 0 auto;
      .overlapping-img {
        width: 33.33%;
        display: inline-block;
        margin: 0 10px 0 0;
        transform: none;
      }
    }

    @media ${mediaQueries.phone} {
      width: 100%;
      margin: 0px auto 0 auto;
      .overlapping-img {
        display: inline-block;
        position: relative;
        width: calc(50% - 5px);
      }
    }
  }

  @media ${mediaQueries.largePhone} {
    .main-container{ display: block; }
  }

  @media ${mediaQueries.largePhone} {
    .titled-paragraph {
      margin-right: 0px;
      max-width: none;
    }
  }
`
