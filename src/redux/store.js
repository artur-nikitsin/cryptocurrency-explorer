import { applyMiddleware, combineReducers, createStore } from 'redux';
import coinsReducer from './reducers/coinsReducer';

const reducers = combineReducers({
  coins: coinsReducer,
});

const store = createStore(reducers, applyMiddleware());
export default store;
