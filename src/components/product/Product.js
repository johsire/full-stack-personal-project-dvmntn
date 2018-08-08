import React from 'react';

/**
 * Component Imports
 */
import Header from '../header';

/**
 * Style imports
 */

import { Wrapper, PriceContainer, ItemContainer, Title, Description, Price } from './styles';

const Product = ({ products }) => {
  return (
  <Wrapper>
    <Header />
    <PriceContainer>
    {products.map((product) => {
        return (
          <ItemContainer>
            <Title>{product.title}</Title>
            <Description>{product.description}</Description>
            <Price>{product.price}</Price>
          </ItemContainer>
        )
      })
    }
    </PriceContainer>
  </Wrapper>
  )};

export default Product;