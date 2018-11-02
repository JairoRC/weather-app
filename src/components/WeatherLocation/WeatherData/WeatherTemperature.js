import React from 'react';
import PropTypes from 'prop-types';
import { IoMdSunny } from 'react-icons/io';
import { IoMdPartlySunny } from 'react-icons/io';
import { IoMdCloudy } from 'react-icons/io';
import { IoMdThunderstorm } from 'react-icons/io';
import { IoMdRainy } from 'react-icons/io';
import { IoMdSnow } from 'react-icons/io';
// import {
//     CLOUDS,
//     CLOUDY,
//     SUN,
//     RAIN,
//     SNOW,
//     STORM,
// } from './../../../constants/weathers';
import './styles.css';

// const icons = {
//     [CLOUDS]: 'Clouds',
//     [CLOUDY]: 'Cloudy',
//     [SUN]: 'Sun',
//     [RAIN]: 'Rain',
//     [SNOW]: 'Snow',
//     [STORM]: 'Storm',

// };
const getWeatherIcon = weatherState => {
    const icon = weatherState;
    // const sizeIcon ='4x';
    if(icon === 'Snow')
        return <IoMdSnow className='wicon' size='65px'/>       
    
    else if (icon === 'Clouds')
        return  <IoMdCloudy className='wicon' size='65px'/>
         
    else if (icon === 'Cloudy')
        return <IoMdPartlySunny className='wicon' size='65px'/>
    
    else if(icon === 'Storm')
        return <IoMdThunderstorm className='wicon' size='65px'/>
    
    else if(icon === 'Rain')
        return <IoMdRainy className='wicon' size='65px'/>
    
    else   
        return <IoMdSunny className='wicon' size='65px'/>
};


const WeatherTemperature = ({ temperature, weatherState}) => (
    <div className='weatherTemperatureCont'>
        {
            getWeatherIcon(weatherState)
        }
        <span className='temperature'>{ `${temperature}`}</span> 
        <span className='temperatureType'>{` C°`}</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
};

export default WeatherTemperature;