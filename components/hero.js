import React from 'react'
import styled from 'styled-components'
import { styles, mediaQueries } from 'styles/variables'
import { MainContainer, H1 } from 'styles/common'
import { CopyContext } from 'context/copy'
import { ImagesContext } from 'context/images'
import { coverImg } from 'styles/mixins'

const Hero = data => (
  <CopyContext.Consumer>
    {(allCopy) => {
      let copy = ''
      const copyFilter = allCopy.filter(obj => obj.title[0].text === data.title)
      if (copyFilter.length > 0) {
        copy = copyFilter[0].copy[0].text
      }
      return (
        <ImagesContext.Consumer>
          {(allImages) => {
            let image = null
            const imageFilter = allImages.filter(obj => obj.title[0].text === data.title)
            if (imageFilter.length > 0) {
              image = imageFilter[0].image.url
            }
            return (
              <HeroStyles image={image} left={data.orientLeft} height={data.height}>
                <div className="hero-container">
                  <MainContainer>
                    <div className="copy-container">
                      <H1>{data.title}</H1>
                      <p>{copy}</p>
                    </div>
                  </MainContainer>
                </div>
              </HeroStyles>
            )
          }}
        </ImagesContext.Consumer>
      )
    }}
  </CopyContext.Consumer>
)

const HeroStyles = styled.div.attrs({ className: 'hero-styles' })`
  background-color: ${styles.mainDarkBlue};

  .hero-container {
    display: flex;
    align-items: center;
    background: ${ props => (props.image ? `url(${props.image})` : styles.mainDarkBlue) };
    ${coverImg};
    height: ${(props) => {
    const isBrowser = typeof window !== 'undefined'
    if (props.height) return `${props.height}px`
    if (props.image && isBrowser) return `${window.innerHeight}px`
    return '485px'
  }};

    .main-container{
      width: calc(100% - 160px);
      display: flex;
      align-items: center;
      justify-content: ${ props => (props.left ? 'flex-start' : 'flex-end') };
    }

    .copy-container {
      ${'' /* padding: 0 ${styles.spacing.large}px; */}
      padding-top: 100px;
      width: ${ props => (props.left ? '100vw' : 'auto') };
      max-width: 56%;
      text-align: ${ props => (props.left ? 'left' : 'right') };
      margin: ${ props => (props.left ? '0' : '0') };
    }
    h1 {
      color: ${styles.white};
      font-family: Montserrat;
      font-weight: ${styles.fonts.medium};
      font-size: 64px;
      color: #F1FAEE;
      margin: 11px 0;
    }
    p {
      font-family: Karla;
      font-weight: bold;
      font-size: 28px;
      line-height: 36px;
      color: #F1FAEE;
      color: ${styles.white};
      margin: 0;
    }

    @media ${mediaQueries.largeDesktop} {
      .main-container{
        width: calc(100% - 120px);
      }
      h1 {
        font-size: 48px;
      }
      p {
        font-size: 20px;
        line-height: 28px;
      }
    }

    @media ${mediaQueries.desktop} {
      h1 {
        font-size: 44px;
      }
      p {
        font-size: 18px;
        line-height: 22px;
      }
    }

    @media ${mediaQueries.tablet} {
      h1 {
        font-size: 40px;
      }
      p {
        font-size: 16px;
        line-height: 20px;
      }
      .copy-container {
        width: 100%;
      }
    }

    @media ${mediaQueries.largePhone} {
      .main-container{
        width: calc(100% - 60px);
      }
      .copy-container {
        margin: ${ props => (props.left ? '0 0 0 0px' : '0 0px 0 0') };
        max-width: 80%;
      }
    }

    @media ${mediaQueries.phone} {
      .copy-container {
        width: 100%;
      }
    }
  }
  `

export default Hero
