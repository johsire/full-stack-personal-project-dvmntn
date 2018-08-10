import React, { Component } from 'react';
import axios from 'axios';

import Account from '../../components/account';

class AccountContainer extends Component {
  state = {
    orders: [],
  };

  componentDidMount() {
    this.getUserOrders();
  }

  // logout() {
  //   axios.get('/api/logout').then(res => {
  //     this.props.history.push('/');
  //   });
  // };
  
  getUserOrders = () => {
    axios.get('/api/orders/user/1').then(res => {
      // this.props.updateUserData(res.data);
      const orders = res.data.orders;
      // console.log(res.data.orders, 'in get user orders function');
      this.setState({ orders });
      console.log(this.state, 'state');
    })
  };

  createOrder = (user_id, product_id) => {
    axios.post(`/api/order/${user_id, product_id}`, { user_id, product_id })
         .then(res => {
          const order = res.data.order;
          this.setState({ order });  
         }); 
  };

  updateOrder = (product_id, id) => {
    axios.put(`/api/order/${product_id}`, { product_id, id })
         .then(res => {
          const order = res.data.order;
          // console.log(res, 'from the get users function');
          this.setState({ order });
          // console.log(this.state, 'users state'); 
    })
  };

  deleteOrder = (id) => {
    axios.delete(`/api/order/${id}`, { id })
         .then(res => {
          const order = res.data.order;
          this.setState({ order }); 
      })
  };

 render() {
   const { orders } = this.state;
  //  const { user } = this.state;
   return (
    <Account title={"This is the Account page"} orders={orders} />
   );
 }
}

export default AccountContainer;
