import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Video Translations/i);
  expect(linkElement).toBeInTheDocument();
});
