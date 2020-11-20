import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleWare from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import coinsReducer from './reducers/coinsReducer';

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
  coins: coinsReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleWare));
export default store;
