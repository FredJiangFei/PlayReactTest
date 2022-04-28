import { render } from '@testing-library/react';
import React from 'react';
import TodoList from './../components/TodoList';

test('renders the todos empty snapshot', () => {
  // arrange
  var items = [];

  // act
  const { container } = render(<TodoList items={items} />);

  // assert
  expect(container.firstChild).toMatchSnapshot();
});

test('renders the todos snapshot', () => {
  // arrange
  var items = [
    {
      id: 1,
      title: 'delectus aut autem'
    },
    {
      id: 2,
      title: 'quis ut nam facilis et officia qui'
    },
  ];

  // act
  const { container } = render(<TodoList items={items} />);

  // assert
  expect(container.firstChild).toMatchSnapshot();
});

it('renders the users snapshot with id and date', () => {
  const user = {
    createdAt: new Date(),
    id: Math.floor(Math.random() * 20),
    name: 'LeBron James',
  };

  expect(user).toMatchSnapshot({
    createdAt: expect.any(Date),
    id: expect.any(Number),
  });
});
