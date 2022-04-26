import React from 'react';
import { render, screen } from '@testing-library/react';
import TodoList from '../components/TodoList';

test('renders the todos empty', () => {
  render(<TodoList items={[]} />);

  //assert
  expect(screen.getByText('No task!')).toBeInTheDocument();
});

test('renders the todos', () => {
   // arrange
   var items = [
    {
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      completed: false,
    },
    {
      userId: 1,
      id: 2,
      title: 'quis ut nam facilis et officia qui',
      completed: false,
    },
  ];

  // act
  render(<TodoList items={items} />);

  // assert
  expect(screen.getByText('delectus aut autem')).toBeInTheDocument();
  expect(screen.getByText('quis ut nam facilis et officia qui')).toBeInTheDocument();
});
