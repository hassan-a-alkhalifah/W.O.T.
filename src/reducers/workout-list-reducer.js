import constants from './../constants';
const { c } = constants;

export default ( state = {}, action ) => {

  switch(action.type) {
  case c.RECEIVE_WORKOUT: {
    const newState = Object.assign({}, state);
    newState[action.workout.id] = action.workout;
    return newState;
  }
  case c.DELETE_WORKOUT: {
    const newState = Object.assign({}, state);
    Object.keys(newState).map((workoutId) => {
      if(workoutId === action.workoutDeletedId) {
        delete newState[workoutId];
      }
    });
    return newState;
  }
  default: {
    return state;
  }
  }
};
