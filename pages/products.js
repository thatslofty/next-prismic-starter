import React from 'react'
import { Products } from 'context/products'
import Hero from 'components/hero'
import ProductsList from 'components/products-list'

const ProductsPage = () => (
  <div className="ProductsPage">
    <Hero title="Products" orientLeft />
    <Products>
      {products => <ProductsList products={products} />}
    </Products>
  </div>
)

export default ProductsPage
