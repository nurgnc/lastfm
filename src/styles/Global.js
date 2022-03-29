import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
  }
  body {
    font-size: 1.15em;
    margin: 0;
    background-color: ${({ theme }) => theme.bg};
  }
  img {
    max-width: 100%;
  }
  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.textColor};
  }
  a {
    text-decoration: none;
      &:hover {
        text-decoration: underline;
        color: ${({ theme }) => theme.hover};
          & h3 {
          color: ${({ theme }) => theme.hover};
          }
      }
  }
  ul {
    list-style: none;
    padding-left: 0;
  }
}
`;

export default GlobalStyles;
