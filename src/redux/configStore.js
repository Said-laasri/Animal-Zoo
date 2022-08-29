import {
  configureStore,
  applyMiddleware,
  combineReducers,
} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import animalsReducer from './animals/animals';

const rootReducer = combineReducers({ animal: animalsReducer });

const store = configureStore({ reducer: rootReducer }, applyMiddleware(thunk));

export default store;
