import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

import { Contaier } from './styles';

function Nav() {
  return (
    <Contaier>
      <div />
      <h1>Logo</h1>
      <FaShoppingCart size={20} />
    </Contaier>
  );
}

export default React.memo(Nav);
