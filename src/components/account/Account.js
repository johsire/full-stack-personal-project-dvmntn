import React, { Fragment } from 'react';

/**
 * Component Imports
 */
import Header from '../header';

/**
 * Style imports
 */

import { Wrapper, ImageWrapper } from './styles';

const Account = ({ orders, user }) => (
  <Wrapper>
  {console.log(orders,'this is our orders')}
  {console.log(user,'this is our user')}
    <Header />
      Hi, {user.user_name}
      <ImageWrapper src={user.picture} alt={user.user_name} />
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