import React, { useEffect } from 'react';
import TodoForm from '../components/TodoForm';
import TodoList from './../components/TodoList';
import { useSelector, useDispatch } from 'react-redux';
import {
  GetTodos,
  AddTodo,
  DeleteTodo
} from '../store/actions/todo.actions';

function Todo() {
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = () => dispatch(GetTodos());
  const handleSubmit = ({ title }) => dispatch(AddTodo(title));
  const handleRemove = (id) => dispatch(DeleteTodo(id));

  return (
    <>
      <TodoForm onSubmit={handleSubmit} />
      <TodoList items={todos} onRemoveTodo={handleRemove} />
    </>
  );
}

export default Todo;
