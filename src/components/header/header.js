import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';

/**
 * Style imports
 */
import { HeaderWrapper, Logo, Navigation, Menu } from './styles';

let isLoggedIn = false;
const authenticateAuth0 = () => {
  let { REACT_APP_DOMAIN, REACT_APP_CLIENT_ID } = process.env;
  let url = `${window.location.origin}/auth/callback`

  window.location = `https://${REACT_APP_DOMAIN}/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${url}&response_type=code`

  // axios.get(stuff).then(res => {
  //   console.log(res, 'THIS IS RESPONSE');
  // })

  console.log(isLoggedIn, 'LOGGED IN STATUS');
  console.log('tset');
  isLoggedIn = true;
  console.log(isLoggedIn, 'LOGGED IN STATUS');
};

class Header extends Component {
  constructor() {
    super();

    this.state = {
      isLoggedIn: false
    }
  };
  render() {
    return (
      <HeaderWrapper>
      <Link to="/">
       <Logo>#AvocadoToastLife</Logo>
      </Link>
     <Navigation>
       <Link to="/products">
         <Menu>Products</Menu>
       </Link>
       {/* <Link to="/order">
         <Menu>Order</Menu>
       </Link> */}
       {/* {isLoggedIn && ( */}
         <Link to="/account">
           <Menu>Account</Menu>
       </Link>
       {/* )} */}
       {/* {!isLoggedIn && <Menu onClick={() => authenticateAuth0()}>Login</Menu>} */}
      </Navigation>
    </HeaderWrapper>
    );
  }
};
  
export default Header;


