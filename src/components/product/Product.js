import React from 'react';

/**
 * Component Imports
 */
import Header from '../header';

/**
 * Style imports
 */

import { Wrapper, PriceBanner, ItemContainer, Title, Description, Price, GalleryBanner, ImageOne, ImageTwo, ImageThree } from './styles';

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
]

const Product = () => {
  return (
  <Wrapper>
    <Header />
    <PriceBanner>
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
    </PriceBanner>

    <GalleryBanner>
      <ImageOne>

      </ImageOne>
      <ImageTwo>

      </ImageTwo>
      <ImageThree>

      </ImageThree>
      {/* <ImageFour>

      </ImageFour> */}
    </GalleryBanner>
  </Wrapper>
  )};

export default Product;