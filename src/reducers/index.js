import { combineReducers } from 'redux';
import workoutListReducer from './workout-list-reducer';

const rootReducer = combineReducers({
  masterWorkoutList: workoutListReducer
});

export default rootReducer;
