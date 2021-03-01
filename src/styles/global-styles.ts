import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    font-size: 16px;
    font-family: 'Inter', sans-serif;
    background-color: #f2f2f2;
  }

  img {
    display: block;
    max-width: 100%;
    overflow: hidden;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0px;
  }

  ul {
    padding: 0px;
    margin: 0px;
  }

`;
