import { render as rtlRender, screen } from '@testing-library/react'
import * as React from 'react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
import App from '../App'

const render = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, '', route)
  return rtlRender(<BrowserRouter>{ui}</BrowserRouter>)
}

describe('Auth', () => {
  test('render login page', () => {
    render(<App />)

    expect(screen.getByText(/Auth/i)).toBeInTheDocument()
    expect(screen.getByText(/Username/i)).toBeInTheDocument()
    expect(screen.getByText(/Password/i)).toBeInTheDocument()
  })

  test('render home page', () => {
    localStorage.setItem('token', '123')
    render(<App />)

    expect(screen.getByText(/You are home/i)).toBeInTheDocument()

    userEvent.click(screen.getByText(/about/i))
    expect(screen.getByText(/you are on the about page/i)).toBeInTheDocument()
  })

  test('render not found', () => {
    render(<App />, { route: '/xxxx' })

    expect(screen.getByText(/no match/i)).toBeInTheDocument()
  })
})
