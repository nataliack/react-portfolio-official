import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }
  body {
    font-family: "Sk-Modernist" ${props => props.theme.fonts.main};
    font-size: 1.6rem;

    color: #212d45;s ${props => props.theme.colors.primary1};
    cursor: default;
    background:  #D4B499;
  }

  h1,h2,h3,h4,h5,h6,button {
    font-family: "Sk-Modernist";
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }

`;

export default GlobalStyles;