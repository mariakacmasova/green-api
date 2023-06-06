import { createGlobalStyle } from 'styled-components';
import variables from './variables';

const GlobalStyles = createGlobalStyle`
  ${variables};

  html {
    box-sizing: border-box;
    width: 100%;
    scroll-behavior: smooth;
    
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    padding: 0;
  }

  button {
    cursor: pointer;

    &:disabled {
      cursor: not-allowed;
    }
    
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
  }
  
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
  }

  input[type=number] {
    -moz-appearance:textfield; /* Firefox */
  }
  // Toast error
  .toast-error {
    border-radius: 5px;
    background-color: #383838; 
  }
  // Toast success
  .toast-success {
    border-radius: 5px;
    background-color: #383838; 
    color: hsla(0, 0%, 100%, 0.8);
  }
`;

export default GlobalStyles;
