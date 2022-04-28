import todoService from "../../services/todoService";

export const TodoConstants = {
  LOAD_TODOS: 'LOAD_TODOS',
  ADD_TODO: 'ADD_TODO',
  DELETE_TODO: 'DELETE_TODO'
};

export const GetTodos = () => async dispatch => {
  const res = await todoService.getTodos();
  const action = { type: TodoConstants.LOAD_TODOS, payload: { todos: res } };
  dispatch(action);
};

export const AddTodo = (title) => async dispatch => {
  await todoService.addTodo(title);
  dispatch(GetTodos());
};

export const DeleteTodo = (id) => async dispatch => {
  await todoService.deleteTodo(id);
  dispatch(GetTodos());
};
