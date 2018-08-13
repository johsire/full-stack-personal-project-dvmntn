import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

/**
 * Component Imports
 */
import Header from '../header';

/**
 * Style imports
 */

import { Wrapper } from './styles';

const Order = ({ onToken, stripePK, amount }) => (
  <StripeCheckout
    token={onToken(amount)}
    stripeKey={stripePK}
    amount={amount}
  />
 );


export default Order;

{/* <form onSubmit={e => this.handleSubmit(e)}>  
<div className="inputBox">
<br/>
<input name="userId" type='text' placeholder='User Id' 
value={this.state.userId} onChange={e => this.handleChange(e)} 
/>
<br/>
<br/>
<input name="street" type='text' placeholder='Street' value={this.state.street} onChange={e => this.handleChange(e)}/>
<br/>
<br/>
<input name="city" type='text' placeholder='City' value={this.state.city} onChange={e => this.handleChange(e)} />
<input name="state" type='text' placeholder='State' value={this.state.state} onChange={e => this.handleChange(e)} />
<input name="zip" type='number' placeholder='Zip' value={this.state.zip} onChange={e => this.handleChange(e)} />
</div>
</form>   */}