import add from './add'

test('calculate 1 add 2', () => {
  const result = add(1, 2)
  expect(result).toBe(3)
})
