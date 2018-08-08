import React from 'react';
import routes from './routes';
import Nav from './components/nav/Nav';
import LandingContainer from './containers/landing';
import ProductContainer from './containers/product'
import OrderContainer from './containers/order'
import AccountContainer from './containers/account'


const App = () => (
  <div>

   <Nav />
   { routes }

  <LandingContainer />
  <ProductContainer />
  <OrderContainer />
  <AccountContainer />
  
  </div>
);

export default App;
 