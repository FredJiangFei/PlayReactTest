import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store/Store';
import Todo from '../pages/ToDo';

describe('todo integration test', () => {
  test('load todos', async () => {
    // Arrange
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Todo />
        </Provider>
      </BrowserRouter>
    );

    // Act

    // Assert
    await waitFor(() => {
      expect(screen.getByText('delectus aut autem')).toBeInTheDocument();
      expect(screen.getByText('quis ut nam facilis et officia qui')).toBeInTheDocument();
    });
  });

  test('add todo', async () => {
    // Arrange
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Todo />
        </Provider>
      </BrowserRouter>
    );

    // Act
    const titleNode = document.querySelector('.form-control');
    titleNode.value = "add new test integration";
    const submitButton = screen.getByText('Add Todo');
    fireEvent.click(submitButton);

    // Assert
    await waitFor(() => {
      expect(screen.getByText('delectus aut autem')).toBeInTheDocument();
      expect(screen.getByText('quis ut nam facilis et officia qui')).toBeInTheDocument();
      expect(screen.getByText('add new test integration')).toBeInTheDocument();
    });
  });
});
