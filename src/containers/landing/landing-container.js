import React, { Component } from 'react';
import Landing from '../../components/landing';
import axios from 'axios';

const WEATHER_API = 'https://api.openweathermap.org/data/2.5/weather?q='
const API_KEY='5479e7265cf0c889f4b4cd556166043a'

class LandingContainer extends Component {

  state = {
    location: '',
    message: '',
    showForm: true,
    errorMessage: '',
  }
  componentDidMount() {}

  updatedLocation = (e) => {
    console.log(e.target.value, '<ON CHANGE EVENT TRIGGER');
    const location = e.target.value;
    this.setState({ location });
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    const { location } = this.state;
    axios.get(`${WEATHER_API}${location}&appid=${API_KEY}`)
    .then((res) => {
      const message = res.data.weather[0].description;
      const city = res.data.name;
      const showForm = false;
      this.setState({ location: city, message, showForm });
    })
    .catch((err) => {
      const error = err.response.data.message;
      this.setState({ errorMessage: error });
      console.log(err.response, 'ERROR IN AXIOS CALL TO WEATHER API');
    })
  }
 render() {
   return (
    <Landing {...this.state} onFormSubmit={this.onFormSubmit} updatedLocation={this.updatedLocation}/>
   );
 }
}

export default LandingContainer;
