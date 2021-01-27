import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Checkout from '../pages/Checkout';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/checkout" component={Checkout} />
    </Switch>
  );
}

export default Routes;
