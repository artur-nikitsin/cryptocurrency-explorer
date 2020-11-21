import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleWare from 'redux-thunk';
import coinsReducer from './reducers/coinsReducer';

const reducers = combineReducers({
  coins: coinsReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleWare));
export default store;
