import React from 'react';
import styled from 'styled-components';

export default ({ data: { title, image } }) => (
  <div>
    {title[0].text}
    <Image src={image.url} alt='' />
  </div>
);

const Image = styled.img`
  height: 100px;
  width: auto;
  display: block;
  margin-bottom: 20px;
`;
