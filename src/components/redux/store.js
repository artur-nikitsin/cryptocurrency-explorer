import { applyMiddleware, combineReducers, createStore } from 'redux';



const reducers = combineReducers({

});

const store = createStore(reducers, applyMiddleware());
export default store;
