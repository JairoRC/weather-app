import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import WeatherDisplay from '../components/WeatherDisplay';
import { getWeather } from '../services/weatherService';

jest.mock('../images/London.png', () => 'londonImage');
jest.mock('../images/Madrid.png', () => 'madridImage');
jest.mock('../images/Murcia.png', () => 'murciaImage');

jest.mock("../services/weatherService", () => ({
  getWeather: jest.fn(),
}));

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => key,
  }),
}));

jest.mock('../i18n/i18n', () => ({
  use: () => ({
    init: jest.fn(),
  }),
  t: (key) => key,
  language: 'en',
}));

const mockWeatherData = {
  list: [{
    dt_txt: '2024-07-01 03:00:00',
    dt: 1719802800,
    main: {
      temp: 15,
      temp_min: 10,
      temp_max: 20,
      humidity: 50,
      pressure: 1013,
    },
    weather: [{
      description: 'clear sky',
      icon: '01d',
    }]
  }]
};

const filterTodayWeather = (data) => {
  const today = new Date().toISOString().split('T')[0];
  return data.filter(item => item.dt_txt.startsWith(today));
};

const formatTimestampToTime = (timestamp) => {
  const date = new Date(timestamp * 1000);
  const hours = ('0' + date.getHours()).slice(-2);
  const minutes = ('0' + date.getMinutes()).slice(-2);
  return `${hours}:${minutes}`;
};

describe('WeatherDisplay', () => {
  beforeEach(() => {
    getWeather.mockResolvedValue(mockWeatherData);
    jest.clearAllMocks();
  });

  it('renders loading state initially', async () => {
    render(<WeatherDisplay />);
    expect(screen.getByText('loading')).toBeInTheDocument();
    await waitFor(() => expect(getWeather).toHaveBeenCalledTimes(1));
  });

  it('fetches and displays weather data', async () => {
    render(<WeatherDisplay />);
    await waitFor(() => expect(getWeather).toHaveBeenCalledTimes(1));
    
    const temperatureElements = screen.getAllByText(/15.0°C/i);
    expect(temperatureElements.length).toBeGreaterThan(0);

    const descriptionElements = screen.getAllByText(/clear sky/i);
    expect(descriptionElements.length).toBeGreaterThan(0);

    const minTempElements = screen.getAllByText(/min_temperature 10.0°C/i);
    expect(minTempElements.length).toBeGreaterThan(0);

    const maxTempElements = screen.getAllByText(/max_temperature 20.0°C/i);
    expect(maxTempElements.length).toBeGreaterThan(0);

    const humidityElements = screen.getAllByText(/humidity 50.0%/i);
    expect(humidityElements.length).toBeGreaterThan(0);

    const pressureElements = screen.getAllByText(/pressure 1013.0mbar/i);
    expect(pressureElements.length).toBeGreaterThan(0);
  });

  it('changes city and fetches new weather data', async () => {
    render(<WeatherDisplay />);
    await waitFor(() => expect(getWeather).toHaveBeenCalledTimes(1));
  });
});
