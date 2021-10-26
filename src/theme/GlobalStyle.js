import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*, ::before,::after{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
    font-size: 62.5%;
    
   
  }
  
  body {
    margin: 0;
    padding: 0;
    font-size: 1.6rem;
    height: 100vh;
    width: 100%;
    overflow-X: hidden;
    font-family: 'Roboto', sans-serif;
    background: linear-gradient(297.9deg, #323237 15.11%, #000000 90.89%);
    
  }
`;

export default GlobalStyle;
