import { render as rtlRender, screen } from '@testing-library/react';
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
    localStorage.setItem('token', '123');

    render(<App />);
    expect(screen.getByText(/you are home/i)).toBeInTheDocument();

    userEvent.click(screen.getByText(/about/i));

    expect(screen.getByText(/you are on the about page/i)).toBeInTheDocument();
  });

  test('landing on a bad page', () => {
    render(<App />, { route: '/something-that-does-not-match' });

    expect(screen.getByText(/no match/i)).toBeInTheDocument();
  });

  test('rendering a component that uses useLocation', () => {
    const route = '/some-route';
    render(<LocationDisplay />, { route });

    expect(screen.getByTestId('location-display')).toHaveTextContent(route);
  });
});
