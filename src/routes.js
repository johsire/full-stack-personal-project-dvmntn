import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './containers/landing';
import Product from './containers/product';
import Order from './containers/order';
import Account from './containers/account';


export default (
  <Switch>
    <Route exact path='/' component={ Landing } />
    <Route path='/products' component={ Product } />
    <Route path='/order' component={ Order } />
    <Route path='/account' component={ Account } />
  </Switch>
);
