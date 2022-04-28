import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store/Store';
import Todo from '../pages/ToDo';

jest.mock('../utils/axiosTodo.js');

describe('todo integration test', () => {
  test('load todos', async () => {
    // Arrange
    const { container } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Todo />
        </Provider>
      </BrowserRouter>
    );

    // Assert
    await waitFor(() => {
      expect(container.getElementsByClassName('btn-danger').length).toBe(2);

      const todo1 = screen.getByText('delectus aut autem');
      expect(todo1).toBeInTheDocument();

      const todo2 = screen.getByText('quis ut nam facilis et officia qui');
      expect(todo2).toBeInTheDocument();
    });
  });

  test('add todo', async () => {
    // Arrange
    const { container } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Todo />
        </Provider>
      </BrowserRouter>
    );

    // Act
    const titleNode = document.querySelector('.form-control');
    titleNode.value = 'add new test integration';
    const submitButton = screen.getByText('Add Todo');
    fireEvent.click(submitButton);

    // Assert
    await waitFor(() => {
      expect(container.getElementsByClassName('btn-danger').length).toBe(3);
      const todo1 = screen.getByText('delectus aut autem');
      expect(todo1).toBeInTheDocument();

      const todo2 = screen.getByText('quis ut nam facilis et officia qui');
      expect(todo2).toBeInTheDocument();

      const todo3 = screen.getByText('add new test integration');
      expect(todo3).toBeInTheDocument();
    });
  });

  test('delete todo', async () => {
    // Arrange
    const { container } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Todo />
        </Provider>
      </BrowserRouter>
    );

    // Act
    const deleteButtons = container.getElementsByClassName('btn-danger');
    fireEvent.click(deleteButtons[0]);

    // Assert
    await waitFor(() => {
      expect(container.getElementsByClassName('btn-danger').length).toBe(1);
      const todo1 = screen.getByText('quis ut nam facilis et officia qui');
      expect(todo1).toBeInTheDocument();
    });
  });
});
