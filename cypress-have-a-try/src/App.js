import React, { useState } from 'react';
import './App.css';
import Todo from './components/Todo';

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      value: 'Buy Milk',
    },
    {
      id: 2,
      value: 'Write tutorial',
    },
  ]);

  const [item, setItem] = useState('');

  const handleInputChange = (e) => setItem(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setItems((items) => [
      ...items,
      {
        id: items.length + 1,
        value: item.slice(),
      },
    ]);
    setItem('');
  };

  const handleRemove = (id) =>
    setItems((items) => items.filter((c) => c.id !== id));

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h2>Add Todo</h2>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <input
              type="text"
              autoFocus
              value={item}
              onChange={handleInputChange}
              placeholder="Enter a task"
              className="form-control"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <button type="submit" className="btn btn-primary">
              Add Task
            </button>
          </div>
        </div>
      </form>
      <div className="row todo-list">
        <div className="col-md-6">
          <h3>Lists</h3>
          {!items.length ? (
            <div className="no-task">No task!</div>
          ) : (
            <ul>
              {items.map((item) => {
                return (
                  <li key={item.id}>
                    <Todo {...item} removeTodo={handleRemove} />
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
