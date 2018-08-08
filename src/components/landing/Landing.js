import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Component Imports
 */
import Header from '../header';

/**
 * Style imports
 */

import { Wrapper, Title, MiniTitle, HeroSection } from './styles';

const Landing = () => (
     <Wrapper>
      <Header />
      <HeroSection>
        <Title>Subscribe with us Friends, Family, Officemates</Title>
        <Link to="/order">
          <MiniTitle>Order Today</MiniTitle>
        </Link>
      </HeroSection>
     </Wrapper>
   );

export default Landing;

