import { TodoConstants } from '../store/actions/todo.actions';
import { TodoReducer } from '../store/reducers/todo.reducer';

describe('todo reducer', () => {
  it('should return todos', () => {
    var todos = [
      {
        id: 1,
        title: 'delectus aut autem'
      },
      {
        id: 2,
        title: 'quis ut nam facilis et officia qui'
      },
    ];
    const action = { type: TodoConstants.LOAD_TODOS, payload: { todos: todos } };
    const newStatus = TodoReducer([], action);

    expect(newStatus.length).toBe(2);
    expect(newStatus[0].id).toBe(1);
    expect(newStatus[0].title).toBe('delectus aut autem');
    expect(newStatus[1].id).toBe(2);
    expect(newStatus[1].title).toBe('quis ut nam facilis et officia qui');
  });
});
