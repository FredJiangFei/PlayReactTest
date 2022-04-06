import { renderHook, act } from '@testing-library/react-hooks';
import useCounter from '../hooks/useCounter';

test('renderHook', () => {
  const { result } = renderHook(useCounter);

  expect(result.current.count).toBe(0);

  act(() => result.current.increment());
  expect(result.current.count).toBe(1);

  act(() => result.current.decrement());
  expect(result.current.count).toBe(0);
});

test('renderHook initial', () => {
  const { result } = renderHook(useCounter, {
    initialProps: { initialCount: 3 },
  });
  expect(result.current.count).toBe(3);
});

test('renderHook step', () => {
  const { result } = renderHook(useCounter, { initialProps: { step: 2 } });
  expect(result.current.count).toBe(0);

  act(() => result.current.increment());
  expect(result.current.count).toBe(2);

  act(() => result.current.decrement());
  expect(result.current.count).toBe(0);
});
