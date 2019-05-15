import { generateMedia } from 'styled-media-query';
import { css } from 'styled-components';

export const variables = {
  backgroundLight: '#ccc'
};

export const media = generateMedia({
  xs: '576px',
  sm: '768px',
  md: '992px',
  lg: '1200px'
});

export const textCss = css`
  p {
    min-height: 30px;
  }
  h5 {
    margin-bottom: 2px;
  }
`;
