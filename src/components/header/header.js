import React from 'react';

/**
 * Style imports
 */
import { HeaderWrapper, Logo, Navigation, Menu } from './styles';

const Header = () => (
  <HeaderWrapper>
   <Logo>#AvaocadoToastLife</Logo>
   <Navigation>
     <Menu>Home</Menu>
     <Menu>About</Menu>
     <Menu>Subscribe</Menu>
     <Menu>Login</Menu>
   </Navigation>
 </HeaderWrapper>
);

export default Header;