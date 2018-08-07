import React from 'react';

/**
 * Component Imports
 */
import Header from '../header';

/**
 * Style imports
 */
import { Wrapper, Title,MiniTitle, HeroSection } from './styles';

const Landing = () => (
     <Wrapper>
      <Header />
      <HeroSection>
        <Title>Subscribe with us Friends, Family, Officemates</Title>
        <MiniTitle>Order Today</MiniTitle>
      </HeroSection>
     </Wrapper>
   );

export default Landing;

