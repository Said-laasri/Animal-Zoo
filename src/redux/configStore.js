import { configureStore, combineReducers } from '@reduxjs/toolkit';
import animalsReducer from './animals/animals';

const rootReducer = combineReducers({ animal: animalsReducer });

const store = configureStore({ reducer: rootReducer });

export default store;
