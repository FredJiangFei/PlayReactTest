import * as React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Users from '../pages/Users';

const server = setupServer(
  rest.get('users?page=2', (req, res, ctx) => {
    return res(
      ctx.json({
        page: 2,
        per_page: 6,
        total: 12,
        total_pages: 2,
        data: [
          {
            id: 7,
            email: 'michael.lawson@reqres.in',
            first_name: 'Michael',
            last_name: 'Lawson',
            avatar: 'https://reqres.in/img/faces/7-image.jpg',
          },
          {
            id: 8,
            email: 'lindsay.ferguson@reqres.in',
            first_name: 'Lindsay',
            last_name: 'Ferguson',
            avatar: 'https://reqres.in/img/faces/8-image.jpg',
          },
        ],
      })
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('loads and displays users', async () => {
  render(<Users />);

  await waitFor(() => {
    expect(screen.getByText('Michael Lawson')).toBeInTheDocument();
  });
  await waitFor(() => {
    expect(screen.getByText('Lindsay Ferguson')).toBeInTheDocument();
  });
});
