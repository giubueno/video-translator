// LanguagePicker.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LanguagePicker from './LanguagePicker';

describe('LanguagePicker Component', () => {
  test('renders LanguagePicker component', () => {
    render(<LanguagePicker />);
    
    // Check if the component renders correctly
    expect(screen.getByTestId('language-picker')).toBeInTheDocument();
  });

  test('changes language when a new language is selected', () => {
    render(<LanguagePicker />);
    
    // Assuming the component has a select element for language selection
    const selectElement = screen.getByTestId('language-select');
    
    // Simulate changing the language
    fireEvent.change(selectElement, { target: { value: 'es' } });
    
    // Check if the language has changed
    expect(selectElement.value).toBe('es');
  });
});