import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { AuthReducer } from './reducers/AuthReducer';
import { CounterReducer } from './reducers/CounterReducer';

const reducer = combineReducers({
  counter: CounterReducer,
  auth: AuthReducer,
});

const middleware = [thunk];
const store = createStore(reducer, applyMiddleware(...middleware));
export default store;
