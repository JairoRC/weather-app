import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    STORM,
} from './../../constants/weathers';

const data = {
    temperature: 5,
    weatherState: STORM,
    humidity: 65,
    wind: '18 m/s',
}

class WeatherLocation extends Component {

    hundleUpdateClick = () => {
        console.log("Actualizado")
    }

    render(){
        return (
            <div className='weatherLocationCont'>
                <Location city={'Nuevo Baztán'}></Location>
                <WeatherData data={data}></WeatherData>
                <button onClick={this.hundleUpdateClick}>Actualizar</button>
            </div>
        );
    }
    
}

export default WeatherLocation;