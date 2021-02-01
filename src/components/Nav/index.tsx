import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaChevronLeft } from 'react-icons/fa';

import { usecart } from '../../hooks/cart';
import { Contaier } from './styles';

function Nav({ onCheckout = false }: { onCheckout: boolean }) {
  const { cart } = usecart();

  return (
    <Contaier>
      {onCheckout ? (
        <Link to="/">
          <FaChevronLeft size={20} />
        </Link>
      ) : (
        <div />
      )}
      <h1>Logo</h1>
      {onCheckout ? (
        <div />
      ) : (
        <Link to="checkout">
          <FaShoppingCart size={20} />
          {cart.length > 0 && (
            <div>
              <span>{cart.length}</span>
            </div>
          )}
        </Link>
      )}
    </Contaier>
  );
}

export default React.memo(Nav);
