import { render, fireEvent } from '@testing-library/react'
import LoginForm from '../components/LoginForm'

test('test login form', () => {
  // Arrange
  const fakeUser = { username: 'fred', password: '123' }
  const handleSubmit = jest.fn()

  const { getByLabelText, getByText } = render(
    <LoginForm onSubmit={handleSubmit} />
  )

  const username = getByLabelText('Username')
  const password = getByLabelText('Password')
  const submitBtn = getByText('Login')

  username.value = fakeUser.username
  password.value = fakeUser.password

  // Act
  fireEvent.click(submitBtn)

  // Assert
  expect(handleSubmit).toHaveBeenCalledTimes(1)
  expect(handleSubmit).toHaveBeenCalledWith(fakeUser)
  expect(submitBtn.type).toBe('submit')
})
