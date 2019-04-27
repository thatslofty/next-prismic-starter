import React from 'react'
import styled from 'styled-components'

export const ImagesContext = React.createContext({})

const BackGroundImageStyles = styled.div`
  background-image: url('${ props => props.src }');
`

export const Image = ({ title, background, ...props }) => (
  <ImagesContext.Consumer>
    {(images) => {
      const image = images.filter(obj => obj.title[0].text === title)
      if (image.length > 0 && !background) {
        return <img src={image[0].image.url} {...props} /> // eslint-disable-line
      }
      if (image.length > 0 && background) {
        return <BackGroundImageStyles src={image[0].image.url} {...props} /> // eslint-disable-line
      }
      return <div />
    }}
  </ImagesContext.Consumer>
)
