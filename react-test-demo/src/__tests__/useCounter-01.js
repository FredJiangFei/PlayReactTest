import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import useCounter from '../hooks/useCounter';

test('useCounter', () => {
  const TestComponent = () => {
    const { count, increment, decrement } = useCounter();
    return (
      <>
        <button id="btnMinus" onClick={decrement}>
          -
        </button>
        <span id="result">{count}</span>
        <button id="btnAdd" onClick={increment}>
          +
        </button>
      </>
    );
  };

  render(<TestComponent />);

  const btnAdd = document.querySelector('#btnAdd');
  const btnMinus = document.querySelector('#btnMinus');
  const result = document.querySelector('#result');

  expect(result).toHaveTextContent('0');

  fireEvent.click(btnAdd);
  expect(result).toHaveTextContent('1');

  fireEvent.click(btnMinus);
  expect(result).toHaveTextContent('0');
});
