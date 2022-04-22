import './App.css'
import * as React from 'react'
import { Provider } from 'react-redux'
import LocationDisplay from './components/LocationDisplay'
import store from './store/Store'
import 'milligram'
import './i18n'
import { useRoutes } from 'react-router-dom'
import routes from './routes'

function App() {
  return (
    <Provider store={store}>
      {useRoutes(routes)}
      <LocationDisplay />
    </Provider>
  )
}

export default App
