import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import CitySelector from '../components/CitySelector';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => key,
  }),
}));

describe('CitySelector', () => {
  it('renders CitySelector component', () => {
    const mockSetCityData = jest.fn();
    
    render(<CitySelector cityData="London" setCityData={mockSetCityData} />);
    
    expect(screen.getByText('select_city')).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toHaveValue('London');
  });

  it('changes city and calls setCityData', () => {
    const mockSetCityData = jest.fn();
    
    render(<CitySelector cityData="London" setCityData={mockSetCityData} />);
    
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'Madrid' } });
    expect(mockSetCityData).toHaveBeenCalledWith('Madrid');
  });

  it('renders all city options', () => {
    const mockSetCityData = jest.fn();
    
    render(<CitySelector cityData="London" setCityData={mockSetCityData} />);
    
    expect(screen.getByRole('option', { name: 'london' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'madrid' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'murcia' })).toBeInTheDocument();
  });
});
