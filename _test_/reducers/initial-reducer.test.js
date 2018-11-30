import initialReducer from './../../src/reducers/initial-reducer';

describe('initialReducer', () => {

  test('Should return default state if no action type is recognized', () => {
    expect(initialReducer( {}, {type: null} )).toEqual({});
  });
});
