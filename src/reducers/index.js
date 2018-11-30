import { combineReducers } from 'redux';
import initialReducer from './initial-reducer';

const rootReducer = combineReducers({
  initialReducer: initialReducer
});

export default rootReducer;
