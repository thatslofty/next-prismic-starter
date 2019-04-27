import React from 'react'
import styled from 'styled-components'
import { styles, mediaQueries } from 'styles/variables'
import { MainContainer } from 'styles/common'
import { Copy } from 'context/copy'
import CopyHeader from './copy-header'

export default class AboutHistory extends React.Component {
  state = {
    active: 1
  }

  onClick = i => this.setState({ active: i })

  render() {
    return (
      <AboutHistoryStyles>
        <MainContainer className="container">
          <div className="copy-container">
            <CopyHeader text="History" right dark extraClass="header" />
            <Copy className="paragraph" title="Our History" />
          </div>
          <div className="timeline-container">
            <div className={`bar active-${this.state.active}`} />
            <div className="dates-container">
              { this.props.history.map((section, index) => (
                // eslint-disable-next-line
                <div className={`date date-${index} ${index === this.state.active ? 'active flex-2': 'flex-1'}`} key={section.year[0].text + index} onClick={() => this.onClick(index)}>
                  <p>{section.year[0].text}</p>
                </div>
              ))}
            </div>
            <div className={`right-copy-container active-${this.state.active}`}>
              <div className="header-container">
                <p className="header-date">{this.props.history[this.state.active].year[0].text}</p>
                <h2 className="header-title">{this.props.history[this.state.active].title[0].text}</h2>
              </div>
              <div className="paragraph-container">
                <p className="date-paragraph">{this.props.history[this.state.active].copy[0].text}</p>
              </div>
            </div>
          </div>
        </MainContainer>
      </AboutHistoryStyles>
    )
  }
}

const AboutHistoryStyles = styled.div.attrs({ className: 'about-history-styles' })`
  background-color: ${styles.backgroundLight};

  .container {
    ${'' /* height: 592px; */}
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    ${'' /* padding: ${styles.spacing.extraLarge}px; */}
  }
  .copy-container {
    width: 50%;
    text-align: right;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    margin-right: 30px;
  }
  .header {
    margin: 0
  }
  .paragraph {
    max-width: 560px;
    width: 100%;
    font-family: karla;
    color: #000000;
    margin-top: 10px;
    margin-bottom: 5px;
    p {
      margin-bottom: 20px;
    }
  }
  .timeline-container {
    width: 50%;
    position: relative;
    height: 386px;
    margin-left: 30px;
    display: flex;
  }
  .bar {
    height: 90%;
    width: 3px;
    background-color: #000000;
    position: absolute;
    left: 6px;
    top: 50%;
    transform: translateY(-52%);
    transition: all .2s;

    &.active-0 {
      top: 55%;
      height: 80%;
    }
    &.active-7 {
      height: 85%;
      top: 48%;
    }
  }
  .dates-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 85px;
    height: 390px;
    justify-content: space-around;
    align-items: stretch;
    padding-left: 42px;
  }
  .date {
    font-family: karla;
    font-size: 20px;
    color: #000000;
    line-height: 20px;
    position: relative;
    width: 36px;
    flex: 1;
    margin: 0;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: all .2s;
    width: 85px;

    p {
      margin: 0;
      transition: all 0s;
      user-select: none;
    }

    &:before {
      content: "";
      position: absolute;
      left: -45px;
      background-color: black;
      height: 20px;
      width: 20px;
      border-radius: 20px;
    }

    &.flex-2 {
      flex: 2;
    }
    &.flex-1 {
      flex: 1;
    }

    &.active {
      color: ${styles.mainLightBlue};
      &:before {
        background-color: ${styles.mainLightBlue};
      }
      p {
        color: rgba(0,0,0,0);
        background-color: ${styles.mainLightBlue};
        height: 4px;
        width: 120px;
        margin-left: -30px;
        transition: .1s background-color .3s;
        ${'' /* background: linear-gradient(to right, #3396bd 0%,#ffffff 100%); */}
      }
    }
  }
  .right-copy-container {
    display: flex;
    flex-direction: column;
    max-width: 434px;
    transition: all .2s;
    width: 100vw;
    &.active-0 {
      transform: translateY(40px);
    }
    &.active-1 {
      transform: translateY(70px);
    }
    &.active-2 {
      transform: translateY(90px);
    }
    &.active-3 {
      transform: translateY(120px);
    }
    &.active-4 {
      transform: translateY(150px);
    }
    &.active-5 {
      transform: translateY(180px);
    }
    &.active-6 {
      transform: translateY(210px);
    }
    &.active-7 {
      transform: translateY(240px);
    }
  }
  .header-container {
    background-color: ${styles.mainLightBlue};
    height: auto;
    min-height: 72px;
    padding: 10px 20px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
  }
  .header-date {
    font-family: 'Montserrat';
    font-weight: ${styles.fonts.medium};
    font-size: 18px;
    color: #F1FAEE;
    letter-spacing: 1px;
    margin: 0;
  }
  .header-title {
    font-family: 'Montserrat';
    font-weight: ${styles.fonts.semiBold};
    ${'' /* font-size: 24px; */}
    color: #F1FAEE;
    letter-spacing: 1px;
    margin: 0;
  }
  .paragraph-container {
    max-width: 434px;
    background-color: white;
  }
  .date-paragraph {
    font-family: 'Karla';
    font-size: 14px;
    color: #000000;
    line-height: 25px;
    padding: 20px;
    margin: 0;
  }

  @media ${mediaQueries.largeDesktop} {
    .paragraph {
      p {
        margin-bottom: 5px;
      }
    }
  }

  @media ${mediaQueries.desktop} {
    .paragraph {
      width: 100%;
    }
    .dates-container {
      width: 56px;
    }
    .header-container {
      padding-left: 10px;
    }
    .right-copy-container {
      &.active-7 {
        transform: translateY(220px);
      }
    }
  }

  @media ${mediaQueries.largePhone} {
    .container {
      display: block;
    }
    .copy-container {
      width: 100%;
    }
    .paragraph {
      max-width: unset;
      width: 100%;
    }
    .timeline-container {
      width: 70%;
      margin: 30px auto 0 auto;
    }
    .right-copy-container {
      max-width: unset;
      width: 100%;
      &.active-6 {
        transform: translateY(185px);
      }
      &.active-7 {
        transform: translateY(195px);
      }
    }
  }

  @media ${mediaQueries.phone} {
    .timeline-container {
      width: 90%;
    }
    .date-paragraph {
      line-height: 18px;
    }
  }

  @media ${mediaQueries.smallPhone} {
    .timeline-container {
      width: 100%;
    }
    .right-copy-container {
      &.active-3 {
        transform: translateY(100px);
      }
      &.active-4 {
        transform: translateY(120px);
      }
    }
  }
`
