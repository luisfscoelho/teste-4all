import styled from 'styled-components';

export const Contaier = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;

  padding: 1em;
  background-color: #434c5e;
  color: #eceff4;

  a {
    display: flex;
    flex-direction: row;

    color: #eceff4;
    text-decoration: none;

    div {
      position: relative;
      right: 6px;
      top: -6px;

      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 12px;
      width: 16px;
      height: 16px;
      border-radius: 50%;

      background-color: #bf616a;
    }
  }
`;
