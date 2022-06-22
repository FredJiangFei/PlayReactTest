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
      id: 1,
      title: 'delectus aut autem'
    },
    {
      id: 2,
      title: 'quis ut nam facilis et officia qui'
    }
  ];

  // act
  render(<TodoList items={items} />);

  // assert
  expect(screen.getByText('delectus aut autem')).toBeInTheDocument();
  expect(screen.getByText('quis ut nam facilis et officia qui')).toBeInTheDocument();
});
