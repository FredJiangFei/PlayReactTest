import { TodoConstants } from '../store/actions/todo.actions';
import { TodoReducer } from '../store/reducers/todo.reducer';

describe('todo reducer', () => {
  it('should return todos', () => {
    var todos = [
      {
        id: 1,
        title: 'delectus aut autem',
      },
      {
        id: 2,
        title: 'quis ut nam facilis et officia qui',
      },
    ];
    const action = {
      type: TodoConstants.LOAD_TODOS,
      payload: { todos: todos },
    };
    const newStatus = TodoReducer([], action);

    expect(newStatus.length).toBe(2);
    expect(newStatus[0].id).toBe(1);
    expect(newStatus[0].title).toBe('delectus aut autem');
    expect(newStatus[1].id).toBe(2);
    expect(newStatus[1].title).toBe('quis ut nam facilis et officia qui');
  });

  it('should add todo', () => {
    var todos = [
      {
        id: 1,
        title: 'delectus aut autem',
      },
      {
        id: 2,
        title: 'quis ut nam facilis et officia qui',
      },
    ];
    var todo = {
      id: 3,
      title: 'add new todo',
    };
    const action = { type: TodoConstants.ADD_TODO, payload: { todo } };
    const newStatus = TodoReducer(todos, action);

    expect(newStatus.length).toBe(3);
    expect(newStatus[0].id).toBe(1);
    expect(newStatus[0].title).toBe('delectus aut autem');
    expect(newStatus[1].id).toBe(2);
    expect(newStatus[1].title).toBe('quis ut nam facilis et officia qui');
    expect(newStatus[2].id).toBe(3);
    expect(newStatus[2].title).toBe('add new todo');
  });

  it('should delete todo', () => {
    var todos = [
      {
        id: 1,
        title: 'delectus aut autem',
      },
      {
        id: 2,
        title: 'quis ut nam facilis et officia qui',
      },
    ];
    const action = { type: TodoConstants.DELETE_TODO, payload: { id: 1 } };
    const newStatus = TodoReducer(todos, action);

    expect(newStatus.length).toBe(1);
    expect(newStatus[0].id).toBe(2);
    expect(newStatus[0].title).toBe('quis ut nam facilis et officia qui');
  });
});
