import * as React from 'react'
import { Provider } from 'react-redux'
import { render, fireEvent, screen } from '@testing-library/react'
import { Counter } from '../components/Counter'
import store from '../store/Store'

describe('counter redux', () => {
  test('can render with redux with defaults', () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    )

    fireEvent.click(screen.getByText('+'))

    expect(screen.getByLabelText(/count/i)).toHaveTextContent('1')
  })

  test('can render with redux with custom initial state', () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    )
    fireEvent.click(screen.getByText('-'))
    expect(screen.getByLabelText(/count/i)).toHaveTextContent('-1')
  })
})
