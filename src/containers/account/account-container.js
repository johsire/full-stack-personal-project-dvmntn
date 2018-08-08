import React, { Component } from 'react';
import axios from 'axios';

import Account from '../../components/account';

class AccountContainer extends Component {
  componentDidMount() {
    axios.get('/api/user-data').then(res => {
      this.props.updateUserData(res.data);
    })
  }
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
