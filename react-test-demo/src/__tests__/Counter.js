import * as React from 'react';
import { Provider } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';
import { Counter } from '../components/Counter';
import store from '../store/Store';

describe('counter redux', () => {
  test('can render with redux with defaults', () => {
    const { getByText, getByLabelText } = render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );
  
    fireEvent.click(getByText('+'));
  
    expect(getByLabelText(/count/i)).toHaveTextContent('1');
  });
  
  test('can render with redux with custom initial state', () => {
    const { getByText, getByLabelText } = render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );
    fireEvent.click(getByText('-'));
    expect(getByLabelText(/count/i)).toHaveTextContent('-1');
  });
})


