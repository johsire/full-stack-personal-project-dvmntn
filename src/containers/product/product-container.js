import React, { Component } from 'react';
import {connect} from 'react-redux';


/**
 * Component imports
 */
import Product from '../../components/product';

/**
 * Action imports
 */
import { getProducts } from '../../actions/product-actions';

class ProductContainer extends Component {

  componentDidMount() {
    const { loadProducts } = this.props;
    loadProducts();
  };

 render() {
  const { productsLoaded, products } = this.props;

  if (!productsLoaded) {
    return <p>Fetching data...</p>;
  } else {
    return (
     <Product products={products} />
    );
  }
  // const products = [
  //   {
  //     title: 'Daily',
  //     description: 'Delivered fresh everyday',
  //     price: '$39.99'
  //   },
  //   {
  //     title: '3x per wk',
  //     description: 'Delivered 3 times each week',
  //     price: '$19.99'
  //   },
  //   {
  //     title: 'Once per wk',
  //     description: 'Delivered once each week',
  //     price: '$9.99'
  //   }
  // ];
  // console.log(products)
  // return ( 
  }
 };
const mapStateToProps = state => ({
  productsLoaded: state.ProductsReducer.products.loaded,
  products: state.ProductsReducer.products.results.data,
});

const mapDispatchToProps = dispatch => ({
  loadProducts: () => dispatch(getProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);
