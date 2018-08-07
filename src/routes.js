import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './components/landing/Landing';
import Product from './components/product/Product';
import Order from './components/order/Order';
import Account from './components/account/Account';


export default (
  <Switch>
    <Route exact path='/' component={ Landing } />
    <Route path='/pricing' component={ Product } />
    <Route path='/subscription' component={ Order } />
    <Route path='/login' component={ Account } />
  </Switch>
);
