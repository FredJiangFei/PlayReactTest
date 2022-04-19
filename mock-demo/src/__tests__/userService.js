import axios from '../utils/axios';
import userService from '../services/userService';
import utils from '../utils/utils';

jest.mock('../utils/axios');
jest.mock('../utils/utils');

test('should return format user async/await', async () => {
  // arrange
  const user = {
    id: 2,
    email: 'janet.weaver@reqres.in',
    first_name: 'Janet',
    last_name: 'Weaver',
  };
  const resp = { data: user };
  axios.get.mockResolvedValue(resp);
  utils.getLocation.mockReturnValue('BeiJing');
  // utils.getLocation = jest.fn().mockReturnValue('BeiJing');

  // act
  const res = await userService.getUserName(4);

  // assert
  expect(res).toEqual(
    `${user.first_name} ${user.last_name} ${user.email} BeiJing`
  );
  // expect(utils.getWeather()).toBe('Sunny');
});

test('should throw exception', async () => {
  // arrange
  const expectedError = new Error('💥 CABOOM 💥');
  axios.get.mockRejectedValue(expectedError);

  // act
  try {
    await userService.getUserName(4);
  } catch (err) {
    expect(err).toBe(expectedError.message);
  }
});
