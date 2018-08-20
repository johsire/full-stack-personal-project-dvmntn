import React, { Fragment } from 'react';

/**
 * Component Imports
 */
import Header from '../header';

/**
 * Style imports
 */

import { Wrapper, ImageWrapper } from './styles';

const Account = ({ user, orders, products, mapOdersToProducts, updateUserOrder, deleteUserOrder, product_id, id, getProducts  }) => (
  <Wrapper>
    <Header />
      Hi, {user.user_name}
      <ImageWrapper src={user.picture} alt={user.user_name} />
      {orders.map(item => {
        /* console.log(item, 'this is our item <===================XXXXXXXXXXXXXXXXXXXXXXXXXXX'); */
        // Let's get the product that matches the one
        const product = mapOdersToProducts(product_id, products);
        return(
          <Fragment key={item.id}>
            <p>Order # {item.id}:</p>
            <p>Avacado Toast delivered {product.title} for ${product.price}</p>
            <p>Transaction #: {item.stripe_id}</p>
            <p>Status: {item.status}</p>
            <br/>
            <button type="button" onClick={() => updateUserOrder(product_id, item.id)}>Update Order</button>  |      
            <button type="button" onClick={() => deleteUserOrder(item.id)}>Delete Order</button>    

            <hr />
          </Fragment>
        )
      })}
  </Wrapper>);

export default Account;
