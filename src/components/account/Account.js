import React from 'react';

/**
 * Component Imports
 */
import Header from '../header';

/**
 * Style imports
 */

import { Wrapper } from './styles';

const Account = ({ title }) => (
  <Wrapper>
    <Header />
      {title}
  </Wrapper>
      
    
   );

export default Account;