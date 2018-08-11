import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

import { updateUserOrders } from '../../reducers/reducer';
import Account from '../../components/account';

class AccountContainer extends Component {
  state = {
    orders: [],
    user: {},
  };

  componentDidMount() {
    this.getUserOrders();
    this.getUser();
  }

  // logout() {
  //   axios.get('/api/logout').then(res => {
  //     this.props.history.push('/');
  //   });
  // };
  
  getUserOrders = () => {
    axios.get('/api/orders/user/1').then(res => {
      const orders = res.data.orders;
      // console.log(res.data.orders, 'in get user orders function');
      this.setState({ orders });
      console.log(this.state, 'state');

      this.props.updateUserOrders(res.data);
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

  getUser = () => {
    console.log('getUser <<-------')
    axios.get('/api/user/1').then(res => {
      // this.props.updateUserData(res.data);
      console.log(res, 'from user axios call')
      const user = res.data.user;
      // console.log(res.data.user, 'in get user function');
      this.setState({ user });
      // console.log(this.state, 'get user tate');
    })
  };

  updateUser = (user_name, id) => {
    axios.put(`/api/user/${user_name}`, { user_name, id })
         .then(res => {
          const user = res.data.user;
          // console.log(res, 'from the update user function');
          this.setState({ user });
          // console.log(this.state, 'updated user state'); 
    })
  };


 render() {
   const { orders, user } = this.state;
   return (
    <Account title={"This is the Account page"} orders={orders} user={user} />

   );
 }
};

function mapStateToProps(state) {
  return {
    order: state.order
  }
};

export default connect(mapStateToProps, {updateUserOrders})(AccountContainer);
