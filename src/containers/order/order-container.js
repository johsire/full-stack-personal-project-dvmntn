import React, { Component } from 'react';
import Order from '../../components/order';
import axios from 'axios';

class OdrderContainer extends Component {
  constructor() {
    super();

    this.state={
      firstName: '',
      lastName: '',
      address: '',
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
      name: this.state.name,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip
    }
    
    axios.post('api/address', data)
      .then(res => {
        this.setState({
          firstName: '',
          lastName: '',
          address: '',
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

        Name: {this.state.name} <br/>
        Address: {this.state.address} <br/>
        City: {this.state.city}
        State: {this.state.state}
        Zip: {this.state.zip} <br/><br/>

      <form onSubmit={e => this.handleSubmit(e)}>  
        <div className="inputBox">
          <br/>
          <input name="name" type='text' placeholder='First Name' 
          value={this.state.name} onChange={e => this.handleChange(e)} 
          />
          <br/>
          <input name="name" type='text' placeholder='Last Name' 
          value={this.state.name} onChange={e => this.handleChange(e)} 
          />
          <br/>
          <br/>
          <input name="address" type='text' placeholder='Address' value={this.state.address} onChange={e => this.handleChange(e)}/>
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
