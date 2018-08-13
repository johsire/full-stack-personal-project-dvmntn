import React, { Fragment } from 'react';

/**
 * Component Imports
 */
import Header from '../header';

/**
 * Style imports
 */

import { Wrapper, ImageWrapper } from './styles';

const Account = ({ user, orders, products, mapOdersToProducts }) => (
  <Wrapper>
    <Header />
      Hi, {user.user_name}
      <ImageWrapper src={user.picture} alt={user.user_name} />
      {orders.map(item => {
        // Let's get the product that matches the one
        const product = mapOdersToProducts(item.product_id, products);
        return(
          <Fragment key={item.id}>
            <p>Order # {item.id}: Avacado Toast delivered {product.title} for {product.price}</p>
            <p>Transaction #: {item.stripe_id}</p>
            <p>Status: {item.status}</p>
            <hr />
          </Fragment>
        )
      })}
  </Wrapper>);

export default Account;
