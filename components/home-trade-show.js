import React from 'react'
import styled from 'styled-components'
import { styles, mediaQueries } from 'styles/variables'
import { MainContainer } from 'styles/common'
import { Image } from 'context/images'
import { Copy } from /* preval */ 'context/data'
import { RichText } from 'prismic-reactjs'
import CopyHeader from './copy-header'

const tradeshows = Copy.filter(c => c.title[0].text === 'Trade Show Date')

const HomeTradeShow = () => (
  <HomeTradeShowStyles>
    <MainContainer className="container">
      <ImageContainer background title="Trade Show" />
      <div className="copy-container">
        <CopyHeader text="Upcoming Trade Shows" right dark extraClass="header" />
        {RichText.render(tradeshows[0].copy)}
      </div>
    </MainContainer>
  </HomeTradeShowStyles>
)

const ImageContainer = styled(Image).attrs({ className: 'image-container' })`
  width: 50%;
  overflow: hidden;
  height: 455px;

  @media ${mediaQueries.largeDesktop} {
    height: 370px;
  }

  @media ${mediaQueries.tablet} {
    .image-container{
      width: 100%;
    }
  }
`

const HomeTradeShowStyles = styled.div.attrs({ className: 'home-trade-show-styles' })`
  background-color: #FFFFFF;

  .container {
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    padding: 0;
  }

  img {
    min-height: 100%;
    min-width: 100%;
  }

  .copy-container {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    text-align: right;

    font-family: Montserrat;
    font-weight: ${styles.fonts.regular};
    color: #000000;
    margin: 15px 0 14px 0;
    
    p {
      font-size: 20px;
      margin-top: 10px;
    }

    a {
      color: ${styles.mainLightBlue};
    }

    > div {
      width: 75%;
    }
  }

  .header {
    margin: 0;
    width: 75%;
  }

  @media ${mediaQueries.largeDesktop} {
    .copy-container {
      width: 65%;
      > div {
        width: 85%;
      }
    }
    .header {
      margin: 0;
      width: 85%;
    }
  }

  @media ${mediaQueries.tablet} {
    .container{
      display: block;
    }
    .image-container{
      width: 100%;
    }
    .copy-container{
      box-sizing: border-box;
      width: 100%;
      padding: ${styles.spacing.large}px;
      > div {
        width: 100%;
      }
      p {
        font-size: 16px;
      }

      .header, .date, .copy{
        width: 100%;
      }
    }
  }

  @media ${mediaQueries.largePhone} {
    .image-container {
      height: 300px;
    }
    .copy-container{
      padding: 40px 30px;
      p {
        font-size: 14px;
      }
    }
  }
`

export default HomeTradeShow
