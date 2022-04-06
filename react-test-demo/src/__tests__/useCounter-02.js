import * as React from 'react';
import { render, act } from '@testing-library/react';
import useCounter from '../hooks/useCounter';

test('useCounter', () => {
  // arrange
  let result;
  function TestComponent() {
    result = useCounter();
    return null;
  }

  // act
  render(<TestComponent />);

  // assert
  expect(result.count).toBe(0);

  act(() => result.increment());
  expect(result.count).toBe(1);

  act(() => result.decrement());
  expect(result.count).toBe(0);
});
