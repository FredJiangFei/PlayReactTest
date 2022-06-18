import {
  render as rtlRender,
  fireEvent,
  waitFor,
  cleanup,
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
    const { getByText, getByTestId } = render()

    // Act
    const submitBtn = getByText('Login')
    fireEvent.click(submitBtn)

    // Assert
    const error = getByTestId('test-error')
    await waitFor(() => {
      expect(error.textContent).toBe('Missing email or username')
    })
  })

  test('login no password', async () => {
    // Arrange
    const { getByText, getByLabelText, getByTestId } = render()
    const username = getByLabelText('Username')
    username.value = 'eve.holt@reqres.in'

    // Act
    const submitBtn = getByText('Login')
    fireEvent.click(submitBtn)

    // Assert
    const error = getByTestId('test-error')
    await waitFor(() => {
      expect(error.textContent).toBe('Missing password')
    })
  })
})
