import React from 'react'
import styled from 'styled-components'
import { styles, mediaQueries } from 'styles/variables'
import { MainContainer } from 'styles/common'
import { Image } from 'context/images'
import ReactMarkdown from 'react-markdown'
import CopyHeader from './copy-header'

export default (({ contact }) => (
  <LocationInfoStyles>
    <MainContainer>
      <div className="info">
        <CopyHeader text={contact.title[0].text} dark extraClass="copy-header" />
        {contact.hours.length > 0 && (
          <div className="location-info hours">
            <Image className="location-info-icon" title="Contact - Time Icon" />
            <div className="location-info-spacer" />
            <ReactMarkdown className="paragraph" source={contact.hours[0].text} />
          </div>
        )}
        {contact.email.length > 0 && (
          <div className="location-info email" onClick={() => window.open(`mailto:${contact.email[0].text}`, '_self')}>
            <Image className="location-info-icon" title="Contact - Email Icon" />
            <div className="location-info-spacer" />
            <ReactMarkdown className="paragraph" source={contact.email[0].text} />
          </div>
        )}
        {contact.phone.length > 0 && (
          <div className="location-info phone" onClick={() => window.open(`tel:${contact.phone[0].text}`, '_self')}>
            <Image className="location-info-icon" title="Contact - Phone Icon" />
            <div className="location-info-spacer" />
            <ReactMarkdown className="paragraph" source={contact.phone[0].text} />
          </div>
        )}
        {contact.fax.length > 0 && (
          <div className="location-info fax">
            <Image className="location-info-icon" title="Contact - Fax Icon" />
            <div className="location-info-spacer" />
            <ReactMarkdown className="paragraph" source={contact.fax[0].text} />
          </div>
        )}
        {contact.address.length > 0 && (
          <div className="location-info address" onClick={() => window.open(contact.map_link.url, '_blank')}>
            <Image className="location-info-icon" title="Contact - Address Icon" />
            <div className="location-info-spacer" />
            <Flex>
              {contact.address.map(cp => (
                <ReactMarkdown key={cp.text} className="paragraph" source={cp.text} />
              ))}
            </Flex>
          </div>
        )}
      </div>
      <div className="map" onClick={() => window.open(contact.map_link.url, '_blank')}>
        <img src={contact.map_image.url} alt="map" />
      </div>
    </MainContainer>
  </LocationInfoStyles>
))

const Flex = styled.div`
  display: flex;
  flex-direction: column;
`

const LocationInfoStyles = styled.div.attrs({ className: 'location-info-section' })`
  .main-container{ 
    display: flex;
    max-width: 1100px;  
  }

  &:nth-child(even){
    /* background-color: ${styles.backgroundLight}; */
    background-color: ${styles.white};
    .main-container{
      ${'' /* padding-left: ${styles.spacing.extraLarge * 1.5}px; */}
      flex-direction: row;
      justify-content: flex-start;
      text-align: left;

      .info .copy-header h1::after{ left: 0; right: auto; }
    }
  }
  &:nth-child(odd){
    background-color: ${styles.white};
    .main-container{
      ${'' /* padding-right: ${styles.spacing.extraLarge * 1.5}px; */}
      flex-direction: row-reverse;
      text-align: right;

      .location-info{ flex-direction: row-reverse; }
      .info .copy-header.left h1::after{ right: 3px; left: auto; }
    }
  }

  .location-info{
    display: flex;
    align-items: center;
    margin: ${styles.spacing.medium + 15}px 0px;
    &-spacer{
      width: ${styles.spacing.large}px;
    }
    &-icon{
      height: 50px;
      width: 50px;
    }
    .paragraph p {
      font-family: 'Montserrat';
      ${'' /* font-weight: ${styles.fonts.semiBold}; */}
      ${'' /* font-size: 22px; */}
      color: #000000;
    }
    &.address, &.email, &.phone {
      cursor: pointer;
    }
  }
  .info, .map{
    flex: 1;
    ${'' /* padding: ${styles.spacing.extraLarge}px 0px; */}
  }
  .info{ margin-top: 20px; }
  .map {
    padding-top: 115px;
    cursor: pointer;
  }

  @media ${mediaQueries.largeDesktop} {
    .main-container {
      max-width: 850px;
    }
    .location-info {
      margin: 15px 0;
    }
    .location-info-icon {
      height: 40px;
      width: 40px;
    }
    &:nth-child(even) {
      .map img {
        margin-left: 30px;
      }
    }
    &:nth-child(odd) {
      .map img {
        margin-right: 30px;
      }
    }
    .map img {
      max-width: 300px;
    }
    .map {
      max-width: 350px;
    }
  }

  @media ${mediaQueries.largePhone} {
    &:nth-child(n){
      .main-container{
        flex-direction: column-reverse;
        justify-content: flex-start;
        text-align: left;
        .info .copy-header h1::after{ left: 0 !important; right: auto !important; }
        .location-info{ flex-direction: row; }
        .info {
          max-width: 400px;
          margin: 0 auto;
        }
        .map {
          padding-top: 0px;
          margin: 0 auto;
          text-align: center;
          img {
            margin: 0 0 30px 0;
          }
        }
      }
    }
  }

  @media ${mediaQueries.phone} {
    &:nth-child(n){
      .map img {
        width: 100%;
      }
      .location-info{
        &-icon {
          flex-shrink: 0;
        }
        &-spacer{
          width: 30px;
          flex-shrink: 0;
        }
      }
    }
  }
`
