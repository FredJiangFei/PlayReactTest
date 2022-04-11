import * as React from 'react'
import { I18nextProvider } from 'react-i18next'
import i18n from 'i18next'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import "../i18n";
import Greeting from '../components/Greeting'

test('it should test lang', () => {
  const { getByTestId, getByText } = render(
    <I18nextProvider i18n={i18n}>
      <Greeting />
    </I18nextProvider>
  )
  const p = getByTestId('test-i18')
  const pt = getByText('pt')
  const en = getByText('en')

  expect(p).toHaveTextContent('Welcome to React')

  userEvent.click(pt)
  expect(p).toHaveTextContent('Bem vindo ao React')

  userEvent.click(en)
  expect(p).toHaveTextContent('Welcome to React')
})
