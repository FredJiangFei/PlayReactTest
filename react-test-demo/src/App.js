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
  const content = useRoutes(routes)
  const AuthContext = React.createContext(null);

  return (
    <Provider store={store}>
      <AuthContext.Provider>{content}</AuthContext.Provider>
      <LocationDisplay />
    </Provider>
  )
}

export default App
