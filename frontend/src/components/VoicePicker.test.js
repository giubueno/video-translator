import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import VoicePicker from './VoicePicker';

describe('VoicePicker Component', () => {
  test('renders VoicePicker component', () => {
    render(<VoicePicker />);
    
    // Check if the component renders correctly
    expect(screen.getByTestId('voice-picker')).toBeInTheDocument();
  });

  test('renders all voice options', () => {
    render(<VoicePicker />);
    
    // Assuming the voices array contains these voices
    const voices = ["alloy", "echo", "fable", "onyx", "nova", "shimmer"];
    
    voices.forEach(voice => {
      expect(screen.getByText(voice)).toBeInTheDocument();
    });
  });

  test('changes voice when a new voice is selected', () => {
    render(<VoicePicker />);
    
    // Assuming the component has a select element for voice selection
    const selectElement = screen.getByTestId('voice-select');
    
    // Simulate changing the voice
    fireEvent.change(selectElement, { target: { value: 'echo' } });
    
    // Check if the voice has changed
    expect(selectElement.value).toBe('echo');
  });
});