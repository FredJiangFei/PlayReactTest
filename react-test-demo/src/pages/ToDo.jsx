import React, { useState } from 'react';
import TodoForm from '../components/TodoForm';
import TodoList from './../components/TodoList';

function Todo() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Buy Milk',
    },
    {
      id: 2,
      title: 'Write tutorial',
    },
  ]);

  const handleSubmit = ({ title }) => {
    setTodos((items) => [
      ...items,
      {
        id: items.length + 1,
        title,
      },
    ]);
  };

  const handleRemove = (id) =>
    setTodos((items) => items.filter((c) => c.id !== id));

  return (
    <>
      <TodoForm onSubmit={handleSubmit} />
      <TodoList items={todos} onRemoveTodo={handleRemove} />
    </>
  );
}

export default Todo;
