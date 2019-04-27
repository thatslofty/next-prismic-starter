import React from 'react'

export const ProductDataContext = React.createContext({})

export const ProductData = ({ children, type }) => (
  <ProductDataContext.Consumer>
    {(allProductData) => {
      const product = allProductData.filter(p => p.type === type)
      return React.cloneElement(children(product[0].data), {})
    }}
  </ProductDataContext.Consumer>
)
