import * as React from 'react'
import { Provider } from 'react-redux'
import { render, fireEvent, screen } from '@testing-library/react'
import { Counter } from '../components/Counter'
import store from '../store/Store'

describe('counter redux', () => {
  test('increment 1 to be 1', () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    )

    fireEvent.click(screen.getByText('+'))

    expect(screen.getByLabelText(/count/i)).toHaveTextContent('1')
  })

  test('decrement 1 to be -1', () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    )
    fireEvent.click(screen.getByText('-'))
    expect(screen.getByLabelText(/count/i)).toHaveTextContent('-1')
  })
})
