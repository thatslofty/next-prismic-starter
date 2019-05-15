/*
 * custom _document is for styled-components css to be injected into <head>
 */
import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { GlobalStyle } from '../styles/global';

export default class extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(
        <React.Fragment>
          <GlobalStyle />
          <App {...props} />
        </React.Fragment>
      )
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html lang='en'>
        <Head>
          <link rel='icon' type='image/x-icon' href='/static/favicon.ico' />
          <meta charSet='utf-8' />
          <meta httpEquiv='x-ua-compatible' content='ie=edge' />
          <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />

          {/* <!-- Primary Meta Tags --> */}
          <meta name='title' content='Next Prismic Starter' />
          <meta name='description' content='Next Prismic Starter' />

          {/* <!-- Open Graph / Facebook --> */}
          <meta property='og:type' content='website' />
          <meta property='og:url' content='https://next-prismic-starter.com/' />
          <meta property='og:title' content='Next Prismic Starter' />
          <meta property='og:description' content='Next Prismic Starter' />
          {/* <meta property="og:image" content="/static/rocktech-logo-meta.jpg" /> */}

          {/* <!-- Twitter --> */}
          <meta property='twitter:card' content='summary_large_image' />
          <meta property='twitter:url' content='https://next-prismic-starter.com/' />
          <meta property='twitter:title' content='Next Prismic Starter' />
          <meta property='twitter:description' content='Next Prismic Starter' />
          {/* <meta property="twitter:image" content="/static/rocktech-logo-meta.jpg" /> */}

          <link
            href='https://fonts.googleapis.com/css?family=Karla:400,400i,700|Montserrat:300,400,400i,500,600,700,800'
            rel='stylesheet'
          />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
