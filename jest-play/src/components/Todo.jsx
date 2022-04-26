import React from 'react';

const Todo = ({ id, title }) => {
  return (
    <div>
      {title}
      <button className="btn btn-danger">X</button>
    </div>
  );
};

export default Todo;
