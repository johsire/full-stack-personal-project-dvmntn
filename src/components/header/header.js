import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Style imports
 */
import { HeaderWrapper, Logo, Navigation, Menu } from './styles';

let isLoggedIn = false;
const authenticateAuth0 = () => {
  // logic goes here
  console.log(isLoggedIn, 'LOGGED IN STATUS');
  console.log('tset');
  isLoggedIn = true;
  console.log(isLoggedIn, 'LOGGED IN STATUS');
}


const Header = () => (
  <HeaderWrapper>
   <Link to="/">
    <Logo>#AvaocadoToastLife</Logo>
   </Link>
  <Navigation>
    <Link to="/products">
      <Menu>Products</Menu>
    </Link>
    <Link to="/order">
      <Menu>Order</Menu>
    </Link>
    {isLoggedIn && (
      <Link to="/account">
        <Menu>Account</Menu>
    </Link>
    )}
    {!isLoggedIn && <Menu onClick={() => authenticateAuth0()}>Login</Menu>}
   </Navigation>
 </HeaderWrapper>
);

export default Header;


