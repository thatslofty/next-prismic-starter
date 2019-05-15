/*
 * custom _app is for meta title and providing global cms content
 */
import App, { Container } from 'next/app';
import Head from 'next/head';
import React from 'react';
import withGA from 'next-ga';
import Router from 'next/router';
import Header from 'components/header';
import Footer from 'components/footer';

class NextPrismicStarter extends App {
  static async getInitialProps({ Component, ctx }) {
    // get initial props on pages
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Head>
          <title>Next Prismic Starter</title>
        </Head>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Container>
    );
  }
}

export default withGA('UA-12345-1', Router)(NextPrismicStarter);
