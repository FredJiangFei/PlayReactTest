import * as React from 'react'
import { I18nextProvider } from 'react-i18next'
import i18n from 'i18next'
import { render, screen, fireEvent } from '@testing-library/react'
import "../i18n";
import Greeting from '../components/Greeting'

test('it should test lang', () => {
  render(
    <I18nextProvider i18n={i18n}>
      <Greeting />
    </I18nextProvider>
  )
  const p = screen.getByTestId('test-i18')
  const pt = screen.getByText('pt')
  const en = screen.getByText('en')

  expect(p).toHaveTextContent('Welcome to React')

  fireEvent.click(pt)
  expect(p).toHaveTextContent('Bem vindo ao React')

  fireEvent.click(en)
  expect(p).toHaveTextContent('Welcome to React')
})
