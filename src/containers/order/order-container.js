import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

/**
 * Component imports
 */
import Order from '../../components/order';

/**
 * Action imports
 */
import { getUser } from '../../actions/account-actions';

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

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };


  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      UserId: this.state.userId,
      Street: this.state.street,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip
    }
    
    axios.post('api/address', data)
      .then(res => {
        this.setState({
          userId: '',
          street: '',
          city: '',
          state: '',
          zip: 0,
        })
     })
     .catch(err => {
       console.log(err, 'error from backend after axios call');
     });
  };

  onToken = () => {
    // something
  }
    
  render() {
    const { user, userLoaded } = this.props;

    if (!userLoaded) {
      return (<p>Loading...please wait!</p>)
    } else {
      return (
        <Order onToken={this.onToken} user={user} />
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
});

export default connect(mapStateToProps, mapDispatchToProps)(OdrderContainer);
