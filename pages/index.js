import React from 'react'
import { Products } from 'context/products'
import HomeHeader from 'components/home-header'
import HomeOurStory from 'components/home-our-story'
import ProductsSlider from 'components/products-slider'
import HomeNews from 'components/home-news'
import HomeTradeShow from 'components/home-trade-show'

const HomePage = () => (
  <div className="HomePage">
    <HomeHeader />
    <HomeOurStory />
    <Products>
      {products => <ProductsSlider products={products} />}
    </Products>
    <HomeNews />
    <HomeTradeShow />
  </div>
)

export default HomePage
