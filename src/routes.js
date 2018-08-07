import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './components/landing/Landing';
import Product from './components/product/Product';
import Order from './components/order/Order';
import Account from './components/account/Account';


export default (
  <Switch>
    <Route component={ Landing } exact path="/" />
    <Route component={ Product } path='/pricing' />
    <Route component={ Order } path='/subscription' />
    <Route component={ Account } path='/login' />
  </Switch>
);
