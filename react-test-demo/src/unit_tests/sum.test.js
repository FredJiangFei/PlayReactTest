import sum from './sum';

test('calculate 1 sum 2', () => {
  const result = sum(1, 2);
  expect(result).toBe(3);
});
