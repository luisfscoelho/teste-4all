import React from 'react';
import { FaMinus, FaPlus, FaShoppingBag } from 'react-icons/fa';

import Nav from '../../components/Nav';
import { Contaier, Cart } from './styles';

function Checkout() {
  const cart = [
    {
      id: 1,
      idCategory: 0,
      name: 'Del Valle Uva',
      description: 'Del Valle sabor uva 290ml',
      price: 2.9,
      image: 'path',
      quantity: 1,
    },
    {
      id: 2,
      idCategory: 0,
      name: 'Del Valle Maracuja',
      description: 'Del Valle sabor Maracuja 290ml',
      price: 2.9,
      image: 'path',
      quantity: 1,
    },
  ];

  return (
    <>
      <Nav />
      <Contaier>
        <h1>Finalizar pedido</h1>

        <div>
          <FaShoppingBag size={36} />
          <div>
            <p>
              <b>Le Café</b>
            </p>
            <p>10:00 min restatntes</p>
          </div>
        </div>

        <p>Revise os seus itens</p>

        <Cart>
          {cart.map(c => (
            <div key={c.id}>
              <div>
                <button type="button">
                  <FaMinus size={12} />
                </button>
                <p>1</p>
                <button type="button">
                  <FaPlus size={12} />
                </button>
              </div>
              <span>{c.name}</span>
              <span>{c.price}</span>
            </div>
          ))}

          <div>
            <span>Total</span>
            <span>5.00</span>
          </div>
        </Cart>

        <button type="button">Finalizar Compra</button>
      </Contaier>
    </>
  );
}

export default Checkout;
