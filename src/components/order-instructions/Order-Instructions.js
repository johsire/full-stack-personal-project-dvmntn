import React, { Fragment } from 'react';

const OrderInstructions = ({ updateOrderInstruction, handleChange  }) => (
 <Fragment>
  <input id="comment" type="text" name="comment" title="Order Instructions(Optional)" onChange={(e) => handleChange(e)} placeholder="Optional Order Instructions"/>
 </Fragment>
)

export default OrderInstructions;
