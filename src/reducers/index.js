import { combineReducers } from 'redux';
import workoutListReducer from './workout-list-reducer';

const rootReducer = combineReducers({
  workoutListReducer: workoutListReducer
});

export default rootReducer;
