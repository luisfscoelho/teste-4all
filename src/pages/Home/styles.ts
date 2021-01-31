import styled from 'styled-components';

export const Contaier = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: auto;
  margin-top: 2rem;

  max-width: 920px;

  select {
    margin: 1rem 0;
    width: 60%;
    min-width: 280px;
    max-width: 480px;
    padding: 0.5em;

    border-radius: 8px;
    background-color: white;

    font-size: 16px;
    font-weight: 600;
  }
`;

export const Products = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  div {
    display: flex;
    flex-direction: column;

    width: 240px;
    padding: 0.5em;
    margin: 1em;

    background-color: white;

    border-radius: 8px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    img {
      height: 240px;
      width: 240px;
      border-radius: 8px;
    }

    p {
      margin: 0.5em;
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
  }
`;
