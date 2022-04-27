import { TodoConstants } from "../actions/todo.actions";

const initialState = [
  {
    id: 1,
    title: 'Buy Milk',
  },
  {
    id: 2,
    title: 'Write tutorial',
  }
];

function TodoReducer(state = initialState, action) {
  switch (action.type) {
    case TodoConstants.LOAD_TODOS:
      return state;
    case TodoConstants.ADD_TODO:
      return [...state, action.payload.todo];
    case TodoConstants.DELETE_TODO:
      return state.filter((x) => x.id !== action.payload.id);
    default:
      return state;
  }
}

export { TodoReducer };
