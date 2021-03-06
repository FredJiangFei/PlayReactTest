import './App.css'
import * as React from 'react'
import { Provider } from 'react-redux'
import store from './store/Store'
import 'milligram'
import { useRoutes } from 'react-router-dom'
import routes from './routes'

function App() {
  return (
    <Provider store={store}>
      {useRoutes(routes)}
    </Provider>
  )
}

export default App
