import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import LanguageSelector from '../components/LanguageSelector';
import { useTranslation } from 'react-i18next';

// Definir un mock global de i18n
const mockChangeLanguage = jest.fn();
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => key,
    i18n: {
      changeLanguage: mockChangeLanguage,
      language: 'en',
    },
  }),
}));

test('renders LanguageSelector component with buttons', () => {
  render(<LanguageSelector />);
  
  expect(screen.getByText('english')).toBeInTheDocument();
  expect(screen.getByText('spanish')).toBeInTheDocument();
});

test('changes language to English when English button is clicked', () => {
  render(<LanguageSelector />);

  fireEvent.click(screen.getByText('english'));
  expect(mockChangeLanguage).toHaveBeenCalledWith('en');
});

test('changes language to Spanish when Spanish button is clicked', () => {
  render(<LanguageSelector />);

  fireEvent.click(screen.getByText('spanish'));
  expect(mockChangeLanguage).toHaveBeenCalledWith('es');
});
