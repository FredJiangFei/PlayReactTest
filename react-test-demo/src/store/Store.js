import { combineReducers, createStore } from 'redux'
import { AuthReducer } from './reducers/AuthReducer'
import { CounterReducer } from './reducers/CounterReducer'

const reducer = combineReducers({
  counter: CounterReducer,
  auth: AuthReducer,
})
const store = createStore(reducer)
export default store
