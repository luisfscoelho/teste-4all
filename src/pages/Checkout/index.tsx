import React, { useCallback, useMemo, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FaMinus, FaPlus, FaShoppingBag, FaCheckCircle } from 'react-icons/fa';

import { usecart } from '../../hooks/cart';

import Nav from '../../components/Nav';
import { Contaier, Cart, Modal } from './styles';

function Checkout() {
  const { cart, increaseProduct, decreaseProsuct, clearCart } = usecart();
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);
  const total = useMemo(
    () =>
      cart
        .map(item => item.price * item.quantity)
        .reduce((acc, value) => acc + value, 0),
    [cart],
  );

  const checkout = useCallback(() => {
    setShowModal(true);
    clearCart();
  }, [clearCart]);

  return (
    <>
      <Nav onCheckout />

      {showModal && (
        <Modal>
          <div>
            <FaCheckCircle size={42} />
            <p>Pedido Realizado com sucesso!</p>
            <button type="button" onClick={() => history.push('/')}>
              Fechar
            </button>
          </div>
        </Modal>
      )}

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
                <button type="button" onClick={() => decreaseProsuct(c.id)}>
                  <FaMinus size={12} />
                </button>
                <p>{c.quantity}</p>
                <button type="button" onClick={() => increaseProduct(c.id)}>
                  <FaPlus size={12} />
                </button>
              </div>
              <span>{c.name}</span>
              <span>{c.price * c.quantity}</span>
            </div>
          ))}

          <div>
            <span>Total</span>
            <span>{total}</span>
          </div>
        </Cart>

        <button type="button" onClick={checkout}>
          Finalizar Compra
        </button>
      </Contaier>
    </>
  );
}

export default Checkout;
