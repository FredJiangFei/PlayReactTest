import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { AuthReducer } from './reducers/auth.reducer';
import { CounterReducer } from './reducers/counter.reducer';
import { TodoReducer } from './reducers/todo.reducer';

const reducer = combineReducers({
  counter: CounterReducer,
  auth: AuthReducer,
  todo: TodoReducer
});

const middleware = [thunk];
const store = createStore(reducer, applyMiddleware(...middleware));
export default store;
