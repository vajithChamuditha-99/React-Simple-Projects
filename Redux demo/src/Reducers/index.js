import counterReducer from './Counter';
import viewReducer from './View';
import { combineReducers } from 'redux';

const allReducer = combineReducers({
  counter: counterReducer,
  viewReducer: viewReducer,
});

export default allReducer;
