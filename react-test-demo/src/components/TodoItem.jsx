import React from 'react';

const TodoItem = ({ id, title, onRemoveTodo }) => {
  return (
    <>
      {title}
      <button className="btn-danger" onClick={() => onRemoveTodo(id)}>
        X
      </button>
    </>
  );
};

export default TodoItem;
