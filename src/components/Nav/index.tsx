import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

import { Contaier } from './styles';

function Nav() {
  return (
    <Contaier>
      <div />
      <h1>Logo</h1>
      <Link to="checkout">
        <FaShoppingCart size={20} />
      </Link>
    </Contaier>
  );
}

export default React.memo(Nav);
