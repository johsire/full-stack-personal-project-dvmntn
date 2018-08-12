import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

/**
 * Component imports
 */
import Account from '../../components/account';

/**
 * Action imports
 */
import { getUser, getUserOrders } from '../../actions/account-actions'

class AccountContainer extends Component {

  componentDidMount() {
    const { loadUser, loadUserOrders } = this.props;
    loadUserOrders(1);
    loadUser(1);
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
      console.log(this.state, 'this is our user orders state');

      // this.props.updateUserOrders(res.data);
    })
  };

  // createOrder = (user_id, product_id) => {
  //   axios.post(`/api/order/${ user_id, product_id }$`, { user_id, product_id })
  //        .then(res => {
  //         const order = res.data.order;
  //         this.setState({ order });  
  //        }); 
  // };

  updateOrder = (product_id, id) => {
    axios.put(`/api/order/${ product_id }`, { product_id, id })
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
   const { orders, user, userLoaded } = this.props;

   if (!userLoaded) {
     return <p>'Fetching data...'</p>;
   } else {
     return (
      <Account title={"This is the Account page"} orders={orders} user={user} />
     );
   }
 }
};

const mapStateToProps = state => ({
  user: state.AccountReducer.user.results,
  userLoaded: state.AccountReducer.user.loaded,
  ordersLoaded: state.AccountReducer.orders.loaded,
  orders: state.AccountReducer.orders.results,
});

const mapDispatchToProps = dispatch => ({
  loadUser: id => dispatch(getUser(id)),
  loadUserOrders: id => dispatch(getUserOrders(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountContainer);
