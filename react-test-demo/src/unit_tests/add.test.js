
import add from './add';

// 通过 test 函数创建一个测试用例
test('renders learn react link', () => {
  // 执行 add 函数得到结果
  const s = add(1, 2);
  
  // 使用 Jest 提供的 expect 函数断言结果等于3
  expect(s).toBe(3);
});