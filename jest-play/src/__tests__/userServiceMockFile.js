import userService from '../services/userService';
jest.mock('../utils/axios');
jest.mock('../utils/utils');

test('mock file', async () => {
  // act
  const res = await userService.getUserName(4);

  // assert
  expect(res).toEqual(`Fred Jiang fred.jiang@shinetech.in ChengDu`);
});
