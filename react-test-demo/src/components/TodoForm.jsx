import React from 'react';

const TodoForm = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { title } = e.target.elements;
    onSubmit({
      title: title.value.slice(),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input autoFocus type="text" name="title" className="form-control" />
      <button type="submit">Add Todo</button>
    </form>
  );
};
export default TodoForm;
