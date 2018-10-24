import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './components/WeatherLocation';
import './App.css';
import WeatherData from './components/WeatherLocation/WeatherData';

class App extends Component {
  render() {
    return (
      <div className="App">
        <WeatherLocation></WeatherLocation>
      </div>
    );
  }
}

WeatherData.propTypes = {
  data: PropTypes.shape({
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
  }),
};

export default App;
