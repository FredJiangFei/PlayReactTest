import ReactDOM from 'react-dom';
import { render, Simulate, cleanup, fireEvent } from '@testing-library/react';
import LoginForm from '../components/LoginForm';

afterEach(cleanup);

describe.skip('test login', () => {
  test('simple', () => {
    // Arrange
    const fakeUser = { username: 'fred', password: '123' };
    const handleSubmit = jest.fn();

    const div = document.createElement('div');
    ReactDOM.render(<LoginForm onSubmit={handleSubmit} />, div);

    const inputs = div.querySelectorAll('input');
    const usernameNode = inputs[0];
    const passwordNode = inputs[1];
    const formNode = div.querySelector('form');
    const submitButtonNode = div.querySelector('button');

    usernameNode.value = fakeUser.username;
    passwordNode.value = fakeUser.password;

    // Act
    const event = new Event('submit');
    formNode.dispatchEvent(event);
    fireEvent.click(getByText('submit'));

    // Assert
    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(handleSubmit).toHaveBeenCalledWith(fakeUser);
    expect(submitButtonNode.type).toBe('submit');
  });

  test('with react-testing-library fireEvent', () => {
    // Arrange
    const fakeUser = { username: 'fred', password: '123' };
    const handleSubmit = jest.fn();

    const { getByLabelText, getByText } = render(
      <LoginForm onSubmit={handleSubmit} />
    );

    const usernameNode = getByLabelText('Username');
    const passwordNode = getByLabelText('Password');
    const submitButtonNode = getByText('Login');

    usernameNode.value = fakeUser.username;
    passwordNode.value = fakeUser.password;

    // Act
    fireEvent.click(getByText('Login'));

    // Assert
    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(handleSubmit).toHaveBeenCalledWith(fakeUser);
    expect(submitButtonNode.type).toBe('submit');
  });

  test('with react-testing-library', () => {
    // Arrange
    const fakeUser = { username: 'fred', password: '123' };
    const handleSubmit = jest.fn();

    const { container, getByLabelText, getByText } = render(
      <LoginForm onSubmit={handleSubmit} />
    );

    const usernameNode = getByLabelText('Username');
    const passwordNode = getByLabelText('Password');
    const formNode = container.querySelector('form');
    const submitButtonNode = getByText('Login');

    usernameNode.value = fakeUser.username;
    passwordNode.value = fakeUser.password;

    // Act
    Simulate.submit(formNode);

    // Assert
    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(handleSubmit).toHaveBeenCalledWith(fakeUser);
    expect(submitButtonNode.type).toBe('submit');
  });
});
