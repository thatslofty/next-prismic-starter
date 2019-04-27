import React from 'react'
import styled from 'styled-components'
import { mediaQueries } from 'styles/variables'
import { Image } from 'context/images'
import { coverImg } from 'styles/mixins'

export default (() => (
  <ImageGridStyles>
    <div className="grid-section">
      {/* <GridImage title="Services 1" /> */}
      <GridImage title="Services 2" />
    </div>
    <div className="grid-section">
      <GridImage title="Services 3" />
    </div>
  </ImageGridStyles>
))

const GridImage = styled(({ title, ...props }) => (
  <Image background title={title} {...props} />
)).attrs({ className: 'grid-image' })`
  ${coverImg};
  display: inline-block;
  width: 100%;
  margin: 0;
  padding: 0;
`

const ImageGridStyles = styled.div.attrs({ className: 'image-grid' })`
  display: flex;
  .grid-section{
    width: 50%;
    display: flex;
    flex-direction: column;
    height: 25em;
  }
  .grid-image{
    &:nth-child(1){ flex: 2 }
    &:nth-child(2){ flex: 2 }
  }

  @media ${mediaQueries.largeDesktop} {
    .grid-section {
      height: 25em;
    }
  }

  @media ${mediaQueries.largeDesktop} {
    .grid-section {
      height: 20em;
    }
  }

  @media ${mediaQueries.phone} {
    display: block;
    .grid-section{
      display: block;
      width: 100%;
      height: auto;
    }
    .grid-image{
      width: 100%;
      height: 40vw;
      display: block;
    }
  }
`
