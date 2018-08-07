import React from 'react';
import { Link } from 'react-router-dom';
// import styles from '../header/styles'
import { Menu } from '../header/styles';



function Nav() {
 return (
  <div>
   <nav className='nav'>
     <Link to="/" className='links'> <Menu>Home</Menu> </Link>
     <Link to="/pricing" className='links'> <Menu>Pricing</Menu> </Link> 
     <Link to="/subscription" className='links'> <Menu>Subscription</Menu> </Link> 
     <Link to="/login" className='links'> <Menu>Login</Menu> </Link>
   </nav>
  </div>
 );
};

export default Nav;
