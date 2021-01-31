import styled from 'styled-components';

export const Contaier = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: auto;
  margin-top: 2rem;

  width: 60%;
  min-width: 280px;
  max-width: 480px;

  > div:first-of-type {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-self: flex-start;

    margin: 1em 0;

    div {
      margin: 0 1em;
    }
  }

  > p {
    align-self: flex-start;
  }

  > button {
    align-self: flex-end;
  }

  button {
    padding: 0.5em;
    border-radius: 8px;

    border: none;
    background-color: #ebcb8b;

    &:hover {
      transition: 0.5s;
      background-color: #e0ae4a;
    }
  }
`;

export const Cart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;

  margin: 1em 0;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    border: solid 1px;
    padding: 0.75em;

    div {
      display: flex;
      align-items: center;

      border: none;
      padding: 0;

      p {
        margin: 0 0.5em;
      }

      button {
        height: 32px;
        width: 32px;
        border-radius: 50%;
      }
    }
  }
`;
