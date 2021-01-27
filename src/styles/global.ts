import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: 0;
  }

  button {
    cursor: pointer;
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
  }
`;
