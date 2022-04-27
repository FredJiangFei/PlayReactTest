import React from 'react';
import TodoForm from '../components/TodoForm';
import TodoList from './../components/TodoList';
import { useSelector, useDispatch } from 'react-redux';
import { TodoConstants } from '../store/actions/todo.actions';

function Todo() {
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const handleSubmit = ({ title }) => {
    var todo = {
      id: todos.length + 1,
      title,
    };
    dispatch({ type: TodoConstants.ADD_TODO, payload: { todo } });
  };

  const handleRemove = (id) =>
    dispatch({ type: TodoConstants.DELETE_TODO, payload: { id } });

  return (
    <>
      <TodoForm onSubmit={handleSubmit} />
      <TodoList items={todos} onRemoveTodo={handleRemove} />
    </>
  );
}

export default Todo;
