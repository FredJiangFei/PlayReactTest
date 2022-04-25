// jest.fn mock function
test('jest.fn', () => {
  let mockFn = jest.fn();
  let result = mockFn(1, 2, 3);

  expect(result).toBeUndefined();
  expect(mockFn).toBeCalled();
  expect(mockFn).toBeCalledTimes(1);
  expect(mockFn).toHaveBeenCalledWith(1, 2, 3);
});

test('mockReturnValue', () => {
  let mockFn = jest.fn().mockReturnValue('default');
  expect(mockFn()).toBe('default');
});

test('mockReturnValueOnce', () => {
  let mockFn = jest.fn();
  mockFn.mockReturnValueOnce(10)
  .mockReturnValueOnce('x')
  .mockReturnValue(true);

  expect(mockFn()).toBe(10);
  expect(mockFn()).toBe('x');
  expect(mockFn()).toBe(true);
});

test('jest.fn implement', () => {
  let mockFn = jest.fn((num1, num2) => {
    return num1 * num2;
  });
  expect(mockFn(10, 10)).toBe(100);
});

test('jest.fn Promise', async () => {
  let mockFn = jest.fn().mockResolvedValue('default');
  let result = await mockFn();

  expect(result).toBe('default');
  expect(Object.prototype.toString.call(mockFn())).toBe('[object Promise]');
});
