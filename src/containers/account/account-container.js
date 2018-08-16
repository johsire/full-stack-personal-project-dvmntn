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
import { getUser, getUserOrders } from '../../actions/account-actions';
import { getProducts } from '../../actions/product-actions';

class AccountContainer extends Component {
  constructor() {
    super();

    this.state = {
      order: [],
    }
    this.UpdateOrder = this.UpdateOrder.bind(this); 
    this.deleteOrder = this.deleteOrder.bind(this);
  }
  
  componentDidMount() {
    const { loadUser, loadUserOrders, loadProducts, UpdateOrder, deleteOrder } = this.props;
    loadUser(1);
    loadUserOrders(1);
    loadProducts();
    // UpdateOrder();
    // deleteOrder();
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

  UpdateOrder = (product_id, id) => {
    axios.put(`/api/order/${id}`, { id, product_id }).then(res => {
     this.setState({
        orders: res.data
      })
    })
  };

  deleteOrder = (id) => {
    // this.componentDidMount();
    axios.delete(`/api/order/${item.id}`).then(() => {
    //   console.log(res.data);
    //  this.setState({
    //     orders: res.data
      // })
    })
  };


 render() {
   const { orders, user, userLoaded, ordersLoaded, productsLoaded, products, UpdateOrder, deleteOrder } = this.props;

   if (!userLoaded || !ordersLoaded || !productsLoaded) {
     return <p>Fetching data...</p>;
   } else {
     return (
    <Fragment>
      <Account 
        orders={orders} 
        user={user} 
        products={products} 
        mapOdersToProducts={this.mapOdersToProducts} 
        UpdateOrder={this.UpdateOrder} 
        deleteOrder={this.deleteOrder}
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
});

const mapDispatchToProps = dispatch => ({
  loadUser: id => dispatch(getUser(id)),
  loadUserOrders: id => dispatch(getUserOrders(id)),
  loadProducts: () => dispatch(getProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountContainer);
