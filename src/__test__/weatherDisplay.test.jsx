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

    expect(screen.getByText(/clear sky/i)).toBeInTheDocument();
    expect(screen.getByText(/15.0°C/i)).toBeInTheDocument();
    expect(screen.getByText(/min_temperature 10.0°C/i)).toBeInTheDocument();
    expect(screen.getByText(/max_temperature 20.0°C/i)).toBeInTheDocument();
    expect(screen.getByText(/humidity 50.0%/i)).toBeInTheDocument();
    expect(screen.getByText(/pressure 1013.0mbar/i)).toBeInTheDocument();
  });

  it('changes city and fetches new weather data', async () => {
    render(<WeatherDisplay />);
    await waitFor(() => expect(getWeather).toHaveBeenCalledTimes(1));
  });
});
