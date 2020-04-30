import { createGlobalStyle } from 'styled-components';

import font from '../assets/fonts/FrenchFriesILTD-Regular.woff';

const Typography = createGlobalStyle`
  @font-face {
    font-family: FrenchFries;
    src: url(${font});
  }
  html {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  h1,h2,h3,h4,h5,h6 {
    font-family: FrenchFries;
    font-weight: normal;
  }
  a {
    color: var(--black);
    text-decoration-color: var(--red);
  }
`;

export default Typography;