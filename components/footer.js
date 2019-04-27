import React from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'
import styled from 'styled-components'
import { styles } from 'styles/variables'
import { MainContainer } from 'styles/common'

import { Contact } from /* preval */ 'context/data'

const Footer = ({ router }) => (
  <FooterStyles>
    <MainContainer className="container">
      <div className="link-container">
        <div className="link">
          <Link href="/"><a className={router.pathname === '/' ? 'currentPage' : ''}>Home</a></Link>
          <Link href="/about"><a className={router.pathname === '/about' ? 'currentPage' : ''}>About</a></Link>
          <Link href="/products"><a className={router.pathname.includes('product') ? 'currentPage' : ''}>Products</a></Link>
        </div>
        <div className="right">
          <Link href="/services"><a className={router.pathname === '/services' ? 'currentPage' : ''}>Services</a></Link>
          <Link href="/contact"><a className={router.pathname === '/contact' ? 'currentPage' : ''}>Contact</a></Link>
        </div>
      </div>
      <Link href="/">
        <a className="logo-container">
          <img className="logo" src="/static/rocktech-color.png" alt="logo" />
        </a>
      </Link>
      <div className="address-container">
        <div className="address" key={Contact.title[0].text}>
          <p className="header">{Contact.title[0].text}</p>
          <p onClick={() => window.open(`tel:${Contact.phone[0].text}`, '_self')}>{`Phone: ${Contact.phone[0].text}`}</p> {/* eslint-disable-line */}
          {Contact.fax.length > 0 && Contact.fax[0].text !== '' && <p>{`Fax: ${Contact.fax[0].text}`}</p>}
          <p onClick={() => window.open(Contact.map_link.url, '_blank')}> {/* eslint-disable-line */}
            {`${Contact.address[0].text}
              ${Contact.address[1].text}`}
          </p>
        </div>
      </div>
    </MainContainer>
  </FooterStyles>
)

const FooterStyles = styled.div`
  background-color: ${styles.backgroundLight};

  .container {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 280px;
    width: 100%;
    padding: 0px;
  }
  .logo {
    width: 376px;
    flex: 2 0 0;
  }
  .link-container {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    flex: 1 0 0;
    height: 120px;

    .left {
      padding-left: 40px;
    }

    a {
      font-family: 'Montserrat';
      font-size: 18px;
      color: ${styles.darkCopy};
      text-decoration: none;
      position: relative;
      display: block;
      margin: 17px 26px;
      letter-spacing: 1px;
      transition: all .3s;

      &:after {
        content: "";
        position: absolute;
        top: 50%;
        left: -30%;
        transform: translate(50%, -50%) rotate(90deg);
        height: 1px;
        width: 0%;
        background-color: ${styles.darkCopy};
        transition: width .2s;
        box-shadow: 0 0 1px 0 rgba(0,0,0,0.70);
      }

      &.currentPage:after {
        width: 20%;
      }
    }
  }
  .address-container {
    flex: 1 0 0;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;

    .address {
      &:first-of-type {
        padding-left: 70px;
      }
      width: 175px;
    }

    p {
      font-family: Montserrat;
      font-weight: ${styles.fonts.medium};
      font-size: 12px;
      color: ${styles.darkCopy};
      margin: 12px 0;

      &.header {
        font-family: 'Montserrat';
      font-weight: ${styles.fonts.extraBold};
        font-size: 12px;
        color: #555555;
      }
    }
  }

  @media (max-width: 1300px) {
    .logo {
      width: 330px;
    }
  }

  @media (max-width: 1175px) {
    .address-container {
      .address {
        &:first-of-type {
          padding: 0px;
        }
        width: 150px;
      }
    }
  }

  @media (max-width: 1100px) {
    .container {
      height: 230px;
    }
    .logo {
      width: 200px;
    }
    .link-container a {
      font-size: 16px;
    }
  }

  @media (max-width: 700px) {
    .container {
      height: 320px;
      flex-wrap: wrap;
    }
    .logo-container {
      width: 50vw;
      display: block;
      text-align: center;
    }
    .link-container {
      width: 50vw;
    }
    .address-container {
      width: 100vw;
      .address {
        margin: 0 8vw;
      }
    }
  }

  @media (max-width: 700px) {
    .container {
      height: auto;
    }
    .logo-container {
      width: 100%;
      margin: 50px 0;
    }
    .link-container {
      margin-top: 30px;
      .left {
        padding: 0px;
      }
    }
    .address-container {
      margin-bottom: 30px;
      .address {
        margin: 0;
        &:first-of-type {
          margin-left: 10px;
          margin-right: 20px;
        }
      }
    }
  }

  @media (max-width: 700px) {
    .address-container {
      display: block;
      text-align: center;
      
      .address {
        margin: 30px auto 0 auto;

        &:first-of-type {
          margin: 0 auto;
        }
      }
    }
  }
`

export default withRouter(Footer)
