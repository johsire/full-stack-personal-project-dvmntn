import React, { Component } from 'react';
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
    loadUser(1);
    // loadUserOrders(1);
  }

 render() {
   const { orders, user, userLoaded } = this.props;

   if (!userLoaded) {
     return <p>Fetching data...</p>;
   } else {
     return (
      <Account orders={orders} user={user} />
     );
   }
 }
};

const mapStateToProps = state => ({
  userLoaded: state.AccountReducer.user.loaded,
  ordersLoaded: state.AccountReducer.orders.loaded,
  user: state.AccountReducer.user.results,
  orders: state.AccountReducer.orders.results,
});

const mapDispatchToProps = dispatch => ({
  loadUser: id => dispatch(getUser(id)),
  loadUserOrders: id => dispatch(getUserOrders(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountContainer);
