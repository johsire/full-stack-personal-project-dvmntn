import React, { Component } from 'react';
import {connect} from 'react-redux';


/**
 * Component imports
 */
import Product from '../../components/product';

/**
 * Action imports
 */
import { getProducts, getUnsplashPhotos } from '../../actions/product-actions';

class ProductContainer extends Component {

  componentDidMount() {
    const { loadProducts, loadUnsplashPhotos } = this.props;
    loadProducts();
    loadUnsplashPhotos();
  };

 render() {
  const { productsLoaded, products, unsplashPhotosLoaded, unsplashPhotos } = this.props;

  if (!productsLoaded || !unsplashPhotosLoaded) {
    return <p>Fetching data...</p>;
  } else {
    return (
     <Product products={products} photos={unsplashPhotos} />
    );
   }
 }
};

const mapStateToProps = state => ({
  productsLoaded: state.ProductsReducer.products.loaded,
  products: state.ProductsReducer.products.results.data,
  unsplashPhotosLoaded: state.ProductsReducer.unsplashPhotos.loaded,
  unsplashPhotos: state.ProductsReducer.unsplashPhotos.results.results,
});

const mapDispatchToProps = dispatch => ({
  loadProducts: () => dispatch(getProducts()),
  loadUnsplashPhotos: () => dispatch(getUnsplashPhotos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);
