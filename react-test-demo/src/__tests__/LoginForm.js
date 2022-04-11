import { render, cleanup, fireEvent } from '@testing-library/react';
import LoginForm from '../components/LoginForm';

afterEach(cleanup);

describe.only('test login', () => {
  test('with react-testing- library fireEvent', () => {
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
    fireEvent.click(submitButtonNode);

    // Assert
    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(handleSubmit).toHaveBeenCalledWith(fakeUser);
    expect(submitButtonNode.type).toBe('submit');
  });
});
