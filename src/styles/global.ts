import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: 0;
  }

  html {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;

    background-color: #eceff4;
    color: #434c5e;
  }

  button {
    cursor: pointer;
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
  }
`;
