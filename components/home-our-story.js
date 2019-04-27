import React from 'react'
import styled from 'styled-components'
import { styles, mediaQueries } from 'styles/variables'
import { MainContainer, BlueButton } from 'styles/common'
import { Image } from 'context/images'
import { Copy } from 'context/copy'
import CopyHeader from './copy-header'

const HomeOurStory = () => (
  <HomeOurStoryStyles>
    <MainContainer className="container">
      <StyledImage title="Our Story" alt="our story" />
      <div className="copy-container">
        <CopyHeader text="Our Story" left dark />
        <Copy className="paragraph" title="About Us" />
        <StyledBlueButton to="/about">
          <p className="button-text">learn more</p>
        </StyledBlueButton>
      </div>
    </MainContainer>
  </HomeOurStoryStyles>
)

const StyledBlueButton = styled(BlueButton)`
  background-color: ${styles.mainLightBlue};
  display: block;
  text-decoration: none;
  margin-top: 43px;
`

const StyledImage = styled(Image).attrs({ className: 'img' })`
  ${styles.coverImg};
  background-image: url('${ props => props.src }');
`

const HomeOurStoryStyles = styled.div.attrs({ className: 'home-our-story-styles' })`
  background-color: ${styles.backgroundLight};

  .container {
    ${'' /* height: 744px; */}
    height: auto;
    ${'' /* padding: ${styles.spacing.extraLarge}px ${styles.spacing.large}px; */}
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    max-width: 1200px;
    margin: auto;
    overflow: hidden;
  }

  .img {
    box-shadow: 0 20px 40px 0 rgba(0,0,0,0.50);
    ${'' /* width: 50%; */}
    flex: 1;
    height: 25em;
  }

  .copy-container {
    width: 50%;
    padding-left: 75px;
  }

  .paragraph {
    font-family: karla;
    ${'' /* font-size: 20px; */}
    color: #000000;
    ${'' /* line-height: 25px; */}
    ${'' /* width: 518px; */}
    flex: 1;
  }

  .blue-button {
    ${'' /* width: 200px;
    height: 50px; */}
    
  }

  .button-text {
    ${'' /* line-height: 50px; */}
    width: 100%;
    text-align: center;
    text-transform: uppercase;
    font-family: Karla;
    font-weight: bold;
    ${'' /* font-size: 16px; */}
    color: #FFFFFF;
    letter-spacing: 0.4px;

    &:hover {
      cursor: pointer;
    }
  }

  @media ${mediaQueries.tablet} {
    .container{
      display: block;
    }
    .copy-container{
      margin-top: ${styles.spacing.tabletMargin}px;
      padding-left: 0;
      width: 100%;
    }
    .blue-button {
      margin-top: 30px;
    }
    .img {
      height: 20em;
    }
  }

  @media ${mediaQueries.largePhone} {
    .copy-container {
      margin-top: ${styles.spacing.phoneMargin}px;
    }
    .img {
      height: 17em;
    }
  }
`

export default HomeOurStory
