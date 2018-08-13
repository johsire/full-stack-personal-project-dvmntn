import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { API_URL } from '../../constants';

/**
 * Component imports
 */
import Order from '../../components/order';

/**
 * Action imports
 */
import { getUser } from '../../actions/account-actions';
import { chargeOrder } from '../../actions/order-actions';

class OdrderContainer extends Component {
  constructor() {
    super();

    this.state = {
      userId: '',
      street: '',
      city: '',
      state: '',
      zip: 0,
    }
  };

  componentDidMount() {
    const { loadUser } = this.props;
    // TODO: Update user ID with actual ID.
    loadUser(1);
  };

  successPayment = data => {
    console.log(data, 'SUCCESSFULLY PAID');
    alert('Payment Successful');
  };
  
  errorPayment = error => {
    console.log(error.resonse, 'UNSUCCESSFUL PAID');
    alert('Payment Error');
  };
  
  onToken = amount => token => {
    console.log(token, 'IN ON TOKEN ABOUT TO CHARGE');
    // const { chargePayment } = this.props;
    const data = {
      description: 'Test payment from app!',
      source: token.id,
      currency: 'USD',
      amount: amount
    };

    axios.post('http://localhost:5050/api/order', data)
      .then(this.successPayment)
      .catch(this.errorPayment)
    }
    
  render() {
    const { user, userLoaded, amount } = this.props;

    const stripeConversion = (amount * 100);

    if (!userLoaded) {
      return (<p>Loading...please wait!</p>)
    } else {
      return (
        <Order onToken={this.onToken} user={user} stripePK="pk_test_6ccXGhoG0iWvSP7OcPSbRFuj" amount={stripeConversion} />
      );
    };
  }
};

const mapStateToProps = state => ({
  userLoaded: state.AccountReducer.user.loaded,
  user: state.AccountReducer.user.results.data,
});

const mapDispatchToProps = dispatch => ({
  loadUser: id => dispatch(getUser(id)),
  chargePayment: data => dispatch(chargeOrder(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OdrderContainer);
