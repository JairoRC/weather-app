import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/i18n';

jest.mock('./components/ui/NavBar', () => () => <div>NavBar Component</div>);
jest.mock('./components/WeatherDisplay', () => () => <div>WeatherDisplay Component</div>);

test('renders App component with NavBar and WeatherDisplay', () => {
  render(
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  );

  expect(screen.getByText('NavBar Component')).toBeInTheDocument();
  expect(screen.getByText('WeatherDisplay Component')).toBeInTheDocument();
});
