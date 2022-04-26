import React, { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';

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

  return <TodoList items={items} />;
}

export default App;
