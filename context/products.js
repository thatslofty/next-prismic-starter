import React from 'react'

export const ProductsContext = React.createContext({})

export const Products = ({ children }) => (
  <ProductsContext.Consumer>
    {allProducts => React.cloneElement(children(allProducts), {})}
  </ProductsContext.Consumer>
)
