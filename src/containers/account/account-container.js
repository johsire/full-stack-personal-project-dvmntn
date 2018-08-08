import React, { Component } from 'react';
import Account from '../../components/account';

class AccountContainer extends Component {
  logout() {
    axios.get('/api/logout').then(res => {
      this.props.history.push('/');
    });
  };
  
 render() {
   return (
    <Account title={"This is the Account page"} />
   );
 }
}

export default AccountContainer;
