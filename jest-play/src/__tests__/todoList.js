import React from 'react';
import { render } from '@testing-library/react';
import TodoList from '../components/TodoList';

test('renders the todos empty', () => {
  const { getByText } = render(<TodoList items={[]} />);

  //assert
  expect(getByText('No task!')).toBeInTheDocument();
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
  const { getByText } = render(<TodoList items={items} />);

  // assert
  expect(getByText('delectus aut autem')).toBeInTheDocument();
  expect(getByText('quis ut nam facilis et officia qui')).toBeInTheDocument();
});
