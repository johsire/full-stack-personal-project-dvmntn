import React, { Fragment } from 'react';

/**
 * Component Imports
 */
import Header from '../header';

/**
 * Style imports
 */

import { Wrapper, ImageWrapper } from './styles';

const Account = ({ user, orders, products, mapOdersToProducts, updateUserOrder, deleteUserOrder, product_id, handleChange, updateComment }) => (
  <Wrapper>
    <Header />
      Hi, {user.user_name}
      <ImageWrapper src={user.picture} alt={user.user_name} />
      {console.log(orders, 'THIS IS OUR ORDERSSSSSS')}
      {orders.map(item => {
        // Let's get the product that matches the one
        const product = mapOdersToProducts(product_id, products);
        return(
          <Fragment key={item.id}>
            {/* {console.log(mapOdersToProducts, 'mapOdersToProducts <<<========')} */}
            <p>Order # {item.id}:</p>
            <p>Avacado Toast delivered {product.title} fresh for ${product.price}</p>
            <p>Transaction #: {item.stripe_id}</p>
            {console.log(products, 'XXXXXXXXXXXXXXXXXXXXXX')}
            <p>Status: {item.status}</p>
            <br/>
            <p>Order Instructions (Optional):</p>
            <button type="button" onClick={() => updateUserOrder(product_id, item.id)}>Update Instructions</button>
            <input id="comment" type="text" name="comment" label="Order Instructions(Optional)" onChange={(e) => handleChange(e)} placeholder="Optional Order Instructions"/> 
            <br></br>
            <br></br>
            <button type="button" onClick={() => deleteUserOrder(item.id)}>Delete Order</button>    

            <hr />
          </Fragment>
        )
      })}
  </Wrapper>);

export default Account;
