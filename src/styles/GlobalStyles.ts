import "@fontscource/source-sans";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
  box-sizing: border-box;
}

html,
body{
  font-family: source-sans, sans-serif;
}

button{
  cursor: pointer;
}

p,h1,h2,h3{
  margin: 0;
}

`;
export default GlobalStyle;
