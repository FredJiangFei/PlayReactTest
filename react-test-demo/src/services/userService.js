import axios from '../utils/axios'
import utils from '../utils/utils'

const getUserGreeting = (id) => {
  const weekday = utils.getWeekday()
  const weather = utils.getWeather()

  return axios
    .get(`users/${id}`)
    .then(
      (res) =>
        `${res.data.first_name} ${res.data.last_name}, ${weekday}, ${weather}`
    )
    .catch((err) => err.message)
}

export default {
  getUserGreeting,
}
