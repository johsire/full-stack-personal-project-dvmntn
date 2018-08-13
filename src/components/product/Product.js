import React from 'react';

/**
 * Component Imports
 */
import Header from '../header';

/**
 * Style imports
 */

import { Wrapper, PriceContainer, ItemContainer, Title, Description, Price, ImageWrapper } from './styles';

const Product = ({ products, photos }) => {
  return (
  <Wrapper>
    <Header />
    <PriceContainer>
    {products.map((product) => {
        let index = Math.floor(Math.random() * 9)
        return (
          <ItemContainer key={index}>
            <Title>{product.title}</Title>
            <ImageWrapper src={photos[index].urls.small} />
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