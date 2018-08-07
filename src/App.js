import React from 'react';
import routes from './routes';
import Nav from './components/nav/Nav';
import LandingContainer from './containers/landing';
import ProductContainer from './containers/product'

const App = () => (
  <div>
   <LandingContainer />
   <ProductContainer />


   <Nav />
   { routes }
  </div>
);

export default App;
 