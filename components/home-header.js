import React, { Component } from 'react'
import styled from 'styled-components'
import { styles, mediaQueries } from 'styles/variables'
import { MainContainer } from 'styles/common'
import { Image } from 'context/images'
import { Copy } from 'context/copy'

class HomeHeader extends Component {
  state = {
    height: '100vh'
  }

  componentDidMount() {
    this.setState({ height: window ? window.innerHeight : '100vh' })  // eslint-disable-line
  }

  render() {
    const { height } = this.state
    return (
      <HomeHeaderStyles style={{ height }}>
        <Image title="Home Header" alt="background" />
        <MainContainer className="container">
          {/* <div className="copy-container"> */}
          <Copy className="header" title="Home" />
          <Copy className="quote" title="Quote" />
          {/* <Copy className="author" title="Quote Author" /> */}
          {/* </div> */}
        </MainContainer>
      </HomeHeaderStyles>
    )
  }
}

const HomeHeaderStyles = styled.div.attrs({ className: 'home-header-styles' })`
  ${'' /* height: 100vh; */}
  max-height: 1100px;
  background-image: linear-gradient(-180deg, #21515F 0%, #212530 100%);
  overflow: hidden;
  position: relative;
  min-height: 750px;

  .container {
    position: relative;
    overflow: hidden;
    height: 100%;
    padding-top: 0;
    padding-bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  img {
    position: absolute;
    right: 0px;
    width: 60%;
    /* max-width: 800px; */
  }

  .header {
    font-family: Montserrat;
    ${'' /* font-size: 64px; */}
    font-size: 4em;
    color: ${styles.whiteCopy};
    font-weight: ${styles.fonts.regular};
    margin: 0.67em 0;
    width: 51%;

    b {
      font-family: Montserrat;
      font-weight: bold;
      font-weight: ${styles.fonts.medium};
      color: #999999;
    }
  }

  .quote {
    font-style: italic;
    font-family: 'Karla';
    font-size: 1.5em;
    color: ${styles.whiteCopy};
    text-shadow: 0 2px 4px rgba(0,0,0,0.50);
    margin: 0;
    width: 51%;
  }

  .author {
    font-family: 'Karla';
    font-size: 1.125em;
    color: ${styles.whiteCopy};
    text-shadow: 0 2px 4px rgba(0,0,0,0.50);
  }

  @media screen and ( max-height: 800px ) {
    img {
      width: 59%;
    }
  }

  @media ${mediaQueries.largeDesktop} {
    img {
      width: 59%;
    }
    .header {
      /* font-size: 1.5em; */
      width: 560px;
    }
    .quote {
      /* font-size: 0.56em; */
      width: 560px;
    }
  }

  @media ${mediaQueries.desktop} {
    font-size: 4.5vw;
    img {
      width: 63%;
    }
    .header {
      font-size: 1.5em;
      width: 67%;
    }
    .quote {
      font-size: 0.56em;
      width: 67%;
    }
  }

  @media ${mediaQueries.largePhone} {
    /* font-size: 1.8vw; */

    min-height: 550px;
  }

  @media ${mediaQueries.phone} {
    img {
      display: none;
    }
    .header, .quote {
      width: 100%;
      max-width: 330px;
    }
    .header {
      font-size: 37px;
      margin-top: 80px;
    }
    .quote {
      font-size: 18px;
      max-width: 95%;
    }
  }

  @media ${mediaQueries.smallPhone} {
    .copy-container {
      font-size: 3vw;
    }
  }
`

export default HomeHeader
