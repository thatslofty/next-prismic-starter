import React from 'react'
import styled from 'styled-components'
import { RichText } from 'prismic-reactjs'
import { styles, mediaQueries } from 'styles/variables'
import { MainContainer, P } from 'styles/common'
import { Image } from 'context/images'
import { Copy } from 'context/copy'
import { News } from /* preval */ 'context/data'

import CopyHeader from './copy-header'

const HomeNews = () => (
  <HomeNewsStyles>
    <MainContainer className="container">
      <div className="left-container">
        <CopyHeader text="Latest News" left light extraClass="header" />
        <Copy className="main-copy paragraph" title="News" />
        <div className="social-icons">
          <Image title="Facebook" onClick={() => window.open('https://www.facebook.com/Rocktechusa/', '_blank')} />
          <Image title="Linkedin" onClick={() => window.open('https://www.linkedin.com/company/rocktech-usa/', '_blank')} />
        </div>
      </div>
      <div className="right-container">
        <div className="copy-header">
          <Copy className="header3" title="News Sub Header" />
          <Copy className="header4" title="News Header" />
        </div>
        {News.sort((a, b) => a.data.sort - b.data.sort).map((n, i) => (
          <div key={n.id} className={`secondary-copy paragraph ${i % 2 ? 'alt' : ''}`}>{RichText.render(n.data.copy)}</div>
        ))}
      </div>
    </MainContainer>
  </HomeNewsStyles>
)

const HomeNewsStyles = styled.div.attrs({ className: 'home-news-styles' })`
  background-color: ${styles.backgroundDark};
  ${'' /* padding: ${styles.spacing.extraLarge}px 0px; */}

  .container {
    height: auto;
    display: flex;
    justify-content: center;
  }

  .header {
    margin-bottom: 0;
  }

  .left-container {
    height: 100%;
    display: flex;
    min-width: 328px;
    width: 328px;
    flex-direction: column;
    justify-content: center;
  }

  .main-copy {
    font-family: karla;
    ${'' /* font-size: 18px; */}
    color: #F1FAEE;
    /* width: 328px; */
    margin: 10px 0 25px 0;
  }

  .social-icons {
    width: 100px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    img {
      margin: 0 15px;
      &:hover {
        cursor: pointer;
      }
    }
  }

  .right-container {
    margin-left: 94px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-width: 890px;
    width: 100%;
  }

  .copy-header {
    background-color: ${styles.mainLightBlue};
    min-height: 75px;
    height: auto;
    width: 100%;
  }

  .header3 {
    font-family: 'Montserrat';
    font-weight: ${styles.fonts.medium};
    ${'' /* font-size: 18px; */}
    color: #F1FAEE;
    letter-spacing: 1px;
    margin: 11px 0 0 22px;
    text-transform: uppercase;
  }

  .header4 {
    font-family: 'Montserrat';
    font-weight: ${styles.fonts.medium};
    font-size: 24px;
    color: #F1FAEE;
    letter-spacing: 1px;
    margin: 0 0 10px 22px;
    text-transform: capitalize;
  }

  .secondary-copy {
    /* RockTech is proud to: */
    font-family: karla;
    ${'' /* font-size: 14px; */}
    color: #000000;
    ${'' /* line-height: 25px; */}
    background-color: #FFFFFF;
    margin: 0;
    text-align: left;
    padding: 18px 22px;
    width: calc(100% - 44px);
    &.alt {
      background-color: #EAF4F6;
    }
  }

  @media ${mediaQueries.tablet} {
    ${'' /* padding: ${styles.spacing.large}px; */}
    .main-copy {
      width: 100%;
    }
    .header3 {
      margin-top: 13px;
    }
    .container{
      display: block;
    }
    .right-container{ margin: ${styles.spacing.tabletMargin}px auto 0 auto; }
  }

  @media ${mediaQueries.largePhone} {
    .right-container{ margin: ${styles.spacing.phoneMargin}px auto 0 auto; }
    .left-container { min-width: 250px; width: 100%; }
    .copy-header {
      height: auto;
      min-height: 64px;
    }
    .header4 {
      font-size: 18px;
    }
    .header4, .header3 {
      margin-left: 15px;
    }
  }
`

export default HomeNews
