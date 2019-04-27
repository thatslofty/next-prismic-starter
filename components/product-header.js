import React from 'react'
import styled from 'styled-components'
import { Products } from 'context/products'
import { MainContainer } from 'styles/common'
import { mediaQueries } from 'styles/variables'

const ProductHeaderContainer = styled.div`
  padding-top: 100px;
  background-color: #EAF4F6;
  width: 100%;
  @media (max-width: 1100px) {
    padding-top: 80px;
  }
  @media ${mediaQueries.tablet} {
    padding-top: 60px;
  }
`

const Container = styled(MainContainer)`
  display: flex;
  flex-direction: row;
  @media ${mediaQueries.largePhone} {
    flex-direction: column-reverse;
  }
`

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  @media ${mediaQueries.largePhone} {
    width: 100%;
  }
`

const RightContainer = styled.div`
  display: flex;
  width: 30%;
  align-items: center;
  justify-content: center;
  @media ${mediaQueries.largePhone} {
    width: 100%;
    justify-content: flex-start;
    margin-bottom: 30px;
    img {
      max-width: 250px;
    }
  }
`

const Name = styled.h3`
  font-size: 16px;
  font-weight: 400;
  text-transform: uppercase;
  margin: 0;
  @media ${mediaQueries.largeDesktop} {
    font-size: 15px;
  }
  @media ${mediaQueries.largePhone} {
    font-size: 14px;
  }
`

const Header = styled.h1`
  font-size: 54px;
  margin: 10px 0 10px -4px;
  font-weight: 500;
  @media ${mediaQueries.largeDesktop} {
    font-size: 50px;
  }
  @media ${mediaQueries.largePhone} {
    font-size: 40px;
  }
`

const Paragraph = styled.p`
  font-family: 'Karla';
  font-size: 24px;
  margin: 0;
  padding-right: 20px;
  @media ${mediaQueries.largeDesktop} {
    font-size: 22px;
  }
  @media ${mediaQueries.largePhone} {
    font-size: 18px;
  }
  span {
    color: #079343;
  }
`

export default ({ name }) => (
  <Products>
    {(products) => {
      const product = products.filter(p => p.data.name[0].text === name)[0].data
      return (
        <ProductHeaderContainer>
          <Container>
            <LeftContainer>
              <Name>{product.name[0].text}</Name>
              <Header>{product.header[0].text}</Header>
              <Paragraph>
                {product.paragraph[0].text}
                {product.green_paragraph.length > 0 && (
                  <span>{` ${product.green_paragraph[0].text}`}</span>
                )}
              </Paragraph>
              {name[0].text === 'Rocktech USA' && (
                <Paragraph style={{ marginTop: '20px' }}>Also available in plastic</Paragraph>
              )}
            </LeftContainer>
            <RightContainer>
              <img src={product.logo.url} alt="logo" />
            </RightContainer>
          </Container>
        </ProductHeaderContainer>
      )
    }}
  </Products>
)
