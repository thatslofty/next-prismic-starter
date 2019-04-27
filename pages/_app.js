/*
* custom _app is for meta title and providing cms content
*/
import App, { Container } from 'next/app'
import Head from 'next/head'
import React from 'react'
import withGA from 'next-ga'
import Router from 'next/router'
import { CopyContext } from 'context/copy'
import { ImagesContext } from 'context/images'
import { ProductsContext } from 'context/products'
import { ProductDataContext } from 'context/product-data'
import Header from 'components/header'
import Footer from 'components/footer'

import data from /* preval */ 'context/data'

class NextPrismicStarter extends App {
  static async getInitialProps({ Component, ctx }) {
    // get initial props on pages
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps, data }
  }

  render() {
    const { Component, pageProps } = this.props
    const {
      Copy, Images, Products, ProductData
    } = this.props.data
    return (
      <Container>
        <Head>
          <title>RockTech USA</title>
        </Head>
        <Header />
        <CopyContext.Provider value={Copy}>
          <ImagesContext.Provider value={Images}>
            <ProductsContext.Provider value={Products}>
              <ProductDataContext.Provider value={ProductData}>
                <Component {...pageProps} />
              </ProductDataContext.Provider>
            </ProductsContext.Provider>
          </ImagesContext.Provider>
        </CopyContext.Provider>
        <Footer />
      </Container>
    )
  }
}

export default withGA('UA-12345-1', Router)(NextPrismicStarter)
