import * as React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import userService from '../services/userService';

const user = {
  id: 2,
  email: 'janet.weaver@reqres.in',
  first_name: 'Janet',
  last_name: 'Weaver',
};

const server = setupServer(
  rest.get('users/4', (req, res, ctx) => {
    return res(ctx.json(user));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('should return format user async/await', async () => {
  // arrange

  // act
  const res = await userService.getUserName(4);

  // assert
  expect(res).toEqual(
    `${user.first_name} ${user.last_name} ${user.email} BeiJing`
  );
});
