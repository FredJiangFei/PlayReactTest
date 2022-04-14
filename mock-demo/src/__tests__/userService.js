import userService from "../services/userService";

test('fetchUser() 可以请求到一个含有name属性值为Leanne Graham的对象', () => {
  expect.assertions(1);

  return userService.fetchUser()
    .then(data => {
      expect(data.name).toBe('Leanne Graham');
    });
})