import React, { Component } from 'react';
import Product from '../../components/product';

class ProductContainer extends Component {
 render() {
  const products = [
    {
      title: 'Daily',
      description: 'Delivered fresh everyday',
      price: '$39.99'
    },
    {
      title: '3x per wk',
      description: 'Delivered 3 times each week',
      price: '$19.99'
    },
    {
      title: 'Once per wk',
      description: 'Delivered once each week',
      price: '$9.99'
    }
  ];
  console.log(products)
   return (
    <Product products={products} />
   );
 }
}

export default ProductContainer;

