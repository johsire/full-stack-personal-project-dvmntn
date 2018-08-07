import React from 'react';
// import { Link } from 'react-router-dom';

/**
 * Style imports
 */
import { HeaderWrapper, Logo, Navigation, Menu } from './styles';

const Header = () => (
  <HeaderWrapper>
  <Navigation>
   <Logo>#AvaocadoToastLife</Logo>
    {/* <Link to="/" className='links'> <Menu>Home</Menu> </Link> */}
     {/* home is landing */}
    {/* <Link to="/pricing" className='links'><Menu>Pricing</Menu></Link> */}
     {/* pricing is product */}
    {/* <Link to="/subscription" className='links'><Menu>Subscribe</Menu></Link> */}
     {/* subscribe is order */}
    {/* <Link to="/login" className='links'><Menu>Login</Menu></Link> */}
     {/* login is account */}
   </Navigation>
 </HeaderWrapper>
);

export default Header;


