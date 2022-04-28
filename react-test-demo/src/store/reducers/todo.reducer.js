import { TodoConstants } from '../actions/todo.actions';

const initialState = [];
function TodoReducer(state = initialState, action) {
  switch (action.type) {
    case TodoConstants.LOAD_TODOS:
      return action.payload.todos;
    case TodoConstants.ADD_TODO:
      return [...state, action.payload.todo];
    case TodoConstants.DELETE_TODO:
      return state.filter((x) => x.id !== action.payload.id);
    default:
      return state;
  }
}

export { TodoReducer };
