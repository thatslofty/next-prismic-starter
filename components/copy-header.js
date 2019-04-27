import React from 'react'
import styled from 'styled-components'
import { styles, mediaQueries } from 'styles/variables'
import { H1 } from 'styles/common'

const CopyHeader = ({
  text, right, light, extraClass
}) => (
  <CopyHeaderStyles
    className={[
      right ? 'right' : 'left',
      light ? 'light' : 'dark',
      extraClass || ''
    ].join(' ')}
  >
    <H1>{text}</H1>
  </CopyHeaderStyles>
)

const CopyHeaderStyles = styled(({ children, className, ...props }) => <div className={className} {...props}>{children}</div>)`
  margin-bottom: 40px;
  h1 {
    font-family: 'Montserrat';
    font-weight: ${styles.fonts.medium};
    ${'' /* font-size: 36px; */}
    position: relative;
    padding-bottom: 25px;
    margin-top: 0px;

    &:after {
      position: absolute;
      content: "";
      height: 3px;
      width: 70px;
      bottom: 0px;
    }
  }
  &.dark {
    color: #000000;
    h1:after {
      background-color: #000000;
    }
  }
  &.light {
    color: ${styles.whiteCopy};
    h1:after {
      background-color: ${styles.whiteCopy};
    }
  }
  &.left {
    h1:after {
      left: 3px;
    }
  }
  &.right {
    text-align: right;
    h1:after {
      right: 3px;
    }
  }

  @media ${mediaQueries.largeDesktop} {
    margin-bottom: 30px;
  }
`

export default CopyHeader
