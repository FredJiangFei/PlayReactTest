import * as React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { store } from '../store/Store';
import { Counter } from '../components/Counter';
import { createStore } from 'redux';
import { CounterReducer } from '../store/reducers/CounterReducer';

test('can render with redux with defaults', () => {
  render(
    <Provider store={store}>
      <Counter />
    </Provider>
  );

  userEvent.click(screen.getByText('+'));

  expect(screen.getByLabelText(/count/i)).toHaveTextContent('1');
});

test('can render with redux with custom initial state', () => {
  const store = createStore(CounterReducer, { count: 3 });
  render(
    <Provider store={store}>
      <Counter />
    </Provider>
  );
  userEvent.click(screen.getByText('-'));
  expect(screen.getByLabelText(/count/i)).toHaveTextContent('2');
});
