import React, { Component } from 'react';
import {connect} from 'react-redux';

/**
 * Component imports
 */
import Account from '../../components/account';

/**
 * Action imports
 */
import { getUser, getUserOrders } from '../../actions/account-actions';
import { getProducts } from '../../actions/product-actions';

class AccountContainer extends Component {

  componentDidMount() {
    const { loadUser, loadUserOrders, loadProducts } = this.props;
    loadUser(1);
    loadUserOrders(1);
    loadProducts();
  };

  // This is to help us match orders with specific products
  mapOdersToProducts = (id, products) => {
    let product = {};
    products.find((item) => {
      if (item.id === id) {
        product = item;
      };
    })
    return product;
  }

 render() {
   const { orders, user, userLoaded, ordersLoaded, productsLoaded, products } = this.props;

   if (!userLoaded || !ordersLoaded || !productsLoaded) {
     return <p>Fetching data...</p>;
   } else {
     return (
      <Account orders={orders} user={user} products={products} mapOdersToProducts={this.mapOdersToProducts} />
     );
   }
 }
};

const mapStateToProps = state => ({
  userLoaded: state.AccountReducer.user.loaded,
  user: state.AccountReducer.user.results.data,
  
  ordersLoaded: state.AccountReducer.orders.loaded,
  orders: state.AccountReducer.orders.results.data,
  
  productsLoaded: state.ProductsReducer.products.loaded,
  products: state.ProductsReducer.products.results.data,
});

const mapDispatchToProps = dispatch => ({
  loadUser: id => dispatch(getUser(id)),
  loadUserOrders: id => dispatch(getUserOrders(id)),
  loadProducts: () => dispatch(getProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountContainer);
