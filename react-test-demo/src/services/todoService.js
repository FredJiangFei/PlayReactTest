import axios from '../utils/axiosTodo';

const getTodos = () => axios.get(`todos`);
const addTodo = (title) => axios.post(`todos`, { title });
const deleteTodo = (id) => axios.delete(`todos/${id}`);

const getTodoTitle = (id) => {
  return axios
    .get(`todos/${id}`)
    .then((res) => res.title)
    .catch((err) => err.message);
};

export default {
  getTodos,
  addTodo,
  getTodoTitle,
  deleteTodo,
};
