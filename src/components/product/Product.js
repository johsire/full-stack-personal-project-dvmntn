import React from 'react';

/**
 * Component Imports
 */
import Header from '../header';

/**
 * Style imports
 */

import { Wrapper, PriceBanner, LeftPriceBanner, PriceBannerText, MidPriceBanner } from './styles';

const Product = () => (
  <Wrapper>
    <Header />
    <PriceBanner>
    <LeftPriceBanner>
    <PriceBannerText>
      <h2>Every Day</h2>
    </PriceBannerText>
    </LeftPriceBanner>
    <MidPriceBanner>

    </MidPriceBanner>

    </PriceBanner>
  </Wrapper>
   );

export default Product;