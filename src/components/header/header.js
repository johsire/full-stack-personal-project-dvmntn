import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Style imports
 */
import { HeaderWrapper, Logo, Navigation, Menu } from './styles';

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
    <Link to="/account">
      <Menu>Account</Menu>
    </Link>
   </Navigation>
 </HeaderWrapper>
);

export default Header;


