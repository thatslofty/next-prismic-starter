import React from 'react'
import styled from 'styled-components'
import { styles, mediaQueries } from 'styles/variables'
import { MainContainer } from 'styles/common'
import Product from './product'

export default ({ products }) => (
  <React.Fragment>
    {products.filter(p => p.data.sort > 0).sort((a, b) => a.data.sort - b.data.sort).map((product, i) => (
      <ProductsListStyles key={`${product.data.name[0].text}-${product.data.header[0].text}`} className={`container ${i % 2 ? 'right' : ''}`}>
        <MainContainer>
          <div className="product-container">
            <Product right={i % 2} product={product.data} />
          </div>
        </MainContainer>
      </ProductsListStyles>
    ))}
  </React.Fragment>
)

const ProductsListStyles = styled.div.attrs({ className: 'products-list-styles' })`
  background-color: white;

  &.right {
    background-color: ${styles.backgroundLight};
  }
  .product-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media ${mediaQueries.phone} {
    .main-container {
      padding-left: 0;
      padding-right: 0;
    }
  }
`
