import React from 'react';
import WeatherLocation from './WeatherLocation';

const LocationList = () => (
    <div>
        <WeatherLocation city='Madrid'></WeatherLocation>
        <WeatherLocation city='Barcelona'></WeatherLocation>
        <WeatherLocation city='Cádiz'></WeatherLocation>
    </div>
);

export default LocationList;