import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from './Header';
import LanguagePicker from './LanguagePicker';
import VoicePicker from './VoicePicker';

jest.mock('./LanguagePicker');
jest.mock('./VoicePicker');

describe('Header Component', () => {
  beforeEach(() => {
    LanguagePicker.mockImplementation(() => <div data-testid="language-picker-mock" />);
    VoicePicker.mockImplementation(() => <div data-testid="voice-picker-mock" />);
  });

  test('renders Header component', () => {
    render(<Header />);
    
    // Check if the header renders correctly
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  test('renders title', () => {
    render(<Header />);
    
    // Check if the title renders correctly
    expect(screen.getByText('Video Translations')).toBeInTheDocument();
  });

  test('renders LanguagePicker and VoicePicker components', () => {
    render(<Header />);
    
    // Check if the LanguagePicker and VoicePicker components render correctly
    expect(screen.getByTestId('language-picker-mock')).toBeInTheDocument();
    expect(screen.getByTestId('voice-picker-mock')).toBeInTheDocument();
  });

  test('renders Generate button', () => {
    render(<Header />);
    
    // Check if the Generate button renders correctly
    expect(screen.getByRole('button', { name: /generate/i })).toBeInTheDocument();
  });
});