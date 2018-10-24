import React from 'react';
import PropTypes from 'prop-types';
import { IoMdSunny } from 'react-icons/io';
import { IoMdPartlySunny } from 'react-icons/io';
import { IoMdCloudy } from 'react-icons/io';
import { IoMdThunderstorm } from 'react-icons/io';
import { IoMdRainy } from 'react-icons/io';
import { IoMdSnow } from 'react-icons/io';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    STORM,
} from './../../../constants/weathers';
import './styles.css';

const icons = {
    [CLOUD]: 'cloud',
    [CLOUDY]: 'cloudy',
    [SUN]: 'sun',
    [RAIN]: 'rain',
    [SNOW]: 'snow',
    [STORM]: 'storm',

};
const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];
    const sizeIcon ='4x';
    if(icon === 'snow')
        return <IoMdSnow className='wicon' size='40px'/>       
    
    else if (icon === 'cloud')
        return  <IoMdCloudy className='wicon' size='40px'/>
         
    else if (icon === 'cloudy')
        return <IoMdPartlySunny className='wicon' size='40px'/>
    
    else if(icon === 'storm')
        return <IoMdThunderstorm className='wicon' size='40px'/>
    
    else if(icon === 'rain')
        return <IoMdRainy className='wicon' size='40px'/>
    
    else   
        return <IoMdSunny className='wicon' size='40px'/>
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