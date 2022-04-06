
import add from './add';

test('calculate 1 add 2', () => {
  // act
  const s = add(1, 2);
  
  // assert
  expect(s).toBe(3);
});