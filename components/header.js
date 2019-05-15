import React from 'react';
import { withRouter } from 'next/router';
import styled from 'styled-components';
import { media } from 'styles';

class Header extends React.Component {
  render() {
    return <HeaderStyles>responsive header</HeaderStyles>;
  }
}

const HeaderStyles = styled.div`
  margin-bottom: 10px;
  font-size: 16px;
  ${media.lessThan('sm')`
    font-size: 10px;
  `}
`;

export default withRouter(Header);
