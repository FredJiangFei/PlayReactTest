import { render, screen } from '@testing-library/react';
import App from './App';

// the test case is provided by Jest
test('renders learn react link', () => {
  // testing-library/react, accessing the virtual DOM
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// jest
// describe / test 
