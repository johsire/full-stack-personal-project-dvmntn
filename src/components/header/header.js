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
     {/* home is landing */}
     <Menu>Pricing</Menu>
     {/* pricing is product */}
     <Menu>Subscribe</Menu>
     {/* subscribe is order */}
     <Menu>Login</Menu>
     {/* login is account */}
   </Navigation>
 </HeaderWrapper>
);

export default Header;