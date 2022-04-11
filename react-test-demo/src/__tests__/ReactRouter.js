import { render as rtlRender } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';
import LocationDisplay from '../components/LocationDisplay';

const render = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return rtlRender(ui, { wrapper: BrowserRouter });
};

describe('route', () => {
  test('full app rendering/navigating', () => {
    const { getByText } = render(<App />);
    expect(getByText(/you are home/i)).toBeInTheDocument();
  
    userEvent.click(getByText(/about/i));
  
    expect(getByText(/you are on the about page/i)).toBeInTheDocument();
  });
  
  test('landing on a bad page', () => {
    const { getByText } = render(<App />, { route: '/something-that-does-not-match' });
  
    expect(getByText(/no match/i)).toBeInTheDocument();
  });
  
  test('rendering a component that uses useLocation', () => {
    const route = '/some-route';
    const { getByTestId } = render(<LocationDisplay />, { route });
  
    expect(getByTestId('location-display')).toHaveTextContent(route);
  });
});


