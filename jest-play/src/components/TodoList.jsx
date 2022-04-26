import React from 'react';
import Todo from './Todo';

function TodoList({ items }) {
  return (
    <div>
      <h3>Lists</h3>
      {!items.length ? (
        <p>No task!</p>
      ) : (
        <ul>
          {items.map((item) => {
            return (
              <li key={item.id}>
                <Todo {...item} />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default TodoList;
