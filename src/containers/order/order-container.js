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

  // handleChange = (e) => {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   });
  // };


  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   const data = {
  //     UserId: this.state.userId,
  //     Street: this.state.street,
  //     city: this.state.city,
  //     state: this.state.state,
  //     zip: this.state.zip
  //   }
    
  //   axios.post('api/address', data)
  //     .then(res => {
  //       this.setState({
  //         userId: '',
  //         street: '',
  //         city: '',
  //         state: '',
  //         zip: 0,
  //       })
  //    })
  //    .catch(err => {
  //      console.log(err, 'error from backend after axios call');
  //    });
  // };

  // onToken = () => {
  //   const token = 'sk_test_uM8jNLDUHoYXG0Vh1IHR5WY2'
  //   fetch(`${API_URL}/api/order`, {
  //     method: 'POST',
  //     body: JSON.stringify(token),
  //   }).then(response => {
  //     console.log(response, 'TOKEN STUFF RESPONSE');
  //     response.json().then(data => {
  //       alert(`We are in business, ${data.email}`);
  //     });
  //   });
  // }

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
    const { user, userLoaded } = this.props;

    if (!userLoaded) {
      return (<p>Loading...please wait!</p>)
    } else {
      return (
        <Order onToken={this.onToken} user={user} stripePK="pk_test_6ccXGhoG0iWvSP7OcPSbRFuj" />
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
