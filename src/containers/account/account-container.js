import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';


/**
 * Component imports
 */
import Account from '../../components/account';
import OrderInstructions from '../../components/order-instructions'

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
  mapOdersToProducts = (product_id, products) => {
    let product = {};
    products.find((item) => {
      if (item.product_id === product_id) {
        product = item;
        console.log(item, 'from the account container')
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

  handleChange = (e) => {
    const { value } = e.target
    this.setState({
      comment: value,
    })
  }

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
        handleChange={this.handleChange}
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
