import axios from '../utils/axiosTodo'

const getTodoTitle = (id) => {
  return axios
    .get(`todos/${id}`)
    .then((res) => res.data.title)
    .catch((err) => err.message)
}

export default {
  getTodoTitle
}
