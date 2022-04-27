import React, { useState } from 'react';
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
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos((items) => [
      ...items,
      {
        id: items.length + 1,
        title: text.slice(),
      },
    ]);
    setText('');
  };
  const handleInputChange = (e) => setText(e.target.value);

  const handleRemove = (id) =>
  setTodos((items) => items.filter((c) => c.id !== id));

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoFocus
          className="form-control"
          value={text}
          onChange={handleInputChange}
        />
        <button type="submit">Add Todo</button>
      </form>
      <TodoList items={todos} onRemoveTodo={handleRemove} />
    </>
  );
}

export default Todo;
