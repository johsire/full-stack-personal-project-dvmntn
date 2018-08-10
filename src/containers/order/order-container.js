import React, { Component } from 'react';
import Order from '../../components/order';
import axios from 'axios';

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
    axios.get('/api/address')
      .then((res) => {
      this.setState({ orders: res.data.order })
    })
  }
  
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
     })
  }

    
  render() {
    return (
      <div>
      <Order />

        User: {this.state.userId} <br/>
        Street: {this.state.street} <br/>
        City: {this.state.city}<br/>
        State: {this.state.state}<br/>
        Zip: {this.state.zip} <br/>

      <form onSubmit={e => this.handleSubmit(e)}>  
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
      </form>        
      </div>
    );
  }
};

export default OdrderContainer;
