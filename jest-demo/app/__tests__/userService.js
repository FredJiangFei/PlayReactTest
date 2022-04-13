import userService from "../userService";

test('fetchUser() 可以请求到一个含有name属性值为Leanne Graham的对象', () => {
  // 确保在异步的测试用例中，有一个断言会在回调函数中被执行
  expect.assertions(1);
  return userService.fetchUser()
    .then(data => {
      expect(data.name).toBe('Leanne Graham');
    });
})