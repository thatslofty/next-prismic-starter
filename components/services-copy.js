import React from 'react'
import styled from 'styled-components'
import { styles, mediaQueries } from 'styles/variables'
import { Copy } from 'context/copy'
import { Image } from 'context/images'
import { MainContainer, P } from 'styles/common'
import { RichText } from 'prismic-reactjs'
import { Copy as CopyData } from /* preval */ 'context/data'
import CopyHeader from './copy-header'

const rocktechnology = CopyData.filter(c => c.title[0].text === 'Rocktechnology')

export default (() => (
  <CopyBlocksStyles light>
    <MainContainer>
      <div className="titled-paragraph">
        <CopyHeader text="Support" />
        <Copy className="paragraph text" title="Support" />
      </div>
      <div className="titled-paragraph">
        <CopyHeader text="Field Service" />
        <Copy className="paragraph text" title="Field Service" />
      </div>
      <div className="titled-paragraph rocktechnology">
        <CopyHeader text="RockTechnology" />
        <div className="para-container">
          <Image title="Rocktechnology" className="rocktechnology-image" />
          <P>{RichText.asText(rocktechnology[0].copy)}</P>
        </div>
        <Image title="Services 1" className="services-image" />
      </div>
    </MainContainer>
  </CopyBlocksStyles>
))

const CopyBlocksStyles = styled.div.attrs({ className: 'copy-block-styles' })`
  background-color: ${styles.backgroundLight};
  color: ${styles.darkCopy};

  .main-container {
    display: flex;
    flex-wrap: wrap;
    max-width: 1050px;
  }

  .titled-paragraph {
    width: calc(50% - ${styles.spacing.large}px);
    margin: 0px calc(${styles.spacing.large}px / 2);
    /* max-width: 410px; */
    flex-shrink: 0;
    .text p {
      margin-bottom: 20px;
    }

    &.rocktechnology {
      margin-top: 60px;
      width: calc(100% - 69px);
      .para-container {
        width: 57%;
        max-width: 630px;
        display: inline-block;
        vertical-align: top;
      }
      .rocktechnology-image {
        width: 160px;
        float: right;
        margin-top: 4px;
        margin-left: 50px;
        margin-bottom: 25px;
      }
      .services-image {
        width: 320px;
        display: inline-block;
        margin-left: 60px;
      }
    }
  }

  @media ${mediaQueries.largeDesktop} {
    .titled-paragraph {
      &.rocktechnology {
        .para-container {
          width: 46%;
          max-width: 400px;
        }
      }
    }
  }

  @media ${mediaQueries.tablet} {
    .titled-paragraph {
      &.rocktechnology {
        .para-container {
          width: 100%;
          max-width: none;
        }
        .rocktechnology-image {
          width: 120px;
          margin-left: 30px;
        }
        .services-image {
          display: block;
          margin-left: 0;
          margin-top: 20px;
          margin-bottom: 30px;
          width: 100%;
        }
      }
    }
  }

  @media ${mediaQueries.largePhone} {
    .main-container{ display: block; }

    .titled-paragraph{
      margin: 0;
      width: 100%;
      max-width: unset;
      flex-shrink: 0;
      &:nth-child(even) {
        margin-top: 50px;
      }
      &.rocktechnology {
        width: 100%;
      }
    }
  }
`
