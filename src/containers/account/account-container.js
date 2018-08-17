import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';


/**
 * Component imports
 */
import Account from '../../components/account';

/**
 * Action imports
 */
import { getUser, getUserOrders, deleteUserOrder, updateUserOrder } from '../../actions/account-actions';
import { getProducts } from '../../actions/product-actions';

class AccountContainer extends Component {
  constructor() {
    super();

    this.state = {
      order: [],
    }
    this.updateUserOrder = this.updateUserOrder.bind(this); 
    this.deleteUserOrder = this.deleteUserOrder.bind(this);
  }
  
  componentDidMount() {
    const { loadUser, loadUserOrders, loadProducts, updateUserOrder, deleteUserOrder } = this.props;
    loadUser(1);
    loadUserOrders(1);
    loadProducts();
    // updateUserOrder();
    // deleteUserOrder();
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
  };

  updateUserOrder = (product_id, id) => {
    axios.put(`/api/order/${id}`,{ product_id, id })
         .then(res => {
           this.setState({
             orders: res.data,
           })
      })
  };


  deleteUserOrder = (id) => {
    axios.delete(`/api/order/${id}`, {id: id}).then(res => {
      this.status(200);
    })
  };


 render() {
   const { orders, user, userLoaded, ordersLoaded, productsLoaded, products, updateUserOrderLoaded, deleteUserOrderLoaded, updateUserOrder, deleteUserOrder } = this.props;

   if (!userLoaded || !ordersLoaded || !productsLoaded || !updateUserOrderLoaded || !deleteUserOrderLoaded) {
     return <p>Fetching data...</p>;
   } else {
     return (
    <Fragment>
      <Account 
        orders={orders} 
        user={user} 
        products={products} 
        mapOdersToProducts={this.mapOdersToProducts} 
        updateUserOrder={this.updateUserOrder} 
        deleteUserOrder={this.deleteUserOrder}
      />
    </Fragment>
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

  updateUserOrderLoaded: state.AccountReducer.orders.loaded,
  updateUserOrder: state.AccountReducer.orders.results.data,
  
  deleteUserOrderLoaded: state.AccountReducer.orders.loaded,  
  deleteUserOrder: state.AccountReducer.orders.results.data,

});

const mapDispatchToProps = dispatch => ({
  loadUser: id => dispatch(getUser(id)),
  loadUserOrders: id => dispatch(getUserOrders(id)),
  loadProducts: () => dispatch(getProducts()),
  loadUpdateUserOrder: id => dispatch(updateUserOrder(id)),
  loadDeleteUserOrder: id => dispatch(deleteUserOrder(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountContainer);
