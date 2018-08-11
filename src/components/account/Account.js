import React, { Fragment } from 'react';

/**
 * Component Imports
 */
import Header from '../header';

/**
 * Style imports
 */

import { Wrapper } from './styles';

const Account = ({ title, orders, user }) => (
  <Wrapper>
  {console.log(user,'this is our user')}
    <Header />
      {title}
      {orders.map(item => {
        return (
          <Fragment key={item.id}>
            <p>Order ID: {item.id}</p>
            <p>Product ID: {item.product_id}</p>
            <hr />
          </Fragment>
        )
      })}
  </Wrapper>
      
    
   );

export default Account;