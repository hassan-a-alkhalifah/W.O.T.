import workoutListReducer from './../../src/reducers/workout-list-reducer';

describe('workoutListReducer', () => {

  test('Should return default state if no action type is recognized', () => {
    expect(workoutListReducer( {}, {type: null} )).toEqual({});
  });
});
