import React from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';
import styled from 'styled-components';
import { variables } from 'styles';

const Footer = ({ router }) => (
  <FooterStyles>
    <Link href='/'>
      <a className={router.pathname === '/' ? 'currentPage' : ''}>Home</a>
    </Link>
    <Link href='/about'>
      <a className={router.pathname === '/about' ? 'currentPage' : ''}>About</a>
    </Link>
  </FooterStyles>
);

const FooterStyles = styled.div`
  background-color: ${variables.backgroundLight};
`;

export default withRouter(Footer);
