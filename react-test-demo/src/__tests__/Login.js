import { render, fireEvent, waitFor, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Login from '../pages/Login';
import store from '../store/Store';

afterEach(cleanup);

describe('login integration test', () => {

  test('login no username', async () => {
    // Arrange
    const { getByText, getByTestId } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </BrowserRouter>
    );

    const submitButtonNode = getByText('Login');

    // Act
    fireEvent.click(submitButtonNode);

    // Assert
    const errorNode = getByTestId("test-error");
    await waitFor(() => {
      expect(errorNode.textContent).toBe('Missing email or username');
    });
  });

  test('login no password', async () => {
    // Arrange
    const { getByLabelText, getByText, getByTestId } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </BrowserRouter>
    );

    const usernameNode = getByLabelText('Username');
    usernameNode.value = "eve.holt@reqres.in";

    // Act
    const submitButtonNode = getByText('Login');
    fireEvent.click(submitButtonNode);

    // Assert
    const errorNode = getByTestId("test-error");
    await waitFor(() => {
      expect(errorNode.textContent).toBe('Missing password');
    });
  });
});
