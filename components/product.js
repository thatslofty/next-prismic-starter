import React from 'react'
import styled from 'styled-components'
import { styles, mediaQueries } from 'styles/variables'
import { BlueButton, H1 } from 'styles/common'

const StyledBlueButton = styled(BlueButton)`
  background-color: ${styles.mainLightBlue};
  display: block;
  text-decoration: none;
`

const Product = ({ product, right }) => (
  <ProductStyles right={right}>
    <div className="image-container">
      <img className="mainImage" src={product.main_image.url} alt="main" />
    </div>
    <div className="copy-container">
      <h3>{product.name[0].text}</h3>
      <H1>{product.header[0].text}</H1>
      <p className="paragraph">{product.paragraph[0].text}</p>
      <StyledBlueButton to={`/products/${product.slug}`}>
        <p className="button-text">discover more</p>
      </StyledBlueButton>
      <div className={`logo-container ${product.name[0].text}`}>
        <img className="logoImage" src={product.logo.url} alt="logo" />
      </div>
    </div>
  </ProductStyles>
)

const ProductStyles = styled.div.attrs({ className: 'product-styles' })`
  display: flex;
  max-width: 1355px;
  width: 100vw;

  .image-container {
    flex: 1 0 0;
    display: flex;
    justify-content: ${props => (props.right ? 'flex-end' : 'flex-start')};
    ${props => (props.right ? 'padding-right: 20px;' : 'padding-left: 20px;')}
    order: ${props => (props.right ? '0' : '1')};
    align-items: center;
  }

  .mainImage {
    width: 480px;
    background: #D8D8D8;
    box-shadow: 0 20px 40px 0 rgba(0,0,0,0.50);
  }

  .copy-container {
    flex: 1 0 0;
    ${props => (props.right ? 'padding-left: 20px;' : 'padding-right: 20px;')}
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: ${props => (props.right ? 'left' : 'right')};
    align-items: ${props => (props.right ? 'flex-start' : 'flex-end')};
  }

  h3 {
    font-family: 'Montserrat';
    font-weight: ${styles.fonts.medium};
    ${'' /* font-size: 18px; */}
    color: #7C7C7C;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin: 0 0 10px 0;
  }

  .header {
    font-family: 'Montserrat';
    font-weight: ${styles.fonts.semiBold};
    ${'' /* font-size: 36px; */}
    color: #000000;
    letter-spacing: 1px;
    margin: 0 0 19px 0;
    ${props => (props.right ? 'padding-right: 30px;' : 'padding-left: 30px;')};
  }

  .paragraph {
    font-family: karla;
    color: #000000;
    ${'' /* line-height: 25px; */}
    max-width: 425px;
    margin: 0 0 30px 0;
  }

  .logo-container {
    position: absolute;
    bottom: 10px;
    ${props => (props.right ? 'right: 140px;' : 'left: 140px;')}
    height: 100px;
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      max-height: 100px;
      max-width: 100px;
    }
  }

  .blue-button {
    ${'' /* width: 200px;
    height: 50px; */}
    background-color: ${styles.mainLightBlue};
    display: block;
    text-decoration: none;
  }

  .button-text {
    ${'' /* line-height: 50px; */}
    width: 100%;
    text-align: center;
    text-transform: uppercase;
    font-family: Karla;
    font-weight: ${styles.fonts.semiBold};
    color: #FFFFFF;
    letter-spacing: 0.4px;
    margin: 0px;

    &:hover {
      cursor: pointer;
    }
  }

  @media ${mediaQueries.largeDesktop} {
    .mainImage {
      width: 400px;
      height: auto;
    }
    .logo-container {
      ${props => (props.right ? 'right: 70px;' : 'left: 70px;')};
      bottom: -10px;
    }
    .logo-container.Sensing {
      bottom: -30px;
    }
    .button-text {
      ${'' /* line-height: 45px; */}
    }
    .paragraph {
      ${props => (props.right ? 'padding-right: 30px;' : 'padding-left: 30px;')};
    }
    h1 {
      ${'' /* font-size: 32px; */}
    }
  }

  @media ${mediaQueries.desktop} {
    .mainImage {
      width: 320px;
    }
  }

  @media ${mediaQueries.tablet} {
    .mainImage {
      margin-top: 50px;
      width: 250px;
    }
    .logo-container {
      ${'' /* right: -122px; */}
      ${props => (props.right ? 'left: -122px;' : 'right: -122px;')};
      top: 30px;
      left: auto;
      bottom: auto;
      display: block;
      position: absolute;
      &.Sensing {
        bottom: auto;
        ${'' /* right: -76px; */}
        ${props => (props.right ? 'left: -76px;' : 'right: -76px;')};
        top: 5px;
        img {
          height: 60px;
        }
      }
      &.Sandvik {
        ${props => (props.right ? 'left: -118px;' : 'right: -118px;')};
      }
      &.Transtronic {
        ${props => (props.right ? 'left: -122px;' : 'right: -122px;')};
      }
      &.Hayden {
        ${props => (props.right ? 'left: -122px;' : 'right: -122px;')};
      }
      &.Rocktech {
        ${props => (props.right ? 'left: -122px;' : 'right: -122px;')};
      }
    }
  }

  @media ${mediaQueries.largePhone} {
    display: block;
    .image-container {
      width: 70%;
      max-width: 300px;
      margin: 0 auto;
      padding: 0;
    }
    .mainImage {
      width: 100%;
      margin-top: 0px;
    }
    .copy-container {
      width: 70%;
      max-width: 400px;
      margin: 0 auto;
      margin-top: ${styles.spacing.phoneMargin}px;
    }
    .logo-container {
      ${props => (props.right ? 'left: auto;' : 'right: auto;')};
      top: auto;
      ${props => (props.right ? 'right: 0px;' : 'left: 0px;')};
      bottom: -64px;
      &.Transtronic {
        ${props => (props.right ? 'left: auto;' : 'right: auto;')};
        top: auto;
        ${props => (props.right ? 'right: 0px;' : 'left: 0px;')};
        bottom: -64px;
      }
      &.Hayden {
        ${props => (props.right ? 'left: auto;' : 'right: auto;')};
        top: auto;
        ${props => (props.right ? 'right: 0px;' : 'left: 0px;')};
        bottom: -64px;
      }
      &.Rocktech {
        ${props => (props.right ? 'left: auto;' : 'right: auto;')};
        top: auto;
        ${props => (props.right ? 'right: 0px;' : 'left: 0px;')};
        bottom: -64px;
      }
      &.Sensing {
        ${props => (props.right ? 'left: auto;' : 'right: auto;')};
        top: auto;
        ${props => (props.right ? 'right: 0px;' : 'left: 0px;')};
        bottom: -43px;
      }
      &.Sandvik {
        ${props => (props.right ? 'left: auto;' : 'right: auto;')};
        top: auto;
        ${props => (props.right ? 'right: 0px;' : 'left: 0px;')};
        bottom: -58px;
      }
    }
  }

  @media ${mediaQueries.phone} {
    .image-container {
      width: calc(100% - 60px);
      max-width: none;
      ${props => (props.right ? 'padding-right: 0px;' : 'padding-left: 0px;')};
    }
    .copy-container {
      padding-right: 0px;
      width: calc(100% - 60px);
    }
    .paragraph {
      padding-left: 0px;
    }
    .logo-container {
      left: 0px;
      right: auto;
      top: auto;
      bottom: -28px;
      width: 80px;
      height: 60px;
      text-align: left;
      .logoImage {
        max-height: 60px;
        max-width: 80px;
      }
      &.Sandvik {
        bottom: -22px;
      }
      &.Sensing {
        bottom: -8px;
      }
      &.Transtronic {
        bottom: -28px;
      }
      &.Hayden {
        bottom: -28px;
      }
      &.Rocktech {
        bottom: -28px;
      }
    }
  }
`

export default Product
