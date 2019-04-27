import React from 'react'
import styled from 'styled-components'
import { styles, mediaQueries } from 'styles/variables'
import { MainContainer, MainHeader, H1 } from 'styles/common'
import {
  media, coverImg, containImg, clearFix
} from 'styles/mixins'

import LoftyLogo from '../assets/images/lofty-logo.svg'
import RocktechLogo from '../assets/images/rocktech-logo.svg'

// base values. these should be replaced with cms fields
const data = {
  projectTitle: 'Rocktech',
  aboutText: 'Everything is done a little differently at Lofty. We are a small development team whose focus is to carefully consider each step of your project and execute each desire you have to the best of our abilities. In this case, our goal is to showcase the hard work and dedication the employees at Rocktech have through a beautiful and user-friendly website. \n\nPlease carefully read through the below information. Every aspect of our development process is described with detail and timeline information is estimated as accurately as possible. If you have any questions regarding anything discussed or anything you feel we may have missed, please don\'t hesitate to reach out.',
  processTime: '1 - 3 months',
  firstTime: '1 - 2 weeks',
  secondTime: '1 - 2 weeks',
  thirdTime: '1 - 2 weeks',
  fourthTime: '1 - 2 months',
  fifthTime: '1 - 2 weeks',
  cost: [
    {
      name: 'design',
      hours: 0,
      cost: 0,
    },
    {
      name: 'development',
      hours: 0,
      cost: 0,
    },
    {
      name: 'total',
      hours: 0,
      cost: 0,
    },
  ],
  version: 1,
  date: '9/27/2017',
}

const QuoteView = () => pug`
  QuoteViewStyles
    .background-block
    .logo-container
      img.lofty-logo(src=LoftyLogo alt="lofty-logo")
      img.client-logo(src=RocktechLogo alt="rocktech-logo")

    .about-container
      p ${data.aboutText}

    .process-and-timeline-container.outside-container
      H1 Process & Timeline
      .inside-container
        p There are an unlimited number of ways to create, test, and approve an application or website. We do it a little different from most companies, but we’ve found its a better workflow for ourselves and ultimately, a better experience for our customers. Unless otherwise discussed, you can expect anywhere from ${data.processTime} start to finish.
        p
          span.large-starter First,
          | we provide an initial design concept. This may contain 2-3 pages of your site to give you a general idea of more to come. If the direction we’ve taken is not something you enjoy, now is the time to speak up. (${data.firstTime})
        p
          span.large-starter Second,
          | we take feedback from you regarding the concept and incorporate it into a complete design that includes Mobile, Tablet, and Desktop versions. (${data.secondTime})
        p
          span.large-starter Third,
          | after presenting the complete design to you, we will incorporate all new feedback and request a final design approval before starting development. (${data.thirdTime})
        p
          span.large-starter Fourth,
          | we build the site. At this point, what you see on the page will directly match the approved design. Only after all the site functionality has been verified and all bugs have been squashed will we continue on. (${data.fourthTime})
        p
          span.large-starter Fifth,
          | go live. (${data.fifthTime})


    .support-and-maintentance-container.outside-container
      H1 Support & Maintenance
      .inside-container
        p Any bugs found after a site launch will be addressed as quickly as possible with no additional charge. New functionality or design changes can be added upon request. Pricing for those changes will be determined at that time.
        p We support the two most recent versions of every major browser available including Google Chrome, Safari, Internet Explorer, Edge, and Firefox. We also support the two most recent versions of all major operating systems including Mac OSX, Windows, iOS, and Android.
        p All in house hosting is provided by Amazon and directly billed to you. Pricing for that is dependant upon your monthly page visits and network usage. Please let us know if this is something you need.


    .cost-container.outside-container
      H1 Cost & Signatures
      .inside-container
        p The pricing below includes design and development. Half of the payment is due when this document is signed and returned. The remaining balance is due upon completion of the project.
        .cost-container
          each item in ${data.cost}
            .cost-item-container(key=item.name)
              p= item.name
              p= item.hours + 'hrs'
              p= item.cost.toLocaleString()

        .signature-container
          .left-signature
            p Lofty Signature
            p Date

          .right-signature
            p ${data.projectTitle} Signature
            p Date

    .footer-container
      p
        | Version ${data.version}
        br
        | ${data.date}
      h2
        a(target="_blank" href="/assets/rocktech-lofty-quote.pdf") Download
      img(src=LoftyLogo alt="lofty-logo")
`

const QuoteViewStyles = styled.div.attrs({ className: 'quote-view' })`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  overflow-x: hidden;
  overflow-y: scroll; /* has to be scroll, not auto */
  -webkit-overflow-scrolling: touch;

  // general text styles
  p {
    font-family: "KayakSans";
    font-size: 18px;
    letter-spacing: 2.35px;
    color: ${styles.blueFont};
    text-align: justify;
    margin: 0;
    padding: 0;
  }

  .logo-container {
    width: 100%;
    max-width: 1250px;
    height: 1px;
    margin: 0 auto;
    position: relative;
    img.lofty-logo {
      position: absolute;
      top: 61px;
      left: 62px;
      width: 190px;
    }
    img.client-logo {
      position: absolute;
      top: -78px;
      left: 340px;
      width: 1347px;
      opacity: .9;
    }
  }
  .background-block {
    width: 40%;
    height: 434px;
    background-color: ${styles.backgroundBlockColor};
    position: absolute;
    top: 0;
    left: 0;
  }
  .about-container {
    position: relative;
    margin: 330px auto 0 auto;
    width: 80%;
    max-width: 1040px;
    height: auto;
    display: flex;
    justify-content: center;
    p {
      white-space: pre-wrap;
      align-self: center;
      width: 95%;
      background-color: ${styles.backgroundRedColor};
      padding: 30px;
    }
  }
  .outside-container {
    width: 80%;
    max-width: 1040px;
    margin: 89px auto 0 auto;
    text-align: left;
    h1 {
      font-family: "CaviarDreams-Bold";
      color: ${styles.blueFont};
      font-size: 28px;
    }
    .inside-container {
      width: 90%;
      max-width: 970px;
      margin: 24px auto 0 auto;
      p {
        margin: 0 auto 49px auto;
        span.large-starter {
          font-size: 28px;
        }
      }
    }
  }
  .inside-container {
    .cost-container {
      width: 100%;
      max-width: 550px;
      margin: 0 auto;

      .cost-item-container {
        position: relative;
        height: 50px;
        p {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          display: inline-block;
          &:nth-of-type(1) {
            text-align: right;
            width: 25%;
            text-transform: capitalize;
            direction: rtl;
          }
          &:nth-of-type(2) {
            text-align: center;
          }
          &:nth-of-type(3) {
              text-align: left;
              left: 75%;
            }
        }
        &:last-of-type {
          margin-top: 40px;
        }
      }
    }
    .signature-container {
      margin-top: 154px;
      .left-signature, .right-signature {
        border-top: 1px solid ${styles.blueFont};
        width: 45%;
        margin-right: 5%;
        height: 50px;
        display: inline-block;
        position: relative;
        p {
          margin-top: 12px;
          margin-left: 30px;
          font-family: "CaviarDreams-Bold-Italic";
          font-size: 10px;
          position: absolute;
          &:last-of-type {
            right: 0;
            margin-right: 30px;
          }
        }
      }
      .right-signature {
        margin-left: 5%;
        margin-right: 0%;
      }
    }
  }
  .footer-container {
    width: 90%;
    max-width: 1250px;
    height: 200px;
    position: relative;
    margin: 0px auto 35px auto;
    p {
      position: absolute;
      left: 0;
      bottom: 0;
      br {
        line-height: 30px;
      }
    }
    h2 {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      a {
        font-family: "CaviarDreams-Bold-Italic";
        color: ${styles.redFont};
        text-decoration: underline;
        letter-spacing: 2.35px;
        font-size: 21px;
        cursor: pointer;
      }
    }
    img {
      position: absolute;
      bottom: 0;
      right: 0;
      height: 150px;
    }
  }

  @media (max-width: 1120px) {
    .logo-container img.lofty-logo {
      top: 25px;
      left: 36px;
      width: 170px;
    }
  }

  @media (max-width: 900px) {
    .logo-container img.client-logo {
      width: 1000px;
      left: 280px;
      top: -20px;
    }
    .inside-container .signature-container {
      margin-top: 100px;
      .left-signature, .right-signature {
        display: block;
        margin: 50px auto;
        width: 80%;
      }
    }
  }

  @media (max-width: 600px) {
    .logo-container {
      img.lofty-logo {
        top: 25px;
        left: 36px;
        width: 170px;
      }
      img.client-logo {
        width: 700px;
        left: 250px;
        top: -10px;
      }
    }
    .background-block {
      width: 60%;
    }
    .about-container {
      margin-top: 270px;
    }
    .footer-container {
      p {
        margin-bottom: 10px;
      }
      h2 {
        display: none;
      }
      img {
        width: 120px;
      }
    }
  }

  @media (max-width: 450px) {
    .logo-container {
      img.lofty-logo {
        top: 20px;
        left: 24px;
        width: 30%;
      }
      img.client-logo {
        width: 125%;
        left: 45%;
        top: -10px;
      }
    }
    .background-block {
      width: 70%;
    }
    .about-container {
      margin-top: 50%;
    }
    .inside-container .cost-container {
      width: 75%;
    }
    .inside-container .signature-container {
      .left-signature, .right-signature {
        width: 100%;
        p {
          margin-left: 10px;
          &:last-of-type {
            margin-right: 10px;
          }
        }
      }
    }
  }
`

export default QuoteView
