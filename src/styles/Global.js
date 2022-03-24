import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
  }
  body {
    font-size: 1.15em;
    margin: 0;
  }
  img {
    max-width: 100%;
  }
  ul {
    list-style: none;
    padding-left: 0;
  }
}
`;

export default GlobalStyles;
