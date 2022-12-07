import "@fontsource/source-sans-3";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*{
  box-sizing: border-box;
}

html,
body{
  font-family: "Source Sans 3", sans-serif;
  margin: 0 auto;
}

button{
  cursor: pointer;
}

p,h1,h2,h3{
  margin: 0;
}

ul {
  margin: 0;
  padding: 0;
}

a{
  text-decoration: none;
}

`;
export default GlobalStyles;
