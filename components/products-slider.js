import React from 'react'
import styled from 'styled-components'
import { styles, mediaQueries } from 'styles/variables'
import { MainContainer } from 'styles/common'
import CopyHeader from './copy-header'
import Product from './product'

export default class ProductsSlider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      products: props.products.filter(p => p.data.sort > 0).sort((a, b) => a.data.sort - b.data.sort).slice()
    }
  }

  componentDidMount() {
    this.state.products.forEach((product) => {
      const mainImage = new Image()
      mainImage.src = product.data.main_image.url
      const logo = new Image()
      logo.src = product.data.logo.url
    })
  }

  navLeft = () => {
    this.setState((prevState) => {
      const arr = prevState.products
      arr.splice(0, 0, arr.pop())
      return { products: arr }
    })
  }

  navRight = () => {
    this.setState((prevState) => {
      const arr = prevState.products
      arr.push(arr.shift())
      return { products: arr }
    })
  }

  render() {
    return (
      <ProductsSliderStyles>
        <MainContainer className="container">
          <CopyHeader text="Our Products" left dark extraClass="header" />
          <div className="slider-container">
            <div className="leftButton" onClick={this.navLeft}>
              <div className="buttonText">
                <p className="paragraph">{this.state.products[this.state.products.length - 1].data.name[0].text}</p>
              </div>
            </div>
            <Product product={this.state.products[0].data} />
            <div className="rightButton" onClick={this.navRight}>
              <div className="buttonText">
                <p className="paragraph">{this.state.products[1].data.name[0].text}</p>
              </div>
            </div>
          </div>
        </MainContainer>
      </ProductsSliderStyles>
    )
  }
}

const ProductsSliderStyles = styled.div.attrs({ className: 'products-slider-styles' })`
  background-color: #FFFFFF;

  .container {
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
    padding-left: 0;
    padding-right: 0;
  }

  .header {
    margin-left: 96px;
  }

  .slider-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    ${'' /* margin-bottom: 50px; */}
  }

  .leftButton, .rightButton {
    background: rgba(51,150,189,0.45);
    height: 275px;
    width: 90px;
    position: relative;
  }

  .buttonText {
    width: 275px;
    height: 90px;
    position: relative;
    color: #FFFFFF;

    p {
      font-family: 'Karla';
      font-weight: ${styles.fonts.semiBold};
      font-size: 18px;
      letter-spacing: 1px;
      text-align: center;
      line-height: 85px;
      margin: 0;
      user-select: none;
    }

    &:hover {
      cursor: pointer;

      &:before, &:after {
        padding-top: 0px;
      }
    }

    &:before, &:after {
      font-size: 24px;
      font-family: 'Lato';
      line-height: 90px;
      height: 90px;
      box-sizing: border-box;
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
      padding-top: 4px;
      transition: all .3s;
    }
  }

  .leftButton .buttonText {
    transform: rotate(-90deg) translate(-92px, -93px);

    p {
      padding-left: 50px;
    }

    &:before {
      left: 18%;
      content: "^";
    }
  }

  .rightButton .buttonText {
    transform: rotate(90deg) translate(92px, 93px);

    p {
      padding-right: 50px;
    }

    &:after {
      left: 83%;
      content: "^";
    }
  }

  @media ${mediaQueries.largeDesktop} {
    .leftButton, .rightButton {
      height: 225px;
      width: 60px;
    }

    .buttonText {
      width: 225px;
      height: 60px;
      p {
        font-size: 16px;
        letter-spacing: 1px;
        line-height: 60px;
      }
      &:before, &:after {
        font-size: 18px;
        line-height: 60px;
        height: 60px;
        padding-top: 4px;
      }
    }

    .leftButton .buttonText {
      transform: rotate(-90deg) translate(-83px, -83px);
      p {
        padding-left: 50px;
      }
      &:before {
        left: 18%;
        content: "^";
      }
    }

    .rightButton .buttonText {
      transform: rotate(90deg) translate(83px, 83px);
      p {
        padding-right: 50px;
      }
      &:after {
        left: 83%;
        content: "^";
      }
    }
  }

  @media ${mediaQueries.largePhone} {
    .header {
      margin-left: 30px;
    }
  }

  @media ${mediaQueries.phone} {
    .slider-container {
      position: relative;
      margin-top: 50px;
    }
    .leftButton, .rightButton {
      position: absolute;
      background-color: rgb(51, 150, 189);
      top: 0px;
      width: calc(50% - 35px);
      height: 40px;
      top: -60px;
      .buttonText {
        transform: rotate(0deg);
        width: 100%;
        height: 40px;
        p {
          padding-left: 0px;
          padding-right: 0px;
          line-height: 40px;
          width: 100%;
          font-size: 12px;
        }
        &:before, &:after {
          display: none;
        }
      }
    }
    .leftButton {
      left: 30px;
    }
    .rightButton {
      right: 30px;
    }
  }

`
