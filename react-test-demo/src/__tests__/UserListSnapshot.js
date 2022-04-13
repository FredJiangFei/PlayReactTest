import { render } from '@testing-library/react';
import React from 'react';
import UserList from '../components/UserList';

test('renders the users snapshot', () => {
  // act
  var users = [
    {
      id: 7,
      email: 'michael.lawson@reqres.in',
      first_name: 'Michael',
      last_name: 'Lawson'
    },
    {
      id: 8,
      email: 'lindsay.ferguson@reqres.in',
      first_name: 'Lindsay',
      last_name: 'Ferguson'
    }
  ];
  const {container} = render(<UserList users={users} />)

  // assert
  expect(container.firstChild).toMatchSnapshot()
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