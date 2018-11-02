import convert from 'convert-units'; 
import {
    SUN,
    CLOUDS// STORM
} from './../constants/weathers';

const getTemp = kelvin => {
    return Number(convert(kelvin).from('K').to('C').toFixed(1));
}

const getWeatherState = weather_data => {
    return weather_data.weather[0].main;
}

const transformWeather = weather_data => {
    const { humidity, temp } = weather_data.main;
    const { speed } = weather_data.wind;
    const weatherState = getWeatherState(weather_data);
    const temperature = getTemp(temp);

    const data = {
        humidity,
        temperature,
        weatherState,
        wind: `${speed} km/h`,
        }
    return data;
}

export default transformWeather;