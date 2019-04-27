import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import { styles, mediaQueries } from 'styles/variables'
import { MainContainer } from 'styles/common'
import { Image } from 'context/images'
import CopyHeader from './copy-header'

const LeftButton = ({ className, onClick }) => (
  <div className={`${className} left-button`} onClick={onClick}>
    <Image title="Team Left" className="icon-image" alt="" />
  </div>
)

const RightButton = ({ className, onClick }) => (
  <div className={`${className} right-button`} onClick={onClick}>
    <Image title="Team Right" className="icon-image" alt="" />
  </div>
)

export default class AboutTeam extends React.Component {
  constructor(props) {
    super(props)
    const people = this.props.people.slice()
    people.sort((a, b) => a.data.sort - b.data.sort).slice(0).forEach(el => people.push(el))
    this.state = { people, activeSlide: 0 }
  }

  render() {
    const settings = {
      prevArrow: <LeftButton />,
      nextArrow: <RightButton />,
      dots: false,
      infinite: true,
      swipeToSlide: true,
      focusOnSelect: false,
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 3,
      speed: 300,
      beforeChange: (current, next) => this.setState({ activeSlide: next }),
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    }
    return (
      <AboutTeamStyles>
        <MainContainer className="container">
          <CopyHeader text="Our Team" right dark extraClass="header" />
          <div className="people-container">
            <Slider {...settings}>
              {this.state.people.map((person, index) => (
                <div key={person.data.name[0].text + index} style={{ outline: 'none' }}> {/* eslint-disable-line */}
                  {console.log(person)}
                  <div
                    className="person"
                    style={{
                      backgroundImage: `url(${person.data.image.url})`,
                      backgroundSize: '95%'
                    }}
                  >
                    <div className="hover-state">
                      <h2>{person.data.name[0].text}</h2>
                      <h5>{person.data.title[0].text}</h5>
                      {person.data.email[0] && (
                        <a href={`mailto:${person.data.email[0].text}`}>{person.data.email[0].text}</a>
                      )}
                      {person.data.phone_number[0] && (
                        <a href={`tel:${person.data.phone_number[0].text}`}>{person.data.phone_number[0].text}</a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </MainContainer>
      </AboutTeamStyles>
    )
  }
}

const AboutTeamStyles = styled.div.attrs({ className: 'about-team-styles' })`
  background-color: white;

  .container {
    ${'' /* height: 592px; */}
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow-x: hidden;
    ${'' /* padding: ${styles.spacing.extraLarge}px 0px; */}
    padding-left: 0;
    padding-right: 0;
  }

  .header {
    align-self: flex-end;
    margin-right: 95px;
    margin-bottom: 0px;
  }

  .left-button, .right-button {
    position: absolute;
    background: rgba(51,150,189,0.80);
    width: 5%;
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index: 10;

    img {
      user-select: none;
      pointer-events: none;
      height: 35%;
    }
  }

  .left-button {
    left: 0;
    top: 50%;
    transform: translateY(-50%);

    img.active {
      animation: arrowLeft .3s ease-in-out 1;
    }
  }

  .right-button {
    right: 0;
    top: 50%;
    transform: translateY(-50%);

    img.active {
      animation: arrowRight .3s ease-in-out 1;
    }
  }

  .people-container {
    display: block;
    width: 100%;
    margin-top: 40px;
    overflow-x: hidden;
    .slick-slide div {
      outline: none !important;
    }
  }

  .person {
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    user-select: none;
    width: 100%;
    height: 29vw;
    min-height: 200px;
    max-height: 450px;
    transition: all .3s ease-in-out;
    &:focus {
      outline: none;
    }
  }

  .hover-state {
    opacity: 0;
    transition: opacity .3s ease-in-out;
    background-color: rgba(51,150,189,0.80);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;

    h2 {
      margin: 0;
      font-family: 'Montserrat';
      color: #FFFFFF;
      letter-spacing: 2px;
      font-weight: ${styles.fonts.regular};
    }

    h5 {
      font-family: 'Montserrat';
      font-size: 16px;
      color: #FFFFFF;
      letter-spacing: 2px;
      margin: 5px 0;
      font-weight: ${styles.fonts.semiBold};
    }

    a {
      font-family: 'Montserrat';
      font-size: 14px;
      color: #FFFFFF;
      letter-spacing: 2px;
      margin: 5px 0;
      font-weight: ${styles.fonts.semiBold};
      text-decoration: underline;
      cursor: pointer;
    }

    &:hover {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    .left-button, .right-button {
      width: 40px;
      height: 60px;
    }
  }

  @media ${mediaQueries.tablet} {
    .header { margin-right: ${styles.spacing.tabletMargin}px; }
    .person {
      height: 60vw;
    }
  }

  @media ${mediaQueries.phoneLarge} {
    .header { margin-right: ${styles.spacing.phoneMargin}px; }
  }

  @keyframes arrowLeft {
    0% { transform: translateX(0%); }
    50% { transform: translateX(-30%); }
    100% { transform: translateX(0%); }
  }
  @keyframes arrowRight {
    0% { transform: translateX(0%); }
    50% { transform: translateX(30%); }
    100% { transform: translateX(0%); }
  }
`
