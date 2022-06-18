import {
  render as rtlRender,
  fireEvent,
  waitFor,
  cleanup,
  screen,
} from '@testing-library/react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import Login from '../pages/Login'
import store from '../store/Store'

afterEach(cleanup)

const render = () => {
  return rtlRender(
    <BrowserRouter>
      <Provider store={store}>
        <Login />
      </Provider>
    </BrowserRouter>
  )
}

describe('login integration test', () => {
  test('login no username', async () => {
    // Arrange
    render()

    const submitBtn = screen.getByText('Login')

    // Act
    fireEvent.click(submitBtn)

    // Assert
    const error = screen.getByTestId('test-error')
    await waitFor(() => {
      expect(error.textContent).toBe('Missing email or username')
    })
  })

  test('login no password', async () => {
    // Arrange
    render()

    const username = screen.getByLabelText('Username')
    username.value = 'eve.holt@reqres.in'

    // Act
    const submitBtn = screen.getByText('Login')
    fireEvent.click(submitBtn)

    // Assert
    const error = screen.getByTestId('test-error')
    await waitFor(() => {
      expect(error.textContent).toBe('Missing password')
    })
  })
})
