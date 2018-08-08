import React from 'react';

/**
 * Component Imports
 */
import Header from '../header';

/**
 * Style imports
 */

import { Wrapper, PriceBanner, LeftPriceBanner, PriceBannerText, MidPriceBanner, RightPriceBanner } from './styles';

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
    <PriceBannerText>
      <h2>Three times a Week</h2>
    </PriceBannerText>
    </MidPriceBanner>
    <RightPriceBanner>
    <PriceBannerText>
      <h2>Once a Week</h2>
    </PriceBannerText>
    </RightPriceBanner>

    </PriceBanner>
  </Wrapper>
   );

export default Product;