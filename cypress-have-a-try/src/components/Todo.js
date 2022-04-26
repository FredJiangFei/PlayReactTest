import React from 'react';

const Todo = ({ id, value, removeTodo }) => {
  return (
    <div>
      {value}
      <button className="btn btn-danger" onClick={() => removeTodo(id)}>
        X
      </button>
    </div>
  );
};

export default Todo;
