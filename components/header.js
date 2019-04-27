import React from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'
import styled from 'styled-components'
import { styles, mediaQueries } from 'styles/variables'
import { MainContainer } from 'styles/common'
import ScrollLock from 'react-scrolllock'
import HamburgerMenu from 'react-hamburger-menu'

class Header extends React.Component {
  state = {
    open: false
  }

  toggleMenu = () => {
    this.setState({ open: !this.state.open }) // eslint-disable-line
  }

  closeMenu = () => {
    this.setState({ open: false })
  }

  render() {
    const className = (this.props.router.pathname === '/' ? 'home' : '')
    const linkData = [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
      { text: 'Products', link: '/products' },
      { text: 'Services', link: '/services' },
      { text: 'Contact', link: '/contact' }
    ]

    return (
      <HeaderStyles className={className}>
        <MainContainer className="container">
          <Link href="/">
            <a><img className="logo" alt="" src="/static/rocktech-light.svg" /></a>
          </Link>
          <ScrollLock isActive={this.state.open}>
            <div className={this.state.open ? 'open link-container' : 'link-container'}>
              {linkData.map((val) => {
                let currentClass
                if (val.text === 'Home' && this.props.router.pathname === val.link) {
                  currentClass = 'currentPage'
                } else if (val.text !== 'Home') {
                  currentClass = (this.props.router.pathname.includes(val.link) ? 'currentPage' : '')
                }
                return (
                  <Link key={val.text} href={val.link}>
                    <a onClick={this.closeMenu} className={currentClass}>{val.text}</a>
                  </Link>
                )
              })}
            </div>
          </ScrollLock>
          <div className="burger-container">
            <HamburgerMenu
              isOpen={this.state.open}
              menuClicked={this.toggleMenu}
              width={30}
              height={20}
              strokeWidth={4}
              rotate={0}
              color="white"
              borderRadius={3}
              animationDuration={0.4}
            />
          </div>
        </MainContainer>
      </HeaderStyles>
    )
  }
}

const HeaderStyles = styled(({ children, className, ...props }) => <div className={className} {...props}>{children}</div>)`
  &.home {
    background-color: inherit;
    .container {
      height: ${styles.homeHeaderHeight};
    }
    .logo {
      width: 230px;
    }
  }

  z-index: 1000;
  position: absolute;
  background-color: ${styles.headerBackground};
  width: 100%;
  transition: all .3s;

  .container {
    height: ${styles.headerHeight};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    transition: all .3s;
    padding-top: 0;
    padding-bottom: 0;
  }
  .burger-container{
    position: relative;
    display: none;
    cursor: pointer;
    height: 40px;
    width: 40px;
    padding-top: 20px;
  }
  .logo {
    width: 200px;
    margin: 0 68px 0 0;
    flex: 1 0 0;
    transition: all .3s;
    padding-top: 8px;
  }
  .link-container {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex: 3 0 0;
    max-width: 510px;
    margin: auto 0px auto auto;
    transition: opacity 0.33s ease-in-out;

    &.open{
      opacity: 1;
      pointer-events: all;
    }
  }
  a {
    font-family: Montserrat;
    font-weight: ${styles.fonts.medium};
    font-size: 18px;
    color: ${styles.whiteCopy};
    text-decoration: none;
    position: relative;
    user-select: none;
    display: block;
    text-shadow: 0 2px 4px rgba(0,0,0,0.90);

    &:after {
      content: "";
      position: absolute;
      bottom: -7px;
      left: 50%;
      transform: translateX(-50%) translateZ(0);
      height: 1px;
      width: 0%;
      background-color: ${styles.white};
      transition: width .2s;
      box-shadow: 0 2px 4px 0 rgba(0,0,0,0.50);
    }

    &.currentPage:after {
      width: 120%;
    }
  }

  @media (max-width: 1100px) {
    &.home {
      background-color: inherit;
      .container {
        height: 100px;
      }
      .logo {
        width: 180px;
      }
    }
    .container {
      height: 80px;
    }
    .logo {
      width: 160px;
    }
    .link-container {
      margin-right: 0px;
      max-width: 465px;
    }
    a {
      font-size: 16px;
    }
  }

  @media (max-width: 900px) {
    .container {
      height: 60px;
    }
    .burger-container{
      display: block;
    }
    .logo {
      width: 130px;
      margin: 0 35px 0 0;
    }
    .link-container {
      max-width: none;
      margin: 0;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      position: fixed;
      background-color: rgba(33,60,73,0.95);
      flex-direction: column;
      pointer-events: none;
      opacity: 0;
    }
  }

  @media ${mediaQueries.largePhone} {
    .burger-container {
      margin-right: 10px;
      width: 30px;
    }
  }
`

export default withRouter(Header)
