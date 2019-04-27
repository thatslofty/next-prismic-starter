import React from 'react'
import styled from 'styled-components'
import { styles, mediaQueries } from 'styles/variables'
import { MainContainer } from 'styles/common'
import { Copy } from 'context/copy'
import CopyHeader from './copy-header'

export default (() => (
  <AboutCopyBlockStyles>
    <MainContainer className="container">
      <div className="copy-container top">
        <div className="left">
          <CopyHeader text="Culture" left light extraClass="topHeader" />
          <Copy className="paragraph copy" title="Culture" />
        </div>
        <div className="right">
          <CopyHeader text="Mission" left light extraClass="topHeader" />
          <Copy className="paragraph copy" title="Mission" />
        </div>
      </div>
      <div className="bottom-container">
        <CopyHeader text="Workplace" left light extraClass="header" />
        <div className="copy-container">
          <div className="left">
            <Copy className="paragraph no-max" title="Workplace 1" />
          </div>
        </div>
      </div>
    </MainContainer>
  </AboutCopyBlockStyles>
))

const AboutCopyBlockStyles = styled.div.attrs({ className: 'about-copy-block-styles' })`
  background-color: ${styles.mainDarkBlue};

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 100px;
  }
  .copy-container {
    ${'' /* width: 100%; */}
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: row;
    text-align: left;
    &.top {
      ${'' /* margin-top: ${styles.spacing.extraLarge}px; */}
      margin-bottom: 20px;
    }
    .right {
      margin-left: 5%;
    }
    .left {
      margin-right: 5%;
    }
  }
  .bottom-container {
    text-align: left;
    margin-top: ${styles.spacing.medium}px;
    ${'' /* margin-bottom: ${styles.spacing.extraLarge}px; */}
    ${'' /* width: 100%; */}
  }
  .topHeader {
    margin-bottom: 30px;
  }
  .header {
    margin: 0;
  }
  .paragraph {
    max-width: 470px;
    font-family: 'Karla';
    ${'' /* font-size: 18px; */}
    color: #F1FAEE;
    /* min-height: 151px; */
    margin-top: 0;
    &.no-max {
      max-width: 940px;
    }
  }
  h3 {
    font-family: 'Montserrat';
    font-size: 22px;
    color: #F1FAEE;
    margin-top: 12px;
    margin-bottom: 9px;
  }

  @media ${mediaQueries.desktop} {
    h3 {
      font-size: 18px;
    }
  }

  @media ${mediaQueries.largePhone} {
    .container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-bottom: 40px;
    }
    .copy-container {
      display: block;
      .left, .right {
        margin: 0;
      }
      .right {
        margin-top: 30px;
      }
      p {
        min-height: unset;
      }
      .paragraph {
        /* min-height: 75px; */
      }
      .no-max {
        max-width: 470px;
      }
    }
  }
`
