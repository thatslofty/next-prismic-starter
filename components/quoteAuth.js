import React from 'react'
import styled from 'styled-components'
import { styles, mediaQueries } from 'styles/variables'
import { MainContainer, MainHeader } from 'styles/common'
import { media, coverImg, containImg, clearFix } from 'styles/mixins'

import LoftyLogo from '../assets/images/lofty-logo.svg'

const QuoteAuth = ({ inputValue, handleChange }) => pug`
  QuoteAuthStyles
    .background-block
    .logo-container
      img(src=LoftyLogo alt="lofty-logo")
    .access-code-container
      p.instructions Enter the access code you received to view your most recent quote
      input(name="access-code" type="text" placeholder="Access Code" value=${inputValue} onChange=${handleChange})
    .footer-container
      p.quote Good, better, best. Never let it rest. Til your good is better and your better is best.
      p.quote-author - St. Jerome
      .contact Need Help?
        br
        a(href="mailto:info@thatslofty.com") info@thatslofty.com
`

const QuoteAuthStyles = styled.div.attrs({ className: 'quote-auth' })`
  width: 100vw;
  height: 100vh;

  .background-block {
    background-color: ${styles.backgroundBlockColor};
    width: 60%;
    height: 649px;
    position: absolute;
    top: 0;
    left: 0;
  }
  .logo-container {
    width: 100%;
    max-width: 1250px;
    height: 1px;
    margin: 0 auto;
    position: relative;
    img {
      position: absolute;
      top: 61px;
      left: 62px;
      width: 190px;
    }
  }
  .access-code-container {
    width: 600px;
    height: 379px;
    max-width: 90%;
    background-color: ${styles.backgroundBlueColor};
    position: absolute;
    top: 200px;
    left: 50%;
    transform: translateX(-50%);
    p.instructions {
      font-family: "CaviarDreams-Bold";
      color: ${styles.offWhiteFont};
      font-size: 21px;
      width: 486px;
      max-width: 90%;
      margin: 87px auto 0 auto;
      text-align: left;
      letter-spacing: 1.18px;
    }
    input {
      width: 485px;
      max-width: 90%;
      height: 77px;
      position: absolute;
      left: 50%;
      bottom: 113px;
      transform: translateX(-50%);
      font-family: "CaviarDreams-Italic";
      font-size: 42px;
      color: rgba(#E6EBE0, 37%);
      text-align: center;
      background-color: ${styles.backgroundBlueColor};
      border: 1px solid #E6EBE0;
      outline: none;
      -webkit-appearance: none;
      padding: 0;
    }
  }
  .footer-container {
    width: 90%;
    height: 75px;
    max-width: 1174px;
    margin: 0 auto;
    position: relative;
    top: 757px;
    margin-bottom: 50px;

    .quote {
      text-align: left;
      font-size: 21px;
      width: 503px;
      position: absolute;
      left: 0;
      top: 0;
    }
    .quote-author {
      text-align: left;
      font-size: 21px;
      position: absolute;
      left: 475px;
      bottom: 0;
    }
    .contact {
      text-align: right;
      font-size: 18px;
      width: 190px;
      position: absolute;
      right: 0;
      top: 0;
      a {
        color: ${styles.blueFont};
        text-decoration: none;
      }
    }
    .quote, .quote-author, .contact {
      font-family: "CaviarDreams-Bold";
      color: $blue-font;
      padding: 0;
      margin: 0;
      letter-spacing: 1.18px;
    }
  }

  @media (max-width: 1120px) {
    .logo-container img {
      top: 25px;
      left: 36px;
      width: 170px;
    }
  }

  @media (max-width: 920px) {
    .footer-container {
      width: 90%;
      height: 300px;
      max-width: 1174px;
      top: 700px;
      margin-bottom: 00px;

      .quote {
        max-width: 100%;
        left: 0;
        top: 0;
      }
      .quote-author {
        left: 0;
        bottom: 190px;
      }
      .contact {
        width: 190px;
        bottom: 50px;
        top: auto;
      }
    }
  }

  @media (max-width: 600px) {
    .access-code-container {
      height: 279px;
      top: 250px;
      p.instructions {
        width: 486px;
        margin: 55px auto 0 auto;
        text-align: left;
      }
      input {
        width: 485px;
        height: 77px;
        bottom: 43px;
        font-size: 36px;
      }
    }
  }

  @media (max-width: 550px) {
    .footer-container .quote-author {
      bottom: 160px;
    }
  }

  @media (max-width: 508px) {
    .access-code-container p.instructions {
      margin: 35px auto 0 auto;
    }
  }

  @media (max-width: 370px) {
    .footer-container .quote-author {
      bottom: 130px;
    }
  }

  @media (max-width: 323px) {
    .access-code-container input {
      bottom: 20px;
    }
  }
`

export default QuoteAuth
