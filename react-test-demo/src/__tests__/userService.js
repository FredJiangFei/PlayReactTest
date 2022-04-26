import axios from '../utils/axios'
import userService from '../services/userService'
import utils from '../utils/utils'

jest.mock('../utils/axios')
jest.mock('../utils/utils')

test('should return greeting user', async () => {
  // arrange
  const user = {
    id: 2,
    email: 'fred@reqres.in',
    first_name: 'Fred',
    last_name: 'Jiang',
  }
  const resp = { data: user }
  axios.get.mockResolvedValue(resp)
  utils.getWeekday.mockReturnValue('Sunday')
  utils.getWeather.mockReturnValue('Rainny')
  //   utils.getWeekday = jest.fn().mockReturnValue('Sunday')

  // act
  const res = await userService.getUserGreeting(4)

  // assert
  expect(res).toEqual(`${user.first_name} ${user.last_name}, Sunday, Rainny`)
  //   expect(utils.getWeekday()).toBe('Sunday')
})

test('should throw exception', async () => {
  // arrange
  const expectedError = new Error('💥 CABOOM 💥')
  axios.get.mockRejectedValue(expectedError)

  // act
  try {
    await userService.getUserGreeting(4)
  } catch (err) {
    expect(err).toBe(expectedError.message)
  }
})
